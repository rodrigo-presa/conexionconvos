import { Link } from "react-router-dom";
import { Article, Category } from "../../types";

interface CategorySectionProps {
  heading: string;
  category: Category;
  articles: Article[];
  seeAllHref: string;
}

export function CategorySection({
  heading,
  articles,
  seeAllHref,
}: CategorySectionProps) {
  if (articles.length === 0) return null;
  const [main, ...rest] = articles.slice(0, 4);

  return (
    <section className="container-editorial py-8 border-b border-ink/10">
      {/* Section header (Vogue style: centered with lines) */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-ink/10" />
        <h2 className="text-[13px] font-black tracking-[0.14em] uppercase text-ink whitespace-nowrap px-2">
          {heading}
        </h2>
        <div className="flex-1 h-px bg-ink/10" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Main card (first) */}
        <Link to={`/${main.slug}`} className="group sm:col-span-2 lg:col-span-1">
          <div className="overflow-hidden aspect-[4/3] mb-3">
            <img
              src={main.imageUrl}
              alt={main.imageAlt}
              className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <span className="eyebrow">{main.category}</span>
          <h3 className="mt-1.5 font-black text-lg leading-snug card-title-hover line-clamp-3">
            {main.title}
          </h3>
          <p className="text-muted2 text-xs mt-2">Por {main.author}</p>
        </Link>

        {/* Rest 3 cards */}
        {rest.slice(0, 3).map((article) => (
          <Link key={article.id} to={`/${article.slug}`} className="group">
            <div className="overflow-hidden aspect-[4/3] mb-3">
              <img
                src={article.imageUrl}
                alt={article.imageAlt}
                className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <span className="eyebrow">{article.category}</span>
            <h3 className="mt-1.5 font-bold text-[15px] leading-snug card-title-hover line-clamp-3">
              {article.title}
            </h3>
            <p className="text-muted2 text-xs mt-2">Por {article.author}</p>
          </Link>
        ))}
      </div>

      {/* See all */}
      <div className="text-center mt-6">
        <Link
          to={seeAllHref}
          className="inline-block text-[11px] font-black tracking-[0.1em] uppercase border-b-2 border-ink pb-0.5 hover:border-red hover:text-red transition-colors duration-200"
        >
          Ver todo
        </Link>
      </div>
    </section>
  );
}
