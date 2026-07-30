export type BlogBlock =
  | ParagraphBlock
  | HeadingBlock
  | QuoteBlock
  | CodeBlock
  | ImageBlock
  | ListBlock
  | DividerBlock;

export interface ParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface HeadingBlock {
  type: "heading";
  level: 2 | 3;
  text: string;
}

export interface QuoteBlock {
  type: "quote";
  text: string;
}

export interface CodeBlock {
  type: "code";
  language: string;
  code: string;
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface ListBlock {
  type: "list";
  ordered?: boolean;
  items: string[];
}

export interface DividerBlock {
  type: "divider";
}

export interface Blog {

  slug: string;

  title: string;

  description: string;

  excerpt: string;

  publishedAt: string;

  readingTime: string;

  featured: boolean;

  tags: string[];

  content: BlogBlock[];
}