

// ============================================================
// FILE: components/About.jsx
// ============================================================
"use client";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const processSteps = [
  { num: "01", icon: "bi bi-binoculars text-[#6cb8e6]", iconBg: "rgba(108,184,230,.12)", iconBorder: "rgba(108,184,230,.2)", numColor: "#6cb8e6", numBg: "rgba(108,184,230,.15)", title: "Discovery", desc: "We discuss your goals, target audience, and project requirements in detail." },
  { num: "02", icon: "bi bi-pen text-[#e63946]", iconBg: "rgba(230,57,70,.1)", iconBorder: "rgba(230,57,70,.2)", numColor: "#e63946", numBg: "rgba(230,57,70,.12)", title: "Design", desc: "I create wireframes and high-fidelity mockups for your approval before any coding starts." },
  { num: "03", icon: "bi bi-code-slash text-[#2d8a4e]", iconBg: "rgba(45,138,78,.1)", iconBorder: "rgba(45,138,78,.2)", numColor: "#2d8a4e", numBg: "rgba(45,138,78,.12)", title: "Development", desc: "Clean, semantic code built to web standards — fast, responsive, and accessible." },
  { num: "04", icon: "bi bi-rocket-takeoff text-[#f4c542]", iconBg: "rgba(244,197,66,.1)", iconBorder: "rgba(244,197,66,.2)", numColor: "#f4c542", numBg: "rgba(244,197,66,.12)", title: "Launch", desc: "Testing, optimisation, and a smooth deployment — your site goes live on time." },
];
 
export default function ProcessSection() {
  return (
   <>
      {/* ── Process ── */}
           <section className="py-16 sm:py-24"
             style={{ background: "linear-gradient(180deg,#111416 0%,#0d1e2e 50%,#111416 100%)" }}>
             <div className="w93 px-4 sm:px-6">
               <SectionHeading
                 eyebrow="My Process"
                 title={<>How I <span className="grad-text">Work</span></>}
                 subtitle="A structured workflow from first call to final launch — every time."
                 className="mb-12 text-center "
                 titleClassName="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-4"
               />
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                 {processSteps.map((s, i) => (
                   <div key={s.num} className="proc-card" data-aos="zoom-in" data-aos-delay={i * 100}>
                     <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl"
                       style={{ background: s.iconBg, border: `1px solid ${s.iconBorder}` }}>
                       <i className={s.icon} />
                     </div>
                     <div className="inline-flex items-center justify-center w-7 h-7 rounded-full font-display font-extrabold text-xs mb-3"
                       style={{ background: s.numBg, color: s.numColor }}>
                       {s.num}
                     </div>
                     <h4 className="font-display font-extrabold text-white text-base mb-2">{s.title}</h4>
                     <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
           </section>
     
   </>
  );
}

