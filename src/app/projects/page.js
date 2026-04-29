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
    <main className="mt-36 flex w-full flex-col items-center overflow-hidden">
      <div className="flex w-full max-w-4xl flex-col gap-12">
        <AnimatedText
          text="Work. Hobby. Open Source."
          className="!text-6xl !text-gray-200"
        />

        <div className="">
          <GradualSpacing
            text="I enjoy building projects, mostly small ones that help me learn and try new ideas. My GitHub's full of them. Some projects are still completed, others have been discontinued. Below you can find a few of them."
            className="leading-[160%] tracking-wide !text-gray-300"
          />
        </div>
      </div>

      <div className="mt-24 flex flex-col gap-32">
        {featuredProjects.map((project, index) =>
          index % 2 === 0 ? (
            <FeaturedProjectCard key={project.slug} project={project} />
          ) : (
            <FeaturedProjectCardLeft key={project.slug} project={project} />
          ),
        )}
      </div>

      <div className="mt-16 flex w-full flex-col items-center gap-12">
        <h2 className="text-center text-5xl text-white">More Projects</h2>

        {moreProjects.map((project) => (
          <MoreProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <Footer />
    </main>
  );
}

export default page;
