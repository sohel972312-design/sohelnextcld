
// ============================================================
// FILE: components/pages/blog/BlogTicker.jsx
// ============================================================
export default function BlogTicker() {
  const items = [
    "Web Design", "WordPress Tips", "SEO Strategy", "Tailwind CSS",
    "UI/UX Design", "WooCommerce", "Performance", "Figma Tutorials",
  ];
  const doubled = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-3.5 border-y"
      style={{ background: "rgba(108,184,230,.06)", borderColor: "rgba(108,184,230,.1)" }}
    >
      <div className="ticker-track">
        {doubled.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-3 shrink-0 font-display font-bold text-xs tracking-widest uppercase text-white/50"
          >
            {text}
            <span className="text-[#6cb8e6]" style={{ fontSize: ".6rem" }}>●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
