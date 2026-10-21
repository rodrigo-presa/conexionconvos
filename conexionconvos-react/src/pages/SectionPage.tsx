import { AdSlot } from "../components/AdSlot";
import { AdvertiseCta } from "../components/AdvertiseCta";

const SANS = "'Jost', sans-serif";

const LABEL: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "1.6px",
  textTransform: "uppercase" as const,
  color: "#1a1a1a",
};



const TITLE: React.CSSProperties = {
  fontFamily: SANS,
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: 1.25,
  color: "#000",
};

interface SectionPageProps {
  category: string;
}

// Category metadata
const SECTION_META: Record<string, { label: string; description: string; realUrl: string }> = {
  Actualidad: {
    label: "Actualidad",
    description: "Música, moda y cultura pop: lo que pasa en el mundo del espectáculo",
    realUrl: "https://conexionconvos.com/actualidad/",
  },
  Viajes: {
    label: "Viajes",
    description: "Destinos, escapadas y guías para el viajero moderno",
    realUrl: "https://conexionconvos.com/escapadas-travel/",
  },
  Gastronomía: {
    label: "Gastronomía",
    description: "Restaurantes, recetas y tendencias culinarias de Buenos Aires y el mundo",
    realUrl: "https://conexionconvos.com/gastronomia-de-nivel/",
  },
  Bienestar: {
    label: "Bienestar",
    description: "Salud, mindfulness y hábitos para una vida con más energía",
    realUrl: "https://conexionconvos.com/bienestar-salud/",
  },
  Moda: {
    label: "Estilo",
    description: "Tendencias, marcas y el estilo que trasciende temporadas",
    realUrl: "https://conexionconvos.com/moda-tendencias/",
  },
  Decoración: {
    label: "Decoración",
    description: "Ideas, inspiración y guías para transformar tu hogar",
    realUrl: "https://conexionconvos.com/decoracion-arquitectura/",
  },
};

// Notas reales publicadas en el sitio
const SECTION_ARTICLES: Record<string, Array<{ title: string; cat: string; img: string; href: string }>> = {
  "Actualidad": [
    {"title": "Sabrina Carpenter: cómo una cantante se convirtió en el ícono de moda más buscado del momento", "cat": "Música · Moda", "img": "/img/notas/sabrina-carpenter-dunkin-o.png", "href": "/actualidad/sabrina-carpenter-musica-moda/"},
    {"title": "Tini Stoessel: se suspendió su show en Miami minutos antes de salir al escenario", "cat": "Música", "img": "/img/notas/tini-portada.webp", "href": "/actualidad/tini-show-cancelado-miami/"},
    {"title": "Paris Fashion Week: los looks que marcaron la temporada primavera-verano 2027", "cat": "Moda", "img": "/img/notas/paris-fw-2027-o.png", "href": "/actualidad/paris-fashion-week-primavera-verano-2027/"},
    {"title": "Milán dictó sentencia: las siluetas, colores y tejidos que mandan en 2027", "cat": "Moda", "img": "/img/notas/milan-fw-2027-o.png", "href": "/actualidad/milan-siluetas-tendencias-moda-2027/"},
    {"title": "Latin Grammy 2026: Rosalía, Daddy Yankee, Anitta y Juanes, confirmados para el 12 de noviembre en Miami", "cat": "Música", "img": "/img/notas/latin-grammy-2026-rosalia.webp", "href": "/actualidad/latin-grammy-2026-artistas-confirmados/"},
    {"title": "Zendaya: cómo una actriz de 28 años se convirtió en la figura más influyente de la moda global", "cat": "Moda", "img": "/img/notas/zendaya-moda-o.png", "href": "/actualidad/zendaya-icono-moda-internacional/"},
  ],
  "Viajes": [
    {"title": "Bariloche en primavera: qué hacer, dónde comer y cómo moverse", "cat": "Escapadas", "img": "/img/notas/bariloche-en-primavera-o.webp", "href": "/escapadas-travel/bariloche-en-primavera/"},
    {"title": "Carlos Paz nos espera", "cat": "Escapadas", "img": "/img/notas/0408aea6-ba0c-4445-918c-9c78d5265b0a-o.webp", "href": "/escapadas-travel/carlos-paz-nos-espera/"},
    {"title": "Miami en 3 días: la guía definitiva para aprovecharla al máximo (sin gastar una fortuna)", "cat": "Escapadas", "img": "/img/notas/miami-3-dias-o.webp", "href": "/escapadas-travel/miami-3-dias/"},
    {"title": "Montevideo, vientos del sur.", "cat": "Escapadas", "img": "/img/notas/GeminiGeneratedImage25qpdp25qpdp25qp-o.webp", "href": "/escapadas-travel/montevideo-vientos-del-sur/"},
    {"title": "El norte argentino: Salta, Jujuy y Tucumán en un viaje de 7 días", "cat": "Escapadas", "img": "/img/notas/norte-argentino-salta-jujuy-o.webp", "href": "/escapadas-travel/norte-argentino-salta-jujuy/"},
    {"title": "Los destinos favoritos de Kendall Jenner y las it-girls: playas secretas e islas privadas", "cat": "Viajes", "img": "/img/notas/kendall-viajes-o.png", "href": "/escapadas-travel/destinos-favoritos-celebridades-kendall-jenner/"},
  ],
  "Gastronomía": [
    {"title": "El Antojo", "cat": "Gastronomía", "img": "/img/cc-3c0deccf.webp", "href": "/gastronomia-de-nivel/el-antojo/"},
    {"title": "El Ferroviario", "cat": "Gastronomía", "img": "/img/notas/elferroviario-o.webp", "href": "/gastronomia-de-nivel/el-ferroviario/"},
    {"title": "El Preferido", "cat": "Gastronomía", "img": "/img/notas/elpreferido-o.webp", "href": "/gastronomia-de-nivel/el-preferido/"},
    {"title": "Los mejores restaurantes de Buenos Aires para una cena especial", "cat": "Gastronomía", "img": "/img/notas/restaurantes-buenos-aires-cena-especial-o.webp", "href": "/gastronomia-de-nivel/restaurantes-buenos-aires-cena-especial/"},
    {"title": "Tendencias gastronómicas 2027: qué se viene en la cocina argentina", "cat": "Gastronomía", "img": "/img/notas/tendencias-gastronomicas-2027-o.webp", "href": "/gastronomia-de-nivel/tendencias-gastronomicas-2027/"},
    {"title": "Francis Mallmann: el chef argentino que conquistó el mundo cocinando con fuego", "cat": "Gastronomía", "img": "/img/notas/mallmann-chef-o.png", "href": "/gastronomia-de-nivel/francis-mallmann-el-chef-del-fuego/"},
  ],
  "Bienestar": [
    {"title": "Cuando el maltrato ocurre puertas adentro: el caso de los hijos de Romina Yan reabre el debate sobre cómo proteger a la infancia", "cat": "Bienestar", "img": "/img/maltrato-infancia-esparza.jpg", "href": "/bienestar-salud/cuando-el-maltrato-ocurre-puertas-adentro/"},
    {"title": "El secreto mejor guardado de la belleza", "cat": "Bienestar", "img": "/img/notas/cc-belleza-o.webp", "href": "/bienestar-salud/el-secreto-mejor-guardado-de-la-belleza/"},
    {"title": "La importancia de la elección de un nombre para mi bebé", "cat": "Bienestar", "img": "/img/notas/96db74db-fc86-42d9-9d91-0af34b665486-o.webp", "href": "/bienestar-salud/eleccion-del-nombre-del-bebe/"},
    {"title": "La era digital en las infancias y adolescencias", "cat": "Bienestar", "img": "/img/era-digital.jpg", "href": "/bienestar-salud/era-digital-infancias-y-adolescencias/"},
    {"title": "5 señales de que tu cuerpo necesita un reset urgente (y cómo hacerlo en 7 días)", "cat": "Bienestar", "img": "/img/notas/reset-urgente-o.webp", "href": "/bienestar-salud/reset-urgente-7-dias/"},
    {"title": "Tu cuerpo está rogando un descanso.", "cat": "Bienestar", "img": "/img/notas/cc-descanso-o.webp", "href": "/bienestar-salud/tu-cuerpo-esta-rogando-un-descanso/"},
    {"title": "El secreto de Beyoncé y JLo: biohacking, ayuno y las rutinas de élite que desafían el tiempo", "cat": "Bienestar", "img": "/img/notas/beyonce-bienestar-o.png", "href": "/bienestar-salud/beyonce-jlo-rutinas-bienestar-elite/"},
  ],
  "Moda": [
    {"title": "Office chic en Argentina: cómo vestir bien en el trabajo sin gastar una fortuna", "cat": "Estilo", "img": "/img/notas/looks-office-chic-argentina-o.webp", "href": "/moda-tendencias/looks-office-chic-argentina/"},
    {"title": "Marcelo y Mónica unen sus talentos para ofrecer una experiencia de peluquería renovada", "cat": "Estilo", "img": "/img/notas/monicaymarcelo-o.webp", "href": "/moda-tendencias/marcelo-y-monica-peluqueria-renovada/"},
    {"title": "Las tendencias de moda que van a dominar la primavera-verano 2026/2027", "cat": "Estilo", "img": "/img/notas/tendencias-primavera-verano-2027-o.webp", "href": "/moda-tendencias/tendencias-primavera-verano-2027/"},
    {"title": "Shakira y la reinvención total: los looks que convirtieron a la artista en ícono de moda global", "cat": "Moda", "img": "/img/notas/shakira-moda-o.png", "href": "/moda-tendencias/shakira-reinvencion-estilo-icono-moda/"},
  ],
  "Decoración": [
    {"title": "Andamios del Oeste: Calidad, Confianza y Soluciones para la Construcción", "cat": "Decoración", "img": "/img/notas/andamiosdeloestenuevo-o.webp", "href": "/decoracion-arquitectura/andamios-del-oeste/"},
    {"title": "Cómo decorar departamentos pequeños y que parezcan más grandes", "cat": "Decoración", "img": "/img/notas/departamentos-pequenos-ideas-o.webp", "href": "/decoracion-arquitectura/departamentos-pequenos-ideas/"},
    {"title": "Estado del sector inmobiliario", "cat": "Decoración", "img": "/img/notas/FSXD7FJWDJFPHN4PYWU4BEWTUA-o.webp", "href": "/decoracion-arquitectura/estado-del-sector-inmobiliario/"},
    {"title": "Los 5 errores de decoración más comunes y cómo evitarlos", "cat": "Decoración", "img": "/img/notas/PARAVOS20-o.webp", "href": "/decoracion-arquitectura/los-5-errores-de-decoracion/"},
    {"title": "Las tendencias de decoración que van a redefinir los hogares en 2027", "cat": "Decoración", "img": "/img/notas/tendencias-decoracion-2027-o.webp", "href": "/decoracion-arquitectura/tendencias-decoracion-2027/"},
    {"title": "La casa de Kim Kardashian: el minimalismo extremo que redefinió cómo viven las estrellas", "cat": "Decoración", "img": "/img/notas/kim-kardashian-decoracion-o.png", "href": "/decoracion-arquitectura/kim-kardashian-interiores-minimalismo/"},
  ],
};
export function SectionPage({ category }: SectionPageProps) {
  const meta = SECTION_META[category] || { label: category, description: "", realUrl: "#" };
  const articles = SECTION_ARTICLES[category] || [];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
      <div className="border-y border-[#e8e6e1] py-4 text-center mb-2">
        <h1 style={{ fontFamily: SANS, fontSize: "24px", fontWeight: 400, letterSpacing: "2px", textTransform: "uppercase" }}>
          {meta.label}
        </h1>
      </div>
      {meta.description && (
        <p className="text-center mb-8" style={{ fontFamily: SANS, fontSize: "14px", color: "#555" }}>
          {meta.description}
        </p>
      )}

      {/* ── ACTUALIDAD: layout editorial 3 columnas ── */}
      {category === "Actualidad" && articles.length >= 5 && (
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr_1fr] gap-x-6 gap-y-8 items-start">
            <div className="flex flex-col gap-6">
              {[articles[0], articles[1]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
            <a href={articles[4].href} className="group block">
              <div className="overflow-hidden mb-4 relative">
                <img src={articles[4].img} alt={articles[4].title} loading="lazy" className="w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" style={{aspectRatio:"3/4", maxHeight:"540px"}} />
                <span className="absolute top-3 left-3 bg-black text-white px-2 py-1" style={{fontFamily:"'Jost',sans-serif", fontSize:"10px", letterSpacing:"2px", textTransform:"uppercase"}}>Nota destacada</span>
              </div>
              <p style={LABEL} className="mb-2">{articles[4].cat}</p>
              <h2 style={{...TITLE, fontSize:"clamp(20px,2vw,26px)", lineHeight:1.2}} className="group-hover:opacity-60 transition-opacity">{articles[4].title}</h2>
            </a>
            <div className="flex flex-col gap-6">
              {[articles[2], articles[3]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── GASTRONOMÍA: layout editorial 3 columnas, Mallmann destacado ── */}
      {category === "Gastronomía" && articles.length >= 6 && (
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr_1fr] gap-x-6 gap-y-8 items-start">
            <div className="flex flex-col gap-6">
              {[articles[0], articles[1]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
            <a href={articles[5].href} className="group block">
              <div className="overflow-hidden mb-4 relative">
                <img src={articles[5].img} alt={articles[5].title} loading="lazy" className="w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" style={{aspectRatio:"3/4", maxHeight:"540px"}} />
                <span className="absolute top-3 left-3 bg-black text-white px-2 py-1" style={{fontFamily:"'Jost',sans-serif", fontSize:"10px", letterSpacing:"2px", textTransform:"uppercase"}}>Nota destacada</span>
              </div>
              <p style={LABEL} className="mb-2">{articles[5].cat}</p>
              <h2 style={{...TITLE, fontSize:"clamp(20px,2vw,26px)", lineHeight:1.2}} className="group-hover:opacity-60 transition-opacity">{articles[5].title}</h2>
            </a>
            <div className="flex flex-col gap-6">
              {[articles[2], articles[3], articles[4]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── VIAJES: layout editorial 3 columnas, Kendall destacada ── */}
      {category === "Viajes" && articles.length >= 6 && (
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr_1fr] gap-x-6 gap-y-8 items-start">
            <div className="flex flex-col gap-6">
              {[articles[0], articles[1]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
            <a href={articles[5].href} className="group block">
              <div className="overflow-hidden mb-4 relative">
                <img src={articles[5].img} alt={articles[5].title} loading="lazy" className="w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" style={{aspectRatio:"3/4", maxHeight:"540px"}} />
                <span className="absolute top-3 left-3 bg-black text-white px-2 py-1" style={{fontFamily:"'Jost',sans-serif", fontSize:"10px", letterSpacing:"2px", textTransform:"uppercase"}}>Nota destacada</span>
              </div>
              <p style={LABEL} className="mb-2">{articles[5].cat}</p>
              <h2 style={{...TITLE, fontSize:"clamp(20px,2vw,26px)", lineHeight:1.2}} className="group-hover:opacity-60 transition-opacity">{articles[5].title}</h2>
            </a>
            <div className="flex flex-col gap-6">
              {[articles[2], articles[3], articles[4]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}


      {/* ── MODA: layout editorial con Shakira destacada ── */}
      {category === "Moda" && articles.length >= 4 && (
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr_1fr] gap-x-6 gap-y-8 items-start">
            <div className="flex flex-col gap-6">
              {[articles[0], articles[1]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
            <a href={articles[3].href} className="group block">
              <div className="overflow-hidden mb-4 relative">
                <img src={articles[3].img} alt={articles[3].title} loading="lazy" className="w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" style={{aspectRatio:"3/4", maxHeight:"540px"}} />
                <span className="absolute top-3 left-3 bg-black text-white px-2 py-1" style={{fontFamily:"'Jost',sans-serif", fontSize:"10px", letterSpacing:"2px", textTransform:"uppercase"}}>Nota destacada</span>
              </div>
              <p style={LABEL} className="mb-2">{articles[3].cat}</p>
              <h2 style={{...TITLE, fontSize:"clamp(20px,2vw,26px)", lineHeight:1.2}} className="group-hover:opacity-60 transition-opacity">{articles[3].title}</h2>
            </a>
            <div className="flex flex-col gap-6">
              {[articles[2]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* ── RESTO DE SECCIONES: grilla 4 columnas ── */}
      {category !== "Actualidad" && category !== "Gastronomía" && category !== "Viajes" && category !== "Bienestar" && category !== "Decoración" && category !== "Moda" && (
        <div className="grid gap-x-5 gap-y-10 pt-4 grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((art) => (
            <a key={art.title} href={art.href} className="group block">
              <div className="overflow-hidden mb-3">
                <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top" />
              </div>
              <p style={LABEL} className="mb-2">{art.cat}</p>
              <h3 style={TITLE} className="mb-2 group-hover:opacity-60 transition-opacity">{art.title}</h3>
            </a>
          ))}
        </div>
      )}

      {/* ── BIENESTAR: layout editorial con Beyoncé destacada ── */}
      {category === "Bienestar" && articles.length >= 7 && (
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr_1fr] gap-x-6 gap-y-8 items-start">
            <div className="flex flex-col gap-6">
              {[articles[0], articles[1]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
            <a href={articles[6].href} className="group block">
              <div className="overflow-hidden mb-4 relative">
                <img src={articles[6].img} alt={articles[6].title} loading="lazy" className="w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" style={{aspectRatio:"3/4", maxHeight:"540px"}} />
                <span className="absolute top-3 left-3 bg-black text-white px-2 py-1" style={{fontFamily:"'Jost',sans-serif", fontSize:"10px", letterSpacing:"2px", textTransform:"uppercase"}}>Nota destacada</span>
              </div>
              <p style={LABEL} className="mb-2">{articles[6].cat}</p>
              <h2 style={{...TITLE, fontSize:"clamp(20px,2vw,26px)", lineHeight:1.2}} className="group-hover:opacity-60 transition-opacity">{articles[6].title}</h2>
            </a>
            <div className="flex flex-col gap-6">
              {[articles[2], articles[3], articles[4]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── PUBLICIDAD BIENESTAR ── */}
      {category === "Bienestar" && (
        <section className="mt-12 border-t border-[#e8e6e1] pt-10">
          <p style={{ ...LABEL, color: "#888" }} className="mb-4 text-center">Publicidad</p>
          <div className="max-w-2xl mx-auto">
            <img src="/img/colegio-farmaceuticos.webp" alt="Colegio de Farmacéuticos" loading="lazy" className="w-full h-auto" />
          </div>
        </section>
      )}

      {/* ── DECORACIÓN: editorial 3-col, articles[5] featured (Kim K) ── */}
      {category === "Decoración" && articles.length >= 6 && (
        <div className="pt-4">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.8fr_1fr] gap-x-6 gap-y-8 items-start">
            <div className="flex flex-col gap-6">
              {[articles[0], articles[1]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
            <a href={articles[5].href} className="group block">
              <div className="overflow-hidden mb-4 relative">
                <img src={articles[5].img} alt={articles[5].title} loading="lazy" className="w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" style={{aspectRatio:"3/4", maxHeight:"540px"}} />
                <span className="absolute top-3 left-3 bg-black text-white px-2 py-1" style={{fontFamily:"'Jost',sans-serif", fontSize:"10px", letterSpacing:"2px", textTransform:"uppercase"}}>Nota destacada</span>
              </div>
              <p style={LABEL} className="mb-2">{articles[5].cat}</p>
              <h2 style={{...TITLE, fontSize:"clamp(20px,2vw,26px)", lineHeight:1.2}} className="group-hover:opacity-60 transition-opacity">{articles[5].title}</h2>
            </a>
            <div className="flex flex-col gap-6">
              {[articles[2], articles[3], articles[4]].map((art) => (
                <a key={art.href} href={art.href} className="group block">
                  <div className="overflow-hidden mb-3">
                    <img src={art.img} alt={art.title} loading="lazy" className="aspect-[4/3] w-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300" />
                  </div>
                  <p style={LABEL} className="mb-2">{art.cat}</p>
                  <h3 style={{...TITLE, fontSize:"16px"}} className="group-hover:opacity-60 transition-opacity">{art.title}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── PUBLICIDAD DECORACIÓN ── */}
      {category === "Decoración" && (
        <section className="mt-12 border-t border-[#e8e6e1] pt-10">
          <p style={{ ...LABEL, color: "#888" }} className="mb-4 text-center">Publicidad</p>
          <div className="max-w-2xl mx-auto">
            <img src="/img/mudanzas-la-gloria.webp" alt="Mudanzas La Gloria" loading="lazy" className="w-full h-auto" />
          </div>
        </section>
      )}

      <AdSlot />

      <AdvertiseCta />
    </div>
  );
}