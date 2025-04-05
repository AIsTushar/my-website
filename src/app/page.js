import AnimatedText from "@/components/AnimatedText";
import EmailLink from "@/components/EmailLink";
import GradualSpacing from "@/components/GradualSpacing";
import SocialLinks from "@/components/SocialLinks";
import TypingEffect from "@/components/TypingEffect";
import { Download } from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relaive flex min-h-screen w-full items-center justify-center">
      <div className="flex h-full max-w-6xl flex-col justify-center gap-6 pl-20">
        <TypingEffect text="Hi, my name is" />
        <AnimatedText text="Azizul Islam Tushar" className="ml-2" />
        <AnimatedText
          text="I build things for the web."
          className="ml-2 !text-gray-500"
        />

        <GradualSpacing
          text=" I’m a software engineer passionate about building clean, efficient,
          and user-friendly web applications. Currently, I’m focused on creating
          impactful, community-driven platforms and continuously sharpening my
          full stack skills with modern technologies."
        />

        <Link
          href="/azizul_islam_tushar.pdf"
          target="_blank"
          download={true}
          className="border-secondary text-secondary mt-8 flex w-fit items-center rounded-md border-2 border-solid px-6 py-4 font-semibold"
        >
          Download My Resume <Download className="ml-1 h-5 w-5" />
        </Link>
      </div>

      <SocialLinks />
      <EmailLink />
    </main>
  );
}
