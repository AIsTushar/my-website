"use client";

import { useEffect, useMemo, useState } from "react";

function ArticleTableOfContents({ sections }) {
  const items = useMemo(
    () =>
      sections.flatMap((section) => [
        {
          id: section.id,
          label: section.title,
          depth: 0,
        },
        ...(section.questions ?? []).map((question) => ({
          id: question.id,
          label: question.title.replace(/^\d+\.\s*/, ""),
          depth: 1,
        })),
      ]),
    [sections],
  );

  const [activeId, setActiveId] = useState(items[0]?.id ?? null);

  useEffect(() => {
    if (!items.length) {
      return undefined;
    }

    const scrollContainer = document.getElementById("article-scroll-container");
    const elements = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        root: scrollContainer,
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0.15, 0.4, 0.8],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const handleScrollToSection = (id) => (event) => {
    event.preventDefault();

    const targetElement = document.getElementById(id);

    if (!targetElement) {
      return;
    }

    setActiveId(id);
    window.history.replaceState(null, "", `#${id}`);
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <aside className="hidden xl:block xl:h-full xl:overflow-y-auto xl:pr-2">
      <div className="border-r border-white/10 pr-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          On this page
        </p>

        <nav className="mt-6 space-y-4">
          {items.map((item) => {
            const isActive = item.id === activeId;

            return (
              <button
                key={item.id}
                type="button"
                aria-current={isActive ? "true" : undefined}
                onClick={handleScrollToSection(item.id)}
                className={`block w-full cursor-pointer border-l pl-4 text-left text-base transition-colors duration-300 ${
                  item.depth === 1 ? "ml-4 text-[0.98rem]" : ""
                } ${
                  isActive
                    ? "border-cyan-300 text-secondary"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}

export default ArticleTableOfContents;
