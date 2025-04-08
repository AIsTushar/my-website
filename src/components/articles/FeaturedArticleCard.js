"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function FeaturedArcicalCard({ data, index, setActiveCard }) {
  return (
    <motion.div
      onMouseEnter={() => setActiveCard(index)}
      onMouseLeave={() => setActiveCard(null)}
      className="flex w-1/2 flex-col gap-4 overflow-hidden rounded-2xl px-4 py-4"
    >
      <div className="rounded-2xl">
        <Image
          src={data.img}
          alt={`${data.title} Image`}
          width={500}
          height={500}
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
      <h2 className="text-xl text-white">{data.title}</h2>
      <p className="text-gray-500">{data.desc}</p>
      <span className="text-white">{data.readTime}</span>
    </motion.div>
  );
}

export default FeaturedArcicalCard;
