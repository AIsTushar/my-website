import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function ArticleBackLink() {
  return (
    <Link
      href="/articles"
      className="inline-flex items-center gap-3 text-base text-slate-300 transition-colors duration-300 hover:text-white"
    >
      <ArrowLeft className="h-4 w-4" />
      <span>Back to Articles</span>
    </Link>
  );
}

export default ArticleBackLink;
