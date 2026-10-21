import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AdSlot } from "../components/AdSlot";


const SANS = "'Jost', sans-serif";

const LABEL: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "1.6px",
  textTransform: "uppercase" as const,
  color: "#1a1a1a",
};

const BYLINE: React.CSSProperties = {
  fontFamily: SANS,
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "1.8px",
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

// Real images from conexionconvos.com
const IMG = {
  bariloche: "/img/notas/bariloche-en-primavera-o.webp",
  miami: "/img/notas/miami-3-dias-o.webp",
  montevideo: "/img/notas/montevideo-rambla-vientos-sur-o.webp",
  salta: "/img/notas/norte-argentino-salta-jujuy-o.webp",
  carlosPaz: "/img/notas/0408aea6-ba0c-4445-918c-9c78d5265b0a-o.webp",
  preferido: "/img/notas/elpreferido-o.webp",
  ferroviario: "/img/notas/elferroviario-o.webp",
  tendencias: "/img/notas/tendencias-gastronomicas-2027-o.webp",
  kendall: "/img/notas/kendall-viajes-o.png",
  mallmann: "/img/notas/mallmann-chef-o.png",
  beyonce: "/img/notas/beyonce-bienestar-o.png",
  shakira: "/img/notas/shakira-moda-o.png",
  kim: "/img/notas/kim-kardashian-decoracion-o.png",
};


type Card = { img: string; cat: string; title: string; by: string; href: string };

function SectionTitle({ children, to }: { children: string; to: string }) {
  return (
    <Link
      to={to}
      className="block border-y border-[#e8e6e1] py-3 text-center hover:opacity-60 transition-opacity"
      style={{ fontFamily: SANS, fontSize: "20px", fontWeight: 400, letterSpacing: "2px", textTransform: "uppercase" }}
    >
      {children}
    </Link>
  );
}

function CardGrid({ cards, cols }: { cards: Card[]; cols: string }) {
  return (
    <div className={`grid gap-x-5 gap-y-10 pt-5 grid-cols-[minmax(0,1fr)] sm:grid-cols-2 ${cols}`}>
      {cards.map((c) => (
        <a key={c.title} href={c.href} className="group block">
          <div className="overflow-hidden mb-3">
            <img src={c.img} alt={c.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <p style={LABEL} className="mb-2">{c.cat}</p>
          <h3 style={TITLE} className="mb-2 group-hover:opacity-60 transition-opacity">{c.title}</h3>
          <p style={BYLINE}>{c.by}</p>
        </a>
      ))}
    </div>
  );
}

const TRAVEL: Card[] = [
  { img: IMG.kendall, cat: "Destinos", title: "Los destinos que eligen las estrellas: playas secretas, islas privadas y escapadas de lujo", by: "Por Staff editorial", href: "/escapadas-travel/destinos-favoritos-celebridades-kendall-jenner/" },
  { img: IMG.miami, cat: "Estados Unidos", title: "Miami en 3 días: lo mejor de la ciudad sin perderse nada", by: "Por Staff editorial", href: "/escapadas-travel/miami-3-dias/" },
  { img: IMG.salta, cat: "Argentina", title: "Norte argentino: Salta y Jujuy", by: "Por Staff editorial", href: "/escapadas-travel/norte-argentino-salta-jujuy/" },
  { img: IMG.montevideo, cat: "Uruguay", title: "Montevideo, vientos del sur", by: "Por Staff editorial", href: "/escapadas-travel/montevideo-vientos-del-sur/" },
];

const GASTRO: Card[] = [
  { img: IMG.mallmann, cat: "Chefs", title: "Francis Mallmann: el chef argentino que conquistó el mundo con su cocina a fuego", by: "Por Staff editorial", href: "/gastronomia-de-nivel/francis-mallmann-el-chef-del-fuego/" },
  { img: IMG.preferido, cat: "Bodegones", title: "El Preferido: clásicos revisitados en una esquina porteña", by: "Por Staff editorial", href: "/gastronomia-de-nivel/el-preferido/" },
  { img: IMG.ferroviario, cat: "Bodegones", title: "El Ferroviario: abundante, rústico y de barrio", by: "Por Staff editorial", href: "/gastronomia-de-nivel/el-ferroviario/" },
  { img: IMG.tendencias, cat: "Tendencias", title: "Tendencias gastronómicas 2027", by: "Por Staff editorial", href: "/gastronomia-de-nivel/tendencias-gastronomicas-2027/" },
];

const SLIDES = [
  { cat: "Actualidad", title: "Latin Grammy 2026: Rosalía, Daddy Yankee, Anitta y Juanes, confirmados para el 12 de noviembre", img: "/img/notas/latin-grammy-2026-daddy-yankee.webp", href: "/actualidad/latin-grammy-2026-artistas-confirmados/" },
  { cat: "Moda", title: "Shakira y la reinvención total: los looks que convirtieron a la artista en ícono de moda global", img: "/img/notas/shakira-moda-o.png", href: "/moda-tendencias/shakira-reinvencion-estilo-icono-moda/" },
  { cat: "Decoración", title: "La casa de Kim Kardashian: el minimalismo extremo que redefinió el lujo moderno", img: "/img/notas/kim-kardashian-decoracion-o.png", href: "/decoracion-arquitectura/kim-kardashian-interiores-minimalismo/" },
  { cat: "Escapadas", title: "Los destinos que eligen las estrellas: playas secretas, islas privadas y escapadas de lujo", img: "/img/notas/kendall-viajes-o.png", href: "/escapadas-travel/destinos-favoritos-celebridades-kendall-jenner/" },
  { cat: "Gastronomía", title: "Francis Mallmann: el chef argentino que conquistó el mundo con su cocina a fuego", img: "/img/notas/mallmann-chef-o.png", href: "/gastronomia-de-nivel/francis-mallmann-el-chef-del-fuego/" },
  { cat: "Bienestar", title: "El secreto de Beyoncé, Jennifer Lopez y las grandes artistas: sus rutinas de bienestar de élite", img: "/img/notas/beyonce-bienestar-o.png", href: "/bienestar-salud/beyonce-jlo-rutinas-bienestar-elite/" },
  { cat: "Actualidad", title: "Tini Stoessel: se suspendió su show en Miami minutos antes de salir al escenario", img: "/img/notas/tini-portada.webp", href: "/actualidad/tini-show-cancelado-miami/" },
  { cat: "Estilo", title: "Las tendencias de moda que van a dominar la primavera-verano 2026/2027", img: "/img/notas/moda-portada.webp", href: "/moda-tendencias/tendencias-primavera-verano-2027/" },
];

const MODA: Card[] = [
  { img: IMG.shakira, cat: "Estilo", title: "Shakira y la reinvención total: los looks que convirtieron a la artista en ícono de moda global", by: "Por Staff editorial", href: "/moda-tendencias/shakira-reinvencion-estilo-icono-moda/" },
  { img: "/img/notas/milan-fw-2027-o.png", cat: "Pasarelas", title: "Milán Fashion Week 2027: los looks que definieron la temporada", by: "Por Staff editorial", href: "/moda-tendencias/milan-fashion-week-2027/" },
  { img: "/img/notas/paris-fw-2027-o.png", cat: "Pasarelas", title: "París Fashion Week 2027: elegancia y vanguardia en la capital de la moda", by: "Por Staff editorial", href: "/moda-tendencias/paris-fashion-week-2027/" },
  { img: "/img/notas/zendaya-moda-o.png", cat: "Íconos", title: "Zendaya: la nueva referente de moda que domina cada red carpet", by: "Por Staff editorial", href: "/moda-tendencias/zendaya-icono-moda-red-carpet/" },
];

const BIENESTAR: Card[] = [
  { img: IMG.beyonce, cat: "Rutinas", title: "El secreto de Beyoncé, Jennifer Lopez y las grandes artistas: sus rutinas de bienestar de élite", by: "Por Staff editorial", href: "/bienestar-salud/beyonce-jlo-rutinas-bienestar-elite/" },
  { img: "/img/notas/reset-urgente-o.webp", cat: "Salud", title: "5 señales de que tu cuerpo necesita un reset urgente", by: "Por Staff editorial", href: "/bienestar-salud/reset-urgente-7-dias/" },
];

const DECO: Card[] = [
  { img: IMG.kim, cat: "Interiores", title: "La casa de Kim Kardashian: el minimalismo extremo que redefinió el lujo moderno", by: "Por Staff editorial", href: "/decoracion-arquitectura/kim-kardashian-interiores-minimalismo/" },
  { img: "/img/notas/tendencias-decoracion-2027-o.webp", cat: "Tendencias", title: "Las tendencias de decoración que van a redefinir los hogares en 2027", by: "Por Staff editorial", href: "/decoracion-arquitectura/tendencias-decoracion-2027/" },
  { img: "/img/notas/departamentos-pequenos-ideas-o.webp", cat: "Ideas", title: "Departamentos pequeños: ideas para ganar espacio sin perder estilo", by: "Por Staff editorial", href: "/decoracion-arquitectura/departamentos-pequenos-ideas/" },
];

function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = SLIDES.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);

  const arrow = "absolute top-[calc(50%-20px)] z-10 flex h-10 w-10 items-center justify-center bg-white/90 text-black hover:bg-white transition-colors";

  return (
    <div className="min-w-0 w-full" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${i * 100}%)` }}>
          {SLIDES.map((sl) => (
            <a key={sl.href} href={sl.href} className="group block w-full shrink-0">
              <img src={sl.img} alt={sl.title} className="aspect-[16/10] w-full object-cover" />
              <p style={LABEL} className="mt-4 mb-2">{sl.cat}</p>
              <h2 style={{ ...TITLE, fontSize: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.15 }} className="mb-3 group-hover:opacity-60 transition-opacity">
                {sl.title}
              </h2>
              <p style={BYLINE}>Por Staff editorial</p>
            </a>
          ))}
        </div>
        <button aria-label="Anterior" onClick={() => setI((i - 1 + n) % n)} className={`${arrow} left-3`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 5 8 12 15 19" /></svg>
        </button>
        <button aria-label="Siguiente" onClick={() => setI((i + 1) % n)} className={`${arrow} right-3`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 5 16 12 9 19" /></svg>
        </button>
      </div>
      <div className="mt-5 flex items-center gap-2">
        {SLIDES.map((sl, k) => (
          <button
            key={sl.cat}
            aria-label={sl.cat}
            onClick={() => setI(k)}
            className="h-[3px] flex-1 transition-colors"
            style={{ background: k === i ? "#000" : "#d8d6d1" }}
          />
        ))}
      </div>
    </div>
  );
}

export function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pb-4">
      {/* Nota importante */}
      <a
        href="/actualidad/latin-grammy-2026-artistas-confirmados/"
        className="mt-6 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 bg-black text-white px-4 py-3 hover:bg-[#222] transition-colors"
      >
        <span style={{ ...LABEL, color: "#fff", letterSpacing: "2px" }} className="shrink-0 border-b sm:border-b-0 sm:border-r border-white/40 pb-1 sm:pb-0 sm:pr-4">Última hora</span>
        <span style={{ fontFamily: SANS, fontSize: "16px", lineHeight: 1.3 }}>Latin Grammy 2026: Rosalía, Daddy Yankee, Anitta y Juanes, confirmados para el 12 de noviembre en Miami.</span>
      </a>

      {/* HERO + lista lateral */}
      <section className="grid gap-8 py-8 grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <HeroCarousel />

        <div className="flex flex-col divide-y divide-[#e8e6e1] min-w-0">
          {TRAVEL.slice(0, 3).map((c) => (
            <a key={c.title} href={c.href} className="group flex items-start justify-between gap-4 py-5 first:pt-0">
              <div>
                <p style={LABEL} className="mb-2">{c.cat}</p>
                <h3 style={{ ...TITLE, fontSize: "17px" }} className="mb-2 group-hover:opacity-60 transition-opacity">{c.title}</h3>
                <p style={BYLINE}>{c.by}</p>
              </div>
              <img src={c.img} alt="" loading="lazy" className="w-[75px] h-[100px] object-cover shrink-0" />
            </a>
          ))}
        </div>
      </section>

      <AdSlot format="horizontal" />



      <section className="py-6">
        <SectionTitle to="/viajes">Escapadas</SectionTitle>
        <CardGrid cards={TRAVEL} cols="lg:grid-cols-4" />
      </section>

      <section className="py-6">
        <SectionTitle to="/gastronomia">Gastronomía</SectionTitle>
        <CardGrid cards={GASTRO} cols="lg:grid-cols-4" />
      </section>

      <AdSlot />



      <section className="py-6">
        <SectionTitle to="/moda-tendencias">Moda</SectionTitle>
        <CardGrid cards={MODA} cols="lg:grid-cols-4" />
      </section>

      <section className="py-6">
        <SectionTitle to="/bienestar-salud">Bienestar</SectionTitle>
        <CardGrid cards={BIENESTAR} cols="lg:grid-cols-4" />
      </section>

      <section className="py-6">
        <SectionTitle to="/decoracion-arquitectura">Decoración</SectionTitle>
        <CardGrid cards={DECO} cols="lg:grid-cols-4" />
      </section>

      <AdSlot format="horizontal" />

      <section className="py-14 text-center border-t border-[#e8e6e1]">
        <h2 style={{ fontFamily: SANS, fontSize: "24px", fontWeight: 400, letterSpacing: "2px", textTransform: "uppercase" }} className="mb-3">
          Lo mejor, directo a vos
        </h2>
        <p className="mb-6" style={{ fontFamily: SANS, fontSize: "15px", color: "#444" }}>
          Seguí nuestro canal de WhatsApp y recibí las notas de cada semana.
        </p>
        <a
          href="https://whatsapp.com/channel/0029Vb9D5my42DcbkMYsb61v"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-black text-white px-8 py-3 hover:bg-[#333] transition-colors"
          style={{ ...LABEL, color: "#fff", letterSpacing: "2px" }}
        >
          Seguir el canal
        </a>
      </section>
    </div>
  );
}
