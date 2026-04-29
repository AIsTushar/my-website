import Image from "next/image";
import { CircleDashed } from "lucide-react";
import { projectTechIcons } from "@/data/projects";

function ProjectTechStack({ tags }) {
  return (
    <section className="space-y-6 xl:border-l xl:border-white/10 xl:pl-8">
      <h2 className="text-3xl font-semibold text-white">Tech Stack</h2>

      <ul className="space-y-4">
        {tags.map((tag) => {
          const icon = projectTechIcons[tag];

          return (
            <li key={tag} className="flex items-center gap-4 text-slate-200">
              {icon ? (
                <Image
                  src={icon}
                  alt={tag}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-lg"
                />
              ) : (
                <CircleDashed className="text-secondary h-8 w-8" />
              )}

              <span className="text-lg">{tag}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ProjectTechStack;
