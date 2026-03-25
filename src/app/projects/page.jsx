
// ============================================================
// FILE: app/projects/page.jsx
// ============================================================
"use client";
import { useState } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const projectsData = [
  { cat: "web", emoji: "🌐", emojiStyle: { background: "linear-gradient(135deg,#0d2b45,#1a6fa8)" }, ovStyle: { background: "rgba(13,43,69,.85)" }, tag: "Web Dev", tagColor: "#6cb8e6", tagBg: "rgba(108,184,230,.15)", title: "Modern Business Website", desc: "Responsive multi-page business site with contact form, SEO optimisation, and fast load times.", tech: ["HTML5", "CSS3", "JavaScript", "Tailwind"], href: "#" },
  { cat: "wp", emoji: "🛒", emojiStyle: { background: "linear-gradient(135deg,#1a0808,#8b1a1a)" }, ovStyle: { background: "rgba(90,10,10,.85)" }, tag: "WordPress", tagColor: "#e63946", tagBg: "rgba(230,57,70,.15)", title: "E-Commerce Store", desc: "Full WooCommerce store with custom theme, product filters, cart, checkout, and payment integration.", tech: ["WordPress", "WooCommerce", "PHP", "CSS3"], href: "#" },
  { cat: "design", emoji: "🎨", emojiStyle: { background: "linear-gradient(135deg,#0a1f0a,#1a5e1a)" }, ovStyle: { background: "rgba(10,50,10,.85)" }, tag: "Design", tagColor: "#2d8a4e", tagBg: "rgba(45,138,78,.15)", title: "Creative Portfolio", desc: "Dark-themed personal portfolio with animated sections, Figma-to-code, and smooth interactions.", tech: ["Figma", "HTML5", "CSS3", "JS"], href: "#" },
  { cat: "wp", emoji: "✍️", emojiStyle: { background: "linear-gradient(135deg,#1a1a0a,#5e5e1a)" }, ovStyle: { background: "rgba(60,55,10,.85)" }, tag: "WordPress", tagColor: "#f4c542", tagBg: "rgba(244,197,66,.15)", title: "News & Blog Site", desc: "WordPress blog with custom post types, category filtering, Yoast SEO, and newsletter integration.", tech: ["WordPress", "Yoast SEO", "PHP"], href: "#" },
  { cat: "web", emoji: "📱", emojiStyle: { background: "linear-gradient(135deg,#1a0a1a,#5e1a5e)" }, ovStyle: { background: "rgba(50,10,50,.85)" }, tag: "Web Dev", tagColor: "#c084fc", tagBg: "rgba(192,132,252,.15)", title: "SaaS Landing Page", desc: "High-converting SaaS landing page with animated hero, feature sections, pricing table, and CTAs.", tech: ["Tailwind CSS", "JavaScript", "HTML5"], href: "#" },
  { cat: "design", emoji: "🏢", emojiStyle: { background: "linear-gradient(135deg,#0a1a1a,#1a5e5e)" }, ovStyle: { background: "rgba(10,50,50,.85)" }, tag: "Design", tagColor: "#2dd4bf", tagBg: "rgba(45,212,191,.15)", title: "Corporate Branding", desc: "Full brand identity package — logo, colour palette, typography system, and brand guidelines PDF.", tech: ["Figma", "Branding", "Design System"], href: "#" },
  { cat: "web", emoji: "🍽️", emojiStyle: { background: "linear-gradient(135deg,#2a0a00,#8b3a00)" }, ovStyle: { background: "rgba(80,30,0,.85)" }, tag: "Web Dev", tagColor: "#fb923c", tagBg: "rgba(251,146,60,.15)", title: "Restaurant Website", desc: "Elegant restaurant site with online menu, reservation form, Google Maps embed, and mobile-first design.", tech: ["HTML5", "CSS3", "JavaScript"], href: "#" },
  { cat: "wp", emoji: "🏥", emojiStyle: { background: "linear-gradient(135deg,#00122a,#002a5e)" }, ovStyle: { background: "rgba(0,20,60,.85)" }, tag: "WordPress", tagColor: "#60a5fa", tagBg: "rgba(96,165,250,.15)", title: "Healthcare Clinic Site", desc: "WordPress healthcare website with appointment booking plugin, doctor profiles, and service pages.", tech: ["WordPress", "Elementor", "PHP"], href: "#" },
  { cat: "design", emoji: "📊", emojiStyle: { background: "linear-gradient(135deg,#0a0a2a,#1a1a6e)" }, ovStyle: { background: "rgba(10,10,60,.85)" }, tag: "Design", tagColor: "#818cf8", tagBg: "rgba(129,140,248,.15)", title: "SaaS Dashboard UI", desc: "Clean analytics dashboard UI with data visualisations, dark mode, and fully responsive layout in Figma.", tech: ["Figma", "UI/UX", "Dashboard"], href: "#" },
];

const filterBtns = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "Web Dev" },
  { key: "wp", label: "WordPress" },
  { key: "design", label: "Design" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("all");
  const filtered = projectsData.filter((p) => active === "all" || p.cat === active);

  return (
    <main className="pt-24 pb-20" style={{ background: "#111416" }}>

      {/* ── Hero Banner ── */}
      <section className="relative py-20 sm:py-28 overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%,rgba(108,184,230,.15) 0%,transparent 70%),linear-gradient(160deg,#0d1f30 0%,#0d2b45 50%,#0a1a28 100%)" }}>
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="w93 px-4 sm:px-6 relative z-10 text-center">
          <SectionHeading
            eyebrow="My Work"
            title={<>Recent <span className="grad-text">Projects</span></>}
            subtitle="A showcase of websites, designs, and digital experiences I've built for clients worldwide."
            className="mb-8"
            titleClassName="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-tight mb-5"
          />
          <div className="flex flex-wrap justify-center gap-3 text-sm text-white/50" data-aos="fade-up" data-aos-delay="100">
            {[{ icon: "bi bi-grid-3x3-gap-fill text-[#6cb8e6]", text: "30+ Projects" }, { icon: "bi bi-people-fill text-green-400", text: "13+ Clients" }, { icon: "bi bi-globe2 text-[#f4c542]", text: "Worldwide" }].map((b) => (
              <span key={b.text} className="flex items-center gap-2 px-4 py-2 rounded-full" style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}>
                <i className={b.icon} /> {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filter + Grid ── */}
      <section className="py-16 sm:py-24" style={{ background: "#101418" }}>
        <div className="w93 px-4 sm:px-6">

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12" data-aos="fade-up">
            {filterBtns.map((btn) => (
              <button key={btn.key} onClick={() => setActive(btn.key)}
                className="font-display font-bold text-xs tracking-widest uppercase px-4 sm:px-5 py-2 rounded-full transition-all"
                style={active === btn.key
                  ? { background: "rgba(108,184,230,.15)", border: "1px solid rgba(108,184,230,.35)", color: "#6cb8e6" }
                  : { background: "transparent", border: "1px solid rgba(255,255,255,.1)", color: "rgba(255,255,255,.5)" }
                }>
                {btn.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((item, i) => (
              <div key={i} className="port-card group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ background: "#1c2128", border: "1px solid rgba(255,255,255,.06)" }}
                data-aos="fade-up" data-aos-delay={(i % 3) * 80}>
                {/* Thumbnail */}
                <div className="port-img h-48 sm:h-52 flex items-center justify-center text-5xl" style={item.emojiStyle}>
                  {item.emoji}
                </div>
                {/* Overlay */}
                <div className="port-ov absolute inset-0 flex items-center justify-center" style={item.ovStyle}>
                  <div className="text-center px-4">
                    <div className="font-display font-extrabold text-white text-sm mb-1">{item.title}</div>
                    <p className="text-white/65 text-xs mb-3 leading-relaxed">{item.desc}</p>
                    <Link href={item.href} className="inline-flex items-center gap-1.5 text-[#6cb8e6] text-xs font-bold border border-[#6cb8e6]/30 px-3 py-1.5 rounded-full hover:bg-[#6cb8e6]/10 transition-all">
                      View Project <i className="bi bi-arrow-up-right" />
                    </Link>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4 sm:p-5">
                  <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                    style={{ color: item.tagColor, background: item.tagBg }}>
                    {item.tag}
                  </span>
                  <h4 className="font-display font-extrabold text-sm sm:text-base text-white mt-2 mb-1 port-name transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-white/45 text-xs mb-3 line-clamp-2">{item.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded text-white/50 font-mono"
                        style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="port-arr absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-[#6cb8e6] text-sm transition-all duration-300"
                  style={{ background: "rgba(108,184,230,.1)", border: "1px solid rgba(108,184,230,.2)" }}>
                  <i className="bi bi-arrow-up-right" />
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12" data-aos="fade-up">
            <Link href="/contact" className="btn-g text-white/80 font-display font-semibold text-sm px-8 py-4 rounded-full inline-flex items-center gap-2">
              Have a Project? Let&apos;s Work <i className="bi bi-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
