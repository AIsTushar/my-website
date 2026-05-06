import AnimatedText from "@/components/ui/AnimatedText";
import GradualSpacing from "@/components/ui/GradualSpacing";
import Footer from "@/components/ui/Footer";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import FeaturedProjectCardLeft from "@/components/projects/FeaturedProjectCardLeft";
import MoreProjectCard from "@/components/projects/MoreProjectCard";
import { getFeaturedProjects, getMoreProjects } from "@/data/projects";

function page() {
  const featuredProjects = getFeaturedProjects();
  const moreProjects = getMoreProjects();

  return (
    <main className="mt-28 flex w-full flex-col items-center overflow-hidden px-6 sm:mt-32 sm:px-10 lg:mt-36">
      <div className="flex w-full max-w-4xl flex-col gap-5 text-center sm:gap-8 lg:gap-12">
        <AnimatedText
          text="Work. Hobby. Open Source."
          className="mx-auto !text-3xl !text-gray-200 sm:!text-4xl md:!text-5xl lg:!text-6xl"
        />

        <div className="mx-auto max-w-3xl">
          <GradualSpacing
            text="I enjoy building projects, mostly small ones that help me learn and try new ideas. My GitHub's full of them. Some projects are still completed, others have been discontinued. Below you can find a few of them."
            className="!text-xs leading-[170%] !text-gray-300 sm:!text-sm md:!text-base lg:!text-lg"
          />
        </div>
      </div>

      <div className="mt-10 flex w-full max-w-6xl flex-col gap-14 sm:mt-14 sm:gap-20 lg:mt-24 lg:gap-32">
        {featuredProjects.map((project, index) =>
          index % 2 === 0 ? (
            <FeaturedProjectCard key={project.slug} project={project} />
          ) : (
            <FeaturedProjectCardLeft key={project.slug} project={project} />
          ),
        )}
      </div>

      <div className="mt-14 flex w-full max-w-6xl flex-col items-center gap-6 sm:mt-16 sm:gap-8 lg:gap-12">
        <h2 className="text-center text-3xl text-white sm:text-4xl lg:text-5xl">
          More Projects
        </h2>

        {moreProjects.map((project) => (
          <MoreProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <Footer />
    </main>
  );
}

export default page;
