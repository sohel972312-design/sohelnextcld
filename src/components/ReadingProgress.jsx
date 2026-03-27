"use client";
import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const article = document.getElementById("article-body");
      if (!article) return;

      const rect = article.getBoundingClientRect();
      const total = article.offsetHeight;
      const read = Math.max(0, -rect.top);

      setProgress(Math.min(100, (read / total) * 100));
    }; 

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[3px]"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg,#6cb8e6,#e63946)",
      }}
    />
  );
}