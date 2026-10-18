import { useEffect, useRef, useState } from 'react'
import { clearScratch, loadScratch, saveScratch } from '../lib/scratchStorage'

type Props = {
  questionId: number
}

type Point = { x: number; y: number; pressure: number }

export function ScratchPad({ questionId }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const last = useRef<Point | null>(null)
  const [inkHint, setInkHint] = useState('Caneta ou dedo')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = parent.clientWidth
      const height = Math.max(280, Math.min(420, Math.round(width * 0.55)))
      const prev = canvas.toDataURL()
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.strokeStyle = '#1c241e'
      paintPaper(ctx, width, height)

      const stored = loadScratch(questionId)
      const source = stored || prev
      if (source && source.length > 100) {
        const img = new Image()
        img.onload = () => {
          ctx.drawImage(img, 0, 0, width, height)
        }
        img.src = source
      }
    }

    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [questionId])

  function paintPaper(ctx: CanvasRenderingContext2D, w: number, h: number) {
    ctx.fillStyle = '#fbfaf6'
    ctx.fillRect(0, 0, w, h)
    ctx.strokeStyle = 'rgba(26, 77, 58, 0.08)'
    ctx.lineWidth = 1
    for (let y = 28; y < h; y += 28) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(w, y)
      ctx.stroke()
    }
    ctx.strokeStyle = '#1c241e'
  }

  function pos(e: PointerEvent | React.PointerEvent<HTMLCanvasElement>): Point {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      pressure: e.pressure > 0 ? e.pressure : 0.5,
    }
  }

  function strokeWidth(pressure: number) {
    return 1.6 + pressure * 4.5
  }

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    e.preventDefault()
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.setPointerCapture(e.pointerId)
    drawing.current = true
    last.current = pos(e)
    if (e.pointerType === 'pen') setInkHint('S Pen / stylus')
    else if (e.pointerType === 'touch') setInkHint('Toque')
    else setInkHint('Mouse')
  }

  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current || !last.current) return
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const p = pos(e)
    ctx.beginPath()
    ctx.moveTo(last.current.x, last.current.y)
    ctx.lineTo(p.x, p.y)
    ctx.lineWidth = strokeWidth(p.pressure)
    ctx.strokeStyle = '#1c241e'
    ctx.stroke()
    last.current = p
  }

  function endStroke(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return
    drawing.current = false
    last.current = null
    const canvas = canvasRef.current
    if (!canvas) return
    try {
      canvas.releasePointerCapture(e.pointerId)
    } catch {
      // already released
    }
    saveScratch(questionId, canvas.toDataURL('image/png'))
  }

  function handleClear() {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const w = canvas.clientWidth
    const h = canvas.clientHeight
    paintPaper(ctx, w, h)
    clearScratch(questionId)
  }

  return (
    <div className="mt-4">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div>
          <p className="font-display text-lg font-semibold text-[var(--leaf)]">Bloco de rascunho</p>
          <p className="text-sm text-[var(--ink)]/65">{inkHint} · pressão da caneta quando disponível</p>
        </div>
        <button
          type="button"
          onClick={handleClear}
          className="min-h-12 rounded-xl border border-[var(--leaf)]/25 bg-white/70 px-4 text-base font-semibold text-[var(--leaf)] shadow-sm active:scale-[0.98]"
        >
          Limpar
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl border-2 border-[var(--leaf)]/20 shadow-[0_8px_24px_var(--shadow)]">
        <canvas
          ref={canvasRef}
          className="block w-full touch-none bg-[#fbfaf6]"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endStroke}
          onPointerCancel={endStroke}
          onPointerLeave={endStroke}
        />
      </div>
    </div>
  )
}
