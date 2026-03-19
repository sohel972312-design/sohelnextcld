

// ============================================================
// FILE: components/Skills.jsx
// ============================================================
"use client";
import { useRef, useEffect } from "react";

const skillsData = [
  { icon: "bi bi-filetype-html text-orange-400", label: "HTML5 / CSS3", val: 95 },
  { icon: "bi bi-wordpress text-blue-400", label: "WordPress", val: 90 },
  { icon: null, label: "Tailwind CSS", val: 88, prefix: <span className="text-teal-400 font-mono font-bold text-xs">TW</span> },
  { icon: "bi bi-pen text-pink-400", label: "Figma / UI Design", val: 82 },
  { icon: "bi bi-filetype-js text-yellow-400", label: "JavaScript / jQuery", val: 75 },
  { icon: "bi bi-search text-green-400", label: "SEO & Marketing", val: 80 },
];

const techBadges = [
  { icon: "bi bi-filetype-html text-orange-400", label: "HTML5" },
  { icon: "bi bi-filetype-css text-[#6cb8e6]", label: "CSS3" },
  { icon: "bi bi-filetype-js text-yellow-400", label: "JavaScript" },
  { icon: "bi bi-wordpress text-blue-400", label: "WordPress" },
  { icon: null, label: "Tailwind", prefix: <span className="text-teal-400 font-mono font-bold text-xs">TW</span> },
  { icon: null, label: "Bootstrap", prefix: <span className="text-purple-400 font-mono font-bold text-xs">BS</span> },
  { icon: "bi bi-pen text-pink-400", label: "Figma" },
  { icon: "bi bi-search text-green-400", label: "SEO" },
  { icon: "bi bi-cart3 text-orange-400", label: "WooCommerce" },
  { icon: "bi bi-git text-orange-500", label: "Git/GitHub" },
  { icon: "bi bi-server text-gray-400", label: "cPanel" },
  { icon: "bi bi-phone text-[#a5d4ef]", label: "Responsive" },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll(".skill-row").forEach((row, i) => {
            const bar = row.querySelector(".skill-fill");
            const pct = row.querySelector(".skill-pct");
            const targetW = parseInt(bar.dataset.width);
            setTimeout(() => {
              bar.style.width = bar.dataset.width;
              let count = 0;
              const step = targetW / (1600 / 16);
              const timer = setInterval(() => {
                count += step;
                if (count >= targetW) { count = targetW; clearInterval(timer); }
                pct.textContent = Math.floor(count) + "%";
              }, 1600 / 60);
              setTimeout(() => { pct.classList.add("pop"); setTimeout(() => pct.classList.remove("pop"), 500); }, 1700);
              setTimeout(() => bar.classList.add("sh"), 1800);
            }, i * 140);
          });
          observer.disconnect();
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(sectionRef.current);
  }, []);

  return (
    <section id="skills" className="section-py py-16 sm:py-24 lg:py-32 relative" style={{ background: "#101418" }}>
      <div className="absolute left-0 top-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(230,57,70,.05),transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute right-0 bottom-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(26,111,168,.07),transparent 70%)", filter: "blur(60px)" }} />

      <div className="w93 px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16" data-aos="fade-up">
          <div className="eyebrow mb-3">My Stack</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Skill Bars */}
          <div data-aos="fade-right" ref={sectionRef}>
            <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-5 sm:mb-6">Core Proficiency</h3>
            <div className="space-y-1">
              {skillsData.map((sk) => (
                <div key={sk.label} className="skill-row">
                  <div className="flex justify-between mb-2">
                    <span className="font-display font-bold text-xs sm:text-sm text-white skill-lbl flex items-center gap-2">
                      {sk.prefix || <i className={sk.icon} />}
                      {sk.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold skill-pct" style={{ color: "#6cb8e6" }} data-val={sk.val}>0%</span>
                  </div>
                  <div className="skill-wrap">
                    <div className="skill-fill" data-width={`${sk.val}%`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Badges */}
          <div data-aos="fade-left" data-aos-delay="100">
            <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-5 sm:mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {techBadges.map((b) => (
                <div key={b.label} className="tech-badge glass-card rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 cursor-default text-xs sm:text-sm"
                  style={{ borderColor: "rgba(108,184,230,.12)" }}>
                  {b.prefix || <i className={b.icon} />}
                  {b.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

