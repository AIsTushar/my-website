"use client";

import AnimatedText from "@/components/ui/AnimatedText";
import Card from "@/components/articles/Card";
import FeaturedArcicalCard from "@/components/articles/FeaturedArticleCard";
import GradualSpacing from "@/components/ui/GradualSpacing";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/components/ui/Footer";
import { getAllArticles, getFeaturedArticles } from "@/data/articles";

function Page() {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const featuredArticles = getFeaturedArticles().slice(0, 2);
  const allArticles = getAllArticles();

  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      x: i * (100 + 4) + "%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <main className="mt-28 flex w-full flex-col items-center overflow-hidden px-6 sm:mt-32 sm:px-10 lg:mt-36">
      <div className="flex w-full max-w-4xl flex-col gap-5 sm:gap-8 lg:gap-12">
        <AnimatedText
          text="Stories. Updates. Guides."
          className="!text-3xl !text-gray-200 sm:!text-4xl md:!text-5xl lg:!text-6xl"
        />

        <div className="max-w-3xl">
          <GradualSpacing
            text="I write articles around React, JavaScript, TypeScript, and frontend engineering. Some are interview focused, some are practical notes from real work, and all of them are meant to be useful."
            className="!text-xs leading-[170%] !text-gray-300 sm:!text-sm md:!text-base lg:!text-lg"
          />
        </div>
      </div>

      <div className="my-10 flex w-full max-w-4xl flex-col gap-4 sm:my-14 sm:gap-6 lg:my-16">
        <h2 className="text-2xl text-white sm:text-3xl lg:text-5xl">
          Featured Articles
        </h2>
        <div className="relative flex w-full">
          <AnimatePresence>
            {activeCard !== null ? (
              <motion.div
                variants={backgroundVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={activeCard}
                className="absolute inset-0 hidden rounded-2xl bg-slate-800 md:block"
                style={{
                  width: "calc(50% - 0.5rem)",
                  height: "100%",
                }}
              />
            ) : null}
          </AnimatePresence>

          <div className="relative z-10 grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
            {featuredArticles.map((article, index) => (
              <FeaturedArcicalCard
                key={article.slug}
                article={article}
                index={index}
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex w-full max-w-4xl flex-col gap-4 sm:mt-12 sm:gap-6 lg:mt-16">
        <h2 className="text-2xl text-white sm:text-3xl lg:text-5xl">
          All Articles
        </h2>

        <div className="relative z-10 flex flex-col">
          <AnimatePresence>
            {hoveredCard !== null ? (
              <motion.div
                key="card-hover-bg"
                initial={{ opacity: 0, y: -10, scale: 0.4 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  top: hoveredCard * 96,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: { delay: 0.4 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-0 z-0 hidden h-[96px] w-full rounded-md bg-slate-800 lg:block"
              />
            ) : null}
          </AnimatePresence>

          <div className="relative z-10">
            {allArticles.map((article, index) => (
              <Card
                key={article.slug}
                article={article}
                index={index}
                setHoveredCard={setHoveredCard}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Page;
