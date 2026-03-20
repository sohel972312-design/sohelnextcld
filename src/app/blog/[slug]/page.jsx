

// ============================================================
// FILE: app/blog/[slug]/page.jsx
// ============================================================
import { notFound } from "next/navigation";
import blogPosts from "@/data/blogPosts";
import BlogInner from "@/components/pages/blog/BlogInner";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Sohel Malek Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return <BlogInner post={post} related={related} />;
}

