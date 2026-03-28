// ============================================================
// FILE: components/Hero.jsx
// ============================================================
"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    // Count Up
    document.querySelectorAll(".count-up").forEach((el) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;

          const target = parseInt(el.dataset.target);
          const suffix = el.dataset.suffix || "";

          let count = 0;
          const step = target / (1800 / 16);

          const timer = setInterval(() => {
            count += step;

            if (count >= target) {
              count = target;
              el.textContent = target + suffix; // ✅ show suffix at end
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(count) + suffix; // ✅ show suffix while counting
            }
          }, 16);

          observer.disconnect();
        });
      }, { threshold: 0.5 });

      observer.observe(el);
    });

    // Magnetic Buttons
    document.querySelectorAll(".btn-p").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        if (!Number.isFinite(centerX) || !Number.isFinite(centerY)) return;

        const x = e.clientX - rect.left - centerX;
        const y = e.clientY - rect.top - centerY;
        btn.style.transform = `translate(${x * 0.1}px,${y * 0.1}px) translateY(-3px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 70% 40%,rgba(108,184,230,.18) 0%,transparent 70%),radial-gradient(ellipse 60% 80% at 10% 80%,rgba(26,111,168,.2) 0%,transparent 60%),linear-gradient(160deg,#0d1f30 0%,#0d2b45 50%,#0a1a28 100%)",
      }}
    >
      <div className="hero-grid absolute inset-0 pointer-events-none" />

      {/* Orbs */}
      <div className="absolute rounded-full pointer-events-none animate-orb1"
        style={{ width: 500, height: 500, background: "rgba(108,184,230,.12)", top: -100, right: -80, filter: "blur(80px)" }} />
      <div className="absolute rounded-full pointer-events-none animate-orb2"
        style={{ width: 350, height: 350, background: "rgba(26,111,168,.18)", bottom: -60, left: "10%", filter: "blur(80px)" }} />
      <div className="absolute rounded-full pointer-events-none animate-float-slow"
        style={{ width: 200, height: 200, background: "rgba(230,57,70,.1)", top: "30%", right: "20%", filter: "blur(70px)" }} />

      <div className="w93 px-4 sm:px-6 w-full relative z-10 py-10 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Text */}
          <div> 
            <div
              className="animate-fade-down inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6 text-[#6cb8e6] font-bold bg-[rgba(108,184,230,0.12)] border border-[rgba(108,184,230,0.25)] text-[clamp(0.6rem,0.75rem,1rem)] tracking-widest uppercase"
              
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6cb8e6] animate-pulse-slow shrink-0" />
              Available for Freelance Work
            </div>

            <h1
              className="animate-fade-left font-display font-extrabold leading-tight tracking-tight mb-3 sm:mb-4 font-syne"
              style={{ fontSize: "clamp(2.2rem,4.25vw,4rem)", animationDelay: ".3s" }}
            >
              Hi, I&apos;m<br />
              <span className="grad-text font-syne">Sohel Malek</span>
            </h1>

            <div className="animate-fade-left font-display font-bold text-base sm:text-xl text-white/60 mb-4 tracking-wide"
              style={{ animationDelay: ".45s" }}>
              Web Designer &amp; Developer
            </div>

            <p className="animate-fade-up text-white/60 text-sm sm:text-base leading-relaxed max-w-xl mb-7 sm:mb-8"
              style={{ animationDelay: ".6s" }}>
              A passionate Web Designer, WordPress Developer, and Digital Creator with{" "}
              <strong className="text-white">4+ years of experience</strong> building professional, responsive,
              SEO-optimized websites that convert visitors into customers.
            </p>

            <div className="animate-fade-up hero-btns flex flex-wrap gap-3 mb-8 sm:mb-10" style={{ animationDelay: ".75s" }}>
              <Link href="/contact" className="btn-p text-white font-display font-bold text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2">
                Hire Me <i className="bi bi-arrow-right" />
              </Link>
              <Link href="/#portfolio" className="btn-g text-white/80 font-display font-semibold text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2">
                View Work <i className="bi bi-grid-3x3-gap" />
              </Link>
              <Link href="#" target="_blank"
                className="btn-g text-white/80 font-display font-semibold text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2">
                CV <i className="bi bi-download" />
              </Link>
            </div>

            {/* Stats */}
            <div
              className="animate-fade-up hero-stats flex gap-5 sm:gap-8 pt-5 sm:pt-6 border-t border-white/10"
              style={{ animationDelay: ".9s" }}
            >
              {[
                { target: 4, label: "YRS EXP", suffix: "+" },
                { target: 13, label: "CLIENTS", suffix: "+" },
                { target: 30, label: "PROJECTS", suffix: "+" },
                { target: 100, label: "SATISFIED", suffix: "%" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-display font-extrabold text-2xl sm:text-3xl text-white count-up"
                    data-target={s.target}
                    data-suffix={s.suffix}
                  >
                    0{s.suffix}
                  </div>
                  <div className="text-xs text-white/50 tracking-widest mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="hero-vis w-full relative flex items-center justify-center">
            <div className="absolute rounded-full pointer-events-none animate-spin-slow"
              style={{ width: 480, height: 480, border: "1px dashed rgba(108,184,230,.15)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div className="absolute rounded-full pointer-events-none animate-spin-rev"
              style={{ width: 360, height: 360, border: "1px solid rgba(108,184,230,.08)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
            <div className="absolute rounded-full pointer-events-none animate-pulse-slow"
              style={{ width: 300, height: 300, background: "rgba(108,184,230,.05)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />

            <div className="relative z-10 animate-float">
              <svg  className="md:h-96 w-auto lg:h-[30rem]" viewBox="0 0 360 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cG" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0d2b45" stopOpacity=".92" />
                    <stop offset="100%" stopColor="#0a1a28" stopOpacity=".96" />
                  </linearGradient>
                  <linearGradient id="bG" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#6cb8e6" />
                    <stop offset="100%" stopColor="#1a6fa8" />
                  </linearGradient>
                  <linearGradient id="rG" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#e63946" />
                    <stop offset="100%" stopColor="#c1121f" />
                  </linearGradient>
                </defs>
                <circle cx="180" cy="180" r="168" fill="url(#cG)" stroke="rgba(108,184,230,.14)" strokeWidth="1.5" />
                <rect x="70" y="100" width="220" height="150" rx="12" fill="rgba(26,111,168,.2)" stroke="rgba(108,184,230,.3)" strokeWidth="1.5" />
                <rect x="70" y="100" width="220" height="28" rx="12" fill="rgba(26,111,168,.35)" />
                <circle cx="90" cy="114" r="4.5" fill="rgba(230,57,70,.7)" />
                <circle cx="104" cy="114" r="4.5" fill="rgba(244,197,66,.7)" />
                <circle cx="118" cy="114" r="4.5" fill="rgba(45,138,78,.7)" />
                <rect x="134" y="108" width="120" height="12" rx="4" fill="rgba(255,255,255,.08)" stroke="rgba(108,184,230,.15)" strokeWidth=".8" />
                <rect x="84" y="143" width="60" height="6" rx="3" fill="url(#bG)" opacity=".8" />
                <rect x="84" y="156" width="90" height="6" rx="3" fill="rgba(255,255,255,.2)" />
                <rect x="84" y="169" width="50" height="6" rx="3" fill="url(#rG)" opacity=".7" />
                <rect x="84" y="182" width="78" height="6" rx="3" fill="rgba(255,255,255,.15)" />
                <rect x="84" y="195" width="40" height="6" rx="3" fill="rgba(45,138,78,.5)" />
                <rect x="84" y="208" width="65" height="6" rx="3" fill="rgba(255,255,255,.15)" />
                <rect x="165" y="132" width="112" height="110" rx="8" fill="rgba(255,255,255,.04)" stroke="rgba(108,184,230,.15)" strokeWidth=".8" />
                <rect x="172" y="140" width="96" height="35" rx="5" fill="rgba(26,111,168,.25)" />
                <rect x="177" y="145" width="50" height="6" rx="3" fill="url(#bG)" opacity=".9" />
                <rect x="177" y="156" width="36" height="4" rx="2" fill="rgba(255,255,255,.3)" />
                <rect x="172" y="217" width="50" height="12" rx="4" fill="url(#rG)" opacity=".8" />
                <text x="197" y="227" textAnchor="middle" fontSize="7" fill="white" fontFamily="Syne" fontWeight="700">Hire Me</text>
                <rect x="226" y="232" width="44" height="74" rx="8" fill="rgba(13,43,69,.9)" stroke="rgba(108,184,230,.25)" strokeWidth="1.2" />
                <rect x="230" y="248" width="36" height="50" rx="4" fill="rgba(26,111,168,.15)" />
                <rect x="233" y="252" width="30" height="4" rx="2" fill="url(#bG)" opacity=".8" />
                <circle cx="248" cy="241" r="2" fill="rgba(255,255,255,.35)" />
                <circle cx="92" cy="270" r="22" fill="rgba(26,111,168,.2)" stroke="rgba(108,184,230,.25)" strokeWidth="1.2" />
                <text x="92" y="276" textAnchor="middle" fontSize="18" fill="#6cb8e6" fontFamily="Syne" fontWeight="800">W</text>
                <circle cx="145" cy="262" r="18" fill="rgba(230,57,70,.15)" stroke="rgba(230,57,70,.3)" strokeWidth="1.2" />
                <text x="145" y="268" textAnchor="middle" fontSize="11" fill="#e63946" fontFamily="Syne" fontWeight="800">H5</text>
                <circle cx="196" cy="265" r="16" fill="rgba(45,138,78,.15)" stroke="rgba(45,138,78,.3)" strokeWidth="1.2" />
                <text x="196" y="271" textAnchor="middle" fontSize="10" fill="#2d8a4e" fontFamily="Syne" fontWeight="800">CSS</text>
                <circle cx="60" cy="150" r="3" fill="rgba(108,184,230,.5)" />
                <circle cx="300" cy="150" r="3" fill="rgba(108,184,230,.5)" />
              </svg>
            </div>

            {/* Float Badges */}
            <div className="absolute top-4 -left-2 glass-card rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-display font-bold animate-float z-20"
              style={{ animationDelay: ".3s", borderColor: "rgba(108,184,230,.2)" }}>
              <i className="bi bi-code-slash text-[#6cb8e6]" /> Web Dev
            </div>
            <div className="absolute bottom-10 -left-4 glass-card rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-display font-bold animate-float-slow z-20"
              style={{ borderColor: "rgba(108,184,230,.2)" }}>
              <i className="bi bi-wordpress text-[#6cb8e6]" /> WP Expert
            </div>
            <div className="absolute top-8 -right-2 glass-card rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-display font-bold animate-float z-20"
              style={{ animationDelay: ".6s", borderColor: "rgba(108,184,230,.2)" }}>
              <i className="bi bi-palette text-[#6cb8e6]" /> UI/UX
            </div>
            <div className="absolute bottom-6 -right-9 md:-right-2 glass-card rounded-xl px-3 py-2 flex items-center gap-2 text-xs font-display font-bold animate-float-slow z-20"
              style={{ animationDelay: "1s", borderColor: "rgba(108,184,230,.2)" }}>
              <i className="bi bi-star-fill text-yellow-400 text-sm" /> 5-Star
            </div>
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-2xl p-4 text-center font-display z-20 hidden lg:block animate-float"
              style={{ background: "linear-gradient(135deg,#1a6fa8,#0d2b45)", border: "1px solid rgba(108,184,230,.3)", boxShadow: "0 8px 32px rgba(0,0,0,.4)" }}>
              <div className="text-3xl font-extrabold text-[#6cb8e6] leading-none">4+</div>
              <div className="text-xs text-white/60 mt-1 tracking-widest">YRS<br />EXP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
