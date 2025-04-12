"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function Card({ data, index, setHoveredCard }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      className="relative z-10 flex h-[96px] cursor-pointer items-center justify-between rounded-md border-b border-gray-800 px-4"
    >
      <h2 className="text-xl text-gray-200">{data.title}</h2>
      <p className="text-lg text-gray-500">{data.date}</p>
    </motion.div>
  );
}

export default Card;
