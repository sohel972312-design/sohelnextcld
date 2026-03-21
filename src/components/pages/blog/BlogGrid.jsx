

// ============================================================
// FILE: components/pages/blog/BlogGrid.jsx
// ============================================================
"use client";
import { useState } from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";

const categories = ["All", "Web Design", "WordPress", "SEO", "Tailwind CSS", "UI/UX"];

export default function BlogGrid() {
  const [active, setActive] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered = active === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === active);

  const visible = filtered.slice(0, visibleCount);

  return (
    <section id="blog-grid" className="py-16 sm:py-24" style={{ background: "#101418" }}>
      <div className="w93 px-4 sm:px-6">

        {/* Featured Post */}
        <div className="mb-12" data-aos="fade-up">
          <FeaturedPost post={blogPosts[0]} />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setVisibleCount(6); }}
              className="font-display font-bold text-xs tracking-widest uppercase px-4 sm:px-5 py-2 rounded-full transition-all"
              style={
                active === cat
                  ? { background: "rgba(108,184,230,.15)", border: "1px solid rgba(108,184,230,.35)", color: "#6cb8e6" }
                  : { background: "transparent", border: "1px solid rgba(255,255,255,.1)", color: "rgba(255,255,255,.5)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {visible.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={(i % 3) * 80} />
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-12" data-aos="fade-up">
            <button
              onClick={() => setVisibleCount((v) => v + 6)}
              className="btn-g text-white/80 font-display font-semibold text-sm px-8 py-4 rounded-full inline-flex items-center gap-2"
            >
              Load More Articles <i className="bi bi-arrow-down" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ── Featured Post Card ──
function FeaturedPost({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
      style={{ background: "#1c2128", border: "1px solid rgba(255,255,255,.06)", boxShadow: "0 0 0 0 rgba(108,184,230,.0)" }}>
      {/* Thumbnail */}
      <div className="h-52 sm:h-64 lg:h-full flex items-center justify-center text-6xl relative overflow-hidden"
        style={{ background: post.thumbBg, minHeight: 240 }}>
        <img
          src={post.bannerImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,transparent 60%,rgba(0,0,0,.3))" }} />
        <span className="absolute top-4 right-26 text-xs font-bold px-3 py-1 rounded-full font-display"
          style={{ background: post.catBg, color: post.catColor, border: `1px solid ${post.catColor}33` }}>
          {post.category}
        </span>
        <span className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full font-bold text-white/60 font-display"
          style={{ background: "rgba(0,0,0,.4)", border: "1px solid rgba(255,255,255,.08)" }}>
          Featured
        </span>
      </div>
      {/* Content */}
      <div className="p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-xs text-white/40 mb-4">
            <span className="flex items-center gap-1"><i className="bi bi-calendar3" /> {post.date}</span>
            {/* <span className="w-1 h-1 rounded-full bg-white/20" /> */}
            {/* <span className="flex items-center gap-1"><i className="bi bi-clock" /> {post.readTime}</span> */}
          </div>
          <h2 className="font-display font-extrabold text-xl sm:text-2xl text-white leading-tight mb-3 group-hover:text-[#6cb8e6] transition-colors">
            {post.title}
          </h2>
          <p className="text-white/55 text-sm leading-relaxed mb-5 line-clamp-3">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-lg font-mono text-white/40"
                style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.authorAvatar} alt={post.author} className="w-8 h-8 rounded-full object-cover"
              style={{ border: "2px solid rgba(108,184,230,.2)" }} />
            <span className="text-xs font-display font-bold text-white/60">{post.author}</span>
          </div>
          <span className="text-xs font-bold text-[#6cb8e6] flex items-center gap-1 group-hover:gap-2 transition-all">
            Read Article <i className="bi bi-arrow-right" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Blog Card ──
function BlogCard({ post, delay }) {
  return (
    <Link href={`/blog/${post.slug}`}
      className="group relative rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1.5"
      style={{ background: "#1c2128", border: "1px solid rgba(255,255,255,.06)" }}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Thumbnail */}
      <div className="h-auto flex items-center justify-center relative overflow-hidden"
        style={{ background: post.thumbBg }}>
        <img
          src={post.bannerImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: "rgba(13,43,69,.5)" }} />
        <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full font-display"
          style={{ background: post.catBg, color: post.catColor, border: `1px solid ${post.catColor}33` }}>
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-white/35 mb-3">
          <span className="flex items-center gap-1"><i className="bi bi-calendar3" /> {post.date}</span>
          <span className="w-1 h-1 rounded-full bg-white/15" />
          <span className="flex items-center gap-1"><i className="bi bi-clock" /> {post.readTime}</span>
        </div>
        <h3 className="font-display font-extrabold text-sm sm:text-base text-white leading-snug mb-2 group-hover:text-[#6cb8e6] transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-white/45 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: "1px solid rgba(255,255,255,.06)" }}>
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.authorAvatar} alt={post.author} className="w-7 h-7 rounded-full object-cover"
              style={{ border: "1.5px solid rgba(108,184,230,.2)" }} />
            <span className="text-xs font-display font-bold text-white/50">{post.author}</span>
          </div>
          <span className="text-xs font-bold text-[#6cb8e6] flex items-center gap-1 group-hover:gap-2 transition-all">
            Read <i className="bi bi-arrow-right" />
          </span>
        </div>
      </div>

      {/* Hover border top line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
        style={{ background: "linear-gradient(90deg,#6cb8e6,transparent)" }} />
    </Link>
  );
}


