
// ============================================================
// FILE: components/Portfolio.jsx
// ============================================================
"use client";
import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const portfolioItems = [
  { cat: "web", emoji: "🌐", emojiStyle: { background: "linear-gradient(135deg,#0d2b45,#1a6fa8)" }, ovStyle: { background: "rgba(13,43,69,.85)" }, ovTitle: "Business Website", tag: "Web Dev", tagClass: "text-[#6cb8e6]", title: "Modern Business Website", desc: "Responsive multi-page site with SEO" },
  { cat: "wp", emoji: "🛒", emojiStyle: { background: "linear-gradient(135deg,#1a0808,#8b1a1a)" }, ovStyle: { background: "rgba(90,10,10,.85)" }, ovTitle: "WooCommerce Store", tag: "WordPress", tagClass: "text-[#e63946]", title: "E-Commerce Store", desc: "WooCommerce with custom theme" },
  { cat: "design", emoji: "🎨", emojiStyle: { background: "linear-gradient(135deg,#0a1f0a,#1a5e1a)" }, ovStyle: { background: "rgba(10,50,10,.85)" }, ovTitle: "Portfolio Design", tag: "Design", tagClass: "text-green-400", title: "Creative Portfolio", desc: "Figma-to-code with dark theme" },
  { cat: "wp", emoji: "✍️", emojiStyle: { background: "linear-gradient(135deg,#1a1a0a,#5e5e1a)" }, ovStyle: { background: "rgba(60,55,10,.85)" }, ovTitle: "Blog Platform", tag: "WordPress", tagClass: "text-yellow-400", title: "News & Blog Site", desc: "Custom WP blog with SEO plugin" },
  { cat: "web", emoji: "📱", emojiStyle: { background: "linear-gradient(135deg,#1a0a1a,#5e1a5e)" }, ovStyle: { background: "rgba(50,10,50,.85)" }, ovTitle: "Landing Page", tag: "Web Dev", tagClass: "text-purple-400", title: "SaaS Landing Page", desc: "High-converting Tailwind page" },
  { cat: "design", emoji: "🏢", emojiStyle: { background: "linear-gradient(135deg,#0a1a1a,#1a5e5e)" }, ovStyle: { background: "rgba(10,50,50,.85)" }, ovTitle: "Brand Identity", tag: "Design", tagClass: "text-teal-400", title: "Corporate Branding", desc: "Full brand identity package" },
];

const filterBtns = [
  { key: "all", label: "All" },
  { key: "web", label: "Web Dev" },
  { key: "wp", label: "WordPress" },
  { key: "design", label: "Design" },
];

export default function Portfolio() {
  const [active, setActive] = useState("all");
  const filtered = portfolioItems.filter((p) => active === "all" || p.cat === active);

  return (
    <section
      id="portfolio"
      className="section-py py-16 sm:py-15 lg:py-20 relative"
      style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%,rgba(108,184,230,.07) 0%,transparent 70%),linear-gradient(180deg,#111416 0%,#0d1e2e 50%,#111416 100%)" }}
    >
      <div className="w93 px-4 sm:px-6">
        


        <SectionHeading
          eyebrow="My Work"
          title={
            <>Recent <span className="grad-text">Projects</span>
            </>
          }
          description="Showcasing creative projects blending design, strategy, and innovation."
          data-aos="fade-up"
          className="mb-6 text-center"
          titleClassName="font-display text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight mb-5"
        />







        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10" data-aos="fade-up" data-aos-delay="50">
          {filterBtns.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActive(btn.key)}
              className="font-display font-bold text-xs tracking-widest uppercase px-4 sm:px-5 py-2 rounded-full transition-all"
              style={
                active === btn.key
                  ? { background: "rgba(108,184,230,.15)", border: "1px solid rgba(108,184,230,.35)", color: "#6cb8e6" }
                  : { background: "transparent", border: "1px solid rgba(255,255,255,.1)", color: "rgba(255,255,255,.5)" }
              }
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="port-card group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ background: "#1c2128", border: "1px solid rgba(255,255,255,.06)" }}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 80}
            >
              <div className="port-img h-44 sm:h-52 flex items-center justify-center text-4xl sm:text-5xl" style={item.emojiStyle}>
                {item.emoji}
              </div>
              <div className="port-ov absolute inset-0 flex items-center justify-center" style={item.ovStyle}>
                <div className="text-center">
                  <div className="font-display font-extrabold text-white text-sm mb-2">{item.ovTitle}</div>
                  <Link href="#" className="inline-flex items-center gap-1.5 text-[#6cb8e6] text-xs font-bold">
                    View Project <i className="bi bi-arrow-up-right" />
                  </Link>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <span className={`text-xs font-bold tracking-widest uppercase ${item.tagClass}`}>{item.tag}</span>
                <h4 className="font-display font-extrabold text-sm sm:text-base text-white mt-1 mb-1 port-name transition-colors">
                  {item.title}
                </h4>
                <p className="text-white/45 text-xs">{item.desc}</p>
              </div>
              <div
                className="port-arr absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#6cb8e6] text-sm transition-all duration-300"
                style={{ background: "rgba(108,184,230,.1)", border: "1px solid rgba(108,184,230,.2)" }}
              >
                <i className="bi bi-arrow-up-right" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


