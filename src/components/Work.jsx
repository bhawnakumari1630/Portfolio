import { useMemo, useState } from "react";
import { projects, site } from "../data/site";
import ProjectCard from "./ProjectCard";

function ProjectStack({ items, copy }) {
  return (
    <div className="flex flex-col gap-6 pb-6">
      {items.map((project) => (
        <ProjectCard key={`${copy}-${project.id}`} project={project} />
      ))}
    </div>
  );
}

function MarqueeColumn({ items, direction }) {
  return (
    <div className="relative h-180 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
      <div className={direction === "up" ? "marquee-up" : "marquee-down"}>
        <ProjectStack items={items} copy="a" />
        <ProjectStack items={items} copy="b" />
      </div>
    </div>
  );
}

function Work() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  const leftColumn = filtered.filter((_, index) => index % 2 === 0);
  const rightColumn = filtered.filter((_, index) => index % 2 === 1);
  const leftItems = leftColumn.length ? leftColumn : filtered;
  const rightItems = rightColumn.length ? rightColumn : filtered;

  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
              03 / Selected Work
            </p>
            <h2 className="max-w-md font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              Digital experiences with depth and direction.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {site.workFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === item
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                    : "bg-white text-slate-500 hover:text-slate-800 dark:bg-slate-900 dark:text-slate-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="marquee-paused grid gap-6 md:grid-cols-2">
          <MarqueeColumn items={leftItems} direction="up" />
          <MarqueeColumn items={rightItems} direction="down" />
        </div>
      </div>
    </section>
  );
}

export default Work;
