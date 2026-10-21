import { useState } from "react";
import { usePageTitle } from "../components/usePageTitle";
import { BTN, LABEL, PageTitle, SANS } from "./Shared";

const SECCIONES = ["Bienestar & Salud", "Moda & Tendencias", "Decoración & Arquitectura", "Gastronomía de nivel", "Escapadas & Travel", "Perfiles & Mujeres", "Todavía no sé"];

const FIELD = "w-full border border-[#d8d6d1] px-3 py-3 outline-none focus:border-black bg-white";
const FSTYLE: React.CSSProperties = { fontFamily: SANS, fontSize: "16px" };

export function Contacto() {
  usePageTitle("Contacto");
  const [f, setF] = useState({ nombre: "", tel: "", mail: "", seccion: SECCIONES[0], msg: "" });
  const [err, setErr] = useState("");
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.nombre.trim() || !f.msg.trim()) {
      setErr("Completá tu nombre y el mensaje.");
      return;
    }
    setErr("");
    const text = `Hola! Soy ${f.nombre}. Quiero anunciar en la sección ${f.seccion} de Conexión con Vos.\n${f.msg}${f.tel ? `\nTeléfono: ${f.tel}` : ""}${f.mail ? `\nCorreo: ${f.mail}` : ""}`;
    window.open(`https://wa.me/541160512401?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-8">
      <PageTitle sub="Contanos qué hacés y a quién querés llegar. Te respondemos por WhatsApp con las tarifas y una propuesta pensada para tu marca.">Contacto</PageTitle>

      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] max-w-5xl mx-auto">
        <form onSubmit={submit} className="space-y-4" noValidate>
          <h2 style={{ fontFamily: SANS, fontSize: "26px", fontWeight: 400 }} className="mb-2">Hablemos de tu marca</h2>
          <label className="block"><span style={LABEL} className="block mb-1">Nombre</span><input className={FIELD} style={FSTYLE} value={f.nombre} onChange={set("nombre")} autoComplete="name" /></label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block"><span style={LABEL} className="block mb-1">Teléfono</span><input className={FIELD} style={FSTYLE} value={f.tel} onChange={set("tel")} autoComplete="tel" /></label>
            <label className="block"><span style={LABEL} className="block mb-1">Correo electrónico</span><input type="email" className={FIELD} style={FSTYLE} value={f.mail} onChange={set("mail")} autoComplete="email" /></label>
          </div>
          <label className="block"><span style={LABEL} className="block mb-1">¿En qué sección querés anunciar?</span>
            <select className={FIELD} style={FSTYLE} value={f.seccion} onChange={set("seccion")}>{SECCIONES.map((s) => <option key={s}>{s}</option>)}</select>
          </label>
          <label className="block"><span style={LABEL} className="block mb-1">Mensaje</span><textarea rows={5} className={FIELD} style={FSTYLE} value={f.msg} onChange={set("msg")} /></label>
          {err && <p role="alert" style={{ fontFamily: SANS, fontSize: "14px", color: "#b00020" }}>{err}</p>}
          <button type="submit" style={BTN} className="bg-black px-8 py-3 hover:bg-[#333] transition-colors">Enviar por WhatsApp</button>
          <p style={{ fontFamily: SANS, fontSize: "13px", color: "#777" }}>Al enviar se abre WhatsApp con tu mensaje ya armado.</p>
        </form>

        <aside>
          <h2 style={{ fontFamily: SANS, fontSize: "20px", fontWeight: 400, letterSpacing: "2px", textTransform: "uppercase" }} className="mb-6 border-b border-[#e8e6e1] pb-3">Datos de contacto</h2>
          <dl className="space-y-5" style={{ fontFamily: SANS, fontSize: "16px" }}>
            <div><dt style={LABEL} className="mb-1">WhatsApp y teléfono</dt><dd><a className="underline" href="https://wa.me/541160512401">+54 11 6051-2401</a></dd></div>
            <div><dt style={LABEL} className="mb-1">Correo</dt><dd><a className="underline" href="mailto:conexionconvosok@gmail.com">conexionconvosok@gmail.com</a></dd></div>
            <div><dt style={LABEL} className="mb-1">Horario de atención</dt><dd>Lunes a viernes, de 10 a 18 h</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
