"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function ContactForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // 🔹 Validate Single Field (REAL-TIME)
  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) error = "Full name is required";
      else if (!/^[A-Za-z\s]+$/.test(value)) error = "Only alphabets allowed";
      else if (value.length > 20) error = "Max 20 characters allowed";
    }

    if (name === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(value)) error = "Invalid email format";
    }

    if (name === "phone") {
      if (!value.trim()) error = "Phone is required";
      else if (!/^[0-9]+$/.test(value)) error = "Only numbers allowed";
      else if (value.length < 10 || value.length > 14)
        error = "Phone must be 10–14 digits";
    }

    if (name === "service") {
      if (!value) error = "Please select a service";
    }

    if (name === "message") {
      if (!value.trim()) error = "Project details required";
      else if (value.length > 1000)
        error = "Max 1000 characters allowed";
    }

    return error;
  };

  // 🔹 Handle Change (LIVE VALIDATION)
  const handleChange = (e) => {
    let { name, value } = e.target;

    // Remove extra spaces (message)
    if (name === "message") {
      value = value.replace(/\s+/g, " ");
    }

    // Only numbers for phone (UX boost)
    if (name === "phone") {
      value = value.replace(/\D/g, "");
    }

    setForm((prev) => ({ ...prev, [name]: value }));

    // 🔥 Real-time error update
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // 🔹 Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    Object.keys(form).forEach((field) => {
      const error = validateField(field, form[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.status === "success") {
        router.push("/thank-you");

        // ✅ form reset
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        setErrors({});
      } else {
        alert("Something went wrong ❌");
      }

    } catch (err) {
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="lg:col-span-3" id="contact-form">
      <div className="glass-card rounded-2xl p-6 sm:p-8">
        <h2 className="text-white mb-6">Tell Me About Your Project</h2>

        <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4">

          {/* Name */}
          <div className="col-span-2">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`form-inp ${errors.name ? "border-red-400" : ""}`}
            />
            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div  className="col-span-2 md:col-span-1">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className={`form-inp ${errors.email ? "border-red-400" : ""}`}
            />
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div  className="col-span-2 md:col-span-1">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
              className={`form-inp ${errors.phone ? "border-red-400" : ""}`}
            />
            {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Service */}
          <div  className="col-span-2">
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className={`form-inp ${errors.service ? "border-red-400" : ""}`}
            >
              <option value="">Select a service…</option>
              <option>Web Development</option>
              <option>WordPress Development</option>
              <option>Website Design</option>
              <option>Hosting & Domain Setup</option>
              <option>SEO / Digital Marketing</option>
              <option>Multiple Services</option>
              <option>Other / Not Sure</option>
            </select>
            {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
          </div>

          {/* Message */}
          <div  className="col-span-2">
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Project details..."
              className={`form-inp ${errors.message ? "border-red-400" : ""}`}
            />
            <div className="flex justify-between">
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
              <span className="text-xs text-white/40">
                {form.message.length}/1000
              </span>
            </div>
          </div>

          {/* Submit */}
          <div  className="col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="btn-p w-full py-4 rounded-2xl flex items-center justify-center gap-2"
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}