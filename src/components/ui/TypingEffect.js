"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TypingEffect({ text, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <p ref={ref} className={`text-secondary ml-1 text-lg ${className}`}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </p>
  );
}

export default TypingEffect;
