const SANS = "'Jost', sans-serif";
const LBL: React.CSSProperties = { fontFamily: SANS, fontSize: "12px", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase" };

export function AdvertiseCta() {
  return (
    <section className="mt-16 bg-black text-white text-center px-6 py-14">
      <p style={{ ...LBL, color: "#bbb" }} className="mb-3">Espacios limitados por sección</p>
      <h2 style={{ fontFamily: SANS, fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 400, letterSpacing: "1px" }} className="mb-3">
        Tu marca merece estar donde ya la están buscando.
      </h2>
      <p className="mb-6 max-w-xl mx-auto" style={{ fontFamily: SANS, fontSize: "15px", color: "#ddd" }}>
        Escribinos hoy y recibí las tarifas actualizadas y una propuesta pensada para tu marca.
      </p>
      <a
        href="https://wa.me/541160512401?text=Hola%21%20Quiero%20anunciar%20mi%20marca%20en%20Conexi%C3%B3n%20con%20Vos.%20%C2%BFMe%20pasan%20las%20tarifas%3F"
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-white text-black px-8 py-3 hover:bg-[#eee] transition-colors"
        style={LBL}
      >
        Quiero anunciar · 11 6051-2401
      </a>
      <p className="mt-5" style={{ ...LBL, fontSize: "11px", letterSpacing: "1.2px", color: "#999" }}>
        Lunes a viernes de 10 a 18 h · conexionconvosok@gmail.com
      </p>
    </section>
  );
}
