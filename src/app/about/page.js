import EducationCard from "@/components/about/EducationCard";
import ExperienceCard from "@/components/about/ExperienceCard";
import Skills from "@/components/about/Skills";
import Footer from "@/components/ui/Footer";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

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

const stats = [
  {
    value: "1+",
    label: "Years of Experience",
    icon: BriefcaseBusiness,
  },
  {
    value: "5+",
    label: "Projects Completed",
    icon: Code2,
  },
  {
    value: "5+",
    label: "Happy Clients",
    icon: UsersRound,
  },
];

function Page() {
  return (
    <div className="w-full overflow-x-hidden">
      <section className="relative isolate min-h-screen border-b border-white/10 bg-[linear-gradient(135deg,#020617_0%,#071426_52%,#020617_100%)] px-6 pt-32 pb-16 sm:px-10 lg:px-16 lg:pt-36">
        <div className="absolute right-[8%] bottom-[16%] -z-10 hidden h-64 w-80 bg-[radial-gradient(circle,rgba(20,184,166,0.18)_1px,transparent_1.5px)] bg-[length:18px_18px] opacity-60 lg:block" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="border-secondary/30 bg-secondary/5 text-secondary inline-flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[0.7rem] font-semibold tracking-[0.28em] uppercase shadow-[0_0_24px_rgba(100,255,218,0.1)]">
              <span className="bg-secondary h-2 w-2 rounded-full" />
              Full Stack Developer
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl leading-[1.12] font-bold text-white sm:text-5xl lg:text-[3.5rem]">
              <span className="block">Building scalable</span>
              <span className="block">products and smooth</span>
              <span className="text-secondary block">user experiences.</span>
            </h1>

            <div className="mt-7 max-w-xl space-y-5 text-base leading-7 text-slate-300">
              <p>
                Hey, I&apos;m Azizul Islam Tushar, a Full Stack Developer with a
                Computer Science background and hands-on experience building
                modern web applications using Node.js, TypeScript, React,
                Next.js, PostgreSQL, and MongoDB.
              </p>

              <p>
                Currently working as a Jr. Backend Developer at SM Technology,
                where I build backend systems, authentication flows, payment
                integrations, and real-time features that solve real-world
                problems.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/projects"
                className="bg-secondary inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-semibold text-slate-950 shadow-[0_14px_36px_rgba(100,255,218,0.2)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <ArrowRight className="h-4 w-4" />
                View My Work
              </Link>

              <Link
                href="mailto:azizultushar98@gmail.com"
                className="hover:text-secondary inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/[0.02] px-6 text-sm font-semibold text-white transition-colors duration-300 hover:border-cyan-300/40"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </div>

            <div className="mt-7">
              <p className="font-mono text-[0.68rem] font-semibold tracking-[0.35em] text-slate-400 uppercase">
                Find me on
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="hover:text-secondary flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.05] text-slate-200 transition-colors duration-300 hover:border-cyan-300/30"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative ml-auto w-full max-w-sm rounded-md border border-white/15 bg-slate-950/45 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.38)] backdrop-blur">
              <div className="bg-secondary absolute -top-2 -right-2 h-4 w-4 rounded-full shadow-[0_0_24px_rgba(100,255,218,0.9)]" />

              <div className="flex items-center gap-5">
                <span className="border-secondary/10 bg-secondary/5 text-secondary flex h-14 w-14 items-center justify-center rounded-md border">
                  <BriefcaseBusiness className="h-7 w-7" />
                </span>

                <div>
                  <p className="font-mono text-[0.65rem] font-semibold tracking-[0.35em] text-slate-400 uppercase">
                    Currently at
                  </p>
                  <p className="text-secondary mt-1 text-xl font-semibold">
                    SM Technology
                  </p>
                  <p className="mt-3 text-sm text-slate-300">
                    Jr. Backend Developer
                  </p>
                  <p className="mt-2 border-l border-white/15 pl-3 text-sm text-slate-400">
                    Apr 2025 - Present
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-md border border-white/10 bg-slate-950/45 p-4 backdrop-blur"
                >
                  <div className="text-secondary flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    <span className="text-xl font-bold">{value}</span>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-300">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 overflow-hidden rounded-md border border-white/10 bg-[#061121]/90 shadow-[0_26px_90px_rgba(2,6,23,0.5)]">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-300" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <span className="font-mono text-[0.65rem] text-slate-400">
                  about-me.js
                </span>
              </div>

              <div className="grid grid-cols-[auto_1fr] gap-x-4 px-5 py-5 font-mono text-xs leading-6 sm:text-sm">
                <span className="text-slate-500 select-none">1</span>
                <p>
                  <span className="text-pink-300">const</span>{" "}
                  <span className="text-secondary">developer</span>{" "}
                  <span className="text-slate-300">= {"{"}</span>
                </p>
                <span className="text-slate-500 select-none">2</span>
                <p className="text-slate-300">
                  name:{" "}
                  <span className="text-lime-300">
                    &apos;Azizul Islam Tushar&apos;
                  </span>
                  ,
                </p>
                <span className="text-slate-500 select-none">3</span>
                <p className="text-slate-300">
                  role:{" "}
                  <span className="text-lime-300">
                    &apos;Full Stack Developer&apos;
                  </span>
                  ,
                </p>
                <span className="text-slate-500 select-none">4</span>
                <p className="text-slate-300">
                  passion:{" "}
                  <span className="text-lime-300">
                    &apos;Building scalable products&apos;
                  </span>
                  ,
                </p>
                <span className="text-slate-500 select-none">5</span>
                <p className="text-slate-300">
                  code:{" "}
                  <span className="text-lime-300">
                    [&apos;Node.js&apos;, &apos;TypeScript&apos;,
                    &apos;React&apos;,
                  </span>
                </p>
                <span className="text-slate-500 select-none">6</span>
                <p className="text-lime-300">
                  &apos;Next.js&apos;, &apos;PostgreSQL&apos;,
                  &apos;MongoDB&apos;],
                </p>
                <span className="text-slate-500 select-none">7</span>
                <p className="text-slate-300">
                  focus:{" "}
                  <span className="text-lime-300">
                    &apos;Backend systems and real-time applications&apos;
                  </span>
                </p>
                <span className="text-slate-500 select-none">8</span>
                <p className="text-slate-300">{"};"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-16 flex w-full flex-col">
        <h2 className="text-center text-5xl text-white">Work Experiences</h2>
        <ExperienceCard />
      </div>

      <div className="mt-16 flex w-full flex-col">
        <h2 className="text-center text-5xl text-white">Education</h2>
        <EducationCard />
      </div>

      <section className="px-6 pt-10 pb-4 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col">
          <h2 className="mb-10 text-center text-3xl font-bold text-white sm:mb-14 sm:text-4xl lg:mb-20 lg:text-5xl">
            My Skills
          </h2>
          <Skills />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Page;
