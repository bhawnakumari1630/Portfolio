import { Link } from 'react-router-dom'
import { site } from '../data/site'

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(167,243,208,0.35),_transparent_42%)] dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_42%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            {site.availability}
          </p>
          <h1 className="font-display text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            {site.name}
          </h1>
          <p className="mt-2 font-display text-4xl italic tracking-tight text-emerald-500 sm:text-5xl lg:text-6xl">
            {site.role}
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 dark:text-slate-400">
            {site.heroLine}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-950"
            >
              View my work
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-64 w-full max-w-md sm:h-80">
          <div className="absolute right-8 top-6 h-44 w-36 rotate-12 rounded-3xl bg-emerald-100/80 blur-[1px] dark:bg-emerald-500/20" />
          <div className="absolute right-16 top-0 h-48 w-40 -rotate-6 rounded-3xl border border-white/70 bg-white/70 shadow-xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/70" />
          <div className="absolute right-4 top-10 grid h-48 w-44 place-items-center rounded-3xl border border-white/80 bg-gradient-to-br from-sky-100 to-emerald-100 shadow-2xl dark:from-slate-800 dark:to-emerald-950">
            <span className="text-4xl font-semibold text-slate-400">&lt;/&gt;</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
