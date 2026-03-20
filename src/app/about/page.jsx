
// ============================================================
// FILE: app/about/page.jsx
// ============================================================
"use client";
import Link from "next/link";

import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import About from "@/components/pages/home/About";
import HeroSection from "@/components/ui/HeroSection";
import Values from "@/components/pages/about/Values";
import JourneySection from "@/components/pages/about/JourneySection";

const statsData = [
  { num: "4+", label: "Years Experience" },
  { num: "13+", label: "Happy Clients" },
  { num: "30+", label: "Projects Done" },
  { num: "100%", label: "Satisfaction Rate" },
];



export default function AboutPage() {
  return (
    <>

      <HeroSection
        eyebrow="About Me"
        title={<>Crafting Digital Experiences That <span className="grad-text">Convert &amp; Inspire</span></>}
        subtitle="A passionate Web Designer, WordPress Developer & SEO Specialist from Gujarat, India — helping brands grow online."
        primaryLabel="My Story"
        primaryHref="/about#about"
        secondaryLabel="Whatsapp Me"
        secondaryHref="https://wa.me/+919723121537"
      />

      {/* ── Stats ── */}
      <section className="py-12 sm:py-16" style={{ background: "rgba(108,184,230,.04)", borderTop: "1px solid rgba(108,184,230,.08)", borderBottom: "1px solid rgba(108,184,230,.08)" }}>
        <div className="w93 px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {statsData.map((s, i) => (
              <div key={s.label} className="text-center" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="font-display font-extrabold text-4xl sm:text-5xl grad-text mb-2">{s.num}</div>
                <div className="text-white/50 text-sm tracking-widest uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story + Image ── */}
      <About   />
     <Values/>  

     <JourneySection />

      {/* ── CTA ── */}
      <CTASection
        eyebrow="Ready to build something extraordinary?"
        title="Let's discuss your project"
        description="Let's discuss your project and bring your vision to life."
        primary={{ label: "Start a Project", href: "/contact" }}
        secondary={{ label: "WhatsApp Me", href: "https://wa.me/+919723121537" }}
      />

    </>
  );
}
