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
      href="https://drive.google.com/file/d/1XV5LDMGzealB0REQ0vyY1520xvPWGh4l/view?usp=drive_link"
      target="_blank"
      download={true}
      className="border-secondary text-secondary mt-8 flex w-fit items-center rounded-md border-2 border-solid px-6 py-4 font-semibold"
    >
      Download My Resume <Download className="ml-1 h-5 w-5" />
    </MotionLink>
  );
}

export default DownloadCv;
