

// ============================================================
// FILE: components/About.jsx
// ============================================================
"use client";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

 const timelineData = [
  {
    year: "2021",
    title: "Started Freelancing",
    desc: "Began my journey as a freelance web designer, building small business websites and landing pages using HTML, CSS, and JavaScript.",
    color: "#6cb8e6",
  },
  {
    year: "2022",
    title: "WordPress Expertise",
    desc: "Dived deep into WordPress development — custom themes, plugins, and WooCommerce stores for clients across India and abroad.",
    color: "#e63946",
  },
  {
    year: "2023",
    title: "UI/UX & Figma",
    desc: "Mastered Figma for high-fidelity prototyping and expanded into full UI/UX design services alongside development.",
    color: "#2d8a4e",
  },
  {
    year: "2024",
    title: "SEO & Digital Marketing",
    desc: "Added SEO strategy and digital marketing to my skill set — helping clients rank on page 1 and grow their online presence.",
    color: "#f4c542",
  },
  {
    year: "2025–Now",
    title: "Full-Stack Web Solutions",
    desc: "Delivering end-to-end solutions — from domain & hosting to design, development, SEO, and ongoing maintenance.",
    color: "#6cb8e6",
  },
];

const valuesData = [
  { icon: "bi bi-lightning-charge-fill", color: "#6cb8e6", bg: "rgba(108,184,230,.1)", border: "rgba(108,184,230,.2)", title: "Speed & Performance", desc: "Every website I build is optimised for blazing-fast load times and smooth user experience." },
  { icon: "bi bi-palette-fill", color: "#e63946", bg: "rgba(230,57,70,.1)", border: "rgba(230,57,70,.2)", title: "Pixel-Perfect Design", desc: "I obsess over details — typography, spacing, colours — until every pixel is exactly right." },
  { icon: "bi bi-graph-up-arrow", color: "#2d8a4e", bg: "rgba(45,138,78,.1)", border: "rgba(45,138,78,.2)", title: "Results Focused", desc: "Beautiful design means nothing without conversions. I build sites that turn visitors into leads." },
  { icon: "bi bi-headset", color: "#f4c542", bg: "rgba(244,197,66,.1)", border: "rgba(244,197,66,.2)", title: "Reliable Support", desc: "I'm with you after launch — maintenance, updates, and support whenever you need it." },
];

export default function JourneySection() {
  return (
    <>
     {/* ── Timeline ── */}
      <section className="py-16 sm:py-24"
        style={{ background: "linear-gradient(180deg,#111416 0%,#0d1e2e 50%,#111416 100%)" }}>
        <div className="w93 px-4 sm:px-6">
          
 
  <SectionHeading
              eyebrow="My Journey"
              title={
                <>How I Got 
                  <span className="grad-text"> Here</span>
                </>
              } 
              subtitle="A timeline of growth, learning, and delivering results."
              className="mb-6 text-center"
              titleClassName="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight mb-5"
            />




          
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px sm:-translate-x-px"
              style={{ background: "linear-gradient(180deg,transparent,rgba(108,184,230,.3) 10%,rgba(108,184,230,.3) 90%,transparent)" }} />
            <div className="space-y-10">
              {timelineData.map((item, i) => (
                <div key={item.year}
                  className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                  data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                  data-aos-delay={i * 80}
                >
                  {/* Card */}
                  <div className={`sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"} ml-14 sm:ml-0`}>
                    <div className="glass-card rounded-2xl p-5" style={{ borderColor: `${item.color}33` }}>
                      <div className="font-display font-extrabold text-sm mb-1" style={{ color: item.color }}>{item.year}</div>
                      <h4 className="font-display font-extrabold text-base text-white mb-2">{item.title}</h4>
                      <p className="text-white/55 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 top-5 w-4 h-4 rounded-full border-2 border-[#111416] z-10"
                    style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </>
  );
}

