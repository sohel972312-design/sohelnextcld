import Link from "next/link";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";



const faqData = [
  { q: "How long does a website take?", a: "A typical business website takes 1–2 weeks. E-commerce or complex WordPress projects may take 3–4 weeks. I'll give you a clear timeline before we start." },
  { q: "What information do I need to provide?", a: "Just your business details, logo (if you have one), content/text, and any reference sites you like. I handle the rest — design, development, and setup." },
  { q: "Do you offer post-launch support?", a: "Yes! I offer ongoing maintenance packages including updates, backups, security monitoring, and content changes." },
  { q: "What is your pricing?", a: "Pricing varies based on project scope. A simple website starts from ₹8,000. Contact me for a free custom quote." },
  { q: "Can you redesign my existing website?", a: "Absolutely. I can revamp your existing site — whether it's WordPress, HTML, or any other platform — with a modern, conversion-focused design." },
  { q: "Do you work with international clients?", a: "Yes! I work with clients from India, UK, UAE, USA, Australia, and more. Communication is via email, WhatsApp, or video call." },
];



export default function FAQs(params) {
  const [openFaq, setOpenFaq] = useState(null);

    return(
        <>
{/* ── FAQ ── */}
      <section className="py-16 sm:py-24"
        style={{ background: "linear-gradient(180deg,#111416 0%,#0d1e2e 50%,#111416 100%)" }}>
        <div className="w93 px-4 sm:px-6">
          <SectionHeading
            eyebrow="FAQ"
            title={<>Common <span className="grad-text">Questions</span></>}
            subtitle="Quick answers to questions I get asked most often."
            className="mb-12 text-center"
            titleClassName="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-4"
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {faqData.map((item, i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden" style={{ borderColor: openFaq === i ? "rgba(108,184,230,.25)" : "rgba(255,255,255,.07)" }}
                data-aos="fade-up" data-aos-delay={i * 60}>
                <button
                  className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left transition-all"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-display font-bold text-sm sm:text-base text-white pr-4">{item.q}</span>
                  <i className={`bi ${openFaq === i ? "bi-dash-circle-fill text-[#6cb8e6]" : "bi-plus-circle-fill text-white/30"} text-lg shrink-0 transition-all`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 sm:px-6 pb-5 text-white/60 text-sm leading-relaxed" style={{ borderTop: "1px solid rgba(108,184,230,.1)" }}>
                    <div className="pt-4">{item.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
        </>
    );
};
