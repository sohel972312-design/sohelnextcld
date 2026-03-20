"use client";
import Link from "next/link";

export default function Banner({ title, breadcrumb = [], backgroundImage }) {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 text-white"
      style={{ backgroundImage: `url(${backgroundImage || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 w93 px-4 sm:px-6 mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight mb-4">{title}</h1>
          <div className="text-sm text-white/70">
            {breadcrumb.map((crumb, index) => (
              <span key={`${crumb.label}-${index}`}>
                {crumb.href ? (
                  <Link href={crumb.href} className="text-[#6cb8e6] hover:text-[#83c5f7]">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {index < breadcrumb.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
