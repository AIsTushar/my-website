import Link from "next/link";
import {
  ArrowLeft,
  Code2,
  FileText,
  FolderOpen,
  Github,
  Home,
  Instagram,
  Linkedin,
  Twitter,
  UserRound,
} from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: UserRound },
  { href: "/projects", label: "Projects", icon: FolderOpen },
  { href: "/articles", label: "Articles", icon: FileText },
];

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

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-10 pt-32 sm:px-10 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(43,78,150,0.45),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(100,255,218,0.08),_transparent_18%),linear-gradient(135deg,#121e43_0%,#0a1227_45%,#040915_100%)]" />
      <div className="absolute top-0 left-0 -z-10 h-[32rem] w-[32rem] rounded-full bg-[#27468a]/30 blur-3xl" />
      <div className="absolute right-[-10rem] bottom-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-[#0c1d43]/40 blur-3xl" />

      <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center">
        <div className="relative flex w-full max-w-3xl flex-col items-center text-center">
          <div className="relative flex h-[18rem] w-[18rem] items-center justify-center sm:h-[24rem] sm:w-[24rem]">
            <div className="absolute inset-0 rounded-full border border-cyan-300/10" />
            <div className="absolute inset-5 rounded-full border border-cyan-300/10 bg-white/[0.02] shadow-[0_0_120px_rgba(8,15,35,0.85)]" />
            <div className="absolute inset-2 rotate-12 rounded-full border border-cyan-400/8" />
            <div className="absolute inset-7 -rotate-12 rounded-full border border-cyan-400/8" />

            <span className="absolute top-10 left-5 h-1.5 w-1.5 rounded-full bg-cyan-300/40 shadow-[0_0_20px_rgba(100,255,218,0.8)]" />
            <span className="absolute top-16 right-10 h-1.5 w-1.5 rounded-full bg-cyan-300/30 shadow-[0_0_18px_rgba(100,255,218,0.7)]" />
            <span className="absolute bottom-14 left-10 h-1 w-1 rounded-full bg-cyan-300/40 shadow-[0_0_14px_rgba(100,255,218,0.8)]" />
            <span className="absolute bottom-20 right-6 h-1 w-1 rounded-full bg-cyan-300/30 shadow-[0_0_14px_rgba(100,255,218,0.8)]" />
            <span className="absolute top-12 right-9 h-11 w-11 rounded-full border border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_30px_rgba(100,255,218,0.2)]" />
            <span className="absolute top-[4.4rem] right-[1.55rem] h-14 w-14 rounded-full border border-cyan-300/25" />
            <span className="absolute top-14 left-10 h-10 w-10 rounded-full bg-slate-500/20 shadow-[0_0_20px_rgba(96,165,250,0.15)]" />

            <p className="relative bg-gradient-to-b from-white via-slate-100 to-slate-300 bg-clip-text text-[7rem] font-semibold tracking-tight text-transparent drop-shadow-[0_10px_40px_rgba(255,255,255,0.08)] sm:text-[10rem]">
              404
            </p>
          </div>

          <div className="-mt-2 max-w-2xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Oops! Page not found.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400 sm:text-xl">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved to another galaxy.
            </p>
          </div>

          <Link
            href="/"
            className="border-secondary text-secondary hover:bg-secondary/10 mt-10 inline-flex items-center gap-3 rounded-xl border px-7 py-4 text-lg font-medium transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>

        <div className="mt-16 flex w-full max-w-3xl flex-col items-center gap-8">
          <p className="text-lg text-slate-400">
            Or explore something interesting
          </p>

          <div className="grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {quickLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-transparent px-4 py-5 text-slate-300 transition-all duration-300 hover:border-cyan-300/15 hover:bg-white/[0.02] hover:text-white"
              >
                <Icon className="text-secondary h-8 w-8 transition-transform duration-300 group-hover:-translate-y-1" />
                <span className="text-lg">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto mt-14 flex w-full max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-4 pb-4 text-sm text-slate-300 sm:text-lg">
        {socialLinks.map(({ href, label, icon: Icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            className="hover:text-secondary flex items-center gap-2 transition-colors duration-300"
          >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
