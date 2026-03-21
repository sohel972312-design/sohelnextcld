// ============================================================
// FILE: app/blog/[slug]/page.jsx
// ============================================================

import { notFound } from "next/navigation";
import BlogInner from "@/components/pages/blog/BlogInner";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// 🔹 Reusable fetch function
async function getPosts() {
  const res = await fetch(`${baseUrl}/api/blog`, {
    cache: "no-store", // always fresh
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  return res.json();
}

// 🔹 Static paths (for SEO)
export async function generateStaticParams() {
  const blogPosts = await getPosts();

  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// 🔹 Dynamic metadata (SEO)
export async function generateMetadata({ params }) {
  const blogPosts = await getPosts();

  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} — Sohel Malek Blog`,
    description: post.excerpt,
  };
}

// 🔹 Main Page
export default async function BlogPostPage({ params }) {
  const allPosts = await getPosts();

  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  const related = allPosts
    .filter(
      (p) => p.slug !== post.slug && p.category === post.category
    )
    .slice(0, 3);

  return <BlogInner post={post} related={related} />;
}