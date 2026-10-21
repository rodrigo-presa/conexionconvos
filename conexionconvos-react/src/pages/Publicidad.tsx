import { Link } from "react-router-dom";
import { AdvertiseCta } from "../components/AdvertiseCta";
import { usePageTitle } from "../components/usePageTitle";
import { BTN, BYLINE, LABEL, SANS, SectionHeading } from "./Shared";

const WA = "https://wa.me/541160512401?text=Hola%21%20Quiero%20anunciar%20mi%20marca%20en%20Conexi%C3%B3n%20con%20Vos.%20%C2%BFMe%20pasan%20las%20tarifas%3F";

const RAZONES = [
  ["Un entorno que cuida tu imagen", "Tu marca aparece junto a moda, bienestar, gastronomía y deco, no entre avisos genéricos ni noticias policiales."],
  ["Contenido que queda publicado", "Cada nota patrocinada queda fija en el portal, con links directos a tu WhatsApp, y se puede seguir encontrando en Google."],
  ["Todo en un solo plan", "Nota, video, banner y bloque destacado en el portal. Un solo contacto, una sola propuesta."],
  ["Trato directo con el equipo editorial", "No sos un número más: armamos el contenido con vos y lo ajustamos a lo que tu marca necesita contar."],
];

const CASOS = [
  { t: "El secreto mejor guardado de la belleza", d: "Dr. Fernando Felice: “Hoy la mayoría de los tratamientos estéticos que se realizan no son necesarios, y en muchos casos son perjudiciales”", img: "/img/notas/cc-belleza-o.webp", href: "/bienestar-salud/el-secreto-mejor-guardado-de-la-belleza/" },
  { t: "Marcelo y Mónica unen sus talentos para ofrecer una experiencia de peluquería renovada", d: "El sector de la belleza y el cuidado personal suma una alianza clave: Marcelo y Mónica unieron sus trayectorias…", img: "/img/notas/monicaymarcelo-o.webp", href: "/moda-tendencias/marcelo-y-monica-peluqueria-renovada/" },
  { t: "Andamios del Oeste: Calidad, Confianza y Soluciones para la Construcción", d: "En Andamios del Oeste sabemos que la seguridad y el compromiso son la base de cualquier obra o proyecto de remodelación…", img: "/img/notas/andamiosdeloestenuevo-o.webp", href: "/decoracion-arquitectura/andamios-del-oeste/" },
];

const FORMATOS = [
  ["Web", "Nota patrocinada", "Una nota escrita sobre tu marca, en la sección de tu rubro, con links a tu WhatsApp. Queda publicada de forma permanente."],
  ["Portada", "Entrevista en video", "Entrevista de 5 a 7 minutos publicada como nota principal en la portada y en tu sección."],
  ["Web", "Banner de sección", "Tu banner dentro de las notas de la categoría que elijas, rotativo o exclusivo."],
  ["Web", "Bloque destacado", "Un espacio propio arriba de la sección de tu rubro, con tu video, tu flyer y un botón directo a tu WhatsApp."],
];

const PLANES = [
  ["Banner de sección", "Tu banner dentro de las notas de la categoría que elijas, en rotación con otros anunciantes. Con link directo a tu WhatsApp o web.", "30 días", "$60.000", "por mes"],
  ["Nota patrocinada", "Una nota escrita sobre tu marca, en la sección de tu rubro, con links a tu WhatsApp. Queda publicada de forma permanente.", "Permanente", "$90.000", "pago único"],
  ["Bloque destacado con video y flyer", "Un espacio propio arriba de la sección de tu rubro, con tu video, tu flyer y un botón directo a tu WhatsApp. Vos aportás el material; nosotros lo publicamos y lo diseñamos para que se vea bien en celular y compu.", "30 días · Formato recomendado", "$120.000", "por mes"],
  ["Entrevista en video", "Grabamos y editamos una entrevista de 5 a 7 minutos a tu marca y la publicamos como nota principal en la portada y en tu sección.", "Permanente", "$200.000", "pago único"],
  ["Sponsor de sección", "Banner fijo y exclusivo junto al encabezado, la leyenda “Sección auspiciada por [tu marca]” en portada y 2 notas por mes. Una sola marca por sección.", "Contrato de 3 a 6 meses", "$300.000", "por mes"],
];

const PASOS = [
  ["Nos escribís", "Por WhatsApp, contanos qué hace tu marca y a quién querés llegar."],
  ["Te enviamos la propuesta", "Propuesta con tarifas actualizadas y el plan que mejor se adapta a tu objetivo."],
  ["Publicamos tu marca", "Armamos el contenido con vos y lo publicamos en el portal."],
];

const FAQ = [
  ["¿Puedo contratar una sola nota, sin plan mensual?", "Sí. La nota patrocinada se contrata como pago único y queda publicada de forma permanente en el portal."],
  ["¿Cuánto tiempo queda publicada la nota?", "La nota patrocinada queda publicada de forma permanente en el portal, con los links a tu WhatsApp."],
  ["¿Sirve para cualquier rubro?", "Sí. Tenemos secciones de moda, bienestar y salud, gastronomía, deco y arquitectura, escapadas y perfiles, y buscamos la que mejor encaja con tu marca."],
  ["¿Qué tengo que enviar para empezar?", "Tu logo, algunas fotos y una breve descripción de lo que hacés. Del resto nos encargamos nosotros."],
];

const P: React.CSSProperties = { fontFamily: SANS, fontSize: "16px", lineHeight: 1.6, color: "#444" };

export function Publicidad() {
  usePageTitle("Publicidad");
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
      {/* Hero */}
      <section className="max-w-[820px] mx-auto text-center py-8">
        <p style={LABEL} className="mb-3">Publicidad</p>
        <h1 style={{ fontFamily: SANS, fontWeight: 400, fontSize: "clamp(32px,5vw,56px)", lineHeight: 1.1 }} className="mb-5">Anunciá tu marca en Conexión con Vos</h1>
        <p style={{ ...P, fontSize: "19px" }} className="mb-8">Nota, video y banner en un solo plan. Elegí el formato, la sección y el plan que mejor le queda a tu marca.</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 text-center">
          <a href={WA} target="_blank" rel="noreferrer" style={BTN} className="bg-black px-7 py-3 hover:bg-[#333] transition-colors">Quiero anunciar mi marca</a>
          <a href="#planes" style={{ ...LABEL, letterSpacing: "2px" }} className="border border-black px-7 py-3 hover:bg-black hover:text-white transition-colors">Ver planes y precios</a>
        </div>
      </section>

      {/* Audiencia */}
      <section className="my-12">
        <SectionHeading>Audiencia</SectionHeading>
        <div className="grid grid-cols-2 gap-6 text-center max-w-2xl mx-auto">
          {[["90.000", "visitas por mes al portal"], ["6", "secciones temáticas"]].map(([n, l]) => (
            <div key={l}>
              <p style={{ fontFamily: SANS, fontSize: "clamp(36px,5vw,56px)", fontWeight: 400, lineHeight: 1 }}>{n}</p>
              <p style={{ ...BYLINE, color: "#666" }} className="mt-2">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Por qué */}
      <section className="my-14">
        <SectionHeading>Por qué Conexión con Vos</SectionHeading>
        <p className="text-center max-w-2xl mx-auto mb-10" style={{ ...P, fontSize: "18px" }}>En un medio grande tu aviso se pierde. Acá es protagonista. No vendemos espacio suelto: contamos tu marca dentro de un contenido cuidado, al lado de notas que la gente elige leer.</p>
        <div className="grid gap-8 grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-4">
          {RAZONES.map(([t, d], i) => (
            <div key={t}>
              <p style={{ ...BYLINE, color: "#888" }} className="mb-2">0{i + 1}</p>
              <h3 style={{ fontFamily: SANS, fontSize: "18px", fontWeight: 500 }} className="mb-2">{t}</h3>
              <p style={{ ...P, fontSize: "15px" }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Casos */}
      <section className="my-14">
        <SectionHeading>Ya cuentan su historia acá</SectionHeading>
        <p className="text-center mb-8" style={P}>Así quedan publicadas: una nota propia, con su historia, que se puede leer y encontrar en Google. Podés abrir cualquiera.</p>
        <div className="grid gap-x-5 gap-y-10 grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-3">
          {CASOS.map((c) => (
            <a key={c.t} href={c.href} className="group block">
              <div className="overflow-hidden mb-3"><img src={c.img} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" /></div>
              <h3 style={{ fontFamily: SANS, fontSize: "18px", fontWeight: 400, lineHeight: 1.25 }} className="mb-2 group-hover:opacity-60 transition-opacity">{c.t}</h3>
              <p style={{ ...P, fontSize: "14px" }} className="mb-2">{c.d}</p>
              <p style={LABEL}>Leer nota →</p>
            </a>
          ))}
        </div>
      </section>

      {/* Formatos */}
      <section className="my-14">
        <SectionHeading>Así se ve tu marca en Conexión con Vos</SectionHeading>
        <div className="grid gap-6 grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-4">
          {FORMATOS.map(([tag, t, d]) => (
            <div key={t} className="border border-[#e8e6e1] p-5">
              <p style={{ ...BYLINE, color: "#888" }} className="mb-2">{tag}</p>
              <h3 style={{ fontFamily: SANS, fontSize: "18px", fontWeight: 500 }} className="mb-2">{t}</h3>
              <p style={{ ...P, fontSize: "15px" }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tarifario */}
      <section id="planes" className="my-14 scroll-mt-6">
        <SectionHeading>Publicidad en la página, con precio claro</SectionHeading>
        <p className="text-center mb-8" style={P}>Elegí el formato que mejor le queda a tu marca. Todos se publican dentro de conexionconvos.com, en la sección de tu rubro.</p>
        <div className="grid gap-5 grid-cols-[minmax(0,1fr)] md:grid-cols-2 lg:grid-cols-3">
          {PLANES.map(([t, d, dur, precio, per], i) => (
            <div key={t} className={`border p-6 flex flex-col ${i === 2 ? "border-black" : "border-[#e8e6e1]"}`}>
              <p style={{ ...BYLINE, color: "#888" }} className="mb-2">0{i + 1} · {dur}</p>
              <h3 style={{ fontFamily: SANS, fontSize: "20px", fontWeight: 500 }} className="mb-2">{t}</h3>
              <p style={{ ...P, fontSize: "15px" }} className="mb-5 flex-1">{d}</p>
              <p style={{ fontFamily: SANS, fontSize: "30px", fontWeight: 400 }} className="mb-1">{precio} <span style={{ ...BYLINE, color: "#666" }}>{per}</span></p>
              <a href={WA} target="_blank" rel="noreferrer" style={BTN} className="mt-3 bg-black text-center px-6 py-3 hover:bg-[#333] transition-colors">Consultar</a>
            </div>
          ))}
        </div>
        <p className="text-center mt-6" style={{ fontFamily: SANS, fontSize: "13px", color: "#777" }}>Una sola marca sponsor por sección. Valores en pesos argentinos, vigentes durante octubre de 2026 y sujetos a actualización.</p>
      </section>

      {/* Gridloop */}
      <section className="my-14 bg-[#f7f6f2] p-8 md:p-12 grid gap-6 md:grid-cols-[1.5fr_1fr] items-center">
        <div>
          <p style={{ ...BYLINE, color: "#888" }} className="mb-2">Publicidad · Gridloop</p>
          <h2 style={{ fontFamily: SANS, fontSize: "clamp(24px,3vw,34px)", fontWeight: 400 }} className="mb-3">Tu negocio, en Google y en el celular de tus clientes</h2>
          <p style={P} className="mb-4">Diseñamos y publicamos la página web de tu negocio: rápida, pensada para celular y lista para que te escriban por WhatsApp. Hecho en Argentina, para negocios de Argentina y Latinoamérica.</p>
          <p style={{ ...BYLINE, color: "#444" }}>Landing desde $200.000 · Sitio institucional desde $400.000 · Entrega en 3 a 5 días</p>
        </div>
        <div className="flex flex-col gap-3">
          <a href="https://wa.me/5491123748833?text=Hola%20Rodrigo%2C%20vi%20tu%20publicidad%20en%20Conexi%C3%B3n%20con%20Vos%20y%20quiero%20consultarte%20por%20una%20p%C3%A1gina%20web" target="_blank" rel="noreferrer" style={BTN} className="bg-black text-center px-6 py-3 hover:bg-[#333] transition-colors">Hablá con Gridloop</a>
          <a href="https://gridloop.com.ar/?utm_source=conexionconvos&utm_medium=publicidad" target="_blank" rel="noreferrer" style={{ ...LABEL, letterSpacing: "2px" }} className="border border-black text-center px-6 py-3 hover:bg-black hover:text-white transition-colors">Ver sitios hechos</a>
        </div>
      </section>

      {/* Pasos */}
      <section className="my-14">
        <SectionHeading>De tu mensaje a tu marca publicada, en 3 pasos</SectionHeading>
        <div className="grid gap-8 grid-cols-[minmax(0,1fr)] md:grid-cols-3">
          {PASOS.map(([t, d], i) => (
            <div key={t}>
              <p style={{ fontFamily: SANS, fontSize: "40px", fontWeight: 300 }} className="mb-1">0{i + 1}</p>
              <h3 style={{ fontFamily: SANS, fontSize: "18px", fontWeight: 500 }} className="mb-2">{t}</h3>
              <p style={{ ...P, fontSize: "15px" }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guía */}
      <section className="my-14 border border-[#e8e6e1] p-8 text-center">
        <p style={{ ...BYLINE, color: "#888" }} className="mb-2">Guía gratuita para negocios</p>
        <h2 style={{ fontFamily: SANS, fontSize: "clamp(22px,3vw,30px)", fontWeight: 400 }} className="mb-3">¿Tu negocio aparece cuando lo buscan en Google?</h2>
        <p style={P} className="mb-5">Cinco pasos simples para que te encuentren: ficha de Google, web propia, WhatsApp y reseñas.</p>
        <Link to="/publicidad/como-aparecer-en-google-con-tu-negocio/" style={{ ...LABEL, letterSpacing: "2px" }} className="inline-block border border-black px-7 py-3 hover:bg-black hover:text-white transition-colors">Leer la guía</Link>
      </section>

      {/* FAQ */}
      <section className="my-14 max-w-[820px] mx-auto">
        <SectionHeading>Antes de escribirnos</SectionHeading>
        {FAQ.map(([q, a]) => (
          <details key={q} className="border-b border-[#e8e6e1] py-4 group">
            <summary className="cursor-pointer list-none flex justify-between gap-4" style={{ fontFamily: SANS, fontSize: "17px", fontWeight: 500 }}>
              {q}<span aria-hidden="true" className="group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p style={{ ...P, fontSize: "15px" }} className="mt-3">{a}</p>
          </details>
        ))}
      </section>

      <AdvertiseCta />
    </div>
  );
}
