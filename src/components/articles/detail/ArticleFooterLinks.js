import Link from "next/link";
import {
  Code2,
  Github,
  Instagram,
  Linkedin,
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

function ArticleFooterLinks() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-base text-slate-300">
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="hover:text-secondary inline-flex items-center gap-2 transition-colors duration-300"
        >
          <Icon className="h-4 w-4" />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}

export default ArticleFooterLinks;
