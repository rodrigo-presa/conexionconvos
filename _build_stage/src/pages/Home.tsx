import { HeroSection } from "../components/home/HeroSection";
import { CategorySection } from "../components/home/CategorySection";
import { MustRead } from "../components/home/MustRead";
import { HorizontalCarousel } from "../components/home/HorizontalCarousel";
import { LatestStories } from "../components/home/LatestStories";
import { MarqueeBar } from "../components/home/MarqueeBar";
import {
  heroArticles,
  sidebarArticles,
  viajesArticles,
  mustReadArticles,
  latestArticles,
  carouselItems,
} from "../data/mockData";

export function Home() {
  return (
    <main>
      {/* 1. Hero slider + sidebar (estructura exacta de Vogue) */}
      <HeroSection heroArticles={heroArticles} sidebarArticles={sidebarArticles} />

      {/* 2. Sección de categoría: Últimas de Viajes (4-card grid) */}
      <CategorySection
        heading="Últimas de Viajes"
        category="Viajes"
        articles={viajesArticles}
        seeAllHref="/viajes"
      />

      {/* 3. Marquee bar oscuro — igual al de Vogue entre secciones */}
      <MarqueeBar />

      {/* 4. Lo más leído (Must Read, 3 cols con número grande) */}
      <MustRead articles={mustReadArticles} />

      {/* 5. Carrusel horizontal: Guías destacadas */}
      <HorizontalCarousel heading="Guías destacadas" items={carouselItems} />

      {/* 6. Últimas notas (grid 3 cols × 2 filas) */}
      <LatestStories articles={latestArticles} />
    </main>
  );
}
