import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function ProjectBackLink() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center gap-3 text-base text-slate-300 transition-colors duration-300 hover:text-white"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back to Projects</span>
    </Link>
  );
}

export default ProjectBackLink;
