import { Link } from "react-router-dom";
import { Article } from "../types";
import { getArticlesByCategory, SECTION_META } from "../data/mockData";

interface SectionPageProps {
  category: string;
}

function ArticleCard({ article, big = false }: { article: Article; big?: boolean }) {
  return (
    <Link to={`/${article.slug}`} className="group block">
      <div className={`overflow-hidden ${big ? "aspect-[16/9]" : "aspect-[3/2]"} mb-3`}>
        <img
          src={article.imageUrl}
          alt={article.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <span
        className="block mb-1.5"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: "10px",
          letterSpacing: "1.7px",
          textTransform: "uppercase",
          color: "#E24D57",
        }}
      >
        {article.category}
      </span>
      <h2
        className={`leading-tight mb-2 group-hover:opacity-60 transition-opacity ${
          big ? "text-2xl md:text-3xl font-black" : "text-base font-bold"
        }`}
        style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}
      >
        {article.title}
      </h2>
      {article.excerpt && (
        <p className="text-[13px] text-[#555] leading-relaxed line-clamp-2">{article.excerpt}</p>
      )}
      <p
        className="mt-2 text-[11px] text-[#999]"
        style={{ fontFamily: "'Montserrat', sans-serif", letterSpacing: "0.5px" }}
      >
        Por {article.author} · {article.date}
      </p>
    </Link>
  );
}

export function SectionPage({ category }: SectionPageProps) {
  const articles = getArticlesByCategory(category);
  const meta = SECTION_META[category] ?? { label: category, description: "" };
  const [featured, ...rest] = articles;

  return (
    <main className="bg-white">
      {/* ── Cabecera de sección (estilo Vogue) ── */}
      <div className="border-b border-[#E5E5E5]">
        <div className="container-editorial py-8 text-center">
          <h1
            className="text-5xl md:text-6xl font-black leading-none mb-3"
            style={{ fontFamily: "'Bodoni Moda', Georgia, serif" }}
          >
            {meta.label}
          </h1>
          <p
            className="text-[#888] max-w-xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", letterSpacing: "0.8px" }}
          >
            {meta.description}
          </p>
        </div>
      </div>

      <div className="container-editorial py-10">
        {/* ── Artículo destacado ── */}
        {featured && (
          <div className="mb-12 pb-12 border-b border-[#E5E5E5]">
            <ArticleCard article={featured} big />
          </div>
        )}

        {/* ── Grid del resto ── */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {rest.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {articles.length === 0 && (
          <p className="text-center text-[#999] py-20" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Próximamente más contenido sobre {meta.label}.
          </p>
        )}
      </div>
    </main>
  );
}
