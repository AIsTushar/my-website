import { notFound } from "next/navigation";
import ArticleBackLink from "@/components/articles/detail/ArticleBackLink";
import ArticleContent from "@/components/articles/detail/ArticleContent";
import ArticleCta from "@/components/articles/detail/ArticleCta";
import ArticleFooterLinks from "@/components/articles/detail/ArticleFooterLinks";
import ArticleHero from "@/components/articles/detail/ArticleHero";
import ArticleSidebar from "@/components/articles/detail/ArticleSidebar";
import ArticleTableOfContents from "@/components/articles/detail/ArticleTableOfContents";
import {
  articles,
  getArticleBySlug,
  getRelatedArticles,
} from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | Azizul Islam Tushar",
    };
  }

  return {
    title: `${article.title} | Azizul Islam Tushar`,
    description: article.description,
  };
}

async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug);

  return (
    <main className="relative overflow-hidden px-6 pb-16 pt-32 sm:px-10 lg:px-12 xl:h-screen xl:pb-8">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.14),_transparent_28%),radial-gradient(circle_at_right,_rgba(100,255,218,0.08),_transparent_24%),linear-gradient(135deg,#071224_0%,#050e1c_48%,#040915_100%)]" />
      <div className="absolute top-0 right-0 -z-10 h-[26rem] w-[26rem] rounded-full bg-cyan-400/6 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-[22rem] w-[22rem] rounded-full bg-blue-500/8 blur-3xl" />

      <div className="mx-auto w-full max-w-7xl xl:flex xl:h-full xl:flex-col">
        <ArticleBackLink />

        <div className="mt-10 grid gap-10 xl:min-h-0 xl:flex-1 xl:grid-cols-[15rem_minmax(0,1fr)_18rem] xl:overflow-hidden">
          <ArticleTableOfContents sections={article.sections} />

          <div
            id="article-scroll-container"
            className="min-w-0 space-y-10 xl:min-h-0 xl:overflow-y-auto xl:scroll-smooth xl:pr-4 xl:overscroll-contain [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <ArticleHero article={article} />
            <ArticleContent sections={article.sections} />
            <ArticleCta cta={article.cta} />
            <ArticleFooterLinks />
          </div>

          <ArticleSidebar
            article={article}
            relatedArticles={relatedArticles}
          />
        </div>
      </div>
    </main>
  );
}

export default ArticleDetailPage;
