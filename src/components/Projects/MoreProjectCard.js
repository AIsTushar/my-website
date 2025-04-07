"use client";

import { ExternalLink, Folder, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

function MoreProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative flex w-2/4 items-center justify-between border-b-[1px] border-gray-700 py-4 text-gray-300"
    >
      {/* Animated Image */}
      <motion.div
        className="pointer-events-none absolute left-[-10px] overflow-hidden rounded-md"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: mousePosition.x + 30,
          y: mousePosition.y - 170,
        }}
        transition={{
          opacity: { duration: 0.2 },
          x: { type: "spring", stiffness: 100, damping: 20 },
          y: { type: "spring", stiffness: 100, damping: 20 },
        }}
      >
        <Image
          src={project.image}
          width={500}
          height={500}
          alt="project Image"
          className="h-72 w-96 rounded-md object-contain"
        />
      </motion.div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <Folder className="text-secondary h-8 w-8" /> <p>{project.title}</p>
        </div>
        <div className="flex gap-2">
          {project.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="flex gap-2 text-white">
        <Link href={"/"}>
          <Github className="hover:text-secondary h-5 w-5" />
        </Link>

        <Link href={"/"}>
          <ExternalLink className="hover:text-secondary h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}

export default MoreProjectCard;
