import { Link } from "react-router-dom";
import { Article } from "../../types";
import { TrendingUp } from "lucide-react";

interface MustReadProps {
  articles: Article[];
}

export function MustRead({ articles }: MustReadProps) {
  return (
    <section className="container-editorial py-8 border-b border-ink/10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-ink/10" />
        <h2 className="flex items-center gap-2 text-[13px] font-black tracking-[0.14em] uppercase text-ink whitespace-nowrap px-2">
          <TrendingUp className="w-3.5 h-3.5 text-red" strokeWidth={3} />
          Lo más leído
        </h2>
        <div className="flex-1 h-px bg-ink/10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {articles.map((article, i) => (
          <Link key={article.id} to={`/${article.slug}`} className="group flex gap-4">
            {/* Big number (Vogue "Must Read" style) */}
            <span className="font-serif text-5xl font-semibold italic text-gold leading-none flex-shrink-0 select-none mt-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* Content */}
            <div className="flex-1 min-w-0">
              <span className="eyebrow block mb-2">{article.category}</span>
              <div className="overflow-hidden aspect-[16/9] mb-3">
                <img
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-bold text-base leading-snug card-title-hover line-clamp-3">
                {article.title}
              </h3>
              <p className="text-muted2 text-xs mt-2 line-clamp-2">{article.excerpt}</p>
              <p className="text-muted2 text-[11px] mt-2">
                Por {article.author} · {article.readTime} min
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
