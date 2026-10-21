import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Article } from "../../types";

interface HeroSectionProps {
  heroArticles: Article[];
  sidebarArticles: Article[];
}

export function HeroSection({ heroArticles, sidebarArticles }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = heroArticles[activeIndex];

  const prev = () => setActiveIndex((i) => (i === 0 ? heroArticles.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === heroArticles.length - 1 ? 0 : i + 1));

  return (
    <section className="container-editorial pt-4 pb-2">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-0 border-b border-ink/10">

        {/* ── LEFT: hero slider ── */}
        <div className="relative pr-0 lg:pr-6 lg:border-r lg:border-ink/10 pb-6">
          {/* Main article image */}
          <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[3/2] group">
            <Link to={`/${active.slug}`}>
              <img
                key={active.id}
                src={active.imageUrl}
                alt={active.imageAlt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient overlay */}
              <div className="hero-gradient absolute inset-0" />
              {/* Category + title overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 text-cream">
                <span className="text-[10px] font-black tracking-[0.16em] uppercase text-gold block mb-2">
                  {active.category}
                </span>
                <h2 className="font-black text-2xl sm:text-3xl lg:text-4xl leading-tight hover:text-gold transition-colors duration-200 max-w-xl">
                  {active.title}
                </h2>
                <p className="text-cream/70 text-sm mt-2 hidden sm:block">
                  Por {active.author} · {active.date}
                </p>
              </div>
            </Link>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white text-ink flex items-center justify-center shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 hover:bg-white text-ink flex items-center justify-center shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-1.5 mt-3">
            {heroArticles.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-0.5 transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-ink" : "w-3 bg-ink/25 hover:bg-ink/50"
                }`}
                aria-label={`Ir a artículo ${i + 1}`}
              />
            ))}
          </div>

          {/* Sub-articles below hero (2 grid) — Vogue shows sub-articles below main */}
          <div className="grid grid-cols-2 gap-4 mt-5 hidden sm:grid">
            {heroArticles
              .filter((_, i) => i !== activeIndex)
              .slice(0, 2)
              .map((a) => (
                <Link key={a.id} to={`/${a.slug}`} className="group flex gap-3 items-start">
                  <div className="w-20 h-16 flex-shrink-0 overflow-hidden">
                    <img
                      src={a.imageUrl}
                      alt={a.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="eyebrow text-[9px] block mb-1">{a.category}</span>
                    <h4 className="text-sm font-bold leading-snug line-clamp-2 card-title-hover">
                      {a.title}
                    </h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* ── RIGHT: sidebar list (Vogue style) ── */}
        <div className="hidden lg:flex flex-col pl-6 pb-6 gap-0">
          {sidebarArticles.map((article, i) => (
            <Link
              key={article.id}
              to={`/${article.slug}`}
              className={`group flex gap-3 items-start py-4 ${
                i < sidebarArticles.length - 1 ? "border-b border-ink/8" : ""
              }`}
            >
              {/* Text */}
              <div className="flex-1 min-w-0 order-1">
                <span className="eyebrow text-[9px] block mb-1.5">{article.category}</span>
                <h4 className="text-[13px] font-bold leading-snug line-clamp-3 card-title-hover">
                  {article.title}
                </h4>
                <p className="text-muted2 text-[11px] mt-1.5">
                  Por {article.author}
                </p>
              </div>
              {/* Thumbnail */}
              <div className="w-16 h-16 flex-shrink-0 overflow-hidden order-2">
                <img
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
