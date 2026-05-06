import EducationCard from "@/components/about/EducationCard";
import ExperienceCard from "@/components/about/ExperienceCard";
import Skills from "@/components/about/Skills";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

function page() {
  return (
    <div className="mt-46 w-full">
      <div className="m-auto flex w-3/5 flex-col gap-12">
        <h1 className="text-5xl leading-[120%] text-white">
          Full Stack Developer focused on building scalable products and smooth
          user experiences.
        </h1>

        <p className="text-2xl leading-[120%] text-gray-300">
          Hey, I&apos;m Azizul Islam Tushar — a Full Stack Developer with a
          Computer Science background and hands-on experience building modern
          web applications. I mainly work with Node.js, TypeScript, React,
          Next.js, PostgreSQL, and MongoDB to create fast, reliable, and
          user-friendly products.
        </p>

        <p className="text-2xl leading-[120%] text-gray-300">
          Currently, I&apos;m working as a Jr. Backend Developer at SM
          Technology, where I build backend systems, authentication flows,
          payment integrations, and real-time features. I enjoy solving
          real-world problems and turning ideas into scalable applications that
          people actually enjoy using.
        </p>

        <p className="text-2xl leading-[120%] text-gray-300">
          Outside of work, I love exploring new technologies, improving my
          backend architecture skills, and building personal projects that
          challenge me to grow as a developer.
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

      <Footer />
    </div>
  );
}

export default page;
