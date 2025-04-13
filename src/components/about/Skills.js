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
    left: "5%",
    top: "5%",
  },
  {
    title: "Football",
    icon: "⚽️",
    left: "50%",
    top: "5%",
  },

  {
    title: "Hiking",
    icon: "🏔️",
    left: "45%",
    top: "45%",
  },
  {
    title: "Gaming",
    icon: "🎮",
    left: "45%",
    top: "70%",
  },
  {
    title: "Anime",
    icon: "📺",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    icon: "🎵",
    left: "65%",
    top: "28%",
  },
  {
    title: "Traveling",
    icon: "✈️",
    left: "10%",
    top: "35%",
  },
];

function Skills() {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {/* Favorite Book Card */}
        <div className="h-[320px] w-[320px] overflow-hidden rounded-md border border-white/20 bg-gray-800 md:col-span-2">
          <CardHeader
            icon={StarIcon}
            title="My Reads"
            description="Explore The Book that Shaped my perspective."
          />

          <div className="mx-auto mt-2 w-40 md:mt-0">
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
        <div className="h-[320px] w-full overflow-hidden rounded-md border border-white/20 bg-gray-800 md:col-span-3">
          <CardHeader
            icon={StarIcon}
            title="My Toolbox"
            description="Explore the tools and technologies I've used in my projects."
          />

          <ToolboxItemComponent items={toolboxItems} className="mt-6" />
          <ToolboxItemComponent
            items={toolboxItems}
            className="mt-6"
            itemsWrapperClassName="-translate-x-1/2"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {/* Hobbies */}
        <div className="col-span-3 flex h-[320px] w-full flex-col overflow-hidden rounded-md border border-white/20 bg-gray-800">
          <CardHeader
            icon={StarIcon}
            title="Beyond Code"
            description="Explore my interests and hobbies"
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
        <div className="relative col-span-2 h-[320px] w-[320px] overflow-hidden rounded-md border border-white/20 bg-gray-800 px-6 py-8">
          <Image src="/map.png" alt="map" fill className="object-cover" />

          <div className="from-secondary absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b to-emerald-300 after:absolute after:inset-0 after:rounded-full after:outline-2 after:-outline-offset-2 after:outline-gray-900/30 after:content-['']">
            <Image
              src="/memoji-smile.png"
              alt="memoji"
              width={100}
              height={100}
              className="size-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
