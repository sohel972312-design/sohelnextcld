
"use client";
// ============================================================
// FILE: components/pages/blog/BlogInner.jsx
// ============================================================
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import CTASection from "@/components/ui/CTASection";
import FAQs from "@/components/pages/contact/FAQs";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";


// import { supabase } from "@/lib/supabase";
export default function BlogInner() {


  const [progress, setProgress] = useState(0);
  const [tocOpen, setTocOpen] = useState(false);
  const [recentPosts, setRecentPosts] = useState([]);
const router = useRouter();
  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      if (!placeholderRef.current || !relatedRef.current) return;

      const placeholderRect = placeholderRef.current.getBoundingClientRect();
      const relatedRect = relatedRef.current.getBoundingClientRect();

      const HEADER_HEIGHT = 90;
      const SIDEBAR_HEIGHT = sidebarRef.current?.offsetHeight || 0;

      // 🔹 Top → normal
      if (placeholderRect.top > HEADER_HEIGHT) {
        setIsSticky(false);
        return;
      }

      // 🔹 Bottom hit (Related section)
      if (relatedRect.top <= HEADER_HEIGHT + SIDEBAR_HEIGHT) {
        setIsSticky("bottom");
        return;
      }

      // 🔹 Middle → fixed
      setIsSticky(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const { slug } = useParams(); // get slug from URL
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  const sidebarRef = useRef(null);
  const placeholderRef = useRef(null);
  const relatedRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(supabaseUrl, supabaseKey);
      // Fetch recent posts (exclude current)
      const { data: recentData } = await supabase
        .from("blog_posts")
        .select("*")
        .neq("slug", slug)      // current blog exclude
        .order("created_at", { ascending: false }) // latest first
        .limit(5);

      setRecentPosts(recentData || []);
      const { data } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .single();

      setPost(data);

      // categories fetch
      const { data: categoryData } = await supabase
        .from("blog_posts")
        .select("category");

      if (categoryData) {
        const unique = [...new Set(categoryData.map((c) => c.category))];
        setCategories(unique);
      }

      setLoading(false);
    };

    fetchBlog();
  }, [slug]);
  // ── Fetch blog from DB ──
useEffect(() => {
  if (!slug) return;

  const fetchBlog = async () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const { createClient } = await import("@supabase/supabase-js");
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: categoryData } = await supabase
      .from("blog_posts")
      .select("category");

    if (categoryData) {
      const uniqueCategories = [...new Set(categoryData.map((c) => c.category))];
      setCategories(uniqueCategories);
    }

      if (categoryData) {
        const uniqueCategories = [...new Set(categoryData.map((c) => c.category))];
        setCategories(uniqueCategories);
      }



      try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        const { createClient } = await import("@supabase/supabase-js");
        const supabase = createClient(supabaseUrl, supabaseKey);

        // Fetch post by slug
        const { data, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", slug)
          .single();

        if (error || !data) {
          setPost(null);
          setLoading(false);
          console.warn("Blog not found for slug:", slug, error);
          return;
        }

        setPost(data);

        // Fetch related posts (same category, exclude current)
        const { data: relatedData } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("category", data.category)
          .neq("slug", slug)
          .limit(3);

        setRelated(relatedData || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);
  useEffect(() => {
    const handleScroll = () => {
      if (!placeholderRef.current || !relatedRef.current || !sidebarRef.current) return;

      const HEADER_HEIGHT = 90;
      const SIDEBAR_HEIGHT = sidebarRef.current.offsetHeight;

      const placeholderTop = placeholderRef.current.getBoundingClientRect().top;
      const relatedTop = relatedRef.current.getBoundingClientRect().top;

      if (placeholderTop > HEADER_HEIGHT) setIsSticky(false);
      else if (relatedTop <= HEADER_HEIGHT + SIDEBAR_HEIGHT + 20) setIsSticky("bottom");
      else setIsSticky(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return <div className="text-center py-20 text-white">Loading blog...</div>;
  if (!post) return <div className="text-center py-20 text-white">Blog not found</div>;






  // Parse headings for TOC
  const headings = [];
  const headingRegex = /^##\s+(.+)$/gm;
  let match;
  while ((match = headingRegex.exec(post.content)) !== null) {
    headings.push({
      text: match[1],
      id: match[1].toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    });
  }

  return (
    <>
      {/* Reading Progress */}
      <div
        className="fixed top-0 left-0 z-[9999] h-[3px] transition-all duration-100"
        style={{ width: `${progress}%`, background: "linear-gradient(90deg,#6cb8e6,#e63946)" }}
      />

      {/* ── Hero ── */}
      <section
        className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%,rgba(108,184,230,.15) 0%,transparent 70%),linear-gradient(160deg,#0d1f30 0%,#0d2b45 50%,#0a1a28 100%)" }}
      >
        <div className="hero-grid absolute inset-0 pointer-events-none" />
        <div className="w93 px-4 sm:px-6 relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs text-white/40 mb-6 font-display" data-aos="fade-down">
            <Link href="/" className="hover:text-[#6cb8e6] transition-colors">Home</Link>
            <i className="bi bi-chevron-right text-[10px]" />
            <Link href="/blog" className="hover:text-[#6cb8e6] transition-colors">Blog</Link>
            <i className="bi bi-chevron-right text-[10px]" />
            <span style={{ color: post.catColor }}>{post.category}</span>
          </div>

          {/* Category */}
          <div className="mb-4 text-center" data-aos="fade-up">
            <span className="text-xs font-bold px-3 py-1.5 rounded-full font-display"
              style={{ background: post.catbg, color: post.catcolor, border: `1px solid ${post.catcolor}33` }}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-center text-white leading-tight mb-5"
            data-aos="fade-up" data-aos-delay="80"
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-white/60 m-auto text-base sm:text-lg leading-relaxed text-center mb-8 max-w-2xl" data-aos="fade-up" data-aos-delay="120">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="160">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.authoravatar} alt={post.author}
                className="w-10 h-10 rounded-full object-cover"
                style={{ border: "2px solid rgba(108,184,230,.3)" }} />
              <div>
                <div className="font-display font-bold text-sm text-white">{post.author}</div>
                <div className="text-xs text-white/40">Author</div>
              </div>
            </div>
            <div className="h-8 w-px hidden sm:block" style={{ background: "rgba(255,255,255,.1)" }} />
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/45">
              <span className="flex items-center gap-1.5"><i className="bi bi-calendar3 text-[#6cb8e6]" /> {post.date}</span>
              {/* <span className="flex items-center gap-1.5"><i className="bi bi-clock text-[#6cb8e6]" /> {post.readTime}</span> */}
            </div>
          </div>




        </div>
      </section>


      {/* ── Content Area ── */}
      <section className="py-12 sm:py-16 " style={{ background: "#111416" }} id="related-section">
        <div className="w93 px-4 sm:px-6 relative z-10 ">
          <div className="grid grid-cols-12 gap-10 lg:gap-12 items-start">

            {/* Article */}
            <article id="article-body" className=" col-span-12 lg:col-span-8">
              <img
                src={post.bannerimage}
                alt={post.title}
                className="w-full h-full object-cover rounded-2xl mb-6"
              />
              <div className="mb-12">

                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              <FAQs faqs={post.faqs} headingClass="mb-8" />
              {/* Tags */}
              {/* <div className="flex flex-wrap gap-2 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}>
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full font-mono text-white/50 transition-all hover:text-[#6cb8e6] cursor-pointer"
                    style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
                    #{tag}
                  </span>
                ))}
              </div> */}

              {/* Share */}
              <div className="mt-8 pt-8 flex flex-wrap items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,.07)" }}>
                <span className="font-display font-bold text-sm text-white/50 mr-2">Share:</span>
                {[
                  { icon: "bi bi-twitter-x", label: "Twitter", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}` },
                  { icon: "bi bi-linkedin", label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sohelmalek.com/blog/${post.slug}`)}` },
                  { icon: "bi bi-whatsapp", label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent(`${post.title} — https://sohelmalek.com/blog/${post.slug}`)}` },
                ].map((s) => (
                  <Link key={s.label} href={s.href} target="_blank"
                    className="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-lg text-white/55 transition-all hover:text-[#6cb8e6] hover:-translate-y-0.5"
                    style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
                    <i className={s.icon} /> {s.label}
                  </Link>
                ))}
              </div>

              {/* Author Card */}
              <div className="mt-10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-5 items-start"
                style={{ background: "linear-gradient(135deg,rgba(26,111,168,.12),rgba(13,43,69,.4))", border: "1px solid rgba(108,184,230,.15)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={post.authoravatar} alt={post.author}
                  className="w-14 h-14 rounded-2xl object-cover shrink-0"
                  style={{ border: "2px solid rgba(108,184,230,.25)" }} />
                <div>
                  <div className="font-display font-extrabold text-base text-white mb-0.5">{post.author}</div>
                  <div className="text-xs text-[#6cb8e6] font-bold mb-2">Web Designer &amp; Developer</div>
                  <p className="text-white/55 text-xs sm:text-sm leading-relaxed mb-3">
                    Professional Web Designer and WordPress Developer from Gujarat, India.
                    Helping brands grow online through clean, fast, and conversion-focused websites.
                  </p>
                  <Link href="/about" className="text-xs font-bold text-[#6cb8e6] hover:text-[#a5d4ef] transition-colors flex items-center gap-1">
                    View Profile <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block relative col-span-12 lg:col-span-4">
              <div ref={placeholderRef} />

              <div
                ref={sidebarRef}
                className={`w-full ${isSticky === true
                  ? "fixed"
                  : isSticky === "bottom"
                    ? "absolute"
                    : "relative"
                  }`}
                style={{
                  position:
                    isSticky === true
                      ? "fixed"
                      : isSticky === "bottom"
                        ? "absolute"
                        : "relative",

                  top:
                    isSticky === true
                      ? "90px"
                      : isSticky === "bottom"
                        ? `${relatedRef.current.offsetTop - sidebarRef.current.offsetHeight - 20}px`
                        : "auto",
                }}
              >

                <div className="space-y-5">
                  {/* TOC */}
                 {categories.length > 0 && (
  <div className="rounded-2xl p-5 mb-5"
       style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(108,184,230,.12)" }}>
    <div className="font-display font-bold text-lg text-white mb-4">Categories</div>

    <ul className="space-y-2">
      {categories.map((cat) => (
        <li key={cat}>
          <button
            onClick={() => router.push(`/blog?category=${encodeURIComponent(cat)}`)}
            className="text-xs text-white/50 hover:text-[#6cb8e6] transition-colors leading-relaxed flex items-start gap-2"
          >
            <span className="text-[#6cb8e6]">›</span>
            {cat}
          </button>
        </li>
      ))}
    </ul>
  </div>
)}
                  {recentPosts.length > 0 && (
                    <div
                      className="rounded-2xl p-5 mb-5"
                      style={{
                        background: "rgba(255,255,255,.03)",
                        border: "1px solid rgba(108,184,230,.12)",
                      }}
                    >
                      <div className="font-display font-bold text-lg text-white mb-4 flex items-center gap-2">
                        <i className="bi bi-clock-history text-[#6cb8e6]" /> Recent Blogs
                      </div>

                      <ul className="space-y-2">
                        {recentPosts.map((rpost) => (
                          <li key={rpost.slug}>
                            <Link style={{
                              borderBottom: "1px solid rgba(108,184,230,.12)",
                            }}
                              href={`/blog/${rpost.slug}`}
                              className="text-xs text-white/50 border-b pb-2 hover:text-[#6cb8e6] transition-colors leading-relaxed block"
                            >
                              {rpost.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {/* About Author Sidebar */}
                  {/* <div className="rounded-2xl p-5 mb-5 text-center"
                    style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(108,184,230,.12)" }}>
                     <img src={post.authoravatar} alt={post.author}
                      className="w-14 h-14 rounded-2xl object-cover mx-auto mb-3"
                      style={{ border: "2px solid rgba(108,184,230,.25)" }} />
                    <div className="font-display font-extrabold text-sm text-white mb-0.5">{post.author}</div>
                    <div className="text-xs text-[#6cb8e6] font-bold mb-3">Web Designer &amp; Dev</div>
                    <Link href="/contact"
                      className="btn-p text-white font-display font-bold text-xs px-4 py-2 rounded-full inline-flex items-center gap-1.5">
                      Hire Me <i className="bi bi-arrow-right" />
                    </Link>
                  </div> */}

                  {/* Share Sidebar */}
                  <div className="rounded-2xl p-5"
                    style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(108,184,230,.12)" }}>
                    <div className="font-display font-bold text-lg text-white mb-4">Share this Article</div>
                    <div className="flex gap-2">
                      {[
                        { icon: "bi bi-twitter-x", href: "#" },
                        { icon: "bi bi-linkedin", href: "#" },
                        { icon: "bi bi-whatsapp", href: "#" },
                        { icon: "bi bi-link-45deg", href: "#" },
                      ].map((s) => (
                        <Link key={s.icon} href={s.href} target="_blank"
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-white/45 text-sm transition-all hover:-translate-y-1 hover:text-[#6cb8e6]"
                          style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)" }}>
                          <i className={s.icon} />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── Related Posts ── */}
      {related.length > 0 && (
        <section className="py-16" style={{ background: "#101418" }} ref={relatedRef}>
          <div className="w93 px-4 sm:px-6">
            <div className="eyebrow mb-3 text-center">Keep Reading</div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white text-center mb-10">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rpost, i) => (
                <Link key={rpost.slug} href={`/blog/${rpost.slug}`}
                  className="group rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1.5"
                  style={{ background: "#1c2128", border: "1px solid rgba(255,255,255,.06)" }}
                  data-aos="fade-up" data-aos-delay={i * 80}>
                  <div className="h-auto w-full flex items-center justify-center text-4xl relative" style={{ background: rpost.thumbBg }}>
                    <img
                      src={post.bannerimage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    {/* <div className="flex items-center gap-2 text-xs text-white/35 mb-2">
                      <span><i className="bi bi-clock" /> {rpost.readTime}</span>
                    </div> */}
                    <h3 className="font-display font-extrabold text-sm text-white leading-snug mb-3 group-hover:text-[#6cb8e6] transition-colors line-clamp-2">{rpost.title}</h3>
                    <span className="text-xs font-bold text-[#6cb8e6] flex items-center gap-1 mt-auto group-hover:gap-2 transition-all">
                      Read Article <i className="bi bi-arrow-right" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/blog" className="btn-g text-white/80 font-display font-semibold text-sm px-7 py-3.5 rounded-full inline-flex items-center gap-2">
                View All Articles <i className="bi bi-arrow-right" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection
        eyebrow="Need help with your website?"
        title={<>Let&apos;s work together on your <span className="grad-text">next project</span></>}
        description="From design to development to SEO — I handle everything so you can focus on your business."
        primary={{ label: "Start a Project", href: "/contact" }}
        secondary={{ label: "View My Work", href: "/projects" }}
      />
    </>
  );
}

// ── Markdown Renderer ──
// Markdown ko HTML mein convert karta hai (no extra library needed)
function MarkdownRenderer({ content }) {
  const lines = content.trim().split("\n");
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith("## ")) {
      const text = line.replace("## ", "");
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      elements.push(
        <h2 key={i} id={id} className="font-display font-extrabold text-xl sm:text-2xl text-white mt-10 mb-4 scroll-mt-28"
          style={{ borderLeft: "3px solid #6cb8e6", paddingLeft: "1rem" }}>
          {text}
        </h2>
      );
      i++;
      continue;
    }

    // H3
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-display font-extrabold text-lg text-white mt-7 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
      i++;
      continue;
    }

    // Code block
    if (line.startsWith("```")) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i} className="rounded-xl p-4 sm:p-5 my-5 overflow-x-auto text-xs sm:text-sm leading-relaxed"
          style={{ background: "rgba(0,0,0,.4)", border: "1px solid rgba(108,184,230,.15)", fontFamily: "monospace", color: "#a5d4ef" }}>
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      i++;
      continue;
    }

    // Bullet list
    if (line.startsWith("- ")) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={i} className="my-4 space-y-2">
          {listItems.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm text-white/65 leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6cb8e6] shrink-0 mt-2" />
              <InlineMarkdown text={item} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="my-5 pl-4 py-3 text-white/60 text-sm italic leading-relaxed"
          style={{ borderLeft: "3px solid rgba(108,184,230,.4)", background: "rgba(108,184,230,.05)", borderRadius: "0 8px 8px 0" }}>
          {line.replace("> ", "")}
        </blockquote>
      );
      i++;
      continue;
    }

    // Bold heading pattern like **Pros:**
    if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-display font-extrabold text-sm text-white mt-5 mb-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
      i++;
      continue;
    }

    // Paragraph
    if (line.trim() !== "") {
      elements.push(
        <p key={i} className="text-white/65 text-sm sm:text-base leading-relaxed my-3">
          <InlineMarkdown text={line} />
        </p>
      );
    }

    i++;
  }

  return <div className="prose-custom">{elements}</div>;
}

// Inline markdown: **bold**, `code`, [link](href)
function InlineMarkdown({ text }) {
  const parts = [];
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={match.index} className="text-white font-bold">{token.slice(2, -2)}</strong>);
    } else if (token.startsWith("`")) {
      parts.push(
        <code key={match.index} className="text-xs px-1.5 py-0.5 rounded font-mono text-[#6cb8e6]"
          style={{ background: "rgba(108,184,230,.12)" }}>
          {token.slice(1, -1)}
        </code>
      );
    } else {
      const linkMatch = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        parts.push(
          <Link key={match.index} href={linkMatch[2]}
            className="text-[#6cb8e6] hover:text-[#a5d4ef] underline underline-offset-2 transition-colors">
            {linkMatch[1]}
          </Link>
        );
      }
    }
    last = match.index + token.length;
  }

  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}
