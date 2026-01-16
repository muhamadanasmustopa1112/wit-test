import { getArticles } from "@/lib/api";
import Link from "next/link";

interface Props {
  searchParams?: {
    page?: string;
    limit?: string;
  };
}

export default async function ArticlesPage({ searchParams }: Props) {
  const page = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 10;

  const { data: articles, meta } = await getArticles(page, limit, "published");

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 border rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Articles</h1>

      <ul className="space-y-4">
        {articles.map((article) => (
          <li
            key={article.id}
            className="border rounded-lg p-4 hover:bg-gray-50 transition"
          >
            
            <h2 className="text-lg font-semibold">{article.title}</h2>
            {article.excerpt && (
              <p className="text-sm text-gray-600 mt-1">
                {article.excerpt}
              </p>
            )}
            <Link href={`/article/${article.slug}`} className="text-blue-600 hover:underline">
              Read More
            </Link>
          </li>
        ))}
      </ul>

      <Pagination
        page={meta.page}
        totalPages={meta.totalPages}
        limit={limit}
      />
    </main>
  );
}

function Pagination({
  page,
  totalPages,
  limit,
}: {
  page: number;
  totalPages: number;
  limit: number;
}) {
  return (
    <div className="flex justify-between items-center mt-8">
      <span className="text-sm text-gray-600">
        Page {page} of {totalPages}
      </span>

      <div className="flex gap-2">
        {page > 1 && (
          <a
            href={`/article-list?page=${page - 1}&limit=${limit}`}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Previous
          </a>
        )}

        {page < totalPages && (
          <a
            href={`/article-list?page=${page + 1}&limit=${limit}`}
            className="px-3 py-1 border rounded hover:bg-gray-100"
          >
            Next
          </a>
        )}
      </div>
    </div>
  );
}
