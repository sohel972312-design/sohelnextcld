

// ============================================================
// FILE: components/About.jsx
// ============================================================
"use client";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
 
const servicesData = [
  {
    icon: "bi bi-code-slash", iconColor: "#6cb8e6",
    iconBg: "rgba(108,184,230,.12)", iconBorder: "rgba(108,184,230,.2)",
    num: "01", title: "Web Development",
    shortDesc: "Custom, responsive websites built with clean, semantic, and SEO-friendly code.",
    items: ["Custom HTML / CSS / JavaScript", "Responsive & Mobile-First Layouts", "Performance & Speed Optimisation", "Cross-Browser Compatibility", "SEO-Friendly Code Structure", "Landing Pages & Multi-Page Sites"],
    tags: ["HTML5", "CSS3", "JavaScript", "Tailwind", "Bootstrap"],
  },
  {
    icon: "bi bi-wordpress", iconColor: "#e63946",
    iconBg: "rgba(230,57,70,.1)", iconBorder: "rgba(230,57,70,.2)",
    num: "02", title: "WordPress Development",
    shortDesc: "From custom themes to WooCommerce stores — powerful WordPress solutions.",
    items: ["Custom WordPress Themes", "Plugin Development & Integration", "WooCommerce E-Commerce Stores", "Page Builder (Elementor / WPBakery)", "Site Speed Optimisation", "Ongoing Maintenance & Support"],
    tags: ["WordPress", "WooCommerce", "Elementor", "PHP", "MySQL"],
  },
  {
    icon: "bi bi-palette", iconColor: "#2d8a4e",
    iconBg: "rgba(45,138,78,.1)", iconBorder: "rgba(45,138,78,.2)",
    num: "03", title: "Website Design",
    shortDesc: "Stunning UI/UX designs crafted in Figma, ready for pixel-perfect development.",
    items: ["UI / UX Design", "Figma Wireframes & Prototypes", "Brand Identity Design", "Landing Page Design", "Design System Creation", "Dark / Light Theme Variants"],
    tags: ["Figma", "UI/UX", "Branding", "Prototyping"],
  },
  {
    icon: "bi bi-search", iconColor: "#f4c542",
    iconBg: "rgba(244,197,66,.1)", iconBorder: "rgba(244,197,66,.2)",
    num: "04", title: "SEO & Marketing",
    shortDesc: "Rank higher, get found, and drive qualified traffic to your website.",
    items: ["On-Page & Technical SEO", "Keyword Research & Strategy", "Google Analytics & Search Console", "Speed & Core Web Vitals", "Local SEO Optimisation", "SEO Audit & Reporting"],
    tags: ["SEO", "Google Analytics", "Search Console", "Core Web Vitals"],
  },
  {
    icon: "bi bi-cloud-upload", iconColor: "#a5d4ef",
    iconBg: "rgba(108,184,230,.08)", iconBorder: "rgba(108,184,230,.15)",
    num: "05", title: "Hosting & Domain",
    shortDesc: "Complete setup — domain, hosting, SSL, and email — so you're online fast.",
    items: ["Domain Registration", "cPanel Hosting Setup", "SSL Certificate Configuration", "Professional Email Setup", "Website Migration", "DNS Management"],
    tags: ["cPanel", "SSL", "DNS", "Email Hosting"],
  },
  {
    icon: "bi bi-arrow-repeat", iconColor: "#c084fc",
    iconBg: "rgba(192,132,252,.1)", iconBorder: "rgba(192,132,252,.2)",
    num: "06", title: "Maintenance & Support",
    shortDesc: "Keep your website fast, secure, and up-to-date with regular maintenance.",
    items: ["Regular Plugin & Theme Updates", "Security Monitoring & Backups", "Performance Monitoring", "Bug Fixes & Troubleshooting", "Content Updates", "Monthly Reports"],
    tags: ["Maintenance", "Security", "Backups", "Support"],
  },
];
 

export default function ServiceGrid() {
  return (
   <>
     {/* ── Services Grid ── */}
         <section className="py-16 sm:py-24" style={{ background: "#101418" }}>
           <div className="w93 px-4 sm:px-6">
             <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
               {servicesData.map((s, i) => (
                 <div key={s.num} className="svc-card glass-card rounded-2xl p-6 sm:p-8 group cursor-default" data-aos="fade-up" data-aos-delay={(i % 3) * 80}>
                   <div className="flex items-start justify-between mb-5">
                     <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                       style={{ background: s.iconBg, border: `1px solid ${s.iconBorder}` }}>
                       <i className={s.icon} style={{ color: s.iconColor }} />
                     </div>
                     <span className="font-display font-extrabold text-4xl" style={{ color: `${s.iconColor}18` }}>{s.num}</span>
                   </div>
                   <h3 className="font-display font-extrabold text-lg text-white mb-2">{s.title}</h3>
                   <p className="text-white/55 text-sm leading-relaxed mb-5">{s.shortDesc}</p>
                   <div className="h-px mb-5" style={{ background: "rgba(255,255,255,.06)" }} />
                   <ul className="space-y-2 mb-6">
                     {s.items.map((item) => (
                       <li key={item} className="flex items-start gap-2 text-xs text-white/60">
                         <i className="bi bi-check-circle-fill mt-0.5 shrink-0" style={{ color: s.iconColor }} />
                         {item}
                       </li>
                     ))}
                   </ul>
                   <div className="flex flex-wrap gap-1.5">
                     {s.tags.map((tag) => (
                       <span key={tag} className="text-xs px-2.5 py-1 rounded-full font-display font-bold"
                         style={{ background: `${s.iconColor}18`, color: s.iconColor, border: `1px solid ${s.iconColor}33` }}>
                         {tag}
                       </span>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </section>
   </>
  );
}

