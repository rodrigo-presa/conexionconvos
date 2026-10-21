export const SANS = "'Jost', sans-serif";
export const LABEL: React.CSSProperties = { fontFamily: SANS, fontSize: "12px", fontWeight: 500, letterSpacing: "1.6px", textTransform: "uppercase", color: "#1a1a1a" };
export const BYLINE: React.CSSProperties = { ...LABEL, fontSize: "11px", letterSpacing: "1.8px" };
export const BTN: React.CSSProperties = { ...LABEL, color: "#fff", letterSpacing: "2px" };

export function PageTitle({ children, sub }: { children: string; sub?: string }) {
  return (
    <div className="mb-10">
      <div className="border-y border-[#e8e6e1] py-4 text-center">
        <h1 style={{ fontFamily: SANS, fontSize: "24px", fontWeight: 400, letterSpacing: "2px", textTransform: "uppercase" }}>{children}</h1>
      </div>
      {sub && <p className="text-center mt-3" style={{ fontFamily: SANS, fontSize: "14px", color: "#555" }}>{sub}</p>}
    </div>
  );
}

export function SectionHeading({ children }: { children: string }) {
  return (
    <div className="border-y border-[#e8e6e1] py-3 text-center mb-6">
      <h2 style={{ fontFamily: SANS, fontSize: "20px", fontWeight: 400, letterSpacing: "2px", textTransform: "uppercase" }}>{children}</h2>
    </div>
  );
}
