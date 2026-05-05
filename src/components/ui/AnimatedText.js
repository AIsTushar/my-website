"use client";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

function AnimatedText({ text, className = "" }) {
  return (
    <div className="flex min-w-0 py-1 sm:p-0">
      <motion.h1
        className={`inline-block max-w-full text-[2rem] leading-[1.1] font-bold text-white capitalize sm:text-4xl md:text-[2.75rem] lg:text-6xl xl:text-7xl ${className} `}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            className="inline-block"
            key={word + "-" + index}
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default AnimatedText;
