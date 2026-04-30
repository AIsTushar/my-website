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
    <main className="mt-36 flex w-full flex-col items-center overflow-hidden">
      <div className="flex w-full max-w-4xl flex-col gap-12">
        <AnimatedText
          text="Stories. Updates. Guides."
          className="!text-6xl !text-gray-200"
        />

        <div>
          <GradualSpacing
            text="I write articles around React, JavaScript, TypeScript, and frontend engineering. Some are interview focused, some are practical notes from real work, and all of them are meant to be useful."
            className="leading-[160%] tracking-wide !text-gray-300"
          />
        </div>
      </div>

      <div className="my-16 flex w-full max-w-4xl flex-col gap-6">
        <h2 className="text-5xl text-white">Featured Articles</h2>
        <div className="relative flex w-full">
          <AnimatePresence>
            {activeCard !== null ? (
              <motion.div
                variants={backgroundVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={activeCard}
                className="absolute inset-0 rounded-2xl bg-slate-800"
                style={{
                  width: "calc(50% - 0.5rem)",
                  height: "100%",
                }}
              />
            ) : null}
          </AnimatePresence>

          <div className="relative z-10 flex w-full gap-4">
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

      <div className="mt-16 flex w-full max-w-4xl flex-col gap-6">
        <h2 className="text-5xl text-white">All Articles</h2>

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
                className="absolute left-0 z-0 h-[96px] w-full rounded-md bg-slate-800"
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
