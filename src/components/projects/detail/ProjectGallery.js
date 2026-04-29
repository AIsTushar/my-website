"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

function ProjectGallery({ title, gallery }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleGallery = useMemo(
    () => (isExpanded ? gallery : gallery.slice(0, 4)),
    [gallery, isExpanded],
  );

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold text-white">Gallery</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {visibleGallery.map((image, index) => (
          <div
            key={`${image.alt}-${index}`}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#0b152d]/70 p-2"
          >
            <div className="overflow-hidden rounded-[1.1rem] border border-white/10">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={900}
                className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                style={{ objectPosition: image.objectPosition }}
              />
            </div>
          </div>
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
        A cropped preview set built from the {title} interface to highlight
        different parts of the product experience.
      </p>
    </section>
  );
}

export default ProjectGallery;
