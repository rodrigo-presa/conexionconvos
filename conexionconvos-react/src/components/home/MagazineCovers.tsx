import { Link } from "react-router-dom";
import articlesData from "../../data/articles.json";

const actualidad = (articlesData as any[]).filter((a) => a.section === "actualidad");

const GOLD = "#c9a84c";
const BODONI = "'Bodoni Moda', Georgia, serif";
const JOST = "'Jost', sans-serif";

/* ─── Featured cover (double width) ─── */
function FeaturedCover({ article }: { article: any }) {
  return (
    <Link
      to={`/${article.slug}`}
      className="group block relative overflow-hidden w-full"
      style={{ aspectRatio: "2/3" }}
    >
      <img
        src={article.himg}
        alt={article.halt || article.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradients */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.10)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "45%", background: "linear-gradient(to bottom, rgba(0,0,0,0.82) 0%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "50%", background: "linear-gradient(to top, rgba(0,0,0,0.90) 0%, transparent 100%)" }} />

      {/* Logo top */}
      <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center pt-4">
        <p style={{ fontFamily: BODONI, fontSize: "clamp(20px, 3.5vw, 46px)", fontWeight: 400, color: "#fff", letterSpacing: "0.05em", lineHeight: 1 }}>
          Conexión con Vos
        </p>
        <div style={{ height: "1px", width: "55%", margin: "5px auto 3px", background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)` }} />
        <p style={{ fontFamily: JOST, fontSize: "clamp(7px, 0.85vw, 10px)", letterSpacing: "0.24em", textTransform: "uppercase", color: GOLD }}>
          Tendencias · Moda · Actualidad
        </p>
      </div>

      {/* Issue badge — center */}
      <div className="absolute top-1/2 left-1/2 z-10" style={{ transform: "translate(-50%, -50%)", textAlign: "center", pointerEvents: "none" }}>
        <p style={{ fontFamily: JOST, fontSize: "clamp(7px, 0.7vw, 9px)", letterSpacing: "0.28em", textTransform: "uppercase", color: GOLD, opacity: 0.9 }}>
          Octubre 2026
        </p>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-6 text-center">
        <p style={{ fontFamily: BODONI, fontStyle: "italic", fontSize: "clamp(11px, 1.3vw, 15px)", color: GOLD, marginBottom: "6px" }}>
          La nota de la semana
        </p>
        <h2 style={{ fontFamily: BODONI, fontSize: "clamp(18px, 3vw, 40px)", fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
          {article.title}
        </h2>
        {article.sub && (
          <p style={{ fontFamily: JOST, fontSize: "clamp(9px, 0.95vw, 12px)", color: "rgba(255,255,255,0.75)", marginTop: "8px", lineHeight: 1.5 }}>
            {article.sub.length > 100 ? article.sub.slice(0, 100) + "…" : article.sub}
          </p>
        )}
        <div style={{ height: "1px", width: "32%", margin: "10px auto 7px", background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)` }} />
        <p style={{ fontFamily: JOST, fontSize: "clamp(7px, 0.75vw, 9px)", letterSpacing: "0.20em", textTransform: "uppercase", color: GOLD }}>
          {article.by || "Rodrigo Presa · Director Editorial"}
        </p>
      </div>
    </Link>
  );
}

/* ─── Secondary cover ─── */
function SecondaryCover({ article }: { article: any }) {
  return (
    <Link
      to={`/${article.slug}`}
      className="group block relative overflow-hidden w-full"
      style={{ aspectRatio: "2/3" }}
    >
      <img
        src={article.himg}
        alt={article.halt || article.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.10)" }} />
      <div className="absolute top-0 left-0 right-0" style={{ height: "42%", background: "linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0" style={{ height: "52%", background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, transparent 100%)" }} />

      {/* Logo top */}
      <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center pt-3">
        <p style={{ fontFamily: BODONI, fontSize: "clamp(13px, 2vw, 24px)", fontWeight: 400, color: "#fff", letterSpacing: "0.05em", lineHeight: 1 }}>
          Conexión con Vos
        </p>
        <div style={{ height: "1px", width: "58%", margin: "3px auto 2px", background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)` }} />
        <p style={{ fontFamily: JOST, fontSize: "clamp(5px, 0.65vw, 7px)", letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD }}>
          Tendencias · Moda · Actualidad
        </p>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-3 pb-4 text-center">
        {article.label && (
          <p style={{ fontFamily: JOST, fontSize: "clamp(6px, 0.65vw, 7px)", letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD, marginBottom: "4px" }}>
            {article.label}
          </p>
        )}
        <h3 style={{ fontFamily: BODONI, fontSize: "clamp(12px, 1.6vw, 20px)", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>
          {article.title.length > 65 ? article.title.slice(0, 65) + "…" : article.title}
        </h3>
        <div style={{ height: "1px", width: "38%", margin: "7px auto 5px", background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)` }} />
        <p style={{ fontFamily: JOST, fontSize: "clamp(5px, 0.6vw, 7px)", letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
          {article.by || "Rodrigo Presa · Director Editorial"}
        </p>
      </div>
    </Link>
  );
}

/* ─── Section ─── */
export function MagazineCovers() {
  if (actualidad.length === 0) return null;

  const featured = actualidad[0];
  const rest = actualidad.slice(1, 4);

  return (
    <section style={{ padding: "32px 0" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
        <div style={{ flex: 1, height: "1px", background: "#e8e6e1" }} />
        <p style={{ fontFamily: JOST, fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#1a1a1a" }}>
          Tapas de la semana
        </p>
        <div style={{ flex: 1, height: "1px", background: "#e8e6e1" }} />
      </div>

      {/* Grid — 4 columns, featured spans 2 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
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
