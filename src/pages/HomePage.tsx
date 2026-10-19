import { Link } from 'react-router-dom'
import { studyBlocks } from '../data/blocks'
import { simulados } from '../data/simulados'

function SimuladoLinks({
  items,
  label,
}: {
  items: typeof simulados
  label: string
}) {
  return (
    <ul className="grid gap-3">
      {items.map((sim, i) => (
        <li key={sim.id}>
          <Link
            to={`/simulado/${sim.id}`}
            className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-[var(--leaf)]/15 bg-white/80 px-5 py-4 shadow-[0_8px_24px_var(--shadow)] transition hover:border-[var(--leaf)]/40 hover:bg-white active:scale-[0.99]"
          >
            <div>
              <p className="font-display text-lg font-semibold text-[var(--leaf)]">
                Simulado {i + 1} — {label}
              </p>
              <p className="text-sm text-[var(--ink)]/65">
                {sim.id} · {sim.questions.length} questões · Português, matemática e
                específicos
              </p>
            </div>
            <span className="text-2xl text-[var(--accent)]" aria-hidden>
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function HomePage() {
  const acs = simulados.filter((s) => s.id.includes('acs'))
  const almox = simulados.filter(
    (s) => s.id.includes('almoxarife') && !s.id.includes('superior'),
  )
  const almoxSuperior = simulados.filter((s) => s.id.includes('almoxarife-superior'))

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
          Matemática com rascunho grande para caneta stylus. Escolha um bloco ou um simulado e
          resolva no seu ritmo.
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
                  <p className="font-display text-xl font-semibold text-[var(--leaf)]">
                    {block.title}
                  </p>
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

      <section aria-labelledby="simulados-titulo" className="mt-12">
        <h2
          id="simulados-titulo"
          className="font-display mb-2 text-2xl font-semibold text-[var(--ink)]"
        >
          Simulados
        </h2>
        <p className="mb-4 text-base text-[var(--ink)]/65">
          Provas autorais INDEPAC — alternativas A–D com gabarito.
        </p>

        <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Agente Comunitário de Saúde
        </h3>
        <div className="mb-8">
          <SimuladoLinks items={acs} label="ACS" />
        </div>

        <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Auxiliar de Almoxarife
        </h3>
        <div className="mb-8">
          <SimuladoLinks items={almox} label="Almoxarife" />
        </div>

        <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Almoxarife — Ensino Superior
        </h3>
        <SimuladoLinks items={almoxSuperior} label="Almoxarife Superior" />
      </section>

      <p className="mt-10 text-center text-sm text-[var(--ink)]/50">
        Sem login · dados só neste aparelho · instale como app pelo navegador
      </p>
    </div>
  )
}
