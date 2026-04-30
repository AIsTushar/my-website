"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function Card({ article, index, setHoveredCard }) {
  return (
    <motion.div
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      className="relative z-10 flex h-[96px] cursor-pointer items-center justify-between rounded-md border-b border-gray-800 px-4"
    >
      <Link
        href={`/articles/${article.slug}`}
        className="text-xl text-gray-200 transition-colors duration-300 hover:text-white"
      >
        {article.title}
      </Link>
      <p className="text-lg text-gray-500">{article.publishDateLabel}</p>
    </motion.div>
  );
}

export default Card;
