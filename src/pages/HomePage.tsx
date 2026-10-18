import { Link } from 'react-router-dom'
import { studyBlocks } from '../data/blocks'

export function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-8 sm:px-6">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          Estudo INDEPAC
        </p>
        <h1 className="font-display mt-2 text-5xl font-bold leading-none text-[var(--leaf)] sm:text-6xl">
          Estufoo
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[var(--ink)]/75 sm:text-xl">
          Matemática com rascunho grande para caneta stylus. Escolha um bloco e resolva no seu ritmo.
        </p>
      </header>

      <section aria-labelledby="blocos-titulo">
        <h2 id="blocos-titulo" className="font-display mb-4 text-2xl font-semibold text-[var(--ink)]">
          Blocos de estudo
        </h2>
        <ul className="grid gap-3">
          {studyBlocks.map((block) => (
            <li key={block.id}>
              <Link
                to={`/bloco/${block.id}`}
                className="flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-[var(--leaf)]/15 bg-white/80 px-5 py-4 shadow-[0_8px_24px_var(--shadow)] transition hover:border-[var(--leaf)]/40 hover:bg-white active:scale-[0.99]"
              >
                <div>
                  <p className="font-display text-xl font-semibold text-[var(--leaf)]">{block.title}</p>
                  <p className="text-base text-[var(--ink)]/65">{block.subtitle}</p>
                </div>
                <span className="text-2xl text-[var(--accent)]" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-center text-sm text-[var(--ink)]/50">
        Sem login · dados só neste aparelho · instale como app pelo navegador
      </p>
    </div>
  )
}
