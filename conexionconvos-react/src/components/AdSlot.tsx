import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({ format = "auto", minHeight = 90 }: { format?: string; minHeight?: number }) {
  const pushed = useRef(false);
  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* el bloque de anuncios no está disponible */
    }
  }, []);
  return (
    <div className="my-6 text-center overflow-hidden" style={{ maxHeight: 320 }} aria-label="Publicidad">
      <ins
        className="adsbygoogle"
        style={{ display: "block", minHeight }}
        data-ad-client="ca-pub-3869878899979799"
        data-ad-slot="auto"
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
