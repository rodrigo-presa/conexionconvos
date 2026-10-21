import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TopBar } from "./components/layout/TopBar";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { WhatsAppFab } from "./components/layout/WhatsAppFab";
import { Home } from "./pages/Home";
import { SectionPage } from "./pages/SectionPage";

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
          <TopBar />
          <Header />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/viajes" element={<SectionPage category="Viajes" />} />
              <Route path="/gastronomia" element={<SectionPage category="Gastronomía" />} />
              <Route path="/bienestar" element={<SectionPage category="Bienestar" />} />
              <Route path="/moda" element={<SectionPage category="Moda" />} />
              <Route path="/decoracion" element={<SectionPage category="Decoración" />} />
              {/* Artículo individual — a implementar */}
              <Route
                path="/:slug"
                element={
                  <main className="container-editorial py-20 text-center">
                    <p className="text-muted2">Artículo en construcción.</p>
                  </main>
                }
              />
            </Routes>
          </div>

          <Footer />
          <WhatsAppFab />
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
