// app/api/blog/route.js
import { NextResponse } from "next/server";
import { blogPosts } from "@/lib/blogData";

export async function GET() {
  return NextResponse.json(blogPosts);
}