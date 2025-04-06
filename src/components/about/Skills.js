import { Code, CodeXml, StarIcon } from "lucide-react";
import Image from "next/image";
import TechIcon from "./TechIcon";
import CardHeader from "./CardHeader";
import ToolboxItemComponent from "./ToolboxItemComponent";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: CodeXml,
  },
  {
    title: "React",
    icon: CodeXml,
  },
  {
    title: "HTML5",
    icon: CodeXml,
  },
  {
    title: "CSS3",
    icon: Code,
  },
  {
    title: "GitHub",
    icon: Code,
  },
  {
    title: "Tailwind CSS",
    icon: Code,
  },
  {
    title: "Next.js",
    icon: Code,
  },
];

const hobbies = [
  {
    title: "Reading",
    icon: "📖",
    left: "50%",
    top: "50%",
  },
  {
    title: "Football",
    icon: "⚽️",
    left: "",
    top: "",
  },
  {
    title: "Traveling",
    icon: "🌴",
    left: "",
    top: "",
  },
  {
    title: "Hiking",
    icon: "🏔️",
    left: "",
    top: "",
  },
  {
    title: "Gaming",
    icon: "🎮",
    left: "",
    top: "",
  },
  {
    title: "Anime",
    icon: "📺",
    left: "",
    top: "",
  },
];

function Skills() {
  return (
    <div className="flex flex-col gap-8">
      {/* Favorite Book Card */}
      <div className="h-[320px] w-[320px] overflow-hidden rounded-md border border-white/20 bg-gray-800">
        <CardHeader
          icon={StarIcon}
          title="My Reads"
          description="Explore The Book that Shaped my perspective."
          className="px-6 pt-6"
        />

        <div className="mx-auto mt-4 w-40">
          <Image
            src="/book-cover.png"
            alt="books"
            width={500}
            height={500}
            className="w-40"
          />
        </div>
      </div>

      {/* Toolbox */}
      <div className="h-[320px] w-[320px] overflow-hidden rounded-md border border-white/20 bg-gray-800">
        <CardHeader
          icon={StarIcon}
          title="My Toolbox"
          className="px-6 pt-6"
          description="Explore the tools and technologies I've used in my projects."
        />

        <ToolboxItemComponent items={toolboxItems} className="mt-6" />
        <ToolboxItemComponent
          items={toolboxItems}
          className="mt-6"
          itemsWrapperClassName="-translate-x-1/2"
        />
      </div>

      {/* Hobbies */}
      <div className="flex h-[320px] w-[320px] flex-col overflow-hidden rounded-md border border-white/20 bg-gray-800">
        <CardHeader
          icon={StarIcon}
          title="Beyond Code"
          description="Explore my interests and hobbies"
          className="px-6 py-6"
        />

        <div className="relative flex-grow">
          {hobbies.map((item, index) => (
            <div
              key={index}
              className="absolute inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
              style={{ left: item.left, top: item.top }}
            >
              <span className="font-medium text-gray-950">{item.title}</span>
              <span>{item.icon}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Map of city */}
      <div className="h-[320px] w-fit overflow-hidden rounded-md border border-white/20 bg-gray-800 px-6 py-8"></div>
    </div>
  );
}

export default Skills;
