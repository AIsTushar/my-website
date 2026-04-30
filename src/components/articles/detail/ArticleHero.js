import Image from "next/image";
import { Clock3 } from "lucide-react";

function ArticleHero({ article }) {
  return (
    <section className="space-y-6">
      {article.featured ? (
        <div className="inline-flex rounded-full bg-violet-500/20 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-violet-200">
          Featured
        </div>
      ) : null}

      <div className="space-y-4">
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {article.title}
        </h1>

        <p className="max-w-3xl text-xl leading-9 text-slate-300">
          {article.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4 text-base text-slate-300">
        <span>{article.publishDateLabel}</span>
        <span className="hidden text-slate-500 sm:inline">.</span>

        <span className="inline-flex items-center gap-2">
          <Clock3 className="h-4 w-4" />
          {article.readTime}
        </span>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b152d]/70 p-2 shadow-[0_30px_80px_rgba(2,8,23,0.45)]">
        <div className="overflow-hidden rounded-[1.4rem] border border-white/10">
          <Image
            src={article.image}
            alt={article.title}
            width={1600}
            height={900}
            priority
            className="aspect-[16/7] w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default ArticleHero;
