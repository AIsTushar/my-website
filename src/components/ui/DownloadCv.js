"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

function DownloadCv() {
  const MotionLink = motion.create(Link);
  return (
    <MotionLink
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      href="https://drive.google.com/file/d/1k5SNZiSzfLbkUlf5YVIKilBw0xaZ30e8/view?usp=sharing"
      target="_blank"
      download={true}
      className="border-secondary text-secondary mt-5 flex w-fit max-w-full items-center rounded-md border-[.1px] border-solid px-5 py-3 text-sm font-semibold sm:mt-6 sm:px-6 sm:py-4 lg:mt-8"
    >
      Download My Resume <Download className="ml-2 h-4 w-4" />
    </MotionLink>
  );
}

export default DownloadCv;
