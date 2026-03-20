

// ============================================================
// FILE: components/Services.jsx
// ============================================================
"use client";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const servicesData = [
  {
    icon: "bi bi-code-slash", iconColor: "text-[#6cb8e6]",
    iconBg: "rgba(108,184,230,.12)", iconBorder: "rgba(108,184,230,.2)",
    num: "01", title: "Web Development",
    items: ["Custom HTML/CSS/JS", "Responsive Layouts", "Performance Optimised", "SEO-Friendly Code"],
  },
  {
    icon: "bi bi-wordpress", iconColor: "text-[#e63946]",
    iconBg: "rgba(230,57,70,.1)", iconBorder: "rgba(230,57,70,.2)",
    num: "02", title: "WordPress Dev",
    items: ["Custom Themes", "Plugin Development", "WooCommerce Stores", "Site Maintenance"],
  },
  {
    icon: "bi bi-palette", iconColor: "text-green-400",
    iconBg: "rgba(45,138,78,.1)", iconBorder: "rgba(45,138,78,.2)",
    num: "03", title: "Website Design",
    items: ["UI/UX Design", "Figma Prototypes", "Brand Identity", "Landing Pages"],
  },
  {
    icon: "bi bi-cloud-upload", iconColor: "text-yellow-400",
    iconBg: "rgba(244,197,66,.1)", iconBorder: "rgba(244,197,66,.2)",
    num: "04", title: "Hosting & Domain",
    items: ["Domain Registration", "cPanel Hosting Setup", "SSL Configuration", "Email Setup"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-py py-16 sm:py-15 lg:py-20 relative" style={{ background: "#101418" }}>
      <div className="w93 px-4 sm:px-6">
       
        <SectionHeading
          eyebrow="What I Do"
          title={
            <>Services I <span className="grad-text">Offer</span>
            </>
          }
          description="Delivering excellence through hands-on expertise — high-quality digital solutions."
          data-aos="fade-up"
          className="mb-6 text-center"
          titleClassName="font-display text-center font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight mb-5"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {servicesData.map((s, i) => (
            <div key={s.num} className="svc-card glass-card rounded-2xl p-5 sm:p-7 cursor-default"
              data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5 text-xl"
                style={{ background: s.iconBg, border: `1px solid ${s.iconBorder}` }}>
                <i className={`${s.icon} ${s.iconColor}`} />
              </div>
              <div className="text-xs font-display font-bold tracking-widest text-[#6cb8e6]/50 mb-2 uppercase">{s.num}</div>
              <h3 className="font-display font-extrabold text-base sm:text-lg text-white mb-3">{s.title}</h3>
              <div className="h-px bg-[#6cb8e6]/10 mb-4" />
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6cb8e6] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <span className="inline-block mt-4 text-xs font-bold text-[#6cb8e6] tracking-widest">Learn more →</span>
            </div>
          ))}
        </div>

        <div
          className="mt-10 sm:mt-14 rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6"
          style={{ background: "linear-gradient(135deg,rgba(26,111,168,.15),rgba(13,43,69,.5))", border: "1px solid rgba(108,184,230,.15)" }}
          data-aos="fade-up" data-aos-delay="100"
        >
          <div>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-white mb-1">Ready to build something extraordinary?</h3>
            <p className="text-white/55 text-sm">Let&apos;s discuss your project and bring your vision to life.</p>
          </div>
          <Link href="#contact" className="btn-p text-white font-display font-bold text-sm px-6 sm:px-7 py-3.5 rounded-full whitespace-nowrap inline-flex items-center gap-2 shrink-0">
            Start a Project <i className="bi bi-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}

