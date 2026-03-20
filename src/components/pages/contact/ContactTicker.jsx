import Link from "next/link";
export default function ContactTicker(params) {
    return(
      <>

{/* ── Stats / contact quick facts block ── */}
      <section className="relative py-12" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%,rgba(108,184,230,.15) 0%,transparent 70%),linear-gradient(160deg,#0d1f30 0%,#0d2b45 50%,#0a1a28 100%)" }}>
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="w93 px-4 sm:px-6 relative z-10 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm" data-aos="fade-up" data-aos-delay="100">
            {[
              { icon: "bi bi-clock-fill text-[#6cb8e6]", text: "Replies within 24hrs" },
              { icon: "bi bi-shield-fill-check text-green-400", text: "Free consultation" },
              { icon: "bi bi-globe2 text-[#f4c542]", text: "Worldwide clients" },
            ].map((b) => (
              <span key={b.text} className="flex items-center gap-2 px-4 py-2 rounded-full text-white/60 font-semibold"
                style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}>
                <i className={b.icon} /> {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>


      </>


    );
};
