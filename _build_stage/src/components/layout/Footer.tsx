import { Link } from "react-router-dom";

const SECTIONS = [
  { label: "Viajes", href: "/viajes" },
  { label: "Gastronomía", href: "/gastronomia" },
  { label: "Bienestar", href: "/bienestar" },
  { label: "Moda", href: "/moda" },
  { label: "Decoración", href: "/decoracion" },
];

const MORE_LINKS = [
  { label: "Acerca de Nosotros", href: "/acerca" },
  { label: "Contacto", href: "/contacto" },
  { label: "Publicidad", href: "/publicidad" },
  { label: "Newsletter", href: "/newsletter" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream mt-16">
      {/* Main footer */}
      <div className="container-editorial py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/img/logo.webp"
                alt="Conexión con Vos"
                className="h-12 w-auto brightness-0 invert"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = "block";
                }}
              />
              <span className="font-serif font-semibold text-2xl text-cream hidden">
                Conexión con Vos
              </span>
            </Link>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              Portal de estilo de vida premium para Buenos Aires, Uruguay y el mundo.
              Viajes, gastronomía, bienestar, moda y decoración de autor.
            </p>
            <p className="text-cream/40 text-xs mt-3 font-semibold uppercase tracking-wide">
              Rodrigo Presa · Director Editorial
            </p>

            {/* Anunciantes */}
            <div className="mt-6">
              <p className="text-[10px] font-black tracking-[0.12em] uppercase text-gold mb-3">
                Ya confían en nosotros
              </p>
              <div className="flex items-center gap-4 opacity-50">
                <span className="text-xs font-semibold text-cream/70 border border-cream/20 px-3 py-1.5 rounded">
                  Colegio de Farmacéuticos
                </span>
                <span className="text-xs font-semibold text-cream/70 border border-cream/20 px-3 py-1.5 rounded">
                  Mudanzas La Gloria
                </span>
              </div>
            </div>
          </div>

          {/* Secciones */}
          <div>
            <h5 className="text-[10px] font-black tracking-[0.12em] uppercase text-gold mb-5">
              Secciones
            </h5>
            <ul className="space-y-3">
              {SECTIONS.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    className="text-cream/70 hover:text-cream text-sm transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Más */}
          <div>
            <h5 className="text-[10px] font-black tracking-[0.12em] uppercase text-gold mb-5">
              Más
            </h5>
            <ul className="space-y-3">
              {MORE_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-cream/70 hover:text-cream text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-editorial py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/40 text-xs">
            © {year} Conexión con Vos. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link to="/privacidad" className="text-cream/40 hover:text-cream/70 text-xs transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/terminos" className="text-cream/40 hover:text-cream/70 text-xs transition-colors">
              Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
