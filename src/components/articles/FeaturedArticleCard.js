"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function FeaturedArcicalCard({ article, index, setActiveCard }) {
  return (
    <motion.div
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
      className="flex w-1/2 flex-col gap-4 overflow-hidden rounded-2xl px-4 py-4"
    >
      <Link
        href={`/articles/${article.slug}`}
        className="rounded-2xl transition-transform duration-300 hover:scale-[1.01]"
      >
        <Image
          src={article.image}
          alt={`${article.title} Image`}
          width={900}
          height={700}
          className="h-full w-full rounded-2xl object-cover"
        />
      </Link>
      <Link
        href={`/articles/${article.slug}`}
        className="text-xl text-white transition-colors duration-300 hover:text-cyan-200"
      >
        {article.title}
      </Link>
      <p className="text-gray-500">{article.description}</p>
      <span className="text-white">{article.readTime}</span>
    </motion.div>
  );
}

export default FeaturedArcicalCard;
