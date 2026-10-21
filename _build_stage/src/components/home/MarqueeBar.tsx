// Barra de texto animado — igual al marquee oscuro de Vogue

const ITEMS = [
  "Viajes · Gastronomía · Bienestar · Moda · Decoración",
  "El portal de estilo de vida del Río de la Plata",
  "Viajes · Gastronomía · Bienestar · Moda · Decoración",
  "El portal de estilo de vida del Río de la Plata",
];

export function MarqueeBar() {
  return (
    <div className="bg-ink text-cream overflow-hidden py-4 border-y border-black select-none">
      <div className="flex gap-12 w-max animate-marquee">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="font-serif italic text-2xl sm:text-3xl whitespace-nowrap flex items-center gap-12"
          >
            {item}
            <span className="text-gold text-base not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
