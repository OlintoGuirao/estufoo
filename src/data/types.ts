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
