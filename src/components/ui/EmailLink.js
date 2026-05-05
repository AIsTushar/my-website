"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function EmailLink() {
  const MotionLink = motion.create(Link);
  return (
    <div className="absolute right-8 bottom-0 hidden flex-col items-center gap-7 text-gray-400 md:flex lg:right-12">
      <MotionLink
        whileHover={{ y: -5, color: "#64ffda" }}
        href="mailto:azizultushar98@gmail.com"
        className="text-gray-400 [writing-mode:vertical-rl] hover:text-gray-200"
      >
        azizultushar98@gmail.com
      </MotionLink>
      <span className="h-24 w-[2px] bg-gray-400"></span>
    </div>
  );
}

export default EmailLink;
