import { Link } from "react-router-dom";
import { Article } from "../../types";

interface LatestStoriesProps {
  articles: Article[];
}

export function LatestStories({ articles }: LatestStoriesProps) {
  // Split into two rows like Vogue does
  const row1 = articles.slice(0, 3);
  const row2 = articles.slice(3, 6);

  return (
    <section className="container-editorial py-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-ink/10" />
        <h2 className="text-[13px] font-black tracking-[0.14em] uppercase text-ink whitespace-nowrap px-2">
          Últimas notas
        </h2>
        <div className="flex-1 h-px bg-ink/10" />
      </div>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {row1.map((article) => (
          <ArticleGridCard key={article.id} article={article} />
        ))}
      </div>

      {/* Separator */}
      <div className="border-t border-ink/10 mb-8" />

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {row2.map((article) => (
          <ArticleGridCard key={article.id} article={article} />
        ))}
      </div>

      {/* Next page */}
      <div className="text-center">
        <Link
          to="/archivo?page=2"
          className="inline-flex items-center gap-2 px-8 py-3 border border-ink text-[11px] font-black tracking-[0.1em] uppercase hover:bg-ink hover:text-cream transition-all duration-200"
        >
          Ver más artículos
        </Link>
      </div>
    </section>
  );
}

function ArticleGridCard({ article }: { article: Article }) {
  return (
    <Link to={`/${article.slug}`} className="group">
      <div className="overflow-hidden aspect-[16/9] mb-3">
        <img
          src={article.imageUrl}
          alt={article.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <span className="eyebrow block mb-2">{article.category}</span>
      <h3 className="font-bold text-[15px] leading-snug card-title-hover line-clamp-2 mb-2">
        {article.title}
      </h3>
      <p className="text-muted2 text-xs">
        Por {article.author} · {article.date} · {article.readTime} min
      </p>
    </Link>
  );
}
