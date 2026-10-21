import { useState, useEffect } from "react";
import { Search, X, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { label: "Viajes", href: "/viajes" },
  { label: "Gastronomía", href: "/gastronomia" },
  { label: "Bienestar", href: "/bienestar" },
  { label: "Moda", href: "/moda" },
  { label: "Decoración", href: "/decoracion" },
];

const VOGUE_FONT: React.CSSProperties = {
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  fontSize: "13px",
  letterSpacing: "1.7px",
  textTransform: "uppercase" as const,
  color: "#000",
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white ${scrolled ? "shadow-sm" : ""}`}>

        {/* ── MASTHEAD ROW (igual que Vogue: vacío izq · logo centro abs · íconos der) ── */}
        <div className="border-b border-[#E5E5E5]">
          <div className="container-editorial">
            <div className="relative flex items-center h-[80px]">

              {/* Centro absoluto: masthead */}
              <Link
                to="/"
                className="absolute left-1/2 -translate-x-1/2"
                aria-label="Conexión con Vos"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 580 60"
                  aria-label="Conexión con Vos"
                  style={{ width: "min(580px, 54vw)", height: "auto", display: "block" }}
                >
                  <text
                    x="0"
                    y="50"
                    fontFamily="'Bodoni Moda', Georgia, serif"
                    fontWeight="900"
                    fontSize="52"
                    letterSpacing="1.5"
                    fill="#000000"
                  >
                    CONEXI&#211;N CON&#160;<tspan fill="#E24D57">V</tspan>OS
                  </text>
                </svg>
              </Link>

              {/* Derecha: íconos (igual que Vogue: lupa + MENU) */}
              <div className="flex items-center gap-4 ml-auto shrink-0">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="hover:opacity-50 transition-opacity"
                  aria-label="Buscar"
                >
                  <Search className="w-[18px] h-[18px] text-black" strokeWidth={1.5} />
                </button>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-2 hover:opacity-50 transition-opacity"
                  aria-label="Menú"
                >
                  {menuOpen
                    ? <X className="w-[18px] h-[18px] text-black" strokeWidth={1.5} />
                    : <Menu className="w-[18px] h-[18px] text-black" strokeWidth={1.5} />
                  }
                  <span style={VOGUE_FONT}>
                    {menuOpen ? "Cerrar" : "Menú"}
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ── NAV ROW ── */}
        <nav className="border-b border-[#E5E5E5] hidden md:block">
          <div className="container-editorial">
            <div className="flex items-center justify-center gap-10 h-11">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.href}
                  to={cat.href}
                  className="relative hover:opacity-50 transition-opacity group"
                  style={VOGUE_FONT}
                >
                  {cat.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-black group-hover:w-full transition-all duration-200" />
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Search dropdown */}
        {searchOpen && (
          <div className="border-b border-[#E5E5E5] bg-white">
            <div className="container-editorial py-3">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999]" />
                <input
                  autoFocus
                  type="search"
                  placeholder="Buscar artículos, destinos, recetas…"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F5F5F5] text-sm text-black placeholder:text-[#999] border-0 focus:outline-none focus:ring-1 focus:ring-black"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Overlay oscuro */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Panel lateral derecho — igual que Vogue */}
      <nav
        className={`fixed right-0 top-0 h-full w-[340px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header del panel: CERRAR a la derecha */}
        <div className="flex items-center justify-between px-6 h-[80px] border-b border-[#E5E5E5]">
          <span />
          <button
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 hover:opacity-50 transition-opacity"
          >
            <span style={VOGUE_FONT}>Cerrar</span>
            <X className="w-4 h-4 text-black" strokeWidth={1.5} />
          </button>
        </div>

        {/* Categorías */}
        <div>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              to={cat.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between px-6 py-5 border-b border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors"
            >
              <span style={VOGUE_FONT}>{cat.label}</span>
              <span style={{ color: "#999", fontSize: "20px", fontWeight: 200, lineHeight: 1 }}>+</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
