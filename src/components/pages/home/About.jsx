

// ============================================================
// FILE: components/About.jsx
// ============================================================
"use client";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="about" 
      // className="section-py py-16 sm:py-15 lg:py-20 relative"
      className="section-py py-16 sm:py-15 lg:py-20 relative"
      style={{
        background:
          "radial-gradient(ellipse 70% 50% at 50% 0%,rgba(108,184,230,.07) 0%,transparent 70%),linear-gradient(180deg,#111416 0%,#0d1e2e 50%,#111416 100%)",
      }}
    >
      <div className="w93 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image Column */}
          <div className="relative flex justify-center" data-aos="fade-right">
            <div
              className="about-ring absolute rounded-full"
              style={{ width: 420, height: 420, border: "1.5px dashed rgba(108,184,230,.1)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 40s linear infinite" }}
            />
            <div
              className="relative z-10 rounded-3xl overflow-hidden about-img-wrap"
              style={{ width: "clamp(240px,70vw,340px)", height: "clamp(280px,80vw,400px)", background: "linear-gradient(135deg,#0d2b45,#1a6fa8)", border: "1px solid rgba(108,184,230,.2)", boxShadow: "0 20px 60px rgba(0,0,0,.5)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://kits.roxthemes.com/ethan/wp-content/uploads/2025/11/About-Me-02.webp"
                alt="Sohel Malek"
                className="w-full h-full object-cover object-top mix-blend-luminosity opacity-85"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 40%,rgba(13,43,69,.85) 100%)" }} />
              <div className="absolute bottom-6 left-6">
                <div className="font-display font-extrabold text-xl text-white">Sohel Malek</div>
                <div className="text-[#6cb8e6] text-sm font-semibold mt-0.5">Web Designer &amp; Developer</div>
              </div>
            </div>
            <div className="absolute about-float-r -right-2 sm:-right-4 md:right-16 top-12 glass-card rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-center z-20"
              style={{ borderColor: "rgba(108,184,230,.2)" }}>
              <div className="font-display font-extrabold text-xl sm:text-2xl text-[#6cb8e6]">4+</div>
              <div className="text-xs text-white/50 tracking-wide">Years Exp.</div>
            </div>
            <div className="absolute about-float-l -left-2 sm:-left-4 bottom-16 glass-card rounded-2xl px-3 sm:px-4 py-2 sm:py-3 text-center z-20"
              style={{ borderColor: "rgba(230,57,70,.2)" }}>
              <div className="font-display font-extrabold text-xl sm:text-2xl" style={{ color: "#e63946" }}>13+</div>
              <div className="text-xs text-white/50 tracking-wide">Clients</div>
            </div>
          </div>

          {/* Text Column */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div className="eyebrow mb-3">About Me</div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight mb-5">
              Crafting Digital<br />Experiences That<br />
              <span className="grad-text">Convert &amp; Inspire</span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4">
              I&apos;m a professional Web Designer, WordPress Developer, and SEO Specialist based in Gujarat, India.
              I help brands grow online through clean, fast, and conversion-focused websites.
            </p>
            <p className="text-white/55 text-sm sm:text-base leading-relaxed mb-7">
              Whether you need a portfolio, business site, e-commerce platform, or WordPress blog — I deliver
              pixel-perfect designs backed by modern web standards.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-7 info-grid">
              {[
                { label: "Name", value: "Sohel Malek", cls: "font-display font-bold text-sm text-white" },
                { label: "Location", value: "Gujarat, India", cls: "font-display font-bold text-sm text-white" },
                { label: "Email", value: "sohel@sohelmalek.com", cls: "font-display font-bold text-xs text-[#6cb8e6] truncate" },
              ].map((item) => (
                <div key={item.label} className="glass-card rounded-xl p-3 sm:p-4" style={{ borderColor: "rgba(108,184,230,.12)" }}>
                  <div className="text-xs text-white/40 uppercase tracking-widest mb-1">{item.label}</div>
                  <div className={item.cls}>{item.value}</div>
                </div>
              ))}
              <div className="glass-card rounded-xl p-3 sm:p-4" style={{ borderColor: "rgba(108,184,230,.12)" }}>
                <div className="text-xs text-white/40 uppercase tracking-widest mb-1">Availability</div>
                <div className="font-display font-bold text-sm text-green-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                  Open to Work
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="#contact" className="btn-p text-white font-display font-bold text-sm px-5 sm:px-6 py-3 rounded-full inline-flex items-center gap-2">
                Let&apos;s Work <i className="bi bi-arrow-right" />
              </Link>
              <Link href="https://sohelmalek.com/assets/pdf/sohel-resume.pdf" target="_blank"
                className="btn-g text-white/80 font-display font-semibold text-sm px-5 sm:px-6 py-3 rounded-full inline-flex items-center gap-2">
                Download CV <i className="bi bi-download" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

