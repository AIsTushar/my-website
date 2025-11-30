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
      className="border-secondary text-secondary test-sm mt-8 flex w-fit items-center rounded-md border-[.1px] border-solid px-6 py-4 font-semibold"
    >
      Download My Resume <Download className="ml-2 h-4 w-4" />
    </MotionLink>
  );
}

export default DownloadCv;
