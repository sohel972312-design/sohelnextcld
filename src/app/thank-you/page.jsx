"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

// ─────────────────────────────────────────
// THANK YOU PAGE
// ─────────────────────────────────────────
export default function ThankYouPage() {
  const checkRef = useRef(null);
  const ring1Ref = useRef(null);
  const ring2Ref = useRef(null);

  // Re-trigger CSS animations on mount
  useEffect(() => {
    [checkRef, ring1Ref, ring2Ref].forEach((ref) => {
      if (!ref.current) return;
      ref.current.style.animation = "none";
      // eslint-disable-next-line no-unused-expressions
      ref.current.offsetHeight; // reflow
      ref.current.style.animation = "";
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bg text-white font-body">


      {/* Keyframe styles injected inline — avoids needing global CSS */}
      <style>{`
        @keyframes sm-popIn {
          from { transform: scale(0); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        @keyframes sm-ringExpand {
          0%   { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .sm-check   { animation: sm-popIn 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s both; }
        .sm-ring1   { animation: sm-ringExpand 1.3s ease-out 0.0s both; }
        .sm-ring2   { animation: sm-ringExpand 1.3s ease-out 0.35s both; }
      `}</style>


      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 pt-30 pb-16">
         <div class="absolute w-[420px] h-[420px] bg-[#22d3ee] bottom-[-100px] left-[-80px] rounded-full blur-[110px] opacity-[0.14]"></div>
        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-36 -right-20 w-[480px] h-[480px] rounded-full bg-cyan opacity-[0.09] blur-[110px]" />

        <div className="relative z-10 flex flex-col items-center text-center max-w-xl w-full">

          {/* Animated checkmark */}
          <div className="relative w-24 h-24 mb-8">
            <div
              ref={ring1Ref}
              className="sm-ring1 absolute inset-0 rounded-full border-2 border-accent"
            />
            <div
              ref={ring2Ref}
              className="sm-ring2 absolute inset-0 rounded-full border-2 border-accent"
            />
            <div
              ref={checkRef}
              className="sm-check relative w-24 h-24 rounded-full flex items-center justify-center text-4xl"
              style={{
                background: "linear-gradient(135deg, #7c5cfc, #22d3ee)",
                boxShadow: "0 0 40px rgba(124,92,252,0.35)",
              }}
            >
              ✓
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/25 text-cyan text-[11px] font-bold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-5">
            ✦ Message Received
          </div>


          <h1
            className="font-head font-black tracking-tight leading-[1.08] mb-4"
            style={{ fontSize: "clamp(34px, 6vw, 56px)" }}
          >
            Thank You, <br />
            <span className="grad-text">You&apos;re Awesome!</span>
          </h1>

          <p className="text-muted text-base leading-relaxed max-w-sm mb-8">
            Your message has landed safely in my inbox. I personally review
            every enquiry and will get back to you as soon as possible.
          </p>

          {/* What happens next */}
          <div className="w-full bg-card border border-border rounded-2xl p-6 md:p-8 mb-7 text-left">
            <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-muted mb-5">
              What happens next
            </p>
            <div className="flex flex-col gap-5 bg-[#13131c]">
              {[
                {
                  n: "01",
                  title: "Review Your Message",
                  desc: "I'll read through your requirements carefully.",
                },
                {
                  n: "02",
                  title: "Reply Within 24 Hours",
                  desc: "Expect a response to your email very soon.",
                },
                {
                  n: "03",
                  title: "Project Kickoff",
                  desc: "We'll align on scope, timeline, and get started!",
                },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex items-start gap-4">
                  <div className="min-w-[28px] h-7 rounded-lg bg-accent/15 border border-accent/25 text-accent2 text-xs font-black flex items-center justify-center mt-0.5 animate-fade-down inline-flex items-center gap-2  rounded-full mb-5 sm:mb-6 text-[#6cb8e6] font-bold bg-[rgba(108,184,230,0.12)] border border-[rgba(108,184,230,0.25)] text-[clamp(0.6rem,0.75rem,1rem)] tracking-widest uppercase">
                    {n}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5">{title}</p>
                    <p className="text-xs text-muted">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact chips */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <a
              href="mailto:sohel@sohelmalek.com"
              className="inline-flex items-center gap-2 bg-card border border-border text-muted text-sm px-5 py-2.5 rounded-full transition hover:border-accent hover:text-white"
            >
              <span className="text-base">✉️</span>
              sohel@sohelmalek.com
            </a>
            <a
              href="https://wa.me/+919723121537"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-card border border-border text-muted text-sm px-5 py-2.5 rounded-full transition hover:border-accent hover:text-white"
            >
              <span className="text-base">💬</span>
              WhatsApp Me
            </a>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-accent text-white text-sm font-bold px-7 py-3.5 rounded-full transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(124,92,252,0.4)]"
            >
              ← Back to Home
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 border border-border text-white text-sm font-semibold px-6 py-3.5 rounded-full transition hover:border-accent2 hover:bg-accent/[0.07]"
            >
              View My Work
            </Link>
          </div>

        </div>
      </main>

    </div>
  );
}
