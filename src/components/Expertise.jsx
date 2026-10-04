import { site } from '../data/site'

function Expertise() {
  return (
    <section className="px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
            02 / Expertise
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Tools of the trade.
          </h2>
        </div>
        <ul className="flex max-w-xl flex-wrap gap-3">
          {site.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Expertise
