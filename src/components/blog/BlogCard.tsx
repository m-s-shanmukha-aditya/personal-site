import { Link } from "react-router-dom";
import type { Blog } from "../../blog/types";

interface Props {
  blog: Blog;
}

export default function BlogCard({ blog }: Props) {
  return (
    <article className="group py-8 border-b border-neutral-200 last:border-none">

      <div className="max-w-3xl">

        <p className="text-sm text-neutral-500">
          {blog.publishedAt} · {blog.readingTime}
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight transition-colors group-hover:text-neutral-700">
          {blog.title}
        </h2>

        <p className="mt-4 text-lg leading-8 text-neutral-600">
          {blog.excerpt}
        </p>

        <Link
          to={`/blog/${blog.slug}`}
          className="mt-5 inline-flex items-center font-medium transition-colors hover:text-neutral-700"
        >
          Read Article
          <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>

    </article>
  );
}