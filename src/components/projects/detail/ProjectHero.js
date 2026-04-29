import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, LockKeyhole } from "lucide-react";

function ProjectActionLink({
  href,
  icon: Icon,
  children,
  variant = "primary",
  disabled = false,
}) {
  const baseClassName =
    "inline-flex items-center justify-center gap-3 rounded-xl border px-6 py-4 text-base font-medium transition-colors duration-300";
  const variantClassName =
    variant === "primary"
      ? "border-secondary text-secondary hover:bg-secondary/10"
      : "border-white/15 text-slate-100 hover:bg-white/5";

  if (disabled || !href) {
    return (
      <span
        className={`${baseClassName} border-white/10 text-slate-500 cursor-not-allowed`}
      >
        <Icon className="h-4 w-4" />
        {children}
      </span>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={`${baseClassName} ${variantClassName}`}
    >
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  );
}

function ProjectHero({ project }) {
  return (
    <section className="mt-10 grid gap-10 xl:grid-cols-[1.2fr_0.9fr] xl:items-center">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b152d]/70 p-2 shadow-[0_30px_80px_rgba(2,8,23,0.55)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(100,255,218,0.12),_transparent_35%)]" />
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={1000}
            priority
            className="aspect-[16/10] w-full object-cover object-top"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 xl:pl-2">
        <div className="space-y-4">
          <p className="text-secondary text-sm font-semibold uppercase tracking-[0.22em]">
            {project.featured ? "Featured Project" : "Project Spotlight"}
          </p>

          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <ProjectActionLink
            href={project.liveLink}
            icon={ArrowUpRight}
            variant="primary"
            disabled={!project.liveLink}
          >
            Live Demo
          </ProjectActionLink>

          <ProjectActionLink
            href={project.gitLink}
            icon={project.gitLink ? Github : LockKeyhole}
            variant="secondary"
            disabled={!project.gitLink}
          >
            {project.gitLink ? "View on GitHub" : "Private Repository"}
          </ProjectActionLink>
        </div>
      </div>
    </section>
  );
}

export default ProjectHero;
