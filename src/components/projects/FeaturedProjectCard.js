import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function FeaturedProjectCard({ project }) {
  const projectHref = `/projects/${project.slug}`;

  return (
    <div className="flex w-full flex-col gap-5 sm:gap-6 xl:flex-row xl:gap-8">
      {/* Image */}
      <Link
        href={projectHref}
        className="group relative aspect-[16/9] w-full overflow-hidden rounded-md xl:h-96 xl:w-[548px]"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={700}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="bg-secondary absolute inset-0 opacity-30 transition-all duration-300 group-hover:opacity-0"></div>
      </Link>

      {/* Details */}
      <div className="z-10 flex flex-col items-start justify-center gap-3 text-left sm:gap-4 xl:-ml-20 xl:items-end xl:gap-6 xl:text-right">
        <div>
          <p className="text-secondary text-xs sm:text-sm md:text-base">
            Featured Project
          </p>
          <Link
            href={projectHref}
            className="text-base font-semibold text-white transition-colors duration-300 hover:text-cyan-200 sm:text-xl md:text-2xl"
          >
            {project.title}
          </Link>
        </div>
        <div className="w-full rounded-sm bg-[#112240] px-4 py-4 text-left text-xs leading-6 text-gray-300 sm:px-6 sm:text-sm md:text-base xl:w-[548px] xl:py-6 xl:pr-8 xl:pl-12 xl:text-right">
          {project.description}
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-gray-400 sm:gap-3 sm:text-sm xl:justify-end xl:gap-4">
          {project.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <div className="flex gap-4 text-gray-200">
          {project.gitLink ? (
            <Link href={project.gitLink} target="_blank" rel="noreferrer">
              <Github className="hover:text-secondary h-5 w-5" />
            </Link>
          ) : null}
          {project.liveLink ? (
            <Link
              href={project.liveLink}
              target={project.liveLink.startsWith("http") ? "_blank" : undefined}
              rel={
                project.liveLink.startsWith("http") ? "noreferrer" : undefined
              }
            >
              <ExternalLink className="hover:text-secondary h-5 w-5" />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;
