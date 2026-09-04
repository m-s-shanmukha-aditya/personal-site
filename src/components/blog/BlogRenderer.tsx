import type { Blog } from "../../content/blogs/types";

interface Props {
  blog: Blog;
}

export default function BlogRenderer({ blog }: Props) {
  const headings = blog.content.filter((block) => block.type === "heading");

  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <article className="py-20 sm:py-24">

        <header className="mb-12 max-w-4xl">
          <p className="text-sm font-medium text-accent">
            {blog.publishedAt} · {blog.readingTime}
          </p>
          <h1 className="font-display mt-4 text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            {blog.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">
            {blog.description}
          </p>
        </header>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_15rem]">
          <div className="max-w-4xl space-y-7">
            {blog.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-lg leading-8 text-muted-foreground"
                  >
                    {block.text}
                  </p>
                );

              case "heading": {
                const headingId = `article-heading-${index}`;

                return block.level === 2 ? (
                  <h2
                    key={index}
                    id={headingId}
                    className="scroll-mt-28 pt-8 font-display text-3xl tracking-tight"
                  >
                    {block.text}
                  </h2>
                ) : (
                  <h3
                    key={index}
                    id={headingId}
                    className="scroll-mt-28 pt-6 font-display text-2xl tracking-tight"
                  >
                    {block.text}
                  </h3>
                );
              }

              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="border-l-2 border-accent pl-6 italic text-muted-foreground"
                  >
                    {block.text}
                  </blockquote>
                );

              case "list":
                return block.ordered ? (
                  <ol
                    key={index}
                    className="list-decimal space-y-3 pl-6 text-lg leading-8 text-muted-foreground"
                  >
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ) : (
                  <ul
                    key={index}
                    className="list-disc space-y-3 pl-6 text-lg leading-8 text-muted-foreground"
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
                    className="overflow-x-auto border border-border bg-muted px-5 py-4 font-mono text-sm leading-6 text-foreground"
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
                      className="w-full border border-border"
                    />

                    {block.caption && (
                      <figcaption className="text-center text-sm text-muted-foreground">
                        {block.caption}
                      </figcaption>
                    )}
                  </figure>
                );

              case "divider":
                return <hr key={index} className="border-border" />;

              default:
                return null;
            }
            })}
          </div>

          <aside className="hidden border-l border-border pl-6 lg:block">
            <div className="sticky top-28 space-y-8 text-sm">
              <div>
                <p className="font-semibold text-foreground">This note</p>
                <p className="mt-2 leading-6 text-muted-foreground">{blog.readingTime}</p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Topics</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="border border-border px-2 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {headings.length > 0 && (
                <div>
                  <p className="font-semibold text-foreground">In this article</p>
                  <div className="mt-3 space-y-2 leading-6 text-muted-foreground">
                    {headings.map((heading) => {
                      const headingIndex = blog.content.indexOf(heading);

                      return (
                        <a
                          key={heading.text}
                          href={`#article-heading-${headingIndex}`}
                          className="block transition-colors hover:text-accent"
                        >
                            {heading.text}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

      </article>
    </div>
  );
}