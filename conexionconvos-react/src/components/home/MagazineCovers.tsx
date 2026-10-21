import { Link } from "react-router-dom";
import articlesData from "../../data/articles.json";

// Only actualidad articles
const actualidad = (articlesData as any[]).filter((a) => a.section === "actualidad");

const GOLD = "#c9a84c";
const BODONI = "'Bodoni Moda', Georgia, serif";
const JOST = "'Jost', sans-serif";

function MagazineCover({ article }: { article: any }) {
  const teasers = actualidad.filter((a) => a.slug !== article.slug).slice(0, 6);
  const left = teasers.slice(0, 3);
  const right = teasers.slice(3, 6);

  return (
    <Link
      to={`/${article.slug}`}
      className="group block relative overflow-hidden w-full"
      style={{ aspectRatio: "9/11.25", maxHeight: "580px" }}
    >
      {/* Background photo */}
      <img
        src={article.himg}
        alt={article.halt || article.title}
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.20)" }} />

      {/* Gradient top */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{ height: "38%", background: "linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)" }}
      />

      {/* Gradient bottom */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: "52%", background: "linear-gradient(to top, rgba(0,0,0,0.95) 20%, transparent 100%)" }}
      />

      {/* Side panels */}
      <div
        className="absolute top-[15%] bottom-[33%] left-0"
        style={{ width: "30%", background: "rgba(0,0,0,0.62)" }}
      />
      <div
        className="absolute top-[15%] bottom-[33%] right-0"
        style={{ width: "30%", background: "rgba(0,0,0,0.62)" }}
      />

      {/* ── LOGO ── */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center pt-2 z-10">
        <p
          style={{
            fontFamily: BODONI,
            fontSize: "clamp(18px, 4vw, 42px)",
            fontWeight: 400,
            color: "#fff",
            letterSpacing: "0.06em",
            lineHeight: 1,
          }}
        >
          Conexión con Vos
        </p>
        {/* Gold rule */}
        <div
          style={{
            height: "1px",
            width: "65%",
            margin: "4px auto 0",
            background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)`,
          }}
        />
        <p
          style={{
            fontFamily: JOST,
            fontSize: "clamp(6px, 1vw, 9px)",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: GOLD,
            marginTop: "3px",
          }}
        >
          Tendencias · Moda · Actualidad
        </p>
      </div>

      {/* ── LEFT TEASERS ── */}
      <div className="absolute top-[15%] bottom-[33%] left-0 flex flex-col justify-around z-10" style={{ width: "30%", padding: "6px 8px" }}>
        {left.map((t) => (
          <div key={t.slug} className="flex flex-col gap-1">
            <img
              src={t.himg}
              alt={t.title}
              className="w-full object-cover object-top"
              style={{ height: "clamp(30px, 5vw, 55px)" }}
            />
            <p style={{ fontFamily: JOST, fontSize: "clamp(5px, 0.7vw, 7px)", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, fontWeight: 700, lineHeight: 1 }}>
              {t.label}
            </p>
            <p style={{ fontFamily: BODONI, fontSize: "clamp(7px, 1vw, 11px)", color: "#ffffff", lineHeight: 1.25 }}>
              {t.title.length > 55 ? t.title.slice(0, 55) + "…" : t.title}
            </p>
          </div>
        ))}
      </div>

      {/* ── RIGHT TEASERS ── */}
      <div className="absolute top-[15%] bottom-[33%] right-0 flex flex-col justify-around z-10" style={{ width: "30%", padding: "6px 8px" }}>
        {right.map((t) => (
          <div key={t.slug} className="flex flex-col gap-1">
            <img
              src={t.himg}
              alt={t.title}
              className="w-full object-cover object-top"
              style={{ height: "clamp(30px, 5vw, 55px)" }}
            />
            <p style={{ fontFamily: JOST, fontSize: "clamp(5px, 0.7vw, 7px)", letterSpacing: "0.25em", textTransform: "uppercase", color: GOLD, fontWeight: 700, lineHeight: 1 }}>
              {t.label}
            </p>
            <p style={{ fontFamily: BODONI, fontSize: "clamp(7px, 1vw, 11px)", color: "#ffffff", lineHeight: 1.25 }}>
              {t.title.length > 55 ? t.title.slice(0, 55) + "…" : t.title}
            </p>
          </div>
        ))}
      </div>

      {/* ── MAIN CONTENT (bottom) ── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-[5%] pb-[4%]">
        <p
          style={{
            fontFamily: BODONI,
            fontStyle: "italic",
            fontSize: "clamp(10px, 1.6vw, 17px)",
            color: GOLD,
            marginBottom: "4px",
          }}
        >
          La nota de la semana
        </p>
        <h2
          style={{
            fontFamily: BODONI,
            fontSize: "clamp(16px, 3.2vw, 38px)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            textAlign: "center",
          }}
        >
          {article.title}
        </h2>
        {article.sub && (
          <p
            style={{
              fontFamily: JOST,
              fontSize: "clamp(8px, 1vw, 11px)",
              color: "rgba(255,255,255,0.80)",
              marginTop: "6px",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            {article.sub.length > 120 ? article.sub.slice(0, 120) + "…" : article.sub}
          </p>
        )}
        <div
          style={{
            height: "1px",
            margin: "8px auto 0",
            width: "40%",
            background: `linear-gradient(to right, transparent, ${GOLD} 20%, ${GOLD} 80%, transparent)`,
          }}
        />
        <p
          style={{
            fontFamily: JOST,
            fontSize: "clamp(6px, 0.8vw, 9px)",
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: GOLD,
            marginTop: "5px",
            textAlign: "center",
          }}
        >
          {article.by || "Por Staff editorial"}
        </p>
      </div>

      {/* Hover shine */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "rgba(255,255,255,0.04)" }} />
    </Link>
  );
}

export function MagazineCovers() {
  if (actualidad.length === 0) return null;

  const featured = actualidad[0];
  const rest = actualidad.slice(1, 5);

  return (
    <section className="py-8">
      {/* Section header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="h-px flex-1 bg-[#e8e6e1]" />
        <p
          style={{
            fontFamily: JOST,
            fontSize: "11px",
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#1a1a1a",
          }}
        >
          Tapas de la semana
        </p>
        <div className="h-px flex-1 bg-[#e8e6e1]" />
      </div>

      {/* Main cover + side grid */}
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr]">
        {/* Featured cover — spans 2 columns on lg */}
        <div className="sm:col-span-2 lg:col-span-2">
          <MagazineCover article={featured} />
        </div>

        {/* Secondary covers */}
        {rest.map((article) => (
          <div key={article.slug}>
            <MagazineCover article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}
