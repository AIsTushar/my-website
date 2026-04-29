"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Code2,
  Copy,
  FileText,
  FolderOpen,
  Github,
  Home,
  Instagram,
  Linkedin,
  Moon,
  Twitter,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const contactEmail = "azizultushar98@gmail.com";

const navItems = [
  { href: "/", title: "Home", icon: Home },
  { href: "/about", title: "About", icon: UserRound },
  { href: "/projects", title: "Projects", icon: FolderOpen },
  { href: "/articles", title: "Articles", icon: FileText },
];

const socialItems = [
  {
    href: "https://github.com/AIsTushar?tab=repositories",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/azizul-islam-tushar/",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/azizul_islam_tushar/",
    label: "Instagram",
    icon: Instagram,
  },
  {
    href: "https://X.com",
    label: "Twitter",
    icon: Twitter,
  },
  {
    href: "https://www.codewars.com/users/azizultushar98",
    label: "Codewars",
    icon: Code2,
  },
];

const isActivePath = (pathname, href) =>
  pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

function DesktopNavLink({ href, title, isActive, className = "" }) {
  return (
    <Link
      href={href}
      className={`${className} group hover:text-secondary ${isActive ? "text-secondary" : "text-white"} relative`}
    >
      {title}
      <span
        className={`ease bg-secondary absolute -bottom-0.5 left-0 h-[1px] transition-[width] duration-300 group-hover:w-full ${
          isActive ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
}

function MobileNavLink({ href, title, icon: Icon, isActive, onNavigate }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`group flex items-center justify-between rounded-[1.7rem] border px-5 py-5 transition-all duration-300 ${
        isActive
          ? "border-cyan-300/10 bg-[linear-gradient(90deg,rgba(18,42,73,0.98),rgba(12,27,50,0.95))] shadow-[inset_0_0_0_1px_rgba(100,255,218,0.04)]"
          : "border-transparent hover:border-white/10 hover:bg-white/[0.03]"
      }`}
    >
      <div className="flex items-center gap-5">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-full border transition-colors duration-300 ${
            isActive
              ? "border-cyan-300/8 bg-cyan-300/10 text-secondary"
              : "border-white/5 bg-white/[0.03] text-slate-200"
          }`}
        >
          <Icon className="h-7 w-7" />
        </span>

        <span
          className={`text-[1.75rem] font-medium tracking-tight ${
            isActive ? "text-secondary" : "text-white"
          }`}
        >
          {title}
        </span>
      </div>

      <ChevronRight
        className={`h-7 w-7 transition-transform duration-300 group-hover:translate-x-1 ${
          isActive ? "text-secondary" : "text-slate-300"
        }`}
      />
    </Link>
  );
}

function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((current) => !current);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopiedEmail(true);
    } catch {
      setCopiedEmail(false);
    }
  };

  useEffect(() => {
    if (!copiedEmail) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setCopiedEmail(false);
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [copiedEmail]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-6 sm:px-10 sm:py-8 lg:px-12">
      <Logo />

      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="hidden items-center justify-between lg:flex"
      >
        <nav>
          {navItems.map((item, index) => (
            <DesktopNavLink
              key={item.href}
              href={item.href}
              title={item.title}
              isActive={isActivePath(pathname, item.href)}
              className={
                index === 0
                  ? "mr-4"
                  : index === navItems.length - 1
                    ? "ml-4"
                    : "mx-4"
              }
            />
          ))}
        </nav>
      </motion.div>

      <button
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        className={`border-white/12 bg-white/[0.03] text-white shadow-[0_18px_40px_rgba(3,8,20,0.35)] transition-all duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-none opacity-0"
            : "opacity-100 hover:border-cyan-300/20 hover:text-secondary"
        } flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-sm`}
        onClick={toggleMenu}
      >
        <span className="relative flex h-5 w-5 flex-col items-center justify-center">
          <span className="absolute h-0.5 w-full -translate-y-1.5 rounded-full bg-current" />
          <span className="absolute h-0.5 w-full rounded-full bg-current" />
          <span className="absolute h-0.5 w-full translate-y-1.5 rounded-full bg-current" />
        </span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              className="fixed inset-0 z-40 bg-[#020817]/70 backdrop-blur-[3px] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 18, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-y-3 right-3 z-50 flex w-[min(calc(100vw-1.5rem),42rem)] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,28,58,0.98),rgba(8,16,34,0.98))] shadow-[0_35px_100px_rgba(1,5,18,0.8)] lg:hidden sm:inset-y-6 sm:right-6"
            >
              <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-6 pt-8 sm:px-8">
                <div className="flex items-start justify-between">
                  <div className="origin-left scale-[1.35]">
                    <Logo />
                  </div>

                  <button
                    type="button"
                    aria-label="Close mobile menu"
                    onClick={closeMenu}
                    className="text-secondary flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 hover:bg-white/[0.04]"
                  >
                    <X className="h-8 w-8" />
                  </button>
                </div>

                <motion.nav
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: 0.05,
                      },
                    },
                  }}
                  className="mt-12 space-y-4"
                >
                  {navItems.map((item) => (
                    <motion.div
                      key={item.href}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <MobileNavLink
                        href={item.href}
                        title={item.title}
                        icon={item.icon}
                        isActive={isActivePath(pathname, item.href)}
                        onNavigate={closeMenu}
                      />
                    </motion.div>
                  ))}
                </motion.nav>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="text-secondary text-[1.7rem] font-medium tracking-tight">
                    Get in touch
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="break-all pr-4 text-[1.25rem] text-slate-300">
                      {contactEmail}
                    </p>

                    <button
                      type="button"
                      aria-label="Copy email address"
                      onClick={copyEmail}
                      className="text-secondary flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-300/10 bg-white/[0.03] transition-colors duration-300 hover:bg-cyan-300/10"
                    >
                      {copiedEmail ? (
                        <Check className="h-6 w-6" />
                      ) : (
                        <Copy className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8">
                  <p className="text-secondary text-[1.7rem] font-medium tracking-tight">
                    Follow me
                  </p>

                  <div className="mt-5 flex flex-wrap gap-4">
                    {socialItems.map(({ href, label, icon: Icon }) => (
                      <Link
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="border-white/10 bg-white/[0.03] text-slate-100 hover:text-secondary hover:border-cyan-300/15 flex h-16 w-16 items-center justify-center rounded-full border transition-colors duration-300"
                      >
                        <Icon className="h-7 w-7" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-6 sm:px-8">
                <button
                  type="button"
                  aria-disabled="true"
                  title="Theme switching is not enabled yet"
                  className="flex items-center gap-4 text-[1.2rem] text-slate-300/85"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <Moon className="h-6 w-6" />
                  </span>
                  <span>Switch to light mode</span>
                </button>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
