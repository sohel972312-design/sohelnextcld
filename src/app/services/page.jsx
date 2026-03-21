
// ============================================================
// FILE: app/services/page.jsx
// ============================================================
"use client";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/ui/CTASection";
import HeroSection from "@/components/ui/HeroSection";
import ServiceGrid from "@/components/pages/services/ServiceGrid";
import Process from "@/components/pages/home/Process";
import ProcessSection from "@/components/pages/services/ProcessSection";


export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="What I Do"
        title={<>Services I <span className="grad-text">Offer</span></>}
        subtitle="Delivering excellence through hands-on expertise — high-quality digital solutions."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact#contact-form"
        secondaryLabel="WhatsApp Me"
        secondaryHref="https://wa.me/+919723121537"
      />
      <ServiceGrid />
      <ProcessSection />
      <CTASection 
        eyebrow="Need help selecting a service?"
        title="Let's discuss your project"
        description="Just reach out and describe your project — I'll recommend the right solution."
        primary={{ label: "Let's Talk", href: "/contact" }}
        secondary={{ label: "WhatsApp Me", href: "https://wa.me/+919723121537" }}
      />

    </>
  );
}

