"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function EducationCard() {
  // Companies data
  const companies = [
    {
      id: "bsc-computer-science",
      name: "East West University",
      url: "https://www.ewubd.edu",
      role: "BSc in Computer Science and Engineering",
      period: "2019-2024",
      description: [
        "Completed a BSc in Computer Science and Engineering, with a focus on software development, systems analysis, and database management.",
        "Studied key subjects such as Algorithms, Data Structures, Web Development, Operating Systems, and Software Engineering.",
        "Participated in various programming and development projects, gaining practical experience in multiple technologies.",
        "Graduated with strong knowledge of computer science fundamentals and software engineering principles.",
      ],
    },
    {
      id: "udemy-course-react",
      name: "The Ultimate React Course",
      url: "https://www.udemy.com/course/the-ultimate-react-course/?couponCode=LETSLEARNNOW",
      role: "Course Participant",
      period: "August 2024",
      description: [
        "Completed 'The Ultimate React Course 2024', focusing on React, Next.js, Redux, and other modern web development technologies.",
        "Built multiple real-world projects to reinforce learning and gained hands-on experience with React and related libraries.",
      ],
    },
    {
      id: "udemy-course-node",
      name: "Node.js The Complete Bootcamp",
      url: "https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/?couponCode=LETSLEARNNOW",
      role: "Course Participant",
      period: "February 2024",
      description: [
        "Completed 'Node.js, Express, MongoDB & More: The Complete Bootcamp', mastering backend development with Node.js, Express, and MongoDB.",
        "Built comprehensive projects involving RESTful APIs, database management, and authentication.",
      ],
    },
    {
      id: "hsc",
      name: "Brahmanbaria Govt. College",
      url: "https://bgc.edu.bd/",
      role: "Higher Secondary Certificate (HSC)",
      period: "Year of Graduation",
      description: [
        "Completed the Higher Secondary Certificate with a focus on Science subjects, including Mathematics, Physics, and Computer Science.",
        "Developed a strong foundation in analytical thinking and problem-solving.",
      ],
    },
    {
      id: "ssc",
      name: "Annada Govt. High School",
      url: "https://en.wikipedia.org/wiki/Annada_Government_High_School",
      role: "Secondary School Certificate (SSC)",
      period: "Year of Graduation",
      description: [
        "Completed the Secondary School Certificate with a focus on Science subjects.",
        "Built a strong foundation in subjects like Mathematics and Physics, which led to a deep interest in technology and engineering.",
      ],
    },
  ];

  // State to track the active company
  const [activeCompany, setActiveCompany] = useState(companies[0].id);

  // Get the active company data
  const activeCompanyData = companies.find(
    (company) => company.id === activeCompany,
  );

  // Animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative py-20">
      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        <div className="flex justify-center gap-4">
          {/* Left sidebar - Company tabs */}
          <div className="relative mb-6 h-fit">
            <span className="absolute top-0 left-0 z-[50] h-full w-0.5 bg-slate-600"></span>
            <div className="flex flex-col">
              {companies.map((company) => (
                <motion.button
                  key={company.id}
                  onClick={() => setActiveCompany(company.id)}
                  className={`relative cursor-pointer px-4 py-3 text-left whitespace-nowrap transition-all duration-300 hover:bg-[#112240] md:whitespace-normal ${
                    activeCompany === company.id
                      ? "bg-[#112240] text-[#64ffda]"
                      : "hover:text-secondary text-[#8892b0]"
                  }`}
                >
                  <motion.span
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative z-10"
                  >
                    {company.name}
                  </motion.span>
                  {activeCompany === company.id && (
                    <motion.span
                      className="absolute top-0 left-0 z-[60] block h-full w-0.5 bg-[#64ffda]"
                      layoutId="activeCompany"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right content - Company details (fixed position) */}
          <div className="md:sticky md:top-24 md:w-3/5 md:self-start md:pl-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCompany}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={contentVariants}
              >
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-[#ccd6f6] md:text-2xl">
                    {activeCompanyData.role}{" "}
                    <span className="text-[#64ffda]">
                      @
                      <Link
                        href={activeCompanyData.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {activeCompanyData.name}
                      </Link>
                    </span>
                  </h3>
                  <p className="mt-1 font-mono text-sm text-[#8892b0]">
                    {activeCompanyData.period}
                  </p>
                </div>

                <ul className="mt-6 space-y-4">
                  {activeCompanyData.description.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex"
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={listItemVariants}
                    >
                      <span className="mt-1 mr-2 flex-shrink-0 text-[#64ffda]">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      <span className="text-[#8892b0]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
