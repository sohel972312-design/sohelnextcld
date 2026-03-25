import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://sohelmalek.com";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function sitemap() {

  const staticPages = [
    { url: BASE_URL, lastModified: new Date() },
    { url: `${BASE_URL}/about`, lastModified: new Date() },
    { url: `${BASE_URL}/services`, lastModified: new Date() },
    { url: `${BASE_URL}/projects`, lastModified: new Date() },
    { url: `${BASE_URL}/blog`, lastModified: new Date() },
    { url: `${BASE_URL}/contact`, lastModified: new Date() },
  ];

  try {

    const { data: posts } = await supabase
      .from("blog_posts")
      .select("slug, created_at");

    const blogPages =
      posts?.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.created_at),
      })) || [];

    return [...staticPages, ...blogPages];

  } catch (error) {

    console.error("Sitemap error:", error);
    return staticPages;

  }
}