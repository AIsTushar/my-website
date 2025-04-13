"use client";
import {
  Code2,
  Download,
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
    <div className="absolute bottom-0 left-12 flex flex-col items-center gap-7 text-gray-400">
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        href="https://github.com/AIsTushar?tab=repositories"
        target="_blank"
      >
        <Github className="h-5 w-5" />
      </MotionLink>
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        href="https://www.linkedin.com/in/azizul-islam-tushar/"
        target="_blank"
      >
        <Linkedin className="h-5 w-5" />
      </MotionLink>
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        href="https://www.instagram.com/azizul_islam_tushar/"
        target="_blank"
      >
        <Instagram className="h-5 w-5" />
      </MotionLink>
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        href="https://X.com"
        target="_blank"
      >
        <Twitter className="h-5 w-5" />
      </MotionLink>
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        target="_blank"
        href="https://leetcode.com/u/azizultushar98/"
      >
        <Code2 className="h-5 w-5" />
      </MotionLink>
      <span className="h-24 w-[2px] bg-gray-400"></span>
    </div>
  );
}

export default SocialLinks;
