"use client";

import Link from "next/link";
import { Link2, Linkedin, Twitter } from "lucide-react";
import { useEffect, useState } from "react";

function ArticleSidebar({ article, relatedArticles }) {
  const [copied, setCopied] = useState(false);

  const openShareWindow = (platform) => {
    const shareUrl = encodeURIComponent(window.location.href);
    const encodedTitle = encodeURIComponent(article.title);
    const href =
      platform === "twitter"
        ? `https://twitter.com/intent/tweet?url=${shareUrl}&text=${encodedTitle}`
        : `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;

    window.open(href, "_blank", "noopener,noreferrer");
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  useEffect(() => {
    if (!copied) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setCopied(false);
    }, 1600);

    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  return (
    <aside className="space-y-5 xl:h-full xl:overflow-y-auto xl:pl-2 xl:overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-[0_18px_50px_rgba(2,8,23,0.18)]">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          Share
        </h3>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            aria-label="Share on Twitter"
            onClick={() => openShareWindow("twitter")}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-100 transition-colors duration-300 hover:border-cyan-300/15 hover:text-cyan-200"
          >
            <Twitter className="h-[18px] w-[18px]" />
          </button>

          <button
            type="button"
            aria-label="Share on LinkedIn"
            onClick={() => openShareWindow("linkedin")}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-100 transition-colors duration-300 hover:border-cyan-300/15 hover:text-cyan-200"
          >
            <Linkedin className="h-[18px] w-[18px]" />
          </button>

          <button
            type="button"
            aria-label="Copy article link"
            onClick={copyLink}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-100 transition-colors duration-300 hover:border-cyan-300/15 hover:text-cyan-200"
          >
            <Link2 className="h-[18px] w-[18px]" />
          </button>
        </div>

        {copied ? (
          <p className="mt-3 text-sm text-cyan-200">Link copied.</p>
        ) : null}
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-[0_18px_50px_rgba(2,8,23,0.18)]">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          More Articles
        </h3>

        <div className="mt-4 space-y-4">
          {relatedArticles.map((relatedArticle) => (
            <Link
              key={relatedArticle.slug}
              href={`/articles/${relatedArticle.slug}`}
              className="block text-slate-300 transition-colors duration-300 hover:text-white"
            >
              <p className="text-base leading-7">{relatedArticle.title}</p>
              <p className="mt-1.5 text-sm text-slate-400">
                {relatedArticle.readTime}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 shadow-[0_18px_50px_rgba(2,8,23,0.18)]">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
          Tags
        </h3>

        <div className="mt-4 flex flex-wrap gap-2.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default ArticleSidebar;
