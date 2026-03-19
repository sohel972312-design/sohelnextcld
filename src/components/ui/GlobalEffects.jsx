// ============================================================
// FILE: components/GlobalEffects.jsx
// ============================================================
"use client";
import { useEffect } from "react";

export default function GlobalEffects() {
  useEffect(() => {
    // AOS Init
    import("aos").then((AOS) => {
      AOS.default.init({ duration: 750, easing: "cubic-bezier(.16,1,.3,1)", once: true, offset: 60 });
    });

    // Scroll Progress + Active Nav + Parallax
    const sp = document.getElementById("sp");
    const onScroll = () => {
      if (sp) {
        sp.style.width =
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100 + "%";
      }
      const secs = document.querySelectorAll("section[id]");
      let cur = "";
      secs.forEach((s) => { if (window.scrollY >= s.offsetTop - 130) cur = s.id; });
      document.querySelectorAll(".nav-ul a").forEach((a) => {
        a.style.color = a.getAttribute("href") === "#" + cur ? "#fff" : "";
      });
      ["orb1", "orb2"].forEach((c, i) => {
        const el = document.querySelector(".animate-" + c);
        if (el) el.style.transform = `translateY(${window.scrollY * (i === 0 ? 0.15 : -0.1)}px)`;
      });
    };
    window.addEventListener("scroll", onScroll);

    // Cursor Glow
    const cg = document.getElementById("cg");
    const onMouseMove = (e) => {
      if (cg) { cg.style.left = e.clientX + "px"; cg.style.top = e.clientY + "px"; }
    };
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div id="sp" />
      <div id="cg" />
    </>
  );
}

