import { ArticlesResponse, DetailArticleResponse } from "@/interface/article";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  
export async function getArticles(
  page = 1,
  limit = 10,
  status?: string
): Promise<ArticlesResponse> {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (status) params.append("status", status);

  const res = await fetch(
    `${API_URL}/articles?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  return res.json();
}

export async function getArticleBySlug(slug: string) : Promise<DetailArticleResponse | null> {
  const res = await fetch(
    `${API_URL}/articles/slug/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }

  return res.json();
}