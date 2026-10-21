import { Link } from "react-router-dom";
import { AdvertiseCta } from "../components/AdvertiseCta";
import { usePageTitle } from "../components/usePageTitle";
import { BYLINE, LABEL, PageTitle, SANS } from "./Shared";

const P: React.CSSProperties = { fontFamily: SANS, fontSize: "17px", lineHeight: 1.7, color: "#222" };

const PRINCIPIOS = [
  ["Verificación antes de publicar", "No publicamos hasta confirmar con la fuente primaria. Cada restaurante que recomendamos, lo visitamos. Cada destino que cubrimos, lo conocemos."],
  ["Criterio propio, no rankings pagos", "Nuestras recomendaciones gastronómicas y turísticas surgen de la experiencia editorial. Ningún establecimiento paga para aparecer en nuestras notas de redacción."],
  ["Transparencia en contenido patrocinado", "El contenido patrocinado y las notas de marca están siempre identificados con claridad. Lo editorial y lo comercial nunca se mezclan sin advertencia."],
  ["Independencia de criterio", "Ningún anunciante influye en nuestra cobertura editorial. Las alianzas comerciales que cerramos no condicionan las opiniones que publicamos."],
  ["Voz propia, lectores reales", "Escribimos para un lector específico que vive entre Buenos Aires, Montevideo y el mundo. No somos una agencia de contenidos: somos un medio con identidad."],
  ["Actualización permanente", "Las notas tienen fecha de publicación visible. Cuando un dato cambia, actualizamos. No dejamos información desactualizada en circulación."],
];

export function QuienesSomos() {
  usePageTitle("Quiénes somos");
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
      <PageTitle>Quiénes somos</PageTitle>

      <section className="max-w-[760px] mx-auto mb-14">
        <p style={LABEL} className="mb-3">Nuestra identidad</p>
        <h2 style={{ fontFamily: SANS, fontSize: "clamp(28px,3.6vw,40px)", fontWeight: 400, lineHeight: 1.15 }} className="mb-5">
          Historias, lugares y personas que conectan
        </h2>
        <p style={P} className="mb-4">Conexión con Vos es una revista digital independiente de estilo de vida. Escribimos sobre gastronomía, viajes, bienestar, moda y decoración desde un lugar distinto: el de la experiencia vivida, verificada y narrada con criterio propio.</p>
        <p style={P}>Nuestro público vive en Buenos Aires, Montevideo, Punta del Este y Miami. Son lectores que exigen calidad, que eligen cuándo leer —no lo que el algoritmo empuja—, y que confían en una voz editorial que los conoce. Ese es el pacto que mantenemos en cada nota.</p>
      </section>

      <section className="max-w-[760px] mx-auto mb-14">
        <p style={LABEL} className="mb-3">Dirección editorial</p>
        <h2 style={{ fontFamily: SANS, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400 }} className="mb-5">El equipo que está detrás</h2>
        <p style={P} className="mb-8">Conexión con Vos nació de la convicción de que la cultura del Río de la Plata merece un medio a su altura. Un espacio donde Buenos Aires y Montevideo conversan de igual a igual, donde los bodegones históricos tienen el mismo peso que los restaurantes de autor, y donde un destino de playa en Uruguay puede ser tan relevante como una dirección en Miami.</p>
        <div className="border-l-4 border-black bg-[#f7f6f2] p-6">
          <h3 style={{ fontFamily: SANS, fontSize: "20px", fontWeight: 500 }}>Rodrigo Presa</h3>
          <p style={{ ...BYLINE, color: "#888" }} className="mb-3">Director General & Editorial</p>
          <p style={{ ...P, fontSize: "16px" }} className="mb-3">Periodista y gestor cultural con más de dos décadas construyendo puentes entre Argentina, Uruguay y el mundo. Rodrigo fundó Conexión con Vos con una idea clara: que el estilo de vida del Río de la Plata merece narrarse desde adentro, con la voz de quien lo vive.</p>
          <p style={{ ...P, fontSize: "16px" }} className="mb-3">Su visión editorial parte de un principio simple: contar menos cosas, pero contarlas bien. Frente a la avalancha de contenido efímero, apuesta por un periodismo pausado, verificado y con perspectiva propia. Cada nota que lleva el sello de Conexión con Vos pasa por ese filtro.</p>
          <a href="mailto:conexionconvosok@gmail.com" style={LABEL} className="underline hover:opacity-60">conexionconvosok@gmail.com</a>
        </div>
      </section>

      <section className="mb-14">
        <p style={LABEL} className="text-center mb-3">Cómo trabajamos</p>
        <div className="border-y border-[#e8e6e1] py-3 text-center mb-8">
          <h2 style={{ fontFamily: SANS, fontSize: "20px", fontWeight: 400, letterSpacing: "2px", textTransform: "uppercase" }}>Principios editoriales</h2>
        </div>
        <div className="grid gap-x-8 gap-y-8 grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPIOS.map(([t, d]) => (
            <div key={t}>
              <h3 style={{ fontFamily: SANS, fontSize: "17px", fontWeight: 500 }} className="mb-2">{t}</h3>
              <p style={{ fontFamily: SANS, fontSize: "15px", lineHeight: 1.6, color: "#444" }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[760px] mx-auto mb-10">
        <p style={LABEL} className="mb-3">Nuestro universo</p>
        <h2 style={{ fontFamily: SANS, fontSize: "clamp(24px,3vw,32px)", fontWeight: 400 }} className="mb-5">Qué cubrimos y por qué</h2>
        <p style={P} className="mb-4">El eje geográfico de Conexión con Vos es el corredor del Río de la Plata y sus extensiones naturales: Buenos Aires como epicentro cultural y gastronómico, Montevideo, Colonia y Punta del Este como destinos con identidad propia, y Miami como el puente entre Latinoamérica y el mundo anglosajón.</p>
        <p style={P}>Cubrimos gastronomía con historia (bodegones, almacenes de campo, restaurantes de autor), escapadas y viajes en la región y el mundo, bienestar y estilo de vida, tendencias de moda con mirada local, y decoración y arquitectura del espacio doméstico. No somos generalistas: elegimos temas donde tenemos algo concreto que decir.</p>
      </section>

      <div className="grid gap-6 grid-cols-[minmax(0,1fr)] md:grid-cols-2">
        <div className="border border-[#e8e6e1] p-6">
          <h3 style={{ fontFamily: SANS, fontSize: "18px", fontWeight: 500 }} className="mb-2">Redacción & Prensa</h3>
          <p style={{ fontFamily: SANS, fontSize: "15px", color: "#444" }}>Para notas, entrevistas, correcciones o cualquier consulta editorial: escribinos a <a className="underline" href="mailto:conexionconvosok@gmail.com">conexionconvosok@gmail.com</a></p>
        </div>
        <div className="border border-[#e8e6e1] p-6">
          <h3 style={{ fontFamily: SANS, fontSize: "18px", fontWeight: 500 }} className="mb-2">Alianzas Comerciales</h3>
          <p style={{ fontFamily: SANS, fontSize: "15px", color: "#444" }}>¿Tu marca quiere llegar a los lectores de Conexión con Vos? <Link className="underline" to="/contacto">Escribinos</Link>.</p>
        </div>
      </div>

      <AdvertiseCta />
    </div>
  );
}
