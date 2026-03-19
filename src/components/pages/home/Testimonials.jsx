
// ============================================================
// FILE: components/Testimonials.jsx
// ============================================================
"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  { text: "Sohel built our business website from scratch and it exceeded every expectation. Clean, fast, and our enquiries doubled since launch!", name: "James Wilson", role: "Founder & CEO", avatar: "https://i.pravatar.cc/150?u=11" },
  { text: "Professional, fast, and creative. Sohel redesigned our WordPress site and it looks stunning on all devices. Communication was excellent.", name: "Priya Sharma", role: "Marketing Manager", avatar: "https://i.pravatar.cc/150?u=22" },
  { text: "Amazing e-commerce store delivered ahead of schedule. The attention to detail in UI, animations, and mobile experience was exactly what we needed.", name: "Ahmed Al-Rashid", role: "E-commerce Owner", avatar: "https://i.pravatar.cc/150?u=33" },
  { text: "Sohel's SEO work made a real difference. Our bounce rate dropped and we're now ranking on the first page for our key terms!", name: "Riya Patel", role: "Small Business Owner", avatar: "https://i.pravatar.cc/150?u=44" },
  { text: "Incredibly talented and reliable. He understood our vision instantly and transformed it into a beautiful, fully functional website.", name: "Daniel Kim", role: "Startup Co-founder", avatar: "https://i.pravatar.cc/150?u=55" },
];

export default function Testimonials() {
  const swiperRef = useRef(null);

  useEffect(() => {
    let instance = null;
    import("swiper/bundle").then(({ Swiper }) => {
      instance = new Swiper(swiperRef.current, {
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true },
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 20,
        grabCursor: true,
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
      });
    });
    return () => instance?.destroy?.();
  }, []);

  return (
    <section
      id="testimonials"
      className="section-py py-16 sm:py-24 lg:py-32"
      style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%,rgba(26,111,168,.1),transparent 70%),#0a0e12" }}
    >
      <div className="w93 px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16" data-aos="fade-up">
          <div className="eyebrow mb-3">Client Reviews</div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight mb-4">
            Trusted by Clients Worldwide
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-xl mx-auto">Real stories and heartfelt feedback from happy clients.</p>
        </div>

        <div className="swiper swiper-testi" ref={swiperRef} data-aos="fade-up" data-aos-delay="80">
          <div className="swiper-wrapper">
            {testimonials.map((t, i) => (
              <div key={i} className="swiper-slide">
                <div className="testi-card glass-card relative rounded-2xl p-5 sm:p-7 mx-1 h-full">
                  <div className="text-yellow-400 text-sm tracking-widest mb-3 sm:mb-4">★★★★★</div>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed italic mb-5 sm:mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={t.avatar} alt={t.name} className="w-10 sm:w-11 h-10 sm:h-11 rounded-full object-cover"
                      style={{ border: "2px solid rgba(108,184,230,.25)" }} />
                    <div>
                      <div className="font-display font-bold text-sm text-white">{t.name}</div>
                      <div className="text-xs text-white/45 mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination mt-4" />
        </div>

        <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="100">
          {[
            { icon: "bi bi-patch-check-fill text-[#6cb8e6]", text: "13+ Happy Clients" },
            { icon: "bi bi-star-fill text-yellow-400", text: "5-Star Rated" },
            { icon: "bi bi-lightning-charge-fill text-green-400", text: "Fast Delivery" },
            { icon: "bi bi-shield-fill-check text-[#6cb8e6]", text: "100% Satisfaction" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm text-white/70 font-semibold"
              style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
              <i className={b.icon} /> {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

