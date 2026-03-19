

// ============================================================
// FILE: components/Process.jsx
// ============================================================
"use client";

const processSteps = [
  {
    icon: "bi bi-binoculars text-[#6cb8e6]",
    iconBg: "rgba(108,184,230,.12)", iconBorder: "rgba(108,184,230,.2)",
    numBg: "rgba(108,184,230,.15)", numColor: "#6cb8e6",
    num: "01", title: "Research & Discovery",
    desc: "Understanding your goals, target audience, and competitors to lay the perfect foundation.",
  },
  {
    icon: "bi bi-pen text-[#e63946]",
    iconBg: "rgba(230,57,70,.1)", iconBorder: "rgba(230,57,70,.2)",
    numBg: "rgba(230,57,70,.12)", numColor: "#e63946",
    num: "02", title: "Design & Prototype",
    desc: "Creating wireframes and high-fidelity Figma mockups with pixel-perfect UI/UX principles.",
  },
  {
    icon: "bi bi-rocket-takeoff text-green-400",
    iconBg: "rgba(45,138,78,.1)", iconBorder: "rgba(45,138,78,.2)",
    numBg: "rgba(45,138,78,.12)", numColor: "#2d8a4e",
    num: "03", title: "Build & Launch",
    desc: "Clean semantic code, cross-browser testing, performance optimisation, and deployment.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section-py py-16 sm:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg,#101418 0%,#0d1e2e 50%,#101418 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(108,184,230,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(108,184,230,.03) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
      <div className="w93 px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-12" data-aos="fade-up">
          <div className="eyebrow mb-3">How I Work</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white leading-tight mb-3">My Process</h2>
          <p className="text-white/50 text-sm max-w-md mx-auto">A clear, structured workflow from concept to launch — every time.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="80">
          {processSteps.map((s, i) => (
            <div key={s.num} className="proc-card" data-aos="zoom-in" data-aos-delay={i * 120}>
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl"
                style={{ background: s.iconBg, border: `1px solid ${s.iconBorder}` }}>
                <i className={s.icon} />
              </div>
              <div className="inline-flex items-center justify-center w-7 h-7 rounded-full font-display font-extrabold text-xs mb-3"
                style={{ background: s.numBg, color: s.numColor }}>
                {s.num}
              </div>
              <h4 className="font-display font-extrabold text-white text-sm sm:text-base mb-2">{s.title}</h4>
              <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

