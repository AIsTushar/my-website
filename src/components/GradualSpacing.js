"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function GradualSpacing({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <p className={`text-lg text-gray-400 ${className}`} ref={ref}>
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
