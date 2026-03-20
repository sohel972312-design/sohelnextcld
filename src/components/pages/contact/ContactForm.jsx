import Link from "next/link";
export default function ContactForm(params) {
    return(
        <>
          {/* Form */}
            <div className="lg:col-span-3" data-aos="fade-left" data-aos-delay="100" id="contact-form"> 
              <div className="glass-card rounded-2xl p-6 sm:p-8" style={{ borderColor: "rgba(108,184,230,.1)" }}>
                <div className="eyebrow mb-2">Send a Message</div>
                <h2 className="font-display font-extrabold text-2xl text-white mb-6">Tell Me About Your Project</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/55 mb-2">First Name</label>
                    <input type="text" className="form-inp" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/55 mb-2">Last Name</label>
                    <input type="text" className="form-inp" placeholder="Smith" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/55 mb-2">Email Address</label>
                    <input type="email" className="form-inp" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/55 mb-2">Phone / WhatsApp</label>
                    <input type="tel" className="form-inp" placeholder="+1 000 000 0000" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/55 mb-2">Service Needed</label>
                    <select className="form-inp">
                      <option disabled>Select a service…</option>
                      <option>Web Development</option>
                      <option>WordPress Development</option>
                      <option>Website Design</option>
                      <option>Hosting &amp; Domain Setup</option>
                      <option>SEO / Digital Marketing</option>
                      <option>Multiple Services</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/55 mb-2">Budget Range</label>
                    <select className="form-inp">
                      <option disabled>Select your budget…</option>
                      <option>Under ₹10,000</option>
                      <option>₹10,000 – ₹25,000</option>
                      <option>₹25,000 – ₹50,000</option>
                      <option>₹50,000+</option>
                      <option>Let&apos;s Discuss</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold tracking-widest uppercase text-white/55 mb-2">Project Details</label>
                    <textarea className="form-inp resize-none" rows={5}
                      placeholder="Tell me about your project — goals, timeline, references, and any specific requirements…" />
                  </div>
                  <div className="sm:col-span-2">
                    <button className="btn-p text-white font-display font-bold text-sm w-full py-4 rounded-xl inline-flex items-center justify-center gap-2">
                      Send Message &amp; Get Free Quote <i className="bi bi-arrow-right" />
                    </button>
                    <p className="text-center text-white/35 text-xs mt-3">
                      <i className="bi bi-shield-fill-check text-[#6cb8e6] mr-1" />
                      Your information is safe — I never share your details with anyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
 </>



    );
};
