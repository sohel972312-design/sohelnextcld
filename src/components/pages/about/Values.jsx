

// ============================================================
// FILE: components/About.jsx
// ============================================================
"use client";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const valuesData = [
  {
    title: "Quality",
    desc: "Delivering high-quality work that exceeds expectations.",
    icon: "bi-star",
    bg: "#ff6b6b",
    border: "#ff6b6b",
    color: "#ffffff"
  },
  {
    title: "Innovation",
    desc: "Embracing new technologies and creative solutions.",
    icon: "bi-lightbulb",
    bg: "#4ecdc4",
    border: "#4ecdc4",
    color: "#ffffff"
  },
  {
    title: "Reliability",
    desc: "Being dependable and meeting deadlines consistently.",
    icon: "bi-shield-check",
    bg: "#45b7d1",
    border: "#45b7d1",
    color: "#ffffff"
  },
  {
    title: "Collaboration",
    desc: "Working closely with clients to achieve their goals.",
    icon: "bi-people",
    bg: "#f9ca24",
    border: "#f9ca24",
    color: "#ffffff"
  }
];

export default function Values() {
  return (
    <section className="py-16 sm:py-24" style={{ background: "#101418" }}>
      <div className="max-w-7xl px-4 sm:px-6 mx-auto">
        <SectionHeading
          eyebrow="My Values"
            title={
                <>What I  
                  <span className="grad-text"> Stand For</span>
                </>
              } 
          description="The principles that guide every project I work on."
          className="mb-12 text-center"
          titleClassName="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-4"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {valuesData.map((v, i) => (
            <div key={v.title} className="glass-card rounded-2xl p-6 text-center group cursor-default" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl transition-all group-hover:scale-110 group-hover:-rotate-6"
                style={{ background: v.bg, border: `1px solid ${v.border}` }}>
                <i className={`${v.icon}`} style={{ color: v.color }} />
              </div>
              <h3 className="font-display font-extrabold text-base text-white mb-2">{v.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

