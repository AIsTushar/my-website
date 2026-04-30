"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  X,
} from "lucide-react";

function ProjectGallery({ title, gallery }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [previewIndex, setPreviewIndex] = useState(null);

  const visibleGallery = useMemo(
    () => (isExpanded ? gallery : gallery.slice(0, 4)),
    [gallery, isExpanded],
  );

  const activePreview =
    previewIndex === null ? null : (gallery[previewIndex] ?? null);

  const closePreview = useCallback(() => {
    setPreviewIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setPreviewIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === 0 ? gallery.length - 1 : current - 1;
    });
  }, [gallery.length]);

  const showNext = useCallback(() => {
    setPreviewIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === gallery.length - 1 ? 0 : current + 1;
    });
  }, [gallery.length]);

  useEffect(() => {
    if (previewIndex === null) {
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closePreview();
      }

      if (event.key === "ArrowLeft" && gallery.length > 1) {
        showPrevious();
      }

      if (event.key === "ArrowRight" && gallery.length > 1) {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closePreview, gallery.length, previewIndex, showNext, showPrevious]);

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-white">Gallery</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {visibleGallery.map((image, index) => (
          <button
            type="button"
            key={`${image.alt}-${index}`}
            onClick={() => setPreviewIndex(index)}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b152d]/70 p-2 text-left transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="overflow-hidden rounded-[1.1rem] border border-white/10">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          </button>
        ))}
      </div>

      {gallery.length > 4 ? (
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="hover:border-secondary hover:text-secondary inline-flex items-center gap-3 rounded-xl border border-white/15 px-5 py-3 text-base text-slate-200 transition-colors duration-300"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="h-4 w-4" />
              Show Fewer Screenshots
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4" />
              View More Screenshots
            </>
          )}
        </button>
      ) : null}

      <p className="text-sm text-slate-500">
        Click any image to preview it in a larger view.
      </p>

      <AnimatePresence>
        {activePreview ? (
          <>
            <motion.button
              type="button"
              aria-label="Close image preview"
              className="fixed inset-0 z-[60] bg-[#020817]/88 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePreview}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 18 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed inset-4 z-[70] flex items-center justify-center sm:inset-8"
            >
              <div className="relative flex max-h-full w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,20,42,0.96),rgba(6,12,26,0.98))] shadow-[0_35px_100px_rgba(1,5,18,0.7)]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                  <div className="min-w-0">
                    <p className="truncate text-base text-slate-300 sm:text-lg">
                      {activePreview.alt}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      {previewIndex + 1} of {gallery.length} from {title}
                    </p>
                  </div>

                  <button
                    type="button"
                    aria-label="Close preview"
                    onClick={closePreview}
                    className="text-slate-300 transition-colors duration-300 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex min-h-0 flex-1 flex-col px-4 py-4 sm:px-6 sm:py-6">
                  <div className="grid min-h-0 flex-1 grid-cols-1 items-center gap-4 sm:grid-cols-[auto_minmax(0,1fr)_auto]">
                    {gallery.length > 1 ? (
                      <button
                        type="button"
                        aria-label="Show previous preview"
                        onClick={showPrevious}
                        className="hover:text-secondary hidden h-12 w-12 items-center justify-center self-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition-colors duration-300 hover:border-cyan-300/15 sm:flex"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                    ) : (
                      <div className="hidden sm:block sm:w-12" />
                    )}

                    <div className="min-w-0 overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#020817]/45">
                      <div className="flex min-h-[18rem] items-center justify-center p-2 sm:min-h-[24rem] sm:p-4">
                        <Image
                          src={activePreview.src}
                          alt={activePreview.alt}
                          width={1600}
                          height={1100}
                          className="h-auto max-h-[72vh] w-auto max-w-full object-contain"
                        />
                      </div>
                    </div>

                    {gallery.length > 1 ? (
                      <button
                        type="button"
                        aria-label="Show next preview"
                        onClick={showNext}
                        className="hover:text-secondary hidden h-12 w-12 items-center justify-center self-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition-colors duration-300 hover:border-cyan-300/15 sm:flex"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    ) : (
                      <div className="hidden sm:block sm:w-12" />
                    )}
                  </div>

                  {gallery.length > 1 ? (
                    <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
                      <button
                        type="button"
                        aria-label="Show previous preview"
                        onClick={showPrevious}
                        className="hover:text-secondary flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition-colors duration-300 hover:border-cyan-300/15"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>

                      <button
                        type="button"
                        aria-label="Show next preview"
                        onClick={showNext}
                        className="hover:text-secondary flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition-colors duration-300 hover:border-cyan-300/15"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default ProjectGallery;
