"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";

const CustomLinks = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} group hover:text-secondary ${pathname === href ? "text-secondary" : "text-white"} relative`}
    >
      {title}
      <span
        className={`ease bg-secondary absolute -bottom-0.5 left-0 h-[1px] transition-[width] duration-300 group-hover:w-full ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLinks = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} group relative my-2 text-white dark:text-black`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`ease bg-secondary absolute -bottom-0.5 left-0 h-[1px] transition-[width] duration-300 group-hover:w-full ${
          pathname === href ? "w-full" : "w-0"
        } `}
      >
        &nbsp;
      </span>
    </button>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed flex w-full items-center justify-between px-12 py-8">
      {/* Logo */}
      <Logo />

      {/* Full Screen Links */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="hidden items-center justify-between lg:flex"
      >
        <nav>
          <CustomLinks title="Home" href="/" className="mr-4" />
          <CustomLinks title="About" href="/about" className="mx-4" />
          <CustomLinks title="Projects" href="/projects" className="mx-4" />
          <CustomLinks title="Blog" href="/blog" className="ml-4" />
        </nav>
      </motion.div>

      {/* Hamburger */}
      <button
        className="relative flex h-6 w-6 flex-col lg:hidden"
        onClick={handleClick}
      >
        <span
          className={`absolute h-0.5 w-full rounded-md bg-black transition-all duration-300 dark:bg-white ${
            isOpen ? "rotate-45" : "-translate-y-2"
          }`}
        ></span>

        <span
          className={`absolute h-0.5 w-full rounded-md bg-black transition-all duration-300 dark:bg-white ${
            isOpen ? "translate-x-2 opacity-0" : "opacity-100"
          }`}
        ></span>

        <span
          className={`absolute h-0.5 w-full rounded-md bg-black transition-all duration-300 dark:bg-white ${
            isOpen ? "-rotate-45" : "translate-y-2"
          }`}
        ></span>
      </button>

      {/* Mobile Screen Menu */}
      {isOpen ? (
        <div className="fixed top-1/2 left-1/2 z-30 flex min-w-[70vw] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-between rounded-lg bg-black/75 py-32 backdrop-blur-md dark:bg-white/75">
          <nav className="flex flex-col items-center justify-center">
            <CustomMobileLinks
              title="Home"
              href="/"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLinks
              title="About"
              href="/about"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLinks
              title="Projects"
              href="/projects"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLinks
              title="Blog"
              href="/blog"
              className=""
              toggle={handleClick}
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
