import { Link, useParams } from "react-router-dom";
import articles from "../data/articles.json";
import { AdSlot } from "../components/AdSlot";
import { AdvertiseCta } from "../components/AdvertiseCta";
import { usePageTitle } from "../components/usePageTitle";

type Article = (typeof articles)[number] & { date?: string };

const SANS = "'Jost', sans-serif";
const LABEL: React.CSSProperties = { fontFamily: SANS, fontSize: "12px", fontWeight: 500, letterSpacing: "1.6px", textTransform: "uppercase", color: "#1a1a1a" };
const BYLINE: React.CSSProperties = { ...LABEL, fontSize: "11px", letterSpacing: "1.8px" };

const SECTION_ROUTE: Record<string, string> = {
  "escapadas-travel": "/viajes",
  "gastronomia-de-nivel": "/gastronomia",
  "bienestar-salud": "/bienestar",
  "moda-tendencias": "/moda",
  "decoracion-arquitectura": "/decoracion",
  publicidad: "/publicidad",
  actualidad: "/actualidad",
};

export function ArticlePage() {
  const { section, slug } = useParams();
  const art: Article | undefined = articles.find((a) => a.section === section && a.slug === slug);
  usePageTitle(art?.title ?? "Nota no encontrada");

  if (!art) {
    return (
      <div className="max-w-screen-md mx-auto px-6 py-24 text-center">
        <h1 style={{ fontFamily: SANS, fontSize: "24px", letterSpacing: "2px", textTransform: "uppercase" }} className="mb-4">Nota no encontrada</h1>
        <Link to="/" style={LABEL} className="underline">Volver al inicio</Link>
      </div>
    );
  }

  const related = [
    ...articles.filter((a) => a.section === art.section && a.slug !== art.slug),
    ...articles.filter((a) => a.section !== art.section && a.section !== "publicidad"),
  ]
    .filter((a) => a.himg)
    .slice(0, 3);

  const url = `https://conexionconvos.com/${art.section}/${art.slug}/`;
  const share = `https://wa.me/?text=${encodeURIComponent(`${art.title} — ${url}`)}`;

  return (
    <article className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-4">
      <div className="max-w-[760px] mx-auto pt-8">
        <nav style={{ ...LABEL, fontSize: "11px", color: "#888" }} className="mb-6 flex flex-wrap gap-2" aria-label="Ruta de navegación">
          <Link to="/" className="hover:text-black">Inicio</Link>
          <span>›</span>
          <Link to={SECTION_ROUTE[art.section] ?? "/"} className="hover:text-black">{art.label}</Link>
        </nav>
        <p style={LABEL} className="mb-3">{art.label}</p>
        <h1 style={{ fontFamily: SANS, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 46px)", lineHeight: 1.12, color: "#000" }} className="mb-4">
          {art.title}
        </h1>
        {art.sub && (
          <p style={{ fontFamily: SANS, fontSize: "19px", lineHeight: 1.5, color: "#444" }} className="mb-5">{art.sub}</p>
        )}
        {(art.by || art.date) && (
          <p style={BYLINE} className="mb-8">
            {art.by && <>Por {art.by}</>}
            {art.by && art.date && " · "}
            {art.date}
          </p>
        )}
      </div>

      {art.himg && (
        <figure className="max-w-[1000px] mx-auto mb-10">
          <img src={art.himg} alt={art.halt} className="w-full h-auto" fetchPriority="high" />
          {art.cap && <figcaption style={{ ...BYLINE, color: "#888", letterSpacing: "1.2px" }} className="mt-2">{art.cap}</figcaption>}
        </figure>
      )}

      <div className="max-w-[760px] mx-auto">
        <div className="prose-cc" dangerouslySetInnerHTML={{ __html: art.body }} />

        <div className="mt-10 pt-5 border-t border-[#e8e6e1] flex items-center gap-4">
          <span style={BYLINE}>Compartir</span>
          <a href={share} target="_blank" rel="noreferrer" style={LABEL} className="underline hover:opacity-60">WhatsApp</a>
        </div>

        <AdSlot />

        <aside aria-label="Publicidad" className="my-8 border border-[#e8e6e1] p-6">
          <p style={{ ...BYLINE, color: "#888" }} className="mb-2">Publicidad · Gridloop</p>
          <h3 style={{ fontFamily: SANS, fontSize: "20px", fontWeight: 500 }} className="mb-2">¿Tu negocio ya tiene su web?</h3>
          <p style={{ fontFamily: SANS, fontSize: "15px", color: "#444" }} className="mb-4">
            Diseñamos tu página a medida, lista para celular y para que te escriban por WhatsApp. Entrega en 3 a 5 días.
          </p>
          <a
            href="https://wa.me/5491123748833?text=Hola%20Rodrigo%2C%20vi%20tu%20publicidad%20en%20Conexi%C3%B3n%20con%20Vos%20y%20quiero%20consultarte%20por%20una%20p%C3%A1gina%20web"
            target="_blank"
            rel="noreferrer"
            style={{ ...LABEL, color: "#fff", letterSpacing: "2px" }}
            className="inline-block bg-black px-6 py-3 hover:bg-[#333] transition-colors"
          >
            Escribinos por WhatsApp
          </a>
        </aside>

        {art.by?.includes("Rodrigo") && (
          <div className="my-8 border-l-4 border-black bg-[#f7f6f2] p-5">
            <h4 style={{ fontFamily: SANS, fontSize: "17px", fontWeight: 500 }} className="mb-1">Rodrigo Presa</h4>
            <p style={{ fontFamily: SANS, fontSize: "14px", lineHeight: 1.5, color: "#555" }} className="mb-2">
              Director Editorial de Conexión con Vos. Especialista en turismo rioplatense, gastronomía y estilo de vida porteño.
            </p>
            <Link to="/quienes-somos" style={LABEL} className="underline hover:opacity-60">Conocé más sobre nuestro equipo editorial</Link>
          </div>
        )}
      </div>

      <section className="mt-12">
        <div className="border-y border-[#e8e6e1] py-3 text-center">
          <h2 style={{ fontFamily: SANS, fontSize: "20px", fontWeight: 400, letterSpacing: "2px", textTransform: "uppercase" }}>
            Más en Conexión con Vos
          </h2>
        </div>
        <div className="grid gap-x-5 gap-y-10 pt-5 grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} to={`/${r.section}/${r.slug}/`} className="group block">
              <div className="overflow-hidden mb-3">
                <img src={r.himg} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              </div>
              <p style={LABEL} className="mb-2">{r.label}</p>
              <h3 style={{ fontFamily: SANS, fontWeight: 400, fontSize: "18px", lineHeight: 1.25, color: "#000" }} className="group-hover:opacity-60 transition-opacity">
                {r.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <AdvertiseCta />
    </article>
  );
}
