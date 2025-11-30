import AnimatedText from "@/components/ui/AnimatedText";
import GradualSpacing from "@/components/ui/GradualSpacing";
import Footer from "@/components/ui/Footer";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import FeaturedProjectCardLeft from "@/components/projects/FeaturedProjectCardLeft";
import MoreProjectCard from "@/components/projects/MoreProjectCard";

const feturedProjects = [
  {
    title: "DIMCPrep: Online Question Bank",
    description:
      "Your trusted online question bank for the Diploma in Immediate Medical Care with 1200+ expert-crafted questions. Built for doctors, paramedics, and nurses preparing for excellence in pre-hospital emergency care.",

    image: "/projects/dmc.png",
    gitLink: "#",
    liveLink: "https://dimcprep.com",
    tags: ["TypeScript", "Node.js", "Express.js", "Stripe", "Next.js"],
  },
  {
    title: "trade-go-limited",
    description:
      "A modern, responsive website built with Next.js, Tailwind CSS, and JavaScript for Trade Go Limited. clean wash chemical suppliers, based on UK.",
    image: "/projects/trade-go-limited.png",
    gitLink: "https://github.com/AIsTushar/trade-go-limited",
    liveLink: "https://tradegolimited.co.uk/",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
  },

  {
    title: "mimic",
    description:
      "A multi-purpose web application built with Next.js to showcase diverse features and functionalities, including e-commerce, media galleries, Harry Potter content, and more..",
    image: "/projects/mimic.jpg",
    gitLink: "https://github.com/AIsTushar/mimic",
    liveLink: "https://mimic-drab.vercel.app",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
  },

  {
    title: "Hotel Management System",
    description:
      "A modern and fully functional hotel management admin dashboard built with React.js and Supabase. Designed for employees to manage operations efficiently.",
    image: "/projects/project_2.png",
    gitLink: "https://github.com/AIsTushar/The-Wild-Oasis-admin-panel",
    liveLink: "https://the-wild-oasis-admin-panel-nu.vercel.app/dashboard",
    tags: [
      "JavaScript",
      "React",
      "Supabase",
      "Tailwind CSS",
      "VS Code",
      "ReactQuery",
    ],
  },
  {
    title: "The-Wild-Oasis-Website",
    description:
      "A morern and woring Admin Dashboard built with React.js and for backend supabase was used.",
    image: "/projects/project_3.png",
    gitLink: "https://github.com/AIsTushar/The-Wild-Oasis-Website",
    liveLink: "https://the-wild-oasis-website-six-blond.vercel.app/",
    tags: ["JavaScript", "React", "Supabase", "Tailwind CSS", "VS Code"],
  },
];

const moreProjects = [
  {
    title: "Tour management Api",
    image: "/projects/project_7.png",
    gitLink: "https://github.com/AIsTushar/Tour-management-Api",
    liveLink: "#",
    tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "VS Code"],
  },
  {
    title: "Recipedia - Recipe blog website",
    image: "/projects/project_4.png",
    gitLink: "https://github.com/AIsTushar/Recipedia",
    liveLink: "https://recipedia-coral.vercel.app",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
  },
  {
    title: "Forecaster Single Page",
    image: "/projects/Forecaster.png",
    gitLink: "https://github.com/AIsTushar/forecaster-single-page-nextjs",
    liveLink: "https://forecaster-single-page-nextjs.vercel.app",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
  },
  {
    title: "React Real Estate Website",
    image: "/projects/React_Real.png",
    gitLink: "https://github.com/AIsTushar/React-Real-Estate-Website",
    liveLink: "https://real-estate-website-cfb.pages.dev",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
  },
  {
    title: "Portfolio - The website you are looking at!",
    image: "/projects/project_8.png",
    gitLink: "https://github.com/AIsTushar/my-website",
    liveLink: "/",
    tags: ["JavaScript", "React", "Next.js", "Tailwind CSS", "VS Code"],
  },
];

function page() {
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
        {feturedProjects.map((project, index) =>
          index % 2 === 0 ? (
            <FeaturedProjectCard key={index} project={project} />
          ) : (
            <FeaturedProjectCardLeft key={index} project={project} />
          ),
        )}
      </div>

      <div className="mt-16 flex w-full flex-col items-center gap-12">
        <h2 className="text-center text-5xl text-white">More Projects</h2>

        {moreProjects.map((project, i) => (
          <MoreProjectCard key={i} project={project} />
        ))}
      </div>

      <Footer />
    </main>
  );
}

export default page;
