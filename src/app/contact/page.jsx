
// ============================================================
// FILE: app/contact/page.jsx
// ============================================================
"use client";
import Link from "next/link";
import { contactFaqs } from "@/data/faqs";
import CTASection from "@/components/ui/CTASection";
import HeroSection from "@/components/ui/HeroSection";
import ContactDetails from "@/components/pages/contact/ContactDetails";
import ContactForm from "@/components/pages/contact/ContactForm";
import FAQs from "@/components/pages/contact/FAQs";
import ContactTicker from "@/components/pages/contact/ContactTicker";
export default function ContactPage() {

  return (
    <>

      <HeroSection
        eyebrow="Contact"
        title={<>Let&apos;s Work <span className="grad-text">Together</span></>}
        subtitle="Have a project in mind? I'd love to hear about it. Drop me a message and I'll reply within 24 hours."
        primaryLabel="Send Message"
        primaryHref="/contact#contact-form"
        secondaryLabel="WhatsApp Me"
        secondaryHref="https://wa.me/+919723121537"
      />

      <ContactTicker />

      {/* ── Main Contact Grid ── */}
      <section className="py-16 sm:py-24" style={{ background: "#101418" }}>
        <div className="w93 px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            <ContactDetails />
            <ContactForm />

          </div>
        </div>
      </section>
      <section
        className="py-16 sm:py-24"
        style={{
          background:
            "linear-gradient(180deg,#111416 0%,#0d1e2e 50%,#111416 100%)",
        }}
      >
        <div className="w93 px-4 sm:px-6">
          <FAQs
            faqs={contactFaqs}
            headingClass="text-center mb-10"
          />
        </div>
      </section >
      {/* ── Quick Links CTA ── */}
      < CTASection
        eyebrow="Prefer a quick chat?"
        title="I’m here to help whenever you’re ready"
        description="Send your project details via WhatsApp or email and I’ll respond quickly with a custom plan."
        primary={{ label: "Let’s Talk", href: "/contact#contact-form" }
        }
        secondary={{ label: "Chat on WhatsApp", href: "https://wa.me/+919723121537" }}
      />

    </>
  );
}
