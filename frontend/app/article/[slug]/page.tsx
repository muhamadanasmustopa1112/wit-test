import { getArticleBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const res = await getArticleBySlug(params.slug);

  if (!res) {
    return {
      title: "Article Not Found",
      description: "Article not found",
    };
  }

  const article = res.data;

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const res = await getArticleBySlug(params.slug);

  if (!res) notFound();

  const article = res.data;

  return (
    <article className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">
        {article.title}
      </h1>

      <div className="prose">
        {article.content}
      </div>
    </article>
  );
}
