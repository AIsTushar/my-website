"use client";

import { Code, CodeXml, StarIcon } from "lucide-react";
import Image from "next/image";
import CardHeader from "./CardHeader";
import ToolboxItemComponent from "./ToolboxItemComponent";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "JavaScript",
    icon: "/icons/js.png",
  },
  {
    title: "React",
    icon: "/icons/react.png",
  },
  {
    title: "HTML5",
    icon: "/icons/html-5.png",
  },
  {
    title: "CSS3",
    icon: "/icons/css-3.png",
  },
  {
    title: "GitHub",
    icon: "/icons/github.png",
  },
  {
    title: "Tailwind CSS",
    icon: "/icons/tailwindcss.png",
  },
  {
    title: "Next.js",
    icon: "/icons/nextjs.png",
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
  const ref = useRef(null);
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
        {/* Favorite Book Card */}
        <div className="h-[320px] w-full overflow-hidden rounded-md border border-white/20 bg-gray-800 md:col-span-2">
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

          <ToolboxItemComponent
            items={toolboxItems}
            className="mt-6"
            itemsWrapperClassName="animate-slide-left"
          />
          <ToolboxItemComponent
            items={toolboxItems}
            className="mt-6"
            itemsWrapperClassName="animate-slide-right"
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

          <div className="relative flex-grow" ref={ref}>
            {hobbies.map((item, index) => (
              <motion.div
                key={index}
                className="absolute inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 px-6 py-1.5"
                style={{ left: item.left, top: item.top }}
                drag
                dragConstraints={ref}
                dragElastic={0.2}
              >
                <span className="font-medium text-gray-950">{item.title}</span>
                <span>{item.icon}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map of city */}
        <div className="relative col-span-2 h-[320px] w-full overflow-hidden rounded-md border border-white/20 bg-gray-800 px-6 py-8">
          <Image src="/map.png" alt="map" fill className="object-cover" />

          <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full after:absolute after:inset-0 after:rounded-full after:outline-2 after:-outline-offset-2 after:outline-gray-900/30 after:content-['']">
            <div className="from-secondary absolute inset-0 -z-10 animate-ping rounded-full bg-gradient-to-b to-emerald-300 opacity-75 [animation-duration:2s]"></div>
            <div className="from-secondary absolute inset-0 -z-10 rounded-full bg-gradient-to-b to-emerald-300"></div>

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
