import EducationCard from "@/components/about/EducationCard";
import ExperienceCard from "@/components/about/ExperienceCard";
import Skills from "@/components/about/Skills";
import Image from "next/image";

function page() {
  return (
    <div className="mt-46 w-full">
      <div className="m-auto flex w-3/5 flex-col gap-12">
        <h1 className="text-5xl leading-[120%] text-white">
          Full Stack Developer passionate about crafting meaningful user
          experiences and building impact-driven digital products.
        </h1>

        <p className="text-2xl leading-[120%] text-gray-300">
          Hey, I&apos;m Azizul Islam Tushar — a dedicated Full Stack Developer
          with a background in Computer Science and a strong passion for
          building intuitive, user-focused applications. With hands-on
          experience in technologies like React.js, Next.js, Node.js,
          PostgreSQL, and MongoDB, I specialize in developing full-stack
          solutions that not only function smoothly but also resonate with real
          user needs.
        </p>

        <p className="text-2xl leading-[120%] text-gray-300">
          I thrive at the intersection of code and creativity—whether it&apos;s
          designing community-driven platforms, working with RESTful APIs,
          integrating third-party services like or ensuring clean, maintainable
          code. I&apos;ve built and contributed to projects ranging from
          e-commerce to social impact platforms, always with a focus on
          usability, accessibility, and scalability.
        </p>

        <p className="text-2xl leading-[120%] text-gray-300">
          Beyond the code, I believe in learning by doing, continuously growing
          through real-world projects, and collaborating across teams to create
          solutions that matter. Whether it&apos;s shipping a new feature,
          debugging an issue, or just brainstorming better UX flows—I&apos;m
          always all in. Let&apos;s build something meaningful.
        </p>
      </div>

      <div className="mt-16 flex w-full justify-center">
        <Image
          src="/me.png"
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
      <div className="mx-auto mt-16 flex w-3/5 flex-col">
        <h2 className="mb-20 text-center text-5xl text-white">My Skills</h2>
        <Skills />
      </div>
    </div>
  );
}

export default page;
