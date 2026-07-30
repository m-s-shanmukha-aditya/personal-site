import type { Project } from "./types";

export const teluguCommunityPlatform: Project = {
    id: "telugu-community-platform",
    slug: "telugu-community-platform",

    title: "Telugu Community Platform",
    subtitle: "A Private Community Platform for CUJ Telugu Students",

    summary:
        "A secure community platform connecting Telugu students, alumni, and faculty members at the Central University of Jharkhand.",

    overview:
        "Designed and developed a role-based community platform to preserve institutional knowledge, simplify member discovery, and manage community events through secure authentication and administrative verification.",

    description:
        "The platform provides a centralized space for verified community members to connect, maintain their profiles, discover other members, and stay updated with community activities while protecting sensitive information through authentication and role-based authorization.",

    thumbnail: "/thumbnails/telugu-community-platform.png",

    year: 2025,

    category: "Software Engineering",

    technologies: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "PostgreSQL",
        "Cloudinary",
    ],

    status: "Completed",

    featured: false,

    github: "https://github.com/m-s-shanmukha-aditya/cuj-telugu-community/",

    live: "https://cuj-telugu-community.vercel.app",

    detail: {
        hero: {
            duration: "2 Months",
            role: "Full Stack Developer"
        },

        problem: [
            "Community information was scattered across WhatsApp groups and personal contacts.",
            "New students repeatedly depended on seniors for guidance regarding academics, placements, internships, and university life.",
            "There was no centralized directory connecting students, alumni, and faculty members.",
            "Sensitive member information required controlled access rather than being publicly available."
        ],

        solution: [
            "Built a private community platform exclusively for verified Telugu community members.",
            "Implemented role-based authentication with manual account approval by administrators.",
            "Developed self-managed member profiles, community directory, event management, and gallery modules.",
            "Separated public and protected resources to balance accessibility with member privacy."
        ],

        architecture: {
            description: [
                "Layered MVC architecture separating controllers, services, and repositories.",
                "Spring Security for authentication and role-based authorization.",
                "JPA/Hibernate with PostgreSQL for persistence.",
                "Cloudinary integration for profile image management."
            ]
        },

        challenges: [
            {
                title: "Community Verification",
                description:
                    "There was no automated way to verify whether a registered user genuinely belonged to the university's Telugu community.",
                solution:
                    "Introduced a manual administrator approval workflow before activating newly registered accounts."
            },
            {
                title: "Profile Image Consistency",
                description:
                    "Replacing profile pictures could leave users without an image if an upload failed midway.",
                solution:
                    "Uploaded the new image first, updated the database only after successful upload, and deleted the previous image afterward."
            },
            {
                title: "Securing Public and Private Data",
                description:
                    "The platform required both publicly accessible information and protected member resources.",
                solution:
                    "Separated public endpoints from authenticated and administrative functionality while exposing only safe information publicly."
            }
        ],

        results: [
            {
                title: "Architecture",
                value: "Layered MVC",
                description:
                    "Designed a maintainable backend with clear separation of concerns."
            },
            {
                title: "Authentication",
                value: "Role-Based Access Control",
                description:
                    "Protected community information through authentication and authorization."
            },
            {
                title: "Media Storage",
                value: "Cloudinary Integration",
                description:
                    "Implemented reliable cloud-based profile image management."
            }
        ],

        lessonsLearned: [
            "Authentication influences the overall architecture, not just the login process.",
            "Users should own and manage their own information whenever possible.",
            "Architecture naturally evolves as real-world requirements emerge.",
            "External services should always be integrated with failure scenarios in mind.",
            "Security should be considered during system design rather than added later."
        ],

        futureWork: [
            "Community blogging platform.",
            "Administrative analytics dashboard.",
            "Automated testing for critical workflows.",
            "Audit logging for administrative actions.",
            "Improved modularization of backend components."
        ],

        resources: {
            article: "/writings/building-a-community-platform",
            documentation: "/engineering-journal/projects/telugu-community-platform"
        }
    }
};