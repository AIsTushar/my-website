import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const item = {
  title: "Halcyon Theme",
  description:
    "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
  image: "/projects/project_1.png",
  gitLink: "#",
  liveLink: "#",
  tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
};

function FeaturedProjectCard() {
  return (
    <div className="flex">
      {/* Image */}
      <div className="group relative h-96 w-[548px] overflow-hidden rounded-md">
        <Image
          src="/projects/project_1.png"
          alt=""
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />

        <div className="bg-secondary absolute inset-0 opacity-50 transition-all duration-300 group-hover:opacity-0"></div>
      </div>

      {/* Details */}
      <div className="z-10 -ml-20 flex flex-col items-end justify-center gap-6 text-right">
        <div>
          <p className="text-secondary">Featured Project</p>
          <p className="text-2xl text-white">Halcyon Theme</p>
        </div>
        <div className="w-[548px] rounded-sm bg-[#112240] py-6 pr-8 pl-12 text-right text-gray-300">
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </div>
        <div className="flex gap-4 text-sm text-gray-400">
          {item.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
        <div className="flex gap-4 text-gray-200">
          <Link href={item.gitLink}>
            <Github className="hover:text-secondary h-5 w-5" />
          </Link>
          <Link href={item.liveLink}>
            <ExternalLink className="hover:text-secondary h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;
