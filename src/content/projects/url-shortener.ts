import type { Project } from "./types";

export const routr: Project = {
    id: "routr",
    slug: "routr",

    title: "Routr",
    subtitle: "Redis-cached URL shortener",

    summary:
        "A Spring Boot URL shortener using Base62 IDs from database-generated identifiers, Redis cache-aside redirects with TTL, and click analytics kept off the redirect path.",

    overview:
        "Routr is a Spring Boot URL shortener built to explore identifier generation, Redis caching, and click analytics. The focus is on backend choices such as Base62 IDs from database-generated identifiers, cache-aside redirects with TTL, and keeping analytics work off the redirect path.",

    thumbnail: "/thumbnails/routr-landing-page.png",

    year: 2026,

    category: "Software Engineering",

    technologies: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "Redis",
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
            "URL shortening involves backend choices around unique identifier generation, fast redirects, and click analytics.",
            "A naïve implementation that performs database reads and writes for every redirect quickly becomes inefficient under increasing traffic.",
            "The objective was to explore backend design choices by addressing observed bottlenecks."
        ],

        solution: [
            "Implemented deterministic short URL generation using Base62 encoding of database-generated identifiers, eliminating collision handling while producing compact URL-safe short codes.",
            "Introduced Redis using a cache-aside strategy to minimize repeated database lookups during URL redirection.",
            "Separated analytics collection from the redirect path by maintaining click counters in Redis and periodically synchronizing aggregated counts to PostgreSQL.",
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
                    "Persisting click counts on every redirect would add a database write to each redirect request.",
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
                value: "Cache-first design",
                description:
                    "Uses caching and scheduled analytics synchronization alongside URL creation and redirects."
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
            "Fix the bottlenecks you actually observe rather than adding every optimisation upfront.",
            "Caching significantly improves latency but introduces cache invalidation and consistency considerations.",
            "Asynchronous processing improves throughput while introducing eventual consistency trade-offs.",
            "Simple architectural decisions, such as deterministic identifier generation, can eliminate entire classes of problems.",
            "Backend design is mostly balancing performance, complexity and reliability."
        ],

        futureWork: [
            "Replace scheduled analytics synchronization with an event-driven Kafka pipeline.",
            "Introduce distributed rate limiting to protect against abuse.",
            "Implement custom short URLs with uniqueness validation.",
            "Support URL expiration and automatic cleanup.",
            "Add distributed cache synchronization for multi-instance deployments.",
            "Introduce observability using centralized logging and metrics dashboards."
        ],

        resources: {
            article: "/blog/how-i-evolved-my-url-shortener-with-redis"
        }
    }
};