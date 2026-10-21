import { Link } from "react-router-dom";
import articlesData from "../../data/articles.json";

const actualidad = (articlesData as any[]).filter((a) => a.section === "actualidad");

const GOLD = "#c9a84c";
const BODONI = "'Bodoni Moda', Georgia, serif";
const JOST = "'Jost', sans-serif";

/* ─── Logo header inside each card ─── */
function CardLogo({ size = "md" }: { size?: "lg" | "md" }) {
  const titleSize = size === "lg" ? "clamp(22px, 3.2vw, 44px)" : "clamp(14px, 2.2vw, 26px)";
  const subtitleSize = size === "lg" ? "clamp(7px, 0.8vw, 10px)" : "clamp(6px, 0.65vw, 8px)";
  return (
    <div className="flex flex-col items-center pt-3 px-2">
      <p style={{ fontFamily: BODONI, fontSize: titleSize, fontWeight: 400, color: "#fff", letterSpacing: "0.05em", lineHeight: 1 }}>
        Conexión con Vos
      </p>
      <div style={{ height: "1px", width: "60%", margin: "4px auto 2px", background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)` }} />
      <p style={{ fontFamily: JOST, fontSize: subtitleSize, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD }}>
        Tendencias · Moda · Actualidad
      </p>
    </div>
  );
}

/* ─── Featured (big) cover ─── */
function FeaturedCover({ article }: { article: any }) {
  return (
    <Link
      to={`/${article.slug}`}
      className="group block relative overflow-hidden w-full"
      style={{ aspectRatio: "9/12", maxHeight: "600px" }}
    >
      <img src={article.himg} alt={article.halt || article.title} className="absolute inset-0 w-full h-full object-cover object-top" />

      {/* Overlays */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "35%", background: "linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "55%", background: "linear-gradient(to top, rgba(0,0,0,0.92) 10%, transparent 100%)" }} />

      {/* Logo top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <CardLogo size="lg" />
      </div>

      {/* Content bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 text-center">
        <p style={{ fontFamily: BODONI, fontStyle: "italic", fontSize: "clamp(11px, 1.4vw, 16px)", color: GOLD, marginBottom: "6px" }}>
          La nota de la semana
        </p>
        <h2 style={{ fontFamily: BODONI, fontSize: "clamp(20px, 3.4vw, 42px)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
          {article.title}
        </h2>
        {article.sub && (
          <p style={{ fontFamily: JOST, fontSize: "clamp(9px, 1vw, 12px)", color: "rgba(255,255,255,0.78)", marginTop: "8px", lineHeight: 1.45 }}>
            {article.sub.length > 110 ? article.sub.slice(0, 110) + "…" : article.sub}
          </p>
        )}
        <div style={{ height: "1px", width: "35%", margin: "10px auto 6px", background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)` }} />
        <p style={{ fontFamily: JOST, fontSize: "clamp(7px, 0.75vw, 9px)", letterSpacing: "0.18em", textTransform: "uppercase", color: GOLD }}>
          {article.by || "Rodrigo Presa · Director Editorial"}
        </p>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(255,255,255,0.04)" }} />
    </Link>
  );
}

/* ─── Secondary (small) cover ─── */
function SecondaryCover({ article }: { article: any }) {
  return (
    <Link
      to={`/${article.slug}`}
      className="group block relative overflow-hidden w-full"
      style={{ aspectRatio: "9/12", maxHeight: "600px" }}
    >
      <img src={article.himg} alt={article.halt || article.title} className="absolute inset-0 w-full h-full object-cover object-top" />

      {/* Overlays */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.12)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "40%", background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "58%", background: "linear-gradient(to top, rgba(0,0,0,0.90) 10%, transparent 100%)" }} />

      {/* Logo top */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <CardLogo size="md" />
      </div>

      {/* Content bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-3 pb-4 text-center">
        {article.label && (
          <p style={{ fontFamily: JOST, fontSize: "clamp(6px, 0.7vw, 8px)", letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: "5px" }}>
            {article.label}
          </p>
        )}
        <h3 style={{ fontFamily: BODONI, fontSize: "clamp(13px, 1.8vw, 22px)", fontWeight: 700, color: "#fff", lineHeight: 1.15 }}>
          {article.title.length > 72 ? article.title.slice(0, 72) + "…" : article.title}
        </h3>
        <div style={{ height: "1px", width: "40%", margin: "8px auto 5px", background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)` }} />
        <p style={{ fontFamily: JOST, fontSize: "clamp(6px, 0.65vw, 8px)", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.70)" }}>
          {article.by || "Rodrigo Presa · Director Editorial"}
        </p>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(255,255,255,0.04)" }} />
    </Link>
  );
}

/* ─── Section ─── */
export function MagazineCovers() {
  if (actualidad.length === 0) return null;

  const featured = actualidad[0];
  const rest = actualidad.slice(1, 4);

  return (
    <section className="py-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px flex-1 bg-[#e8e6e1]" />
        <p style={{ fontFamily: JOST, fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#1a1a1a" }}>
          Tapas de la semana
        </p>
        <div className="h-px flex-1 bg-[#e8e6e1]" />
      </div>

      <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        <div style={{ gridColumn: "span 2" }}>
          <FeaturedCover article={featured} />
        </div>
        {rest.map((article) => (
          <SecondaryCover key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
