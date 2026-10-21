import pages from "../data/pages.json";
import { usePageTitle } from "../components/usePageTitle";
import { PageTitle } from "./Shared";

export function Politica() {
  usePageTitle("Política de Privacidad y Términos");
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
      <PageTitle sub="Última actualización: octubre de 2026 · conexionconvos.com">Política de Privacidad</PageTitle>
      <div className="max-w-[760px] mx-auto prose-cc" dangerouslySetInnerHTML={{ __html: pages.politica }} />
    </div>
  );
}
