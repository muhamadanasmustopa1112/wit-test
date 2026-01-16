export interface Article {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  status: "draft" | "published";
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Meta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ArticlesResponse {
  data: Article[];
  meta: Meta;
}

export interface DetailArticleResponse {
  data: Article;
}
