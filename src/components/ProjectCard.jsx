const barSets = {
  navy: [42, 68, 55, 80, 48, 72, 90],
  blue: [50, 72, 40, 86, 62, 78, 95],
}

function ProjectPreview({ project }) {
  if (project.type === 'quote') {
    return (
      <div className="flex h-44 items-end rounded-2xl bg-gradient-to-br from-lime-300 to-emerald-400 p-5">
        <p className="font-display text-2xl font-medium leading-snug text-slate-900">
          {project.quote}
        </p>
      </div>
    )
  }

  if (project.type === 'logo') {
    return (
      <div className="grid h-44 place-items-center rounded-2xl bg-[#ff6b5b]">
        <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-white/70 text-2xl font-semibold text-white">
          {project.logoLetter || project.title.charAt(0)}
        </span>
      </div>
    )
  }

  const bars = barSets[project.theme] || barSets.navy
  const bg = project.theme === 'blue' ? 'from-sky-500 to-blue-700' : 'from-slate-700 to-slate-950'

  return (
    <div className={`rounded-2xl bg-gradient-to-br ${bg} p-5 text-white`}>
      <div className="mb-4 flex items-start justify-between text-xs text-white/70">
        <div>
          <p>{project.metricLabel}</p>
          <p className="mt-1 text-2xl font-semibold text-white">{project.metricValue}</p>
          {project.metricHint && <p className="mt-1 text-[11px] text-rose-300">{project.metricHint}</p>}
        </div>
        <p>{project.metricTime}</p>
      </div>
      <div className="flex h-20 items-end gap-2">
        {bars.map((height, index) => (
          <span
            key={`${project.id}-${index}`}
            className="flex-1 rounded-t-md bg-sky-300/90"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-100 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-900">
      <ProjectPreview project={project} />
      <div className="px-3 pb-4 pt-5">
        <div className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          <span>
            {project.category} · {project.status}
          </span>
          <span className="grid h-7 w-7 place-items-center rounded-full border border-slate-200 text-slate-500 dark:border-slate-700">
            ↗
          </span>
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
