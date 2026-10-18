import { Link } from 'react-router-dom'
import { formulaSections } from '../data/formulas'

export function FormulasPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6 sm:px-6">
      <Link
        to="/"
        className="inline-flex min-h-12 items-center text-base font-semibold text-[var(--leaf)]"
      >
        ← Início
      </Link>
      <header className="mt-4 mb-8">
        <h1 className="font-display text-4xl font-bold text-[var(--leaf)]">Fórmulas e macetes</h1>
        <p className="mt-2 text-lg text-[var(--ink)]/70">
          Consulte antes ou durante as questões. Use o bloco de rascunho em cada questão para aplicar.
        </p>
      </header>

      <div className="space-y-6">
        {formulaSections.map((section) => (
          <section
            key={section.title}
            className="rounded-3xl border border-[var(--leaf)]/15 bg-white/75 p-5 shadow-[0_8px_24px_var(--shadow)]"
          >
            <h2 className="font-display text-2xl font-semibold text-[var(--accent)]">{section.title}</h2>
            <ul className="mt-3 space-y-2 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              {section.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--leaf)]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
