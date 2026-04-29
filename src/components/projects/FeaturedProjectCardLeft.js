import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function FeaturedProjectCardLeft({ project }) {
  const projectHref = `/projects/${project.slug}`;

  return (
    <div className="flex flex-col-reverse gap-8 xl:flex-row">
      {/* Details */}
      <div className="z-10 flex flex-col items-start justify-center gap-6 text-left xl:-mr-20">
        <div>
          <p className="text-secondary">Featured Project</p>
          <Link
            href={projectHref}
            className="text-2xl text-white transition-colors duration-300 hover:text-cyan-200"
          >
            {project.title}
          </Link>
        </div>
        <div className="w-full rounded-sm bg-[#112240] py-6 pr-12 pl-8 text-left text-gray-300 xl:w-[548px]">
          {project.description}
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
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

      {/* Image */}
      <Link
        href={projectHref}
        className="group relative h-96 w-full overflow-hidden rounded-md xl:w-[548px]"
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
    </div>
  );
}

export default FeaturedProjectCardLeft;
