// ============================================================
// FILE: components/Footer.jsx
// ============================================================
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="pt-10 sm:pt-14 pb-6 sm:pb-8 relative overflow-hidden"
      style={{ background: "#080c10", borderTop: "1px solid rgba(255,255,255,.05)" }}
    >
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 50% 0%,rgba(108,184,230,.04),transparent 70%)" }} />
      <div className="w93 px-4 sm:px-6 relative z-10">

        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <span style={{
            fontFamily: "'Syne',serif", fontStyle: "italic",
            fontSize: "clamp(2rem,6vw,2.8rem)", fontWeight: 800,
            background: "linear-gradient(135deg,#d4a017,#f0c040,#d4a017)",
            backgroundSize: "200%", WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent", backgroundClip: "text",
            animation: "shimmer 4s linear infinite", display: "inline-block",
          }}>Ṡöḧël</span>
          <div className="text-white/30 text-xs tracking-widest uppercase mt-1">Web Designer &amp; Developer</div>
        </div>

        {/* Quick Links */}
        <div className="text-center mb-5 sm:mb-7">
          <div className="inline-flex items-center flex-wrap justify-center gap-1 text-xs sm:text-sm font-semibold">
            <span className="text-[#6cb8e6] font-display font-bold tracking-wide mr-1 sm:mr-2">Quick Links -</span>
            {[
              { href: "#about", label: "About Us" },
              { href: "#services", label: "Services" },
              { href: "#portfolio", label: "Blog" },
              { href: "#contact", label: "Contact" },
            ].map((l, i) => (
              <span key={l.href} className="flex items-center">
                {i > 0 && <span className="text-white/20 mx-1">|</span>}
                <Link href={l.href} className="text-white/65 hover:text-[#6cb8e6] transition-colors px-2 sm:px-3 py-1">{l.label}</Link>
              </span>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <span className="text-[#6cb8e6] font-display font-bold">Phone No. -</span>
              <Link href="tel:+919723121537" className="text-white/65 hover:text-white transition-colors">+91 97231 21537</Link>
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="flex items-center gap-2">
              <span className="text-[#6cb8e6] font-display font-bold">Email Id -</span>
              <Link href="mailto:sohel@sohelmalek.com" className="text-white/65 hover:text-white transition-colors">sohel@sohelmalek.com</Link>
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-7 sm:mb-10">
          {[
            { icon: "bi bi-github", href: "#", title: "GitHub" },
            { icon: "bi bi-linkedin", href: "#", title: "LinkedIn" },
            { icon: "bi bi-facebook", href: "#", title: "Facebook" },
            { icon: "bi bi-instagram", href: "#", title: "Instagram" },
          ].map((s) => (
            <Link key={s.title} href={s.href} className="fsb" title={s.title}>
              <i className={s.icon} />
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-4 sm:pt-5 text-center" style={{ borderTop: "1px solid rgba(255,255,255,.05)" }}>
          <p className="text-xs text-white/30">
            Copyright &copy; 2026 <span className="text-white/55 font-semibold">Sohel</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
