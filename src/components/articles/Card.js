"use client";
import Link from "next/link";
import { motion } from "framer-motion";

function Card({ article, index, setHoveredCard }) {
  return (
    <motion.div
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      className="relative z-10 flex min-h-16 cursor-pointer items-center justify-between gap-4 rounded-md border-b border-gray-800 px-0 py-4 sm:min-h-20 sm:px-4 lg:min-h-[96px]"
    >
      <Link
        href={`/articles/${article.slug}`}
        className="min-w-0 text-xs font-medium text-gray-200 transition-colors duration-300 hover:text-white sm:text-base lg:text-xl"
      >
        {article.title}
      </Link>
      <p className="shrink-0 text-xs text-gray-500 sm:text-sm lg:text-lg">
        {article.publishDateLabel}
      </p>
    </motion.div>
  );
}

export default Card;
