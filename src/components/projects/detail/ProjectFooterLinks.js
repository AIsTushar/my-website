import Link from "next/link";
import {
  Code2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/AIsTushar?tab=repositories",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/azizul-islam-tushar/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/azizul_islam_tushar/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "mailto:azizultushar98@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://X.com",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "https://www.codewars.com/users/azizultushar98",
    label: "Codewars",
    icon: Code2,
  },
];

function ProjectFooterLinks() {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-sm text-slate-300 sm:text-base">
      {socialLinks.map(({ href, label, icon: Icon }) => {
        const isExternal = href.startsWith("http");

        return (
          <Link
            key={label}
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="hover:text-secondary inline-flex items-center gap-2 transition-colors duration-300"
          >
            <Icon className="h-4 w-4" />
            <span>{label}</span>
          </Link>
        );
      })}
    </div>
  );
}

export default ProjectFooterLinks;
