import EducationCard from "@/components/about/EducationCard";
import ExperienceCard from "@/components/about/ExperienceCard";
import Skills from "@/components/about/Skills";
import Image from "next/image";

function page() {
  return (
    <div className="mt-46 w-full">
      <div className="m-auto flex w-3/5 flex-col gap-12">
        <h1 className="text-5xl leading-[120%] text-white">
          Senior Product Designer specializing in user-centric innovation and
          product evolution.
        </h1>

        <p className="text-2xl leading-[120%] text-gray-300">
          I&apos;m Dejan, a seasoned Senior Product Designer with over 10 years
          of experience in dynamic startup environments. Throughout my career,
          I&apos;ve led end-to-end design projects, specializing in optimizing
          user experiences and driving product evolution. I thrive in
          problem-solving, prioritizing user-centric needs, and delivering
          high-quality designs that elevate user satisfaction.
        </p>

        <p className="text-2xl leading-[120%] text-gray-300">
          In previous roles, I&apos;ve spearheaded strategic initiatives that
          significantly enhanced product metrics and user engagement. I excel in
          guiding comprehensive design projects, from strategic planning and
          user research to UI/UX design and seamless collaboration across teams.
          With a strong foundation in methodical design thinking and usability
          principles, I leverage diverse design tools and methodologies to
          achieve impactful outcomes.
        </p>
      </div>

      <div className="mt-16 flex w-full justify-center">
        <Image
          src="/test.png"
          alt="Dejan"
          width={1000}
          height={1000}
          className="w-[80%] object-cover"
        />
      </div>

      <div className="mt-16 flex w-full flex-col">
        <h2 className="text-center text-5xl text-white">Work Experiences</h2>
        <ExperienceCard />
      </div>

      <div className="mt-16 flex w-full flex-col">
        <h2 className="text-center text-5xl text-white">Education</h2>
        <EducationCard />
      </div>
      <div className="mt-16 flex w-full flex-col">
        <h2 className="text-center text-5xl text-white">My Skills</h2>
        <Skills />
      </div>
    </div>
  );
}

export default page;
