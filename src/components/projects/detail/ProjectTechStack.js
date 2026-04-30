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
                <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/8 bg-white/[0.03] p-1.5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                  <Image
                    src={icon}
                    alt={tag}
                    fill
                    sizes="44px"
                    className="object-contain p-0.5 saturate-[0.92]"
                  />
                </div>
              ) : (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03]">
                  <CircleDashed className="text-secondary h-6 w-6" />
                </div>
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
