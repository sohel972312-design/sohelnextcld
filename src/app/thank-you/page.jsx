"use client";
import Link from "next/link";
import HeroSection from "@/components/ui/HeroSection";
import CTASection from "@/components/ui/CTASection";

export default function ThankYou() {
  return (
    <>
      {/* ✅ Hero Section */}
      <HeroSection
        eyebrow="Success"
        title={
          <>
            Message Sent <span className="grad-text">Successfully</span> ✅
          </>
        }
        subtitle="Thank you for reaching out. I’ve received your message and will get back to you within 24 hours."
        primaryLabel="Go Back Home"
        primaryHref="/"
        secondaryLabel="Contact Again"
        secondaryHref="/contact"
      />

      {/* ✅ Center Content */}
      <section className="py-16 sm:py-24" style={{ background: "#101418" }}>
        <div className="w93 px-4 sm:px-6 text-center max-w-2xl mx-auto">

          {/* Icon */}
          <div className="text-5xl mb-6">🎉</div>

          {/* Message */}
          <h2 className="text-white mb-4">
            Your message has been sent!
          </h2>

          <p className="text-white/60 mb-8">
            I appreciate you contacting me. I’ll review your message and respond shortly.
            If your request is urgent, feel free to reach out via WhatsApp.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="btn-p text-white font-display font-bold text-sm px-6 py-3 rounded-full inline-flex items-center gap-2"
            >
              Back to Home
            </Link>

            {/* <Link
              href="https://wa.me/+919723121537"
              target="_blank"
              className="btn-outline px-6 py-3 rounded-xl"
            >
              Chat on WhatsApp
            </Link> */}
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      {/* <CTASection
        eyebrow="Need anything else?"
        title="Let’s build something amazing together"
        description="If you have more ideas or questions, feel free to reach out anytime."
        primary={{ label: "Start New Project", href: "/contact" }}
        secondary={{ label: "WhatsApp Me", href: "https://wa.me/+919723121537" }}
      /> */}
    </>
  );
}