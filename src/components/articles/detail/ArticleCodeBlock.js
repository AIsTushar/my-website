"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

function ArticleCodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_18px_50px_rgba(2,8,23,0.15)]">
      <div className="flex items-start justify-between gap-4">
        <pre className="min-w-0 overflow-x-auto text-sm leading-7 text-slate-200">
          <code>{code}</code>
        </pre>

        <button
          type="button"
          aria-label="Copy code snippet"
          onClick={copyCode}
          className="hover:text-secondary inline-flex shrink-0 cursor-pointer items-center gap-2 text-sm text-slate-300 transition-colors duration-300"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default ArticleCodeBlock;
