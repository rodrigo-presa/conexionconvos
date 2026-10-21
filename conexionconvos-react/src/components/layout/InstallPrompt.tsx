import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("ccvos-install-dismissed");
    if (stored) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setVisible(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (!visible || dismissed) return null;

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted" || outcome === "dismissed") {
      setVisible(false);
      setDismissed(true);
    }
  };

  const handleDismiss = () => {
    sessionStorage.setItem("ccvos-install-dismissed", "1");
    setDismissed(true);
    setVisible(false);
  };

  return (
    <div
      className="fixed right-3 z-[70] flex items-center gap-2 bg-black text-white px-3 py-1.5 shadow-md"
      style={{
        top: "32px",           /* justo debajo de la barra negra de anuncio (~32px) */
        borderRadius: "0 0 6px 6px",   /* redondeado solo abajo, como si colgara de la barra */
        maxWidth: "180px",
      }}
    >
      <button
        onClick={handleInstall}
        className="flex items-center gap-1.5 flex-1 hover:opacity-75 transition-opacity"
        aria-label="Instalar app"
      >
        <Download size={12} />
        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
          Instalar app
        </span>
      </button>
      <button
        onClick={handleDismiss}
        className="hover:opacity-60 transition-opacity"
        aria-label="Cerrar"
      >
        <X size={11} />
      </button>
    </div>
  );
}
