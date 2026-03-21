"use client";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HeroSection({
  eyebrow = "What I Do",
  title = <>Services I <span className="grad-text">Offer</span></>,
  subtitle = "End-to-end digital solutions — from design and development to SEO and hosting.",
  primaryLabel = "Get a Free Quote",
  primaryHref = "/contact",
  secondaryLabel = "WhatsApp Me",
  secondaryHref = "https://wa.me/+919723121537",
  className = "",
  style = {},
  sectionClassName = "relative py-20 pt-32 sm:pb-24 md:pt-36 overflow-hidden",
  headingClassName = "mb-8",
  ...props
}) {
  return (
    <section
      className={`${sectionClassName} ${className}`.trim()}
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%,rgba(108,184,230,.15) 0%,transparent 70%),linear-gradient(160deg,#0d1f30 0%,#0d2b45 50%,#0a1a28 100%)",
        ...style,
      }}
      {...props}
    >
      <div className="hero-grid absolute  inset-0 pointer-events-none" />
      <div className="w93 px-4 sm:px-6 relative z-10 text-center">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          className={headingClassName}
          titleClassName="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight mb-5"
        />
        <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up" data-aos-delay="100">
          <Link href={primaryHref} className="btn-p text-white font-display font-bold text-sm px-6 py-3 rounded-full inline-flex items-center gap-2">
            {primaryLabel} <i className="bi bi-arrow-right" />
          </Link>
          <Link href={secondaryHref} target="_blank"
            className="btn-g text-white/80 font-display font-semibold text-sm px-6 py-3 rounded-full inline-flex items-center gap-2"
            style={{ borderColor: "rgba(255,255,255,.3)" }}>
            <i className="bi bi-whatsapp text-green-400" /> {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}