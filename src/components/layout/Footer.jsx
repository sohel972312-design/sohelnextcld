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
          <Link href="#" className="  tracking-tight">

            <svg className="logo h-12 mx-auto" width="1047" height="664" viewBox="0 0 1047 664" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M594.246 0L539.653 38.4632V515.531H594.246V288.474L604.793 279.169C637.052 282.891 643.876 325.697 643.876 366.641V540.967L697.849 586.254V362.299C697.849 287.854 679.238 241.946 630.848 226.437L594.246 259.317V0ZM917.694 94.297L972.287 57.0745V392.697C972.287 434.883 981.593 465.281 1005.17 463.42L1036.81 439.225L1046.73 454.114L973.528 515.531C933.203 496.92 917.694 457.216 917.694 399.521V94.297ZM857.653 131.519L822.292 167.501L857.653 202.863L894.255 167.501L857.653 131.519ZM749.708 167.501L785.07 131.519L821.672 167.501L785.07 202.863L749.708 167.501ZM895.496 452.253L906.043 464.661L840.903 524.217C798.097 515.531 731.097 498.161 731.097 421.855V305.224L819.19 226.437C856.413 238.224 885.57 269.243 886.191 316.391C887.431 351.752 876.885 393.938 837.181 413.17L787.551 410.688V420.614C787.551 463.972 831.43 473.614 850.639 477.835C853.692 478.505 856.122 479.039 857.653 479.55L895.496 452.253ZM787.551 388.975H796.857C818.57 387.114 830.357 359.197 827.875 328.799C826.014 306.465 811.746 286.613 793.134 279.169L787.551 284.132V388.975ZM432.406 167.501L467.767 131.519L504.369 167.501L467.767 202.863L432.406 167.501ZM512.434 364.16C510.573 452.253 491.962 500.022 445.434 515.531C400.767 521.115 355.48 482.031 355.48 424.336V293.437L445.434 227.057C491.962 243.807 510.573 292.196 512.434 364.16ZM437.369 490.716C451.017 478.309 456.601 438.605 456.601 375.947V366.641C456.601 329.419 446.675 276.687 422.48 272.965L409.452 282.891V418.753C410.072 447.91 416.897 486.994 437.369 490.716ZM393.322 131.519L357.961 167.501L393.322 202.863L429.924 167.501L393.322 131.519ZM203.483 591.837L168.122 628.44L203.483 663.801L240.085 628.44L203.483 591.837ZM93.6766 628.44L129.038 591.837L165.64 628.44L129.038 663.801L93.6766 628.44ZM305.224 32.8798L312.669 31.6391C316.391 45.2874 321.974 66.3801 321.974 90.5747C321.974 122.214 312.669 160.057 279.169 194.798C261.592 212.837 239.274 228.289 216.746 243.887C178.842 270.13 140.344 296.785 122.834 336.863C145.168 332.521 169.983 330.039 194.177 330.039C248.15 330.039 300.261 342.447 317.632 377.808C325.697 393.938 328.178 408.207 328.178 421.234C328.178 437.364 323.836 451.633 319.493 465.281C306.465 503.744 243.807 571.365 138.964 568.884C57.0745 566.402 0 502.503 0 429.92C0 403.864 7.4445 377.188 23.5742 351.132L34.741 357.336C29.1576 374.706 26.6761 390.836 26.6761 405.725C26.6761 461.559 64.519 500.642 137.723 503.744C225.196 507.466 288.474 449.772 301.502 415.031C285.372 391.456 235.742 383.392 189.835 383.392C166.881 383.392 145.168 385.253 128.418 388.355C101.741 384.632 83.1302 346.789 83.1302 307.706C83.1302 289.095 87.4728 270.483 96.7785 254.354C113.592 225.313 151.013 197.213 189.583 168.25C244.941 126.682 302.665 83.3366 305.224 32.8798Z" fill="url(#paint0_linear_23_268)" />
              <defs>
                <linearGradient id="paint0_linear_23_268" x1="-2.07023" y1="69" x2="754.836" y2="506" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#6CB8E6" />
                  <stop offset="0.5" stopColor="#A5D8F5" />
                  <stop offset="1" stopColor="#6CB8E6" />
                </linearGradient>
              </defs>
            </svg>

          </Link>
          <div className="text-white/30 text-xs tracking-widest uppercase mt-1">Web Designer &amp; Developer</div>
        </div>

        {/* Quick Links */}
        <div className="text-center mb-5 sm:mb-7">
          <div className="inline-flex items-center flex-wrap justify-center gap-1 text-xs sm:text-sm font-semibold">
            <span className="text-[#6cb8e6] font-display font-bold tracking-wide mr-1 sm:mr-2">Quick Links -</span>
            {[
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/portfolio", label: "Blog" },
              { href: "/contact", label: "Contact" },
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
            { icon: "bi bi-github", href: "https://github.com/sohelmalek", title: "GitHub" },
            { icon: "bi bi-linkedin", href: "https://in.linkedin.com/in/sohel-malek-b4b846196", title: "LinkedIn" },
            { icon: "bi bi-facebook", href: "https://www.facebook.com/sohelmalek03", title: "Facebook" },
            { icon: "bi bi-instagram", href: "https://www.instagram.com/sohel_malek03", title: "Instagram" },
          ].map((s) => (
            <Link key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" className="fsb" title={s.title}>
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
