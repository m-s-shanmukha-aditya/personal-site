import type { Project } from "./types";

export const routr: Project = {
    id: "routr",
    slug: "routr",

    title: "Routr",
    subtitle: "Scalable URL Shortener",

    summary:
        "A backend-focused URL shortening service built to study production system design, emphasizing scalability, caching, analytics, and distributed system design rather than simply implementing URL shortening.",

    overview:
        "Routr was built as a systems engineering project to understand how real-world backend services evolve beyond basic CRUD applications. The focus was not on replicating Bitly's feature set, but on exploring architectural decisions such as deterministic identifier generation, low-latency caching, asynchronous analytics processing, and the trade-offs involved in designing scalable distributed systems.",

    year: 2026,

    category: "Software Engineering",

    technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Redis",
        "React",
        "REST API"
    ],

    status: "Completed",

    featured: true,

    github: "https://github.com/m-s-shanmukha-aditya/routr-url-shortener",

    live: "https://routrr.vercel.app",

    detail: {
        hero: {
            duration: "3 Weeks",
            role: "Backend Engineer & System Designer",
        },

        problem: [
            "Traditional URL shortening appears simple but introduces several backend engineering challenges involving unique identifier generation, low-latency redirection, analytics collection, and scalability.",
            "A naïve implementation that performs database reads and writes for every redirect quickly becomes inefficient under increasing traffic.",
            "The objective was to understand how production backend systems evolve by identifying bottlenecks and incrementally improving the architecture."
        ],

        solution: [
            "Implemented deterministic short URL generation using Base62 encoding of database-generated identifiers, eliminating collision handling while producing compact URL-safe short codes.",
            "Introduced Redis using a cache-aside strategy to minimize repeated database lookups during URL redirection.",
            "Separated analytics collection from the request lifecycle by maintaining live click counters in Redis and periodically synchronizing aggregated counts to PostgreSQL.",
            "Designed the system around incremental architectural improvements, where each optimization addressed a newly discovered bottleneck rather than prematurely introducing unnecessary complexity."
        ],

        architecture: {
            description: [
                "Incoming requests first query Redis for the destination URL. Cache hits are redirected immediately without accessing the database.",
                "Cache misses retrieve the original URL from PostgreSQL before populating Redis for future requests.",
                "Click analytics are incremented directly in Redis, allowing redirects to remain lightweight and avoiding database writes on every request.",
                "A scheduled synchronization task periodically persists accumulated analytics from Redis into PostgreSQL.",
                "When analytics are requested, the system combines persisted database counts with live Redis counters to provide up-to-date statistics."
            ]
        },

        challenges: [
            {
                title: "Collision-Free Short URL Generation",
                description:
                    "Generating unique short URLs using random strings introduced unnecessary complexity and collision handling.",
                solution:
                    "Adopted deterministic Base62 encoding of database-generated primary keys, guaranteeing uniqueness while producing compact identifiers."
            },
            {
                title: "Database Read Bottleneck",
                description:
                    "Every redirect initially required a database lookup, increasing latency and placing unnecessary load on PostgreSQL.",
                solution:
                    "Implemented Redis cache-aside caching to serve frequently accessed URLs directly from memory."
            },
            {
                title: "High Analytics Write Frequency",
                description:
                    "Persisting click counts on every redirect generated excessive database writes that would not scale under high request volumes.",
                solution:
                    "Buffered click counters in Redis and synchronized aggregated updates to PostgreSQL using a scheduled background task."
            },
            {
                title: "Eventual Consistency Trade-offs",
                description:
                    "Using asynchronous synchronization introduced the possibility of temporary inconsistencies and transient data loss if Redis failed before synchronization.",
                solution:
                    "Accepted the trade-off for improved request throughput while identifying event-driven processing and durable messaging as future improvements."
            }
        ],

        results: [
            {
                title: "Backend Architecture",
                value: "Production-Oriented",
                description:
                    "Designed around caching, asynchronous processing, and scalable request handling rather than basic CRUD operations."
            },
            {
                title: "Caching Strategy",
                value: "Redis Cache-Aside",
                description:
                    "Reduced repeated database reads during URL redirection through in-memory caching."
            },
            {
                title: "Analytics Pipeline",
                value: "Asynchronous",
                description:
                    "Separated analytics persistence from user-facing requests using Redis-backed counters and scheduled synchronization."
            }
        ],

        lessonsLearned: [
            "Scalable systems evolve by addressing observed bottlenecks rather than implementing every optimization upfront.",
            "Caching significantly improves latency but introduces cache invalidation and consistency considerations.",
            "Asynchronous processing improves throughput while introducing eventual consistency trade-offs.",
            "Simple architectural decisions, such as deterministic identifier generation, can eliminate entire classes of problems.",
            "Production backend engineering is largely about balancing performance, scalability, complexity, and reliability."
        ],

        futureWork: [
            "Replace scheduled analytics synchronization with an event-driven Kafka pipeline.",
            "Introduce distributed rate limiting to protect against abuse.",
            "Implement custom short URLs with uniqueness validation.",
            "Support URL expiration and automatic cleanup.",
            "Add distributed cache synchronization for multi-instance deployments.",
            "Introduce observability using centralized logging and metrics dashboards."
        ]
    }
};