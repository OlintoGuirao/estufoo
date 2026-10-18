export type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E'

export type StudyBlockId =
  | 'formulas'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'

export interface FormulaSection {
  title: string
  items: string[]
}

export interface Question {
  id: number
  block: Exclude<StudyBlockId, 'formulas'>
  statement: string
  options: Record<OptionKey, string>
  correct: OptionKey
  explanation: string[]
}

export interface StudyBlockMeta {
  id: StudyBlockId
  title: string
  subtitle: string
  questionRange?: string
}

/** Questão exibida no cartão (blocos ou simulados). */
export interface QuizQuestion {
  id: string | number
  number?: number
  section?: string
  passage?: string
  statement: string
  options: Partial<Record<OptionKey, string>> & Pick<Record<OptionKey, string>, 'A' | 'B' | 'C' | 'D'>
  correct: OptionKey
  explanation: string[]
}

export interface SimuladoQuestion extends QuizQuestion {
  id: string
  number: number
  section: string
  options: Record<'A' | 'B' | 'C' | 'D', string>
  correct: 'A' | 'B' | 'C' | 'D'
}

export interface Simulado {
  id: string
  title: string
  cargo: string
  banca: string
  municipio?: string
  questions: SimuladoQuestion[]
}
