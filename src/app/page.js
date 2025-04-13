import AnimatedText from "@/components/ui/AnimatedText";
import DownloadCv from "@/components/ui/DownloadCv";
import EmailLink from "@/components/ui/EmailLink";
import GradualSpacing from "@/components/ui/GradualSpacing";
import SocialLinks from "@/components/ui/SocialLinks";
import TypingEffect from "@/components/ui/TypingEffect";

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
          text=" I'm a software engineer passionate about building clean, efficient,
          and user-friendly web applications. Currently, I'm focused on creating
          impactful, community-driven platforms and continuously sharpening my
          full stack skills with modern technologies."
        />

        <DownloadCv />
      </div>

      <SocialLinks />
      <EmailLink />
    </main>
  );
}
