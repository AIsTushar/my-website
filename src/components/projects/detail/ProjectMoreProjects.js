import Link from "next/link";
import { ArrowUpRight, FolderOpen } from "lucide-react";

function ProjectMoreProjects({ projects }) {
  return (
    <section className="space-y-8 border-t border-white/10 pt-10 xl:border-t-0 xl:pt-0">
      <h2 className="text-3xl font-semibold text-white">More Projects</h2>

      <div className="space-y-3">
        {projects.map((project) => {
          const externalHref = project.liveLink || project.gitLink;
          const isExternal = externalHref?.startsWith("http");

          return (
            <div
              key={project.slug}
              className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group flex min-w-0 items-center gap-3 text-slate-300 transition-colors duration-300 hover:text-white"
              >
                <FolderOpen className="text-secondary h-5 w-5 shrink-0" />
                <span className="truncate text-base">{project.title}</span>
              </Link>

              {externalHref ? (
                <Link
                  href={externalHref}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : (
                <span className="text-slate-600">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              )}
            </div>
          );
        })}
      </div>

      <Link
        href="/projects"
        className="text-secondary inline-flex items-center gap-2 text-base font-medium transition-transform duration-300 hover:translate-x-1"
      >
        View all projects
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

export default ProjectMoreProjects;
