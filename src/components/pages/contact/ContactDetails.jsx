import Link from "next/link";
export default function ContactDetails(params) {
    return(
        <>


 {/* Info Panel */}
            <div className="lg:col-span-2" data-aos="fade-right">
              <div className="rounded-2xl p-6 sm:p-8 h-full flex flex-col"
                style={{ background: "linear-gradient(135deg,rgba(26,111,168,.15),rgba(13,43,69,.5))", border: "1px solid rgba(108,184,230,.15)" }}>
                <div className="eyebrow mb-2">Get in Touch</div>
                <h2 className="font-display font-extrabold text-2xl text-white mb-6">Contact Details</h2>

                <div className="space-y-5 flex-1">
                  {[
                    { icon: "bi bi-geo-alt-fill", label: "Location", value: "Borsad, Gujarat, India", href: null },
                    { icon: "bi bi-envelope-fill", label: "Email", value: "sohel@sohelmalek.com", href: "mailto:sohel@sohelmalek.com" },
                    { icon: "bi bi-telephone-fill", label: "Phone / WhatsApp", value: "+91 97231 21537", href: "tel:+919723121537" },
                    // { icon: "bi bi-clock-fill", label: "Working Hours", value: "Mon–Sat, 9AM–7PM IST", href: null },
                    { icon: "bi bi-lightning-charge-fill", label: "Response Time", value: "Within 24 hours", href: null },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4 group">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-[#6cb8e6] transition-all group-hover:scale-110 group-hover:-rotate-6"
                        style={{ background: "rgba(108,184,230,.1)", border: "1px solid rgba(108,184,230,.2)" }}>
                        <i className={`${item.icon} text-sm`} />
                      </div>
                      <div>
                        <div className="font-display font-bold text-xs text-white/50 uppercase tracking-widest mb-0.5">{item.label}</div>
                        {item.href
                          ? <Link href={item.href} className="text-sm text-[#6cb8e6] hover:text-[#a5d4ef] transition-colors">{item.value}</Link>
                          : <div className="text-sm text-white/70">{item.value}</div>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
                  <div className="font-display font-bold text-xs text-white/50 uppercase tracking-widest mb-3">Follow Me</div>
                  <div className="flex gap-2">
                    {[
                      { icon: "bi bi-github", href: "https://github.com/sohelmalek", hoverColor: "hover:text-white" },
                      { icon: "bi bi-linkedin", href: "https://in.linkedin.com/in/sohel-malek-b4b846196", hoverColor: "hover:text-blue-400" },
                      { icon: "bi bi-facebook", href: "https://www.facebook.com/sohelmalek03", hoverColor: "hover:text-blue-600" },
                      { icon: "bi bi-instagram", href: "https://www.instagram.com/sohel_malek03", hoverColor: "hover:text-pink-400" },
                      { icon: "bi bi-whatsapp", href: "https://wa.me/+919723121537", hoverColor: "hover:text-green-400" },
                    ].map((s) => (
                      <Link key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-white/50 text-sm transition-all hover:-translate-y-1 ${s.hoverColor}`}
                        style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}>
                        <i className={s.icon} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>


</>



    );
};
