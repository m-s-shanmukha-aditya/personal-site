import Container from "../../components/layout/Container";
import { blogs } from "../../content/blogs";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <section className="blog-page py-20 sm:py-24">
            <Container>
                <div className="space-y-12">
                    <div className="space-y-2">
                        <p className="eyebrow">Notes from the workbench</p>
                        <h1 className="font-display mt-4 text-5xl tracking-tight">
                            Blog
                        </h1>

                        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                            A place where I document engineering decisions,
                            software design, machine learning experiments, and
                            lessons learned while building real-world systems.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {blogs.map((blog) => (
                            <article
                                key={blog.slug}
                                className="border-b border-border py-8 first:pt-0 last:border-none"
                            >
                                <div className="space-y-3">
                                    <div className="space-y-2">
                                        <h2 className="font-display text-3xl tracking-tight">
                                            <Link to={`/blog/${blog.slug}`} className="transition-colors hover:text-accent">
                                                {blog.title}
                                            </Link>
                                        </h2>

                                        <div className="flex flex-wrap items-center gap-2 text-sm">
                                            <span className="text-muted-foreground">
                                                {blog.publishedAt}
                                            </span>

                                            <span className="text-muted-foreground">
                                                ·
                                            </span>

                                            <span className="text-muted-foreground">
                                                {blog.readingTime}
                                            </span>

                                            {blog.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="max-w-3xl leading-7 text-muted-foreground">
                                        {blog.excerpt}
                                    </p>

                                    <Link
                                        to={`/blog/${blog.slug}`}
                                        className="inline-flex font-medium text-foreground transition-colors hover:text-accent"
                                    >
                                        Read Article →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Blog;