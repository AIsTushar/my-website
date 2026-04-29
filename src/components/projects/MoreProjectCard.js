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
  const projectHref = `/projects/${project.slug}`;

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
      className="relative flex w-full items-center justify-between border-b-[1px] border-gray-700 py-4 text-gray-300 xl:w-2/4"
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
      <div className="flex min-w-0 flex-col gap-3">
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <Folder className="text-secondary h-8 w-8 shrink-0" />
          <Link
            href={projectHref}
            className="truncate transition-colors duration-300 hover:text-cyan-200"
          >
            {project.title}
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="flex gap-2 text-white">
        {project.gitLink ? (
          <Link href={project.gitLink} target="_blank" rel="noreferrer">
            <Github className="hover:text-secondary h-5 w-5" />
          </Link>
        ) : null}

        {project.liveLink ? (
          <Link
            href={project.liveLink}
            target={project.liveLink.startsWith("http") ? "_blank" : undefined}
            rel={project.liveLink.startsWith("http") ? "noreferrer" : undefined}
          >
            <ExternalLink className="hover:text-secondary h-5 w-5" />
          </Link>
        ) : null}
      </div>
    </div>
  );
}

export default MoreProjectCard;
