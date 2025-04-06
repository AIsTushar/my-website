"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ExperienceCard() {
  // Companies data
  const companies = [
    {
      id: "01",
      name: "Trade Go Limited",
      url: "https://tradegolimited.co.uk/",
      role: "Freelance Developer",
      period: "December 2024 — February 2025",
      description: [
        "Designed and developed the landing page for TradeGo Limited, a UK-based clean wash chemical supplier.",
        "Used Next.js for front-end development, ensuring smooth and responsive user experiences.",
        "Utilized Tailwind CSS for modern, responsive styling and efficient layout management.",
        "Collaborated with the client to ensure the project met their branding and functional requirements.",
      ],
    },
    {
      id: "02",
      name: "Itransition Group",
      url: "https://www.itransition.com",
      role: "Software Engineer Intern",
      period: "Jul 2024 — Sep 2024",
      description: [
        "Participated in an online training program where multiple tasks were assigned and completed throughout the course.",
        "Developed, defended, and presented a final project as part of the program's conclusion.",
        "Took an exam and viva to demonstrate understanding and skills gained during the training.",
        "Gained hands-on experience with technologies such as React.js, Next.js, Node.js, PostgreSQL, Express.js, MongoDB, and Tailwind CSS.",
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
                      @{" "}
                      <a
                        href={activeCompanyData.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {activeCompanyData.name}
                      </a>
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

export default ExperienceCard;

// Trade Go Limited | (Next.js, Tailwind CSS) Live | GitHub
// Designed and developed the landing page for TradeGo Limited, a UK-based clean wash
// chemical supplier, as a freelance project.
