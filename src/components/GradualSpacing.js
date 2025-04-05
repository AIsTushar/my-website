"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

function GradualSpacing({ text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <p className="w-2/3 text-lg text-gray-400" ref={ref}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, x: -18 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          exit="hidden"
          transition={{ duration: 0.1, delay: index * 0.1 }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </p>
  );
}

export default GradualSpacing;
