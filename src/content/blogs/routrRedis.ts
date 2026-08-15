import type { Blog } from "./types";

const routrRedis: Blog = {
  slug: "how-i-evolved-my-url-shortener-with-redis",

  title: "How I Evolved My URL Shortener with Redis",

  description:
    "How I evolved a simple URL shortener using Base62, Redis cache-aside caching, TTL, and asynchronous analytics synchronization.",

  excerpt:
    "I started with a simple URL shortener. Then each problem pushed me toward Base62, Redis, TTL, and asynchronous analytics synchronization.",

  publishedAt: "2026-08-15",

  readingTime: "5 min read",

  featured: true,

  tags: [
    "Software Engineering",
    "Backend",
    "Redis",
    "System Design",
  ],

  content: [
    {
      type: "heading",
      level: 2,
      text: "What is a URL shortener?",
    },

    {
      type: "paragraph",
      text: "Let’s say you have a very long URL and want a shorter version of it so that it is easier to share or remember. How can you do that?",
    },

    {
      type: "paragraph",
      text: "That’s where a URL shortener comes into the picture.",
    },

    {
      type: "paragraph",
      text: "It takes a long URL and generates a short code by internally mapping that short code to the original URL. Whenever someone accesses the short code, the system looks up the original URL and redirects the user to it within a very short amount of time.",
    },

    {
      type: "paragraph",
      text: "That’s it.",
    },

    {
      type: "paragraph",
      text: "At least, that’s how I initially thought about it.",
    },

    {
      type: "paragraph",
      text: "I wanted to build a simple URL shortener, so after a little planning, I started building Routr.",
    },

    {
      type: "link",
      text: "View Routr on GitHub →",
      url: "https://github.com/m-s-shanmukha-aditya/routr-url-shortener",
    },

    {
      type: "link",
      text: "Try Routr →",
      url: "https://routrr.vercel.app/",
    },

    {
      type: "heading",
      level: 2,
      text: "Starting with the basic version",
    },

    {
      type: "paragraph",
      text: "I first created the URL model with the attributes I thought each URL needed: a unique ID, the original long URL, the short code mapped to it, and other relevant information.",
    },

    {
      type: "paragraph",
      text: "Then I built the two basic operations:",
    },

    {
      type: "list",
      items: [
        "A POST endpoint to create a short URL.",
        "A GET endpoint to redirect a short code to its original URL.",
      ],
    },

    {
      type: "paragraph",
      text: "For persistence, I used PostgreSQL to store and retrieve the URL mappings.",
    },

    {
      type: "paragraph",
      text: "At this point, I had the basic URL shortener working.",
    },

    {
      type: "paragraph",
      text: "But while building the initial prototype, I ran into my first interesting problem.",
    },

    {
      type: "heading",
      level: 2,
      text: "How do I generate unique short codes?",
    },

    {
      type: "paragraph",
      text: "Every new URL needs its own short code. So how should I generate one?",
    },

    {
      type: "paragraph",
      text: "I started experimenting with different approaches. One of the approaches I remember trying was hashing the long URL and using some part of the resulting hash as the short code.",
    },

    {
      type: "paragraph",
      text: "The idea works, but there is a problem: collisions are possible. Two different URLs can theoretically produce the same hash or the same shortened portion of a hash.",
    },

    {
      type: "paragraph",
      text: "I didn’t want to introduce collision detection and resolution just to generate a short code.",
    },

    {
      type: "paragraph",
      text: "Eventually, I came across Base62 encoding.",
    },

    {
      type: "paragraph",
      text: "Base62 uses lowercase letters, uppercase letters, and numbers to represent an integer in a compact form. This gave me a much simpler approach.",
    },

    {
      type: "paragraph",
      text: "Instead of trying to generate a unique value from the URL itself, I could use something that was already guaranteed to be unique: the database-generated ID.",
    },

    {
      type: "code",
      language: "text",
      code: "Database ID → Base62 encoding → Short code",
    },

    {
      type: "paragraph",
      text: "Since every row gets a unique ID from the database and Base62 is simply encoding that integer, different IDs produce different short codes.",
    },

    {
      type: "paragraph",
      text: "That solved the short-code generation problem without having to deal with hash collisions.",
    },

    {
      type: "heading",
      level: 2,
      text: "Then I added analytics",
    },

    {
      type: "paragraph",
      text: "After getting the basic functionality working, I thought: what if users could also see how many times a short URL had been accessed?",
    },

    {
      type: "paragraph",
      text: "So I added click tracking.",
    },

    {
      type: "paragraph",
      text: "I updated the URL model to store the click count and modified the redirect logic to update the count whenever someone accessed a short URL.",
    },

    {
      type: "paragraph",
      text: "The feature worked.",
    },

    {
      type: "paragraph",
      text: "But while testing it, I was also logging the requests being made, and I noticed something interesting.",
    },

    {
      type: "paragraph",
      text: "Every redirect was causing a database read to retrieve the original URL and a database write to update the click count.",
    },

    {
      type: "paragraph",
      text: "For one request, that is obviously not a problem.",
    },

    {
      type: "paragraph",
      text: "But what happens if a large number of requests start hitting the same URL?",
    },

    {
      type: "paragraph",
      text: "I started thinking: can I reduce the number of reads and writes going to my main database?",
    },

    {
      type: "paragraph",
      text: "That’s when Redis came into the picture.",
    },

    {
      type: "heading",
      level: 2,
      text: "Introducing Redis",
    },

    {
      type: "paragraph",
      text: "I decided to use Redis as a cache in front of PostgreSQL.",
    },

    {
      type: "paragraph",
      text: "The idea was simple: if a short URL has already been requested recently, why should I query PostgreSQL again for the same information?",
    },

    {
      type: "paragraph",
      text: "So I started storing the mapping:",
    },

    {
      type: "code",
      language: "text",
      code: "short code → long URL",
    },

    {
      type: "paragraph",
      text: "in Redis.",
    },

    {
      type: "paragraph",
      text: "Now, whenever a redirect request comes in, the application first checks Redis.",
    },

    {
      type: "paragraph",
      text: "If the value is found, we have a cache hit:",
    },

    {
      type: "code",
      language: "text",
      code: "Redis → long URL → redirect",
    },

    {
      type: "paragraph",
      text: "No PostgreSQL lookup is required.",
    },

    {
      type: "paragraph",
      text: "If the value isn’t found, we have a cache miss:",
    },

    {
      type: "code",
      language: "text",
      code: "Redis miss → PostgreSQL → get long URL → store in Redis → redirect",
    },

    {
      type: "paragraph",
      text: "The next request for the same short code can then be served from Redis.",
    },

    {
      type: "paragraph",
      text: "This is essentially the cache-aside pattern.",
    },

    {
      type: "heading",
      level: 2,
      text: "But what happens when the cache becomes full?",
    },

    {
      type: "paragraph",
      text: "Once Redis was working, another question came up.",
    },

    {
      type: "paragraph",
      text: "If I keep putting URLs into the cache, won’t it eventually keep growing?",
    },

    {
      type: "paragraph",
      text: "I obviously don’t want every URL that has ever been created to stay in Redis indefinitely.",
    },

    {
      type: "paragraph",
      text: "So I introduced a TTL of one hour for cached URL mappings.",
    },

    {
      type: "paragraph",
      text: "The idea was that cached entries should not remain there forever. After the TTL expires, the entry is removed, and if somebody requests that URL again later, it can be fetched from PostgreSQL and cached again.",
    },

    {
      type: "paragraph",
      text: "This gave me a simple way to prevent cached entries from accumulating indefinitely.",
    },

    {
      type: "heading",
      level: 2,
      text: "But analytics had another problem",
    },

    {
      type: "paragraph",
      text: "I had solved the repeated database reads, but there was still the analytics problem.",
    },

    {
      type: "paragraph",
      text: "Every redirect was still incrementing the click count.",
    },

    {
      type: "paragraph",
      text: "I started thinking: do I really need to write to PostgreSQL after every single click?",
    },

    {
      type: "paragraph",
      text: "Probably not.",
    },

    {
      type: "paragraph",
      text: "Instead, I moved the live click counter into Redis as well.",
    },

    {
      type: "paragraph",
      text: "Now every redirect increments the counter in Redis rather than immediately updating PostgreSQL.",
    },

    {
      type: "paragraph",
      text: "Then I added a scheduled synchronization process that periodically takes the accumulated Redis count and adds it to the persisted count in PostgreSQL.",
    },

    {
      type: "paragraph",
      text: "For example, if PostgreSQL has 1,000 clicks and Redis currently has 250 clicks, the synchronization updates PostgreSQL to 1,250 clicks and resets the Redis counter back to zero.",
    },

    {
      type: "paragraph",
      text: "There was one more thing to consider.",
    },

    {
      type: "paragraph",
      text: "What if someone asks for the analytics before the next synchronization happens?",
    },

    {
      type: "paragraph",
      text: "In that case, PostgreSQL might say 1,000 while Redis has another 250 live clicks.",
    },

    {
      type: "paragraph",
      text: "So when returning analytics, I combine the persisted PostgreSQL count with the current Redis count to give the latest available number.",
    },

    {
      type: "heading",
      level: 2,
      text: "The final architecture",
    },

    {
      type: "paragraph",
      text: "So what started as a simple URL shortener gradually evolved into something like:",
    },

    {
      type: "list",
      items: [
        "PostgreSQL handles persistent data.",
        "Redis handles frequently accessed URL mappings and live click counters.",
        "Cache-aside keeps repeated URL lookups away from PostgreSQL.",
        "TTL prevents cached URLs from remaining indefinitely.",
        "Scheduled synchronization moves accumulated analytics from Redis back into PostgreSQL.",
      ],
    },

    {
      type: "paragraph",
      text: "The interesting part for me wasn’t implementing Redis itself.",
    },

    {
      type: "paragraph",
      text: "It was seeing how one decision created another problem, which then led to another architectural decision.",
    },

    {
      type: "paragraph",
      text: "I started with:",
    },

    {
      type: "list",
      items: [
        "URL shortener → PostgreSQL",
        "Need unique short codes → Base62 + database ID",
        "Analytics → database writes on every click",
        "Repeated database access → Redis cache",
        "Cache growth → TTL",
        "Too many analytics writes → Redis counters + periodic synchronization",
      ],
    },

    {
      type: "paragraph",
      text: "And that’s probably the biggest thing I learned from building Routr.",
    },

    {
      type: "paragraph",
      text: "I don’t think a system needs to start with a complicated architecture just because it might eventually have a lot of traffic. Start with something simple, understand how it behaves, identify the actual problems, and then introduce complexity when there is a reason for it.",
    },

    {
      type: "paragraph",
      text: "I haven’t benchmarked Routr yet, so I can’t claim a specific percentage reduction in latency or database load. That’s something I want to do next.",
    },

    {
      type: "paragraph",
      text: "For now, the project gave me something more valuable: a better understanding of how backend architecture evolves as you start asking, “What happens if this gets bigger?”",
    },

    {
      type: "link",
      text: "Try Routr →",
      url: "https://routrr.vercel.app/",
    },
  ],
};
export default routrRedis;