import { NextResponse } from 'next/server';

const blogPosts = [
  {
    slug: "mastering-nextjs-15",
    category: "Web Design",
    date: "Mar 15, 2025",
    title: "How to Design Modern Websites That Rank Higher and Convert Better in 2026",
    excerpt: "Explore the latest features in Next.js 15 including improved performance, better developer experience, and new API routes.",
    content: `# Mastering Next.js 15: New Features and Best Practicessfg sdfg sdfg gf `,
    
    bannerImage: "/Fram-5.webp", // ✅ NEW FIELD

    tags: ["Next.js", "React", "JavaScript", "Web Development"],
    authorAvatar: "/Fram-5.webp",
    author: "Sohel Malek"
  },
];

export async function GET() {
  return NextResponse.json(blogPosts);
}