import AnimatedText from "@/components/AnimatedText";
import GradualSpacing from "@/components/GradualSpacing";
import FeaturedProjectCard from "@/components/Projects/FeaturedProjectCard";
import FeaturedProjectCardLeft from "@/components/Projects/FeaturedProjectCardLeft";

function page() {
  return (
    <main className="mt-36 flex w-full flex-col items-center">
      <div className="flex w-full max-w-4xl flex-col gap-12">
        <AnimatedText
          text="Work. Hobby. Open Source."
          className="!text-6xl !text-gray-200"
        />

        <p className="leading-[120%] text-gray-300">
          I enjoy building projects, mostly small ones that help me learn and
          try new ideas. My GitHub&apos;s full of them. Some projects are still
          completed, others have been discontinued. Below you can find a few of
          them.
        </p>
      </div>

      <div className="mt-24 flex flex-col gap-32">
        <FeaturedProjectCard />
        <FeaturedProjectCardLeft />
        <FeaturedProjectCard />
      </div>

      <div className="mb-96"></div>
    </main>
  );
}

export default page;
