import { createClient } from "@supabase/supabase-js";

const BASE_URL = "https://sohelmalek.com";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default async function sitemap() {

  const { data: posts, error } = await supabase
    .from("blogs")
    .select("slug, created_at");

  if (error || !posts) {
    console.error("Supabase sitemap error:", error);
    return [
      {
        url: BASE_URL,
        lastModified: new Date(),
      }
    ];
  }

  const blogPages = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.created_at),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...blogPages,
  ];
}