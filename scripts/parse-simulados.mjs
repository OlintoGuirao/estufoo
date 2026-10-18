import fs from 'node:fs'
import path from 'node:path'

const DIR = path.resolve('content/simulados')
const OUT = path.resolve('src/data/simulados.ts')

function cleanLatex(text) {
  return text
    .replace(/\\\((.+?)\\\)/gs, '$1')
    .replace(/\\\[(.+?)\\\]/gs, '$1')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
    .replace(/\\div/g, '÷')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\%/g, '%')
    .replace(/\\R\$/g, 'R$')
    .replace(/\\\$/g, '$')
    .replace(/\\,/g, ' ')
    .replace(/\\ /g, ' ')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function cleanInline(text) {
  return cleanLatex(
    text
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\s+/g, ' ')
      .trim(),
  )
}

function parseAnswers(gabaritoPart) {
  const answers = new Map()
  // "1. B" / "1-B; 2-C" / "1-B · 2-B"
  for (const m of gabaritoPart.matchAll(/(\d+)\s*[.\-–]\s*([A-E])/gi)) {
    answers.set(Number(m[1]), m[2].toUpperCase())
  }
  // table rows: | 1 | B | 11 | C | 21 | C |
  for (const m of gabaritoPart.matchAll(/(\d+)\s*\|\s*([A-E])/gi)) {
    answers.set(Number(m[1]), m[2].toUpperCase())
  }
  return answers
}

function parseMeta(header, fallbackId) {
  const title = header.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? 'Simulado'
  let cargo =
    header.match(/\*\*Cargo:\*\*\s*(.+)/)?.[1]?.trim() ??
    header.match(/^###\s*Cargo:\s*(.+)$/m)?.[1]?.trim() ??
    ''
  cargo = cargo
    .replace(/\s*[—\-]\s*Identificador.*$/i, '')
    .replace(/\s*\([^)]*acs[^)]*\)\s*$/i, '')
    .replace(/\s*\([^)]*almoxarife[^)]*\)\s*$/i, '')
    .trim()
  if (!cargo && /Agente Comunitário de Saúde/i.test(title)) {
    cargo = 'Agente Comunitário de Saúde'
  }
  if (!cargo && /Almoxarife/i.test(title + header)) {
    cargo = 'Auxiliar de Almoxarife'
  }
  const banca =
    header.match(/\*\*Banca:\*\*\s*(.+)/)?.[1]?.trim() ?? 'INDEPAC'
  const municipio =
    header.match(/\*\*Município:\*\*\s*(.+)/)?.[1]?.trim() ??
    (/São Joaquim da Barra/i.test(header + title)
      ? 'São Joaquim da Barra/SP'
      : undefined)
  const identifier =
    header.match(/\*\*Identificador:\*\*\s*(.+)/)?.[1]?.trim() ??
    header.match(/Identificador\s+(\S+)/)?.[1]?.trim() ??
    fallbackId
  return { title: cleanInline(title), cargo: cleanInline(cargo), banca, municipio, identifier }
}

function splitQuestionChunks(body) {
  const lines = body.split('\n')
  const chunks = []
  let currentSection = 'Geral'
  let preamblePassage = undefined
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    if (line.match(/^##\s+/)) {
      currentSection = line.replace(/^##\s+/, '').replace(/\s*—.*$/, '').trim()
      preamblePassage = undefined
      i++
      continue
    }

    // "### Texto para as questões 1 e 2" followed by plain paragraph
    if (line.match(/^###\s+Texto/i)) {
      i++
      const passageLines = []
      while (
        i < lines.length &&
        !lines[i].match(/^\*\*\d+\.\*\*/) &&
        !lines[i].match(/^##\s+/) &&
        !lines[i].match(/^###\s+/)
      ) {
        if (lines[i].trim()) passageLines.push(lines[i].trim())
        i++
      }
      preamblePassage = cleanInline(passageLines.join(' '))
      continue
    }

    const qStart = line.match(/^\*\*(\d+)\.\*\*\s*(.*)$/)
    if (qStart) {
      const num = Number(qStart[1])
      const qLines = [qStart[2] ?? '']
      i++
      while (
        i < lines.length &&
        !lines[i].match(/^\*\*\d+\.\*\*/) &&
        !lines[i].match(/^##\s+/)
      ) {
        qLines.push(lines[i])
        i++
      }

      const passageLines = []
      const statementParts = []
      const optionMap = {}
      let currentOpt = null

      for (const ql of qLines) {
        if (ql.startsWith('>')) {
          if (currentOpt) currentOpt = null
          passageLines.push(ql.replace(/^>\s?/, ''))
          continue
        }

        const om = ql.match(/^([A-D])\)\s*(.*)$/)
        if (om) {
          currentOpt = om[1]
          optionMap[currentOpt] = om[2]
          continue
        }

        if (currentOpt) {
          if (ql.trim() === '') continue
          optionMap[currentOpt] += ' ' + ql.trim()
          continue
        }

        if (ql.trim()) statementParts.push(ql.trim())
      }

      let passage =
        passageLines.length > 0
          ? cleanInline(passageLines.join(' '))
          : preamblePassage

      // After consuming a pre-question passage once for Q1, keep for Q2 then clear
      chunks.push({
        num,
        section: currentSection,
        passage,
        statement: cleanInline(statementParts.join(' ')),
        options: Object.fromEntries(
          Object.entries(optionMap).map(([k, v]) => [k, cleanInline(v)]),
        ),
      })

      if (preamblePassage && num >= 2) preamblePassage = undefined
      continue
    }

    // preamble passage (before questions in a section)
    if (line.startsWith('>')) {
      const passageLines = []
      while (i < lines.length && (lines[i].startsWith('>') || lines[i].trim() === '')) {
        if (lines[i].startsWith('>')) {
          passageLines.push(lines[i].replace(/^>\s?/, ''))
        } else if (i + 1 < lines.length && lines[i + 1].startsWith('>')) {
          passageLines.push('')
        } else {
          break
        }
        i++
      }
      preamblePassage = cleanInline(passageLines.join(' '))
      continue
    }

    i++
  }

  // Attach preamble only to early questions that didn't have their own passage
  return chunks
}

function parseFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const base = path.basename(filePath, '.md')
  const split = raw.split(/\n## Gabarito\n/)
  if (split.length < 2) throw new Error(`Sem gabarito: ${base}`)
  const [bodyPart, gabaritoPart] = split

  const answers = parseAnswers(gabaritoPart)
  const meta = parseMeta(bodyPart, base)
  const id = meta.identifier || base
  const chunks = splitQuestionChunks(bodyPart)

  const questions = chunks.map((c) => {
    const correct = answers.get(c.num)
    if (!correct) throw new Error(`Sem resposta ${id} #${c.num}`)
    if (!c.options.A || !c.options.B || !c.options.C || !c.options.D) {
      throw new Error(`Opções incompletas ${id} #${c.num}: ${JSON.stringify(c.options)}`)
    }
    if (!c.statement) throw new Error(`Sem enunciado ${id} #${c.num}`)

    return {
      id: `${id}-${c.num}`,
      number: c.num,
      section: c.section,
      passage: c.passage,
      statement: c.statement,
      options: {
        A: c.options.A,
        B: c.options.B,
        C: c.options.C,
        D: c.options.D,
      },
      correct,
      explanation: [
        'Releia o enunciado com atenção e elimine as alternativas incompatíveis.',
        'Compare cada opção com o que o texto ou o cálculo pedem.',
        'Quando tiver certeza da eliminação, confirme a resposta restante.',
      ],
    }
  })

  if (questions.length !== 30) {
    console.warn(`Aviso: ${id} tem ${questions.length} questões (esperado 30)`)
  }

  return {
    id,
    title: meta.title,
    cargo: meta.cargo,
    banca: meta.banca,
    municipio: meta.municipio,
    questions,
  }
}

const files = fs
  .readdirSync(DIR)
  .filter((f) => f.endsWith('.md'))
  .sort()

const simulados = files.map((f) => parseFile(path.join(DIR, f)))

const ts = `import type { Simulado } from './types'

export const simulados: Simulado[] = ${JSON.stringify(simulados, null, 2)}

export function getSimulado(id: string): Simulado | undefined {
  return simulados.find((s) => s.id === id)
}
`

fs.writeFileSync(OUT, ts, 'utf8')
console.log(
  `Wrote ${OUT} with ${simulados.length} simulados, ${simulados.reduce((n, s) => n + s.questions.length, 0)} questions`,
)
for (const s of simulados) {
  console.log(`  ${s.id}: ${s.questions.length}q — ${s.cargo}`)
}
