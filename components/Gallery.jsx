import { useMemo, useState } from "react";
import Image from "next/image";
import { projectCategories } from "@/data/projects";

export default function Gallery({ projects, showFilters = true }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    if (!showFilters || activeFilter === "all") return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter, projects, showFilters]);

  return (
    <section className="space-y-10">
      {showFilters && (
        <div className="flex flex-wrap gap-3">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeFilter === category.id
                  ? "bg-brand-ember text-white shadow-glow-orange"
                  : "bg-white/10 text-white/70 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden flex flex-col"
          >
            <div className="relative h-60 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent" />
              <div className="absolute bottom-4 left-4 text-sm font-semibold px-3 py-1 rounded-full bg-white/90 text-slate-900">
                {project.location}
              </div>
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1">
              <p className="text-xs uppercase tracking-wide text-white/60">
                {projectCategories.find((c) => c.id === project.category)
                  ?.label || "Project"}
              </p>
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-white/70 text-sm flex-1">
                {project.description}
              </p>
              <p className="text-brand-sand text-sm font-semibold">
                {project.highlight}
              </p>
              <blockquote className="text-white/60 text-sm italic border-t border-white/5 pt-3">
                “{project.testimonial}”
              </blockquote>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

