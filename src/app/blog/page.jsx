// ============================================================
// FILE: app/blog/page.jsx
// ============================================================
import HeroSection from "@/components/ui/HeroSection";
import CTASection from "@/components/ui/CTASection";
import BlogGrid from "@/components/pages/blog/BlogGrid";
import BlogTicker from "@/components/pages/blog/BlogTicker";

export const metadata = {
  title: "Blog — Sohel Malek",
  description: "Web design, WordPress, SEO tips and tutorials by Sohel Malek.",
};

export default function BlogPage() {
  return (
    <>
      <HeroSection
        eyebrow="Blog"
        title={<>Tips, Tutorials &amp; <span className="grad-text">Insights</span></>}
        subtitle="Web design, WordPress, SEO, and digital marketing articles to help your business grow online."
        primaryLabel="Browse Articles"
        primaryHref="#blog-grid"
        secondaryLabel="Hire Me"
        secondaryHref="/contact"
      />

      <BlogTicker />

      <BlogGrid />

      <CTASection
        eyebrow="Ready to grow online?"
        title={<>Let&apos;s build something <span className="grad-text">amazing</span> together</>}
        description="From design to development to SEO — I handle everything so you can focus on your business."
        primary={{ label: "Start a Project", href: "/contact" }}
        secondary={{ label: "View My Work", href: "/projects" }}
      />
    </>
  );
}