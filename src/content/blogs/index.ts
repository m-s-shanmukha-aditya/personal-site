import type { Blog } from "./types";

const modules = import.meta.glob<{ default?: Blog }>("./*.ts", {
  eager: true,
});

export const blogs: Blog[] = Object.values(modules)
  .map((module) => module.default)
  .filter((blog): blog is Blog => !!blog && "slug" in blog)
  .sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() -
      new Date(a.publishedAt).getTime()
  );

export const getBlog = (slug: string) =>
  blogs.find(blog => blog.slug === slug);

export const featuredBlog = blogs.find(blog => blog.featured);