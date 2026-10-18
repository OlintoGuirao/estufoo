import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { QuestionCard } from '../components/QuestionCard'
import { getSimulado } from '../data/simulados'

export function SimuladoPage() {
  const { simuladoId } = useParams()
  const simulado = useMemo(
    () => (simuladoId ? getSimulado(simuladoId) : undefined),
    [simuladoId],
  )

  if (!simulado) {
    return <Navigate to="/" replace />
  }

  return <SimuladoView simulado={simulado} />
}

function SimuladoView({
  simulado,
}: {
  simulado: NonNullable<ReturnType<typeof getSimulado>>
}) {
  const [mode, setMode] = useState<'one' | 'scroll'>('one')
  const [index, setIndex] = useState(0)
  const list = simulado.questions
  const current = list[index]

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-6 sm:px-6">
      <Link
        to="/"
        className="inline-flex min-h-12 items-center text-base font-semibold text-[var(--leaf)]"
      >
        ← Início
      </Link>

      <header className="mt-4 mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Simulado · {simulado.banca}
        </p>
        <h1 className="font-display mt-1 text-3xl font-bold text-[var(--leaf)] sm:text-4xl">
          {simulado.cargo}
        </h1>
        <p className="mt-1 text-base text-[var(--ink)]/65">
          {simulado.id} · 30 questões
          {simulado.municipio ? ` · ${simulado.municipio}` : ''}
        </p>
      </header>

      <div className="mb-6 flex flex-wrap gap-2 rounded-2xl bg-[var(--paper-deep)]/70 p-2">
        <button
          type="button"
          onClick={() => setMode('one')}
          className={`min-h-12 flex-1 rounded-xl px-4 text-base font-semibold ${
            mode === 'one' ? 'bg-[var(--leaf)] text-white' : 'text-[var(--ink)]/70'
          }`}
        >
          Uma por vez
        </button>
        <button
          type="button"
          onClick={() => setMode('scroll')}
          className={`min-h-12 flex-1 rounded-xl px-4 text-base font-semibold ${
            mode === 'scroll' ? 'bg-[var(--leaf)] text-white' : 'text-[var(--ink)]/70'
          }`}
        >
          Rolagem completa
        </button>
      </div>

      {mode === 'one' && current && (
        <>
          <div className="mb-4 flex items-center justify-between gap-3 text-sm font-semibold text-[var(--ink)]/60">
            <span>
              {index + 1} de {list.length}
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                disabled={index === 0}
                onClick={() => setIndex((i) => Math.max(0, i - 1))}
                className="min-h-12 min-w-12 rounded-xl border border-[var(--leaf)]/25 bg-white/80 px-3 text-lg disabled:opacity-30"
                aria-label="Questão anterior"
              >
                ‹
              </button>
              <button
                type="button"
                disabled={index >= list.length - 1}
                onClick={() => setIndex((i) => Math.min(list.length - 1, i + 1))}
                className="min-h-12 min-w-12 rounded-xl border border-[var(--leaf)]/25 bg-white/80 px-3 text-lg disabled:opacity-30"
                aria-label="Próxima questão"
              >
                ›
              </button>
            </div>
          </div>
          <QuestionCard key={current.id} question={current} mode="one" />
        </>
      )}

      {mode === 'scroll' &&
        list.map((q) => <QuestionCard key={q.id} question={q} mode="scroll" />)}
    </div>
  )
}
