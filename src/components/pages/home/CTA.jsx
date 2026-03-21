
// ============================================================
// FILE: components/CTA.jsx
// ============================================================
"use client";
import CTASection from "@/components/ui/CTASection";

export default function CTA() {
  return (
    <CTASection
      eyebrow="Let's Build Together"
      title="Have a Project in Mind?"
      description="I'm available for freelance work. Let's create something amazing together."
      primary={{ label: "Start a Project", href: "/contact" }}
      secondary={{ label: "WhatsApp Me", href: "https://wa.me/+919723121537" }}
    />
  );
}


