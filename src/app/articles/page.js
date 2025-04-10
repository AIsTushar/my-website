"use client";

import AnimatedText from "@/components/AnimatedText";
import FeaturedArcicalCard from "@/components/articles/FeaturedArticleCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Entry Level React Interview Questions",
    desc: "10 questions and relatively short but comprehensive answers for entry-level devs.",
    img: "/articles/react_question.png",
    readTime: "10 min read",
  },
  {
    id: 2,
    title: "Advanced JavaScript Tricks",
    desc: "Explore closures, event loop, and execution context in detail.",
    img: "/articles/react_question.png",
    readTime: "8 min read",
  },
];

function Page() {
  const [activeCard, setActiveCard] = useState(null);

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

        <div className="flex flex-col gap-4">
          <p className="leading-[120%] tracking-wide text-gray-300">
            I write Articles sometimes—not because anyone asked, but mostly so
            this page doesn&apos;t look too empty;
          </p>
          <p className="leading-[120%] tracking-wide text-gray-300">
            a few might even make sense. Probably.
          </p>
        </div>
      </div>

      <div className="my-16 flex w-full max-w-4xl flex-col gap-6">
        <h2 className="text-5xl text-white">Featured Articles</h2>
        <div className="relative flex w-full">
          {/* Background effect layer */}
          <AnimatePresence>
            {activeCard !== null && (
              <motion.div
                variants={backgroundVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={activeCard}
                className="absolute inset-0 z-0 rounded-2xl bg-gray-800"
                style={{
                  width: "calc(50% - 0.5rem)",
                  height: "100%",
                }}
              />
            )}
          </AnimatePresence>

          {/* Cards */}
          <div className="relative z-10 flex w-full gap-4">
            {cards.map((card, index) => (
              <FeaturedArcicalCard
                key={card.id}
                data={card}
                index={index}
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="my-16 flex w-full max-w-4xl flex-col gap-6">
        <h2 className="text-5xl text-white">All Articles</h2>
      </div>
    </main>
  );
}

export default Page;
