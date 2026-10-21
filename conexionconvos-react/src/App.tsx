import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFab } from "./components/layout/WhatsAppFab";
import { Home } from "./pages/Home";
import { SectionPage } from "./pages/SectionPage";
import { ArticlePage } from "./pages/ArticlePage";
import { QuienesSomos } from "./pages/QuienesSomos";
import { Contacto } from "./pages/Contacto";
import { Politica } from "./pages/Politica";
import { Publicidad } from "./pages/Publicidad";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5, retry: 1 },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white">
          <ScrollToTop />
          <Header />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/actualidad" element={<SectionPage category="Actualidad" />} />
              <Route path="/viajes" element={<SectionPage category="Viajes" />} />
              <Route path="/gastronomia" element={<SectionPage category="Gastronomía" />} />
              <Route path="/bienestar" element={<SectionPage category="Bienestar" />} />
              <Route path="/moda" element={<SectionPage category="Moda" />} />
              <Route path="/decoracion" element={<SectionPage category="Decoración" />} />
              <Route path="/escapadas-travel" element={<SectionPage category="Viajes" />} />
              <Route path="/gastronomia-de-nivel" element={<SectionPage category="Gastronomía" />} />
              <Route path="/bienestar-salud" element={<SectionPage category="Bienestar" />} />
              <Route path="/moda-tendencias" element={<SectionPage category="Moda" />} />
              <Route path="/decoracion-arquitectura" element={<SectionPage category="Decoración" />} />
              <Route path="/quienes-somos" element={<QuienesSomos />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/politica-de-privacidad" element={<Politica />} />
              <Route path="/publicidad" element={<Publicidad />} />
              <Route path="/:section/:slug" element={<ArticlePage />} />
              <Route path="*" element={<ArticlePage />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppFab />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
