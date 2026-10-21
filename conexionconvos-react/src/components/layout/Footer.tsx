import { Link } from "react-router-dom";

const H: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "1.6px",
  textTransform: "uppercase",
};

const L: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "13px",
  fontWeight: 400,
  letterSpacing: "1.3px",
  textTransform: "uppercase",
};

const NOSOTROS = [
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Contacto", href: "/contacto" },
  { label: "Publicidad", href: "/publicidad" },
  { label: "Política de privacidad", href: "/politica-de-privacidad" },
  { label: "Términos y condiciones", href: "/politica-de-privacidad#terminos" },
  { label: "Cookies", href: "/politica-de-privacidad#cookies" },
];

const SECCIONES = [
  { label: "Escapadas", href: "/viajes" },
  { label: "Gastronomía", href: "/gastronomia" },
  { label: "Bienestar", href: "/bienestar" },
  { label: "Estilo", href: "/moda" },
  { label: "Decoración", href: "/decoracion" },
];

const linkCls = "block text-white hover:opacity-60 transition-opacity";

export function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 pt-12 pb-10 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" style={{ fontFamily: "'Bodoni Moda', Georgia, serif", fontWeight: 400, fontSize: "34px", letterSpacing: "1px" }}>
            Conexión con Vos
          </Link>
          <p className="mt-4 max-w-md" style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px", lineHeight: 1.5 }}>
            Portal de estilo de vida para Buenos Aires, Uruguay y el mundo. Escapadas, gastronomía, bienestar, moda y decoración.
          </p>
          <p className="mt-5 text-white/60" style={{ ...L, fontSize: "11px" }}>
            Rodrigo Presa · Director Editorial
          </p>
          <p className="mt-6 text-white/60" style={{ ...L, fontSize: "11px" }}>Ya confían en nosotros</p>
          <p className="mt-2" style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px" }}>
            Colegio de Farmacéuticos · Mudanzas La Gloria
          </p>
        </div>

        <div>
          <h5 className="mb-6" style={H}>Nosotros</h5>
          <ul className="space-y-5">
            {NOSOTROS.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className={linkCls} style={L}>{l.label}</Link>
              </li>
            ))}
            <li>
              <a href="mailto:conexionconvosok@gmail.com" className={linkCls} style={{ ...L, textTransform: "none" }}>
                conexionconvosok@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="mb-6" style={H}>Secciones</h5>
          <ul className="space-y-5">
            {SECCIONES.map((l) => (
              <li key={l.label}>
                <Link to={l.href} className={linkCls} style={L}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-white/60" style={{ ...L, fontSize: "11px" }}>
          <span>© {new Date().getFullYear()} Conexión con Vos · Latinoamérica y el mundo</span>
          <span>
            Sitio desarrollado por{" "}
            <a href="https://gridloop.com.ar/?utm_source=conexionconvos&utm_medium=footer" target="_blank" rel="noreferrer" className="underline hover:text-white">
              Gridloop
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
