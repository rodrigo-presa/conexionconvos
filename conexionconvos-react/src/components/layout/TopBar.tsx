import { useEffect, useState } from "react";
import { Cloud, Sun } from "lucide-react";

interface TopBarState {
  date: string;
  temp: number | null;
  weather: string | null;
  usdBlue: number | null;
}

export function TopBar() {
  const [data, setData] = useState<TopBarState>({
    date: "",
    temp: null,
    weather: null,
    usdBlue: null,
  });

  useEffect(() => {
    // Fecha en español
    const now = new Date();
    const dateStr = now.toLocaleDateString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setData((prev) => ({ ...prev, date: dateStr }));

    // Temperatura simulada (en producción: API openweathermap)
    setData((prev) => ({ ...prev, temp: 18, weather: "Nublado" }));

    // USD blue simulado (en producción: API bluelytics)
    setData((prev) => ({ ...prev, usdBlue: 1285 }));
  }, []);

  return (
    <div
      id="topbar"
      className="border-b border-gray-200 bg-white text-ink"
      style={{ fontSize: 13 }}
    >
      <div className="container-editorial">
        <div className="flex items-center gap-0 py-[7px] flex-wrap">
          {/* Fecha */}
          <span className="font-bold text-ink pr-3 border-r border-ink/12 capitalize">
            {data.date}
          </span>

          {/* Clima */}
          {data.temp !== null && (
            <span className="flex items-center gap-1.5 px-3 border-r border-ink/12 text-ink/70">
              {data.weather === "Soleado" ? (
                <Sun className="w-3.5 h-3.5" />
              ) : (
                <Cloud className="w-3.5 h-3.5" />
              )}
              <span>
                {data.temp}°C · {data.weather} · Buenos Aires
              </span>
            </span>
          )}

          {/* Dólar blue */}
          {data.usdBlue !== null && (
            <span className="px-3 text-ink/70">
              <span className="font-bold text-ink">USD Blue</span>
              {" "}$ {data.usdBlue.toLocaleString("es-AR")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
