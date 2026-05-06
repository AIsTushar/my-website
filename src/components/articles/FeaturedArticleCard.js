"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function FeaturedArcicalCard({ article, index, setActiveCard }) {
  return (
    <motion.div
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
      className="flex w-full flex-col gap-3 overflow-hidden rounded-2xl p-0 sm:gap-4 md:px-4 md:py-4"
    >
      <Link
        href={`/articles/${article.slug}`}
        className="overflow-hidden rounded-xl transition-transform duration-300 hover:scale-[1.01] sm:rounded-2xl"
      >
        <Image
          src={article.image}
          alt={`${article.title} Image`}
          width={900}
          height={700}
          className="aspect-[16/9] h-auto w-full rounded-xl object-cover sm:rounded-2xl"
        />
      </Link>
      <Link
        href={`/articles/${article.slug}`}
        className="text-sm font-semibold text-white transition-colors duration-300 hover:text-cyan-200 sm:text-lg lg:text-xl"
      >
        {article.title}
      </Link>
      <p className="text-xs leading-6 text-gray-500 sm:text-sm lg:text-base">
        {article.description}
      </p>
      <span className="text-xs font-semibold text-white sm:text-sm">
        {article.readTime}
      </span>
    </motion.div>
  );
}

export default FeaturedArcicalCard;
