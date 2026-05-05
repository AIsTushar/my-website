import AnimatedText from "@/components/ui/AnimatedText";
import DownloadCv from "@/components/ui/DownloadCv";
import EmailLink from "@/components/ui/EmailLink";
import GradualSpacing from "@/components/ui/GradualSpacing";
import SocialLinks from "@/components/ui/SocialLinks";
import TypingEffect from "@/components/ui/TypingEffect";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-x-hidden px-6 pt-28 pb-28 sm:px-10 sm:pt-32 md:px-16 md:pb-16 lg:px-24 lg:pt-28 xl:px-32">
      <div className="mx-auto flex w-full max-w-6xl min-w-0 flex-col justify-center gap-3 sm:gap-4 md:pr-16 md:pl-20 lg:gap-5 lg:pr-20 lg:pl-24 xl:pl-20">
        <TypingEffect text="Hi, my name is" />
        <AnimatedText text="Azizul Islam Tushar" className="sm:ml-2" />
        <AnimatedText
          text="I build things for the web."
          className="!text-gray-500 sm:ml-2"
        />

        <GradualSpacing
          className="max-w-3xl"
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
