import { CheckCircle2 } from "lucide-react";

function ProjectOverview({ project }) {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold text-white">Overview</h2>

        <div className="space-y-4 text-lg leading-8 text-slate-300">
          {project.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h3 className="text-2xl font-semibold text-white">Key Features</h3>

        <ul className="space-y-4">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-slate-300">
              <CheckCircle2 className="text-secondary mt-1 h-5 w-5 shrink-0" />
              <span className="leading-7">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProjectOverview;
