import { useState } from 'react'
import type { OptionKey, QuizQuestion } from '../data/types'
import { ScratchPad } from './ScratchPad'

const ALL_KEYS: OptionKey[] = ['A', 'B', 'C', 'D', 'E']

type Feedback =
  | { kind: 'idle' }
  | { kind: 'correct' }
  | { kind: 'wrong'; steps: string[] }

type Props = {
  question: QuizQuestion
  mode: 'one' | 'scroll'
}

export function QuestionCard({ question, mode }: Props) {
  const [selected, setSelected] = useState<OptionKey | null>(null)
  const [feedback, setFeedback] = useState<Feedback>({ kind: 'idle' })
  const optionKeys = ALL_KEYS.filter((key) => question.options[key])
  const label = question.number ?? question.id

  function confirm() {
    if (!selected) return
    if (selected === question.correct) {
      setFeedback({ kind: 'correct' })
    } else {
      setFeedback({ kind: 'wrong', steps: question.explanation })
    }
  }

  function retry() {
    setSelected(null)
    setFeedback({ kind: 'idle' })
  }

  return (
    <article
      id={`q-${question.id}`}
      className={`rounded-3xl border border-[var(--leaf)]/15 bg-white/75 p-4 shadow-[0_10px_30px_var(--shadow)] backdrop-blur-sm sm:p-6 ${
        mode === 'one' ? '' : 'mb-8'
      }`}
    >
      {question.section && (
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--ink)]/45">
          {question.section}
        </p>
      )}
      <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-[var(--accent)]">
        Questão {label}
      </p>

      {question.passage && (
        <blockquote className="mb-4 rounded-2xl border-l-4 border-[var(--leaf)]/40 bg-[var(--mist)]/60 px-4 py-3 text-base leading-relaxed text-[var(--ink)]/85">
          {question.passage}
        </blockquote>
      )}

      <h2 className="font-display text-xl font-semibold leading-snug text-[var(--ink)] sm:text-2xl">
        {question.statement}
      </h2>

      <div className="mt-5 grid gap-3" role="radiogroup" aria-label={`Opções da questão ${label}`}>
        {optionKeys.map((key) => {
          const active = selected === key
          return (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={active}
              disabled={feedback.kind === 'correct'}
              onClick={() => {
                if (feedback.kind === 'correct') return
                setSelected(key)
                if (feedback.kind === 'wrong') setFeedback({ kind: 'idle' })
              }}
              className={`flex min-h-14 items-start gap-3 rounded-2xl border px-4 py-3 text-left text-base transition active:scale-[0.99] sm:text-lg ${
                active
                  ? 'border-[var(--leaf)] bg-[var(--mist)] shadow-inner'
                  : 'border-[var(--ink)]/10 bg-white/90 hover:border-[var(--leaf)]/40'
              }`}
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--leaf)] font-semibold text-white">
                {key}
              </span>
              <span className="pt-1.5 leading-snug">{question.options[key]}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={confirm}
          disabled={!selected || feedback.kind === 'correct'}
          className="min-h-14 min-w-[10rem] flex-1 rounded-2xl bg-[var(--leaf)] px-5 text-lg font-semibold text-white shadow-md disabled:cursor-not-allowed disabled:opacity-40 active:scale-[0.98] sm:flex-none"
        >
          Confirmar
        </button>
        {feedback.kind === 'wrong' && (
          <button
            type="button"
            onClick={retry}
            className="min-h-14 min-w-[10rem] flex-1 rounded-2xl border-2 border-[var(--accent)] px-5 text-lg font-semibold text-[var(--accent)] active:scale-[0.98] sm:flex-none"
          >
            Tentar de novo
          </button>
        )}
      </div>

      {feedback.kind === 'correct' && (
        <div
          className="mt-4 rounded-2xl border border-[var(--ok)]/30 bg-[var(--ok)]/10 px-4 py-4"
          role="status"
        >
          <p className="font-display text-xl font-semibold text-[var(--ok)]">Acertou!</p>
          <p className="mt-1 text-base text-[var(--ink)]/80">
            Boa. Pode seguir para a próxima questão quando quiser.
          </p>
        </div>
      )}

      {feedback.kind === 'wrong' && (
        <div
          className="mt-4 rounded-2xl border border-[var(--warn)]/35 bg-[#fff6ee] px-4 py-4"
          role="status"
        >
          <p className="font-display text-xl font-semibold text-[var(--warn)]">
            Ainda não — veja o caminho
          </p>
          <p className="mt-1 text-sm text-[var(--ink)]/70">
            Sem revelar a alternativa correta. Siga os passos e tente de novo.
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-base leading-relaxed text-[var(--ink)]">
            {feedback.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      <ScratchPad questionId={question.id} />
    </article>
  )
}
