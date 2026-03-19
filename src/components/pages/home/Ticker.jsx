// ============================================================
// FILE: components/Ticker.jsx
// ============================================================
import Link from "next/link";

export default function Ticker() {
  const items = ["Web Design", "WordPress Dev", "Tailwind CSS", "SEO Specialist", "UI/UX Design", "Hosting & Domain", "Digital Marketing"];
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-3.5 border-y"
      style={{ background: "rgba(108,184,230,.06)", borderColor: "rgba(108,184,230,.1)" }}
    >
      <div className="ticker-track">
        {doubled.map((text, i) => (
          <span key={i} className="flex items-center gap-3 shrink-0 font-display font-bold text-xs tracking-widest uppercase text-white/50">
            {text} <span className="text-[#6cb8e6]" style={{ fontSize: ".6rem" }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}


