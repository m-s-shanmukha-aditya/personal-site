import type { Blog } from "../../blog/types";

interface Props {
  blog: Blog;
}

export default function BlogRenderer({ blog }: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <article className="max-w-3xl py-24 sm:py-32">

        <header className="mb-16">
          <p className="text-sm text-neutral-500">
            {blog.publishedAt} · {blog.readingTime}
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">
            {blog.title}
          </h1>

          <p className="mt-8 text-lg leading-9 text-neutral-600">
            {blog.description}
          </p>
        </header>

        <div className="space-y-8">
          {blog.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-lg leading-9 text-neutral-600"
                  >
                    {block.text}
                  </p>
                );

              case "heading":
                return block.level === 2 ? (
                  <h2
                    key={index}
                    className="pt-8 text-3xl font-semibold tracking-tight"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <h3
                    key={index}
                    className="pt-6 text-2xl font-semibold tracking-tight"
                  >
                    {block.text}
                  </h3>
                );

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="border-l-2 border-neutral-200 pl-6 italic text-neutral-600"
                  >
                    {block.text}
                  </blockquote>
                );

              case "list":
                return block.ordered ? (
                  <ol
                    key={index}
                    className="list-decimal space-y-3 pl-6 text-lg leading-8 text-neutral-600"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul
                    key={index}
                    className="list-disc space-y-3 pl-6 text-lg leading-8 text-neutral-600"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );

              case "code":
                return (
                  <pre
                    key={index}
                    className="overflow-x-auto rounded-xl bg-neutral-900 p-6"
                  >
                    <code>{block.code}</code>
                  </pre>
                );

              case "image":
                return (
                  <figure key={index} className="space-y-4">
                    <img
                      src={block.src}
                      alt={block.alt}
                      className="w-full rounded-2xl"
                    />

                    {block.caption && (
                      <figcaption className="text-center text-sm text-neutral-500">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              case "divider":
                return <hr key={index} className="border-neutral-200" />;

              default:
                return null;
            }
          })}
        </div>

      </article>
    </div>
  );
}