import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CarouselItem } from "../../types";

interface HorizontalCarouselProps {
  heading: string;
  items: CarouselItem[];
}

export function HorizontalCarousel({ heading, items }: HorizontalCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-8 border-b border-ink/10">
      {/* Header */}
      <div className="container-editorial">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <div className="flex-1 h-px bg-ink/10" />
            <h2 className="text-[13px] font-black tracking-[0.14em] uppercase text-ink whitespace-nowrap px-2">
              {heading}
            </h2>
            <div className="flex-1 h-px bg-ink/10" />
          </div>
          {/* Pagination arrows */}
          <div className="flex items-center gap-1 ml-4 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 border border-ink/20 flex items-center justify-center hover:border-ink hover:bg-[#F5F5F5] transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={2} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 border border-ink/20 flex items-center justify-center hover:border-ink hover:bg-[#F5F5F5] transition-all duration-200"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable row — extends edge to edge */}
      <div
        ref={scrollRef}
        className="carousel-scroll flex gap-4 overflow-x-auto px-4 sm:px-6 lg:px-8 xl:px-[max(2rem,calc((100vw-1300px)/2+2rem))]"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.href}
            className="group flex-shrink-0 w-[220px] sm:w-[260px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <div className="overflow-hidden aspect-[3/4] mb-3">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-bold text-sm italic text-ink card-title-hover leading-snug">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
