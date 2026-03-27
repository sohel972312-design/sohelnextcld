// ============================================================
// FILE: app/about/page.jsx
// ============================================================
"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";

// ─────────────────────────────────────────
// 404 PAGE
// ─────────────────────────────────────────
export default function PageNotFound() {
  return (
    <div className="  flex flex-col bg-bg text-white font-body">
      {/* <Noise /> */}
      {/* <Navbar /> */}

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 xl:mt-20 pt-40 pb-20 xl:pt-50">
        {/* Glow blobs */}
        <div className="absolute w-[420px] h-[420px] bg-[#22d3ee] bottom-[-100px] left-[-80px] rounded-full blur-[110px] opacity-[0.14]"></div>
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-36 -right-20 w-[480px] h-[480px] rounded-full bg-cyan opacity-[0.09] blur-[110px]" />
        {/* Ghost 404 watermark */}
        <span
          className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-head font-black leading-none"
          style={{
            fontSize: "clamp(160px, 26vw, 320px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(124,92,252,0.15)",
            letterSpacing: "-0.04em",
            whiteSpace: "nowrap",
          }}
          aria-hidden
        >
          404
        </span>

        {/* Card */}
        <div className="relative z-10 flex flex-col items-center text-center w-full">
          {/* Badge */}
          <div className="animate-fade-down inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6 text-[#c1121f] font-bold bg-[rgba(230,108,108,0.12)] border border-[rgba(230,108,108,0.25)] text-[clamp(0.6rem,0.75rem,1rem)] tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c1121f] animate-pulse-slow shrink-0" />
            Error 404
          </div>
          <h1
            className="font-head font-black tracking-tight leading-[1.08] mb-4"
            style={{ fontSize: "clamp(34px, 6vw, 56px)" }}
          >
            Oops! <br />
            <span className="grad-text">Page Not Found</span>
          </h1>

          <p className="text-muted text-base leading-relaxed max-w-xl mb-10">
            Looks like this page went on a vacation without telling anyone. The
            link might be broken, or the page may have been moved or removed.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Link
              href="/"
              className="btn-p text-white font-display font-bold text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full inline-flex items-center gap-2"
            >
              ←&nbsp;&nbsp;Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-border text-white text-sm font-semibold px-6  rounded-full py-3.5  transition hover:border-accent2 hover:bg-accent/[0.07]"
            >
              Contact Me
            </Link>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
            {[
              { href: "/about", icon: "👤", label: "About" },
              { href: "/services", icon: "⚡", label: "Services" },
              { href: "/blog", icon: "✍️", label: "Blog" },
            ].map(({ href, icon, label }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center gap-1.5 bg-card border border-border rounded-xl py-3.5 text-xs font-semibold text-muted transition hover:border-accent hover:text-white hover:bg-accent/[0.07]"
              >
                <span className="text-lg">{icon}</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
