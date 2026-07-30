import type { Blog } from "./types";

const quokka: Blog = {

  slug: "designing-intelligent-conversational-systems",

  title: "Designing Intelligent Conversational Systems",

  description:
    "Lessons learned while building Quokka, an intelligent conversational system.",

  excerpt:
    "Building Quokka taught me that creating intelligent conversational systems is less about generating responses and more about designing reliable software architecture.",

  publishedAt: "2026-07-30",

  readingTime: "12 min",

  featured: true,

  tags: [
    "AI",
    "Software Engineering",
    "RAG"
  ],

  content: [

    {
      type: "paragraph",
      text: "Introduction..."
    },

    {
      type: "heading",
      level: 2,
      text: "Why I Started Building Quokka"
    },

    {
      type: "paragraph",
      text: "..."
    }

  ]

};

export default quokka;