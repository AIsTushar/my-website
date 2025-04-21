"use client";
import { Code2, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleLink = ({ href, text, icon: Icon }) => {
  const MotionLink = motion.create(Link);
  return (
    <MotionLink
      whileHover={{ y: -5, color: "#64ffda" }}
      href={href}
      target="_blank"
      className="flex items-center gap-2"
    >
      <span>{text}</span>
      <Icon className="h-5 w-5" />
    </MotionLink>
  );
};

function Footer() {
  const MotionLink = motion.create(Link);
  return (
    <div className="mt-36 flex w-full items-center justify-center gap-10 py-12 text-white">
      <SingleLink
        href="https://github.com/AIsTushar?tab=repositories"
        text="GitHub"
        icon={Github}
      />

      <SingleLink
        href="https://www.linkedin.com/in/azizul-islam-tushar/"
        text="LinkedIn"
        icon={Linkedin}
      />

      <SingleLink
        href="https://www.instagram.com/azizul_islam_tushar/"
        text="Instagram"
        icon={Instagram}
      />

      <SingleLink href="https://X.com" text="Twitter" icon={Twitter} />

      <SingleLink
        href="https://www.codewars.com/users/azizultushar98"
        text="Codewars"
        icon={Code2}
      />
    </div>
  );
}

export default Footer;
