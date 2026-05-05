"use client";
import {
  Code2,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

function SocialLinks() {
  const MotionLink = motion.create(Link);
  return (
    <div className="fixed bottom-0 left-0 z-30 flex w-full flex-row items-center justify-center gap-8 border-t border-white/10 bg-slate-900/85 px-6 py-4 text-gray-400 backdrop-blur md:absolute md:left-12 md:w-auto md:flex-col md:justify-start md:gap-7 md:border-t-0 md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-none">
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        href="https://github.com/AIsTushar?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <Github className="h-5 w-5" />
      </MotionLink>
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        href="https://www.linkedin.com/in/azizul-islam-tushar/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin className="h-5 w-5" />
      </MotionLink>
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        href="https://www.instagram.com/azizul_islam_tushar/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram className="h-5 w-5" />
      </MotionLink>
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        href="https://X.com"
        target="_blank"
        rel="noreferrer"
      >
        <Twitter className="h-5 w-5" />
      </MotionLink>
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        target="_blank"
        href="https://leetcode.com/u/azizultushar98/"
        rel="noreferrer"
      >
        <Code2 className="h-5 w-5" />
      </MotionLink>
      <span className="hidden h-24 w-[2px] bg-gray-400 md:block"></span>
    </div>
  );
}

export default SocialLinks;
