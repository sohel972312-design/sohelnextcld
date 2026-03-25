"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { usePathname } from "next/navigation";

export default function CTASection({
  eyebrow = "Let\'s Build Together",
  title = "Have a Project in Mind?",
  description = "I'm available for freelance work. Let's create something amazing together.",
  primary = { label: "Start a Project", href: "#contact", style: {} },
  secondary = { label: "WhatsApp Me", href: "https://wa.me/+919723121537", style: {} },
  className = "",
  style = {},
  ...props
}) {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    const colors = ["rgba(108,184,230,.7)", "rgba(165,212,239,.5)", "rgba(26,111,168,.6)", "rgba(230,57,70,.4)"];
    const nodes = [];
    for (let i = 0; i < 18; i++) {
      const d = document.createElement("div");
      const sz = Math.random() * 4 + 2;
      const dx = (Math.random() - 0.5) * 180 + "px";
      const dy = -(40 + Math.random() * 80) + "px";
      const dur = 4 + Math.random() * 5;
      const del = Math.random() * 6;
      const col = colors[Math.floor(Math.random() * colors.length)];
      d.style.cssText = `position:absolute;width:${sz}px;height:${sz}px;border-radius:50%;background:${col};box-shadow:0 0 ${sz * 2}px ${col};left:${Math.random() * 100}%;top:${20 + Math.random() * 60}%;--dx:${dx};--dy:${dy};animation:ctaP ${dur}s ease-in-out ${del}s infinite;pointer-events:none;`;
      particlesRef.current.appendChild(d);
      nodes.push(d);
    }
    return () => {
      nodes.forEach((n) => n.remove());
    };
  }, []);
    const pathname = usePathname();

  return (
    <section
      className={`section-py py-16 sm:py-24 lg:py-28 relative overflow-hidden ${className}`.trim()}
      style={{ background: "linear-gradient(135deg,#0d2b45 0%,#1a6fa8 50%,#0d2b45 100%)", backgroundSize: "200%", animation: "shimmer 10s ease infinite", ...style }}
      {...props}
    >
      <div className="cg2" />
      <div className="co1" />
      <div className="co2" />
      <div className="co3" />
      <div className="cr" />
      <div className="cr cr2" />
      <div className="cr cr3" />
      <div ref={particlesRef} />
      <div className="w93 px-4 sm:px-6 text-center relative z-10">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="mb-6"
          eyebrowClassName="justify-center flex"
          titleClassName="font-display font-extrabold text-3xl sm:text-4xl   tracking-tight text-white mb-4 leading-tight"
          descriptionClassName="text-white/70 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto"
          data-aos="fade-down"
        />
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center" data-aos="fade-up" data-aos-delay="150">
          <Link href={primary.href} className={`btn-p text-white font-display font-bold text-sm px-7 sm:px-8 py-3.5 sm:py-4 rounded-full inline-flex items-center justify-center gap-2`} style={primary.style}>
            {primary.label} <i className="bi bi-arrow-right" />
          </Link>
        <Link
  href={secondary.href}
  target={secondary.href.startsWith("https") ? "_blank" : undefined}
  className="btn-g text-white font-display font-bold text-sm px-7 sm:px-8 py-3.5 sm:py-4 rounded-full inline-flex items-center justify-center gap-2"
  style={{ borderColor: "rgba(255,255,255,.3)", ...secondary.style }}
>
  {/* 👇 icon tabhi dikhe jab URL blog page na ho */}
  {!pathname.startsWith("/blog") && (
    <i className="bi bi-whatsapp text-green-400" />
  )}

  {secondary.label}
</Link>
        </div>
      </div>
    </section>
  );
}
