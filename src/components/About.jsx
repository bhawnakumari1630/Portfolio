import { site } from '../data/site'

const icons = {
  spark: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8L12 3z" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4l8 4-8 4-8-4 8-4zm-8 8l8 4 8-4M4 16l8 4 8-4" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20s-7-4.4-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7 2.8C19 15.6 12 20 12 20z" />
    </svg>
  ),
}

function About() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            01 / About
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            {site.aboutTitle}
          </h2>
        </div>

        <div>
          <div className="space-y-5 text-lg leading-8 text-slate-500 dark:text-slate-400">
            {site.aboutCopy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {site.stats.map((stat) => (
              <div key={stat.label} className="flex items-start gap-3">
                <span className="mt-1 text-emerald-500">{icons[stat.icon]}</span>
                <div>
                  <p className="text-2xl font-semibold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
