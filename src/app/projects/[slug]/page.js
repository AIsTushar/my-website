import { notFound } from "next/navigation";
import ProjectBackLink from "@/components/projects/detail/ProjectBackLink";
import ProjectFooterLinks from "@/components/projects/detail/ProjectFooterLinks";
import ProjectGallery from "@/components/projects/detail/ProjectGallery";
import ProjectHero from "@/components/projects/detail/ProjectHero";
import ProjectLessons from "@/components/projects/detail/ProjectLessons";
import ProjectMoreProjects from "@/components/projects/detail/ProjectMoreProjects";
import ProjectOverview from "@/components/projects/detail/ProjectOverview";
import ProjectTechStack from "@/components/projects/detail/ProjectTechStack";
import {
  getProjectBySlug,
  getRelatedProjects,
  projects,
} from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params?.slug);

  if (!project) {
    return {
      title: "Project Not Found | Azizul Islam Tushar",
    };
  }

  return {
    title: `${project.title} | Azizul Islam Tushar`,
    description: project.description,
  };
}

function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params?.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(project.slug);

  return (
    <main className="relative overflow-hidden px-6 pb-16 pt-32 sm:px-10 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.18),_transparent_28%),radial-gradient(circle_at_right,_rgba(100,255,218,0.08),_transparent_22%),linear-gradient(135deg,#091223_0%,#060d1b_45%,#040915_100%)]" />
      <div className="absolute top-0 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-400/6 blur-3xl" />
      <div className="absolute bottom-10 left-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-blue-500/8 blur-3xl" />

      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <ProjectBackLink />
        <ProjectHero project={project} />

        <section className="mt-16 grid gap-12 xl:grid-cols-[1.55fr_0.95fr]">
          <div className="grid gap-12 border-b border-white/10 pb-12 xl:grid-cols-[1fr_0.6fr]">
            <ProjectOverview project={project} />
            <ProjectTechStack tags={project.tags} />
          </div>

          <div className="border-b border-white/10 pb-12">
            <ProjectGallery title={project.title} gallery={project.gallery} />
          </div>
        </section>

        <section className="mt-14 grid gap-12 xl:grid-cols-[1.55fr_0.95fr]">
          <ProjectLessons lessons={project.lessons} />
          <ProjectMoreProjects projects={relatedProjects} />
        </section>

        <ProjectFooterLinks />
      </div>
    </main>
  );
}

export default ProjectDetailPage;
