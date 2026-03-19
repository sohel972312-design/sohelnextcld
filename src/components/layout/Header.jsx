// ============================================================
// FILE: components/Header.jsx
// ============================================================
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,12,16,.96)" : "rgba(13,43,69,.85)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(108,184,230,.12)",
        padding: scrolled ? ".6rem 0" : "1rem 0",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,.4)" : "none",
      }}
    >
      <div className="w93 px-4 sm:px-6 flex items-center justify-between">
        <Link href="#" className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white">
          Sohel<span className="text-[#6cb8e6]">.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-ul hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-white/75">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
            </li>
          ))}
        </ul>

        <Link href="#contact" className="btn-p hidden md:inline-flex text-white font-display font-bold text-sm px-5 py-2 rounded-full items-center gap-2">
          Hire Me <i className="bi bi-arrow-right" />
        </Link>

        <button
          className="md:hidden text-white/80 text-2xl focus:outline-none p-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={menuOpen ? "bi bi-x" : "bi bi-list"} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 border-t border-white/5 mt-2">
          <ul className="flex flex-col gap-3 text-sm font-medium text-white/75">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white block py-1" onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#contact" className="btn-p text-white font-display font-bold text-sm px-5 py-2.5 rounded-full text-center block mt-2" onClick={() => setMenuOpen(false)}>
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
