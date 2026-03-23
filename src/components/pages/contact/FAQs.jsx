"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { usePathname } from "next/navigation";
export default function FAQs({
  faqs = [],
  title = "Common Questions",
  subtitle = "Quick answers to questions I get asked most often.",
  headingClass = "", // 👈 NEW
}) {
  const [openFaq, setOpenFaq] = useState(null);
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  // ❌ If no FAQs → don't render
  if (!faqs || faqs.length === 0) return null;

  return (

    <>
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            {title.split(" ")[0]}{" "}
            <span className="grad-text">
              {title.split(" ").slice(1).join(" ")}
            </span>
          </>
        }
        subtitle={subtitle}
        className={` ${headingClass}`} // 👈 APPLY HERE
        titleClassName="font-display font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-4"
      />

      <div className="space-y-3">
        {faqs.map((item, i) => (
          <div
            key={i}
            className="glass-card rounded-2xl overflow-hidden"
            style={{
              borderColor:
                openFaq === i
                  ? "rgba(108,184,230,.25)"
                  : "rgba(255,255,255,.07)",
            }}
          >
            <button
              className="w-full flex items-center justify-between px-5 sm:px-6 py-4 text-left transition-all"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <span className="font-display font-bold text-sm sm:text-base text-white pr-4">
                {item.question}
              </span>

              <i
                className={`bi ${openFaq === i
                  ? "bi-dash-circle-fill text-[#6cb8e6]"
                  : "bi-plus-circle-fill text-white/30"
                  } text-lg shrink-0 transition-all`}
              />
            </button>

            {openFaq === i && (
              <div
                className="px-5 sm:px-6 pb-5 text-white/60 text-sm leading-relaxed"
                style={{
                  borderTop: "1px solid rgba(108,184,230,.1)",
                }}
              >
                <div className="pt-4">{item.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}