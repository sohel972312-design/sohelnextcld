export const dynamic = "force-dynamic";
// routes.jsx (simplified example)
import { supabase } from "@/lib/supabase";
export default async function handler(req, res) {
  const { slug } = req.query;

  // Agar slug hai → single post fetch
  if (slug) {
    const { data: post, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) return res.status(500).json({ error: error.message });

    const { data: related } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("category", post.category)
      .neq("slug", slug)
      .limit(3);

    return res.status(200).json({ post, related });
  }

  // Agar slug nahi → list fetch
  const { data: posts, error: listError } = await supabase
    .from("blog_posts")
    .select("*");

  if (listError) return res.status(500).json({ error: listError.message });

  res.status(200).json(posts);
}