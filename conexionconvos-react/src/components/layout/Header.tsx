import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";


interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const NAV_LINKS = [
  { label: "Actualidad", href: "/actualidad" },
  { label: "Escapadas", href: "/viajes" },
  { label: "Gastronomía", href: "/gastronomia" },
  { label: "Bienestar", href: "/bienestar" },
  { label: "Estilo", href: "/moda" },
  { label: "Decoración", href: "/decoracion" },
  { label: "Anunciar", href: "https://wa.me/541160512401" },
];

const NAV_STYLE: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "12px",
  fontWeight: 500,
  letterSpacing: "2.4px",
  textTransform: "uppercase" as const,
};

const DRAWER_ITEM: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "14px",
  fontWeight: 500,
  letterSpacing: "0.9px",
  textTransform: "uppercase" as const,
};

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontSize: "11px",
  fontWeight: 500,
  letterSpacing: "2.2px",
  textTransform: "uppercase" as const,
};

type SearchItem = { url: string; title: string; desc: string; img: string; cat: string };

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerTop, setDrawerTop] = useState(0);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchItem[]>([]);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  useEffect(() => {
    if (!searchOpen || index.length) return;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((d: SearchItem[]) => setIndex(d))
      .catch(() => setIndex([]));
  }, [searchOpen, index.length]);

  const norm = (t: string) => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const q = norm(query.trim());
  const results = q.length >= 2 ? index.filter((i) => norm(`${i.title} ${i.desc} ${i.cat}`).includes(q)).slice(0, 8) : [];
  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
  };
  const barRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (!menuOpen && barRef.current) {
      setDrawerTop(Math.max(0, Math.round(barRef.current.getBoundingClientRect().bottom)));
    }
    setMenuOpen(!menuOpen);
  };

  const today = new Date();
  const dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
  const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
  const dateStr = `${dias[today.getDay()]} ${today.getDate()} de ${meses[today.getMonth()]} ${today.getFullYear()}`;

  const shortDate = `${today.getDate()} ${meses[today.getMonth()].slice(0, 3)} ${today.getFullYear()}`;

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted" || outcome === "dismissed") setInstallPrompt(null);
  };

  return (
    <header className="bg-white border-b border-[#e8e6e1]">
      {/* Announcement bar */}
      <div className="bg-[#1a1a1a] py-2 px-4 text-center text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/90">
        <span className="hidden sm:inline">Portal editorial de viajes, gastronomía y estilo de vida —&nbsp;</span>
        <a
          href="https://whatsapp.com/channel/0029Vb9D5my42DcbkMYsb61v"
          className="underline underline-offset-2 hover:text-white"
          target="_blank" rel="noreferrer"
          style={LABEL_STYLE}
        >
          Seguir el canal
        </a>
      </div>

      {/* Top utility row: date left, search+menu right */}
      <div ref={barRef} className="relative z-[60] bg-white"><div className="max-w-screen-xl mx-auto px-4 sm:px-6 flex items-center justify-between pt-4 pb-2">
        <span className="text-[#888] hidden sm:inline" style={LABEL_STYLE}>{dateStr}</span>
        <span className="text-[#888] sm:hidden" style={{ ...LABEL_STYLE, fontSize: "10px", letterSpacing: "1.4px" }}>{shortDate}</span>

        {/* Right side: search + menu (Vogue-style) */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-[#1a1a1a] hover:opacity-50 transition-opacity p-2 -m-2"
            aria-label="Buscar"
          >
            <SearchIcon />
          </button>

          {/* MENU label + hamburger icon — visible on all screen sizes on desktop, only hamburger on mobile */}
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2 text-[#1a1a1a] hover:opacity-50 transition-opacity p-2 -m-2"
            aria-label="Menú"
          >
            <span style={NAV_STYLE}>{menuOpen ? "Cerrar" : "Menú"}</span>
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </div></div>

      {/* Search bar (expandable) */}
      {searchOpen && (
        <div className="border-t border-[#e8e6e1] bg-white px-4 sm:px-6 py-3">
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center gap-3">
              <SearchIcon />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar notas..."
                className="flex-1 outline-none bg-transparent text-[#1a1a1a] placeholder-[#aaa]"
                style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", letterSpacing: "0.5px" }}
                onKeyDown={(e) => e.key === "Escape" && closeSearch()}
              />
              <button onClick={closeSearch} className="text-[#888] hover:text-[#1a1a1a] transition-colors" style={LABEL_STYLE}>
                Cerrar
              </button>
            </div>
            {query.trim().length >= 2 && (
              <ul className="mt-3 border-t border-[#e8e6e1] max-h-[50vh] overflow-y-auto">
                {results.length === 0 && (
                  <li className="py-4 text-[#888]" style={{ fontFamily: "'Jost', sans-serif", fontSize: "14px" }}>
                    No encontramos notas para “{query}”.
                  </li>
                )}
                {results.map((r) => (
                  <li key={r.url} className="border-b border-[#e8e6e1]">
                    <Link to={r.url} onClick={closeSearch} className="flex items-center gap-4 py-3 hover:bg-[#fafafa] transition-colors">
                      {r.img && <img src={r.img} alt="" className="w-[60px] h-[60px] object-cover shrink-0" />}
                      <span>
                        <span className="block text-[#888]" style={{ ...LABEL_STYLE, fontSize: "10px" }}>{r.cat}</span>
                        <span className="block text-[#1a1a1a]" style={{ fontFamily: "'Jost', sans-serif", fontSize: "16px", lineHeight: 1.25 }}>{r.title}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Masthead */}
      <div className="px-3 sm:px-6 py-2 text-center">
        <Link to="/">
          <h1
            className="leading-none hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'Bodoni Moda', Georgia, serif",
              fontSize: "clamp(26px, 8.6vw, 120px)",
              fontWeight: 400,
              letterSpacing: "clamp(1px, 0.3vw, 4.8px)",
              color: "#1a1a1a",
            }}
          >
            Conexión con Vos
          </h1>
        </Link>
      </div>

      {/* Nav desktop — centered links */}
      <nav className="border-t border-[#e8e6e1]">
        <div className="max-w-screen-xl mx-auto px-6">
          <ul className="hidden md:flex items-center justify-center gap-10 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("http") ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#1a1a1a] hover:opacity-50 transition-opacity"
                    style={NAV_STYLE}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className="text-[#1a1a1a] hover:opacity-50 transition-opacity"
                    style={NAV_STYLE}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Vogue-style side drawer */}
      {menuOpen && (
        <>
          <div
            className="fixed left-0 right-0 bottom-0 z-40 bg-black/40"
            style={{ top: drawerTop }}
            onClick={() => setMenuOpen(false)}
          />
          <aside
            className="fixed right-0 bottom-0 z-50 bg-white overflow-y-auto"
            style={{ top: drawerTop, width: "min(450px, 100vw)" }}
          >
            <ul className="p-2">
              {NAV_LINKS.filter((l) => !l.href.startsWith("http")).map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 text-[#1a1a1a] hover:bg-[#fafafa] transition-colors"
                    style={{ ...DRAWER_ITEM, lineHeight: "41px" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-5 pt-10 pb-2" style={{ ...DRAWER_ITEM, color: "#888" }}>Más</div>
            <ul className="p-2 pt-0">
              <li>
                <a
                  href="https://wa.me/541160512401"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 text-[#1a1a1a] hover:bg-[#fafafa] transition-colors"
                  style={{ ...DRAWER_ITEM, lineHeight: "41px" }}
                >
                  Anunciar
                </a>
              </li>
            </ul>
            {installPrompt && (
              <div className="px-5 pb-5 pt-2">
                <button
                  onClick={handleInstall}
                  className="flex items-center gap-2 text-[#888] hover:text-[#1a1a1a] transition-colors"
                  style={{ ...DRAWER_ITEM, fontSize: "13px" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v13m0 0-4-4m4 4 4-4M2 17v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"/>
                  </svg>
                  Instalar app
                </button>
              </div>
            )}
          </aside>
        </>
      )}
    </header>
  );
}
