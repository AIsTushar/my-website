import Link from "next/link";
import { ArrowRight, Telescope } from "lucide-react";

function ArticleCta({ cta }) {
  return (
    <section className="rounded-[1.8rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(8,24,41,0.98),rgba(7,18,33,0.98))] p-6 shadow-[0_28px_80px_rgba(2,8,23,0.18)] sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="text-secondary mt-1">
            <Telescope className="h-8 w-8" />
          </span>

          <div>
            <h3 className="text-3xl font-semibold text-white">{cta.title}</h3>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-300">
              {cta.description}
            </p>
          </div>
        </div>

        <Link
          href={cta.href}
          className="border-secondary text-secondary hover:bg-secondary/10 inline-flex items-center gap-3 rounded-xl border px-6 py-4 text-lg font-medium transition-colors duration-300"
        >
          {cta.label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

export default ArticleCta;
