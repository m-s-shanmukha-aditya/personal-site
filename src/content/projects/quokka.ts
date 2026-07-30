import type { Project } from "./types";

export const quokka: Project = {
    id: "quokka",
    slug: "quokka",

    title: "Quokka",
    subtitle: "AI-Powered Conversational Decision Support System",

    summary:
        "An intelligent conversational system that progressively understands a user's emotional context through structured dialogue and recommends personalized game-based interventions using retrieval-augmented generation and fine-tuned large language models.",

    overview:
        "Quokka was designed to explore how conversational AI can support users without attempting to diagnose emotions or replace professional counseling. Instead of making assumptions from a single message, the system gradually collects conversational evidence through multiple interaction stages before selecting an appropriate intervention. The project combines retrieval systems, large language models, conversation engineering, and modular software architecture to build a reliable decision-support pipeline.",

    year: 2026,

    category: "Machine Learning",

    technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "SentenceTransformers",
        "FAISS",
        "LoRA",
        "Mistral-7B",
        "BGE",
        "Hugging Face",
    ],

    status: "In Progress",

    featured: true,

    github: "https://github.com/m-s-shanmukha-aditya/quokka",

    detail: {
        hero: {
            duration: "Ongoing",
            role: "AI/ML Engineer & System Designer",
        },

        problem: [
            "Most conversational assistants attempt to infer a user's emotional state from a single message, often leading to unreliable or premature responses.",
            "Direct emotion prediction ignores the evolving nature of conversations, making it difficult to confidently determine what kind of assistance is actually appropriate.",
            "The objective was to design a conversational system that gathers sufficient evidence before making decisions, reducing incorrect assumptions while maintaining a natural conversation flow."
        ],

        solution: [
            "Designed a staged conversational pipeline where every interaction contributes additional evidence before reaching a final decision.",
            "Separated conversation management, retrieval, inference, and intervention selection into independent modules to improve maintainability and experimentation.",
            "Combined retrieval-augmented generation with parameter-efficient fine-tuning to generate context-aware conversational responses while preserving system flexibility.",
            "Introduced dynamic switching between the base foundation model and the fine-tuned adapter depending on the conversational context to balance response quality and computational efficiency."
        ],

        architecture: {
            description: [
                "The interaction begins with an open-ended self-report that encourages users to describe their current situation naturally.",
                "Subsequent conversation stages focus on empathetic elaboration while collecting additional linguistic evidence rather than immediately predicting emotions.",
                "Conversation history is embedded and retrieved against a curated knowledge base to identify probable conversational phases using similarity search.",
                "Candidate phases are validated through structured follow-up interactions before selecting an appropriate intervention.",
                "The architecture remains modular, allowing retrieval models, embedding models, and language models to evolve independently without affecting the overall pipeline."
            ]
        },

        challenges: [
            {
                title: "Reliable Phase Identification",
                description:
                    "Initial retrieval approaches struggled to consistently identify the correct conversational phase because semantically similar conversations often belonged to different behavioral contexts.",
                solution:
                    "Experimented with multiple embedding strategies, retrieval pipelines, centroid-based representations, and contrastive learning to improve phase-level retrieval accuracy."
            },
            {
                title: "Balancing General Intelligence with Domain Behaviour",
                description:
                    "Fully fine-tuning the language model reduced its general conversational ability while relying only on the base model produced inconsistent counselling behaviour.",
                solution:
                    "Designed a behaviour-aware controller capable of dynamically switching between the base model and the fine-tuned adapter depending on conversation requirements."
            },
            {
                title: "Conversation Flow Design",
                description:
                    "Allowing unrestricted conversations made reliable decision-making difficult because important contextual information was often missing.",
                solution:
                    "Designed a structured multi-stage conversation flow that progressively validates user responses before recommending interventions."
            }
        ],

        results: [
            {
                title: "Modular AI Architecture",
                value: "Complete",
                description:
                    "Designed a modular conversational AI architecture separating retrieval, generation, validation, and intervention selection."
            },
            {
                title: "LLM Fine-Tuning",
                value: "Implemented",
                description:
                    "Successfully integrated LoRA-based fine-tuning for domain-specific conversational behaviour."
            },
            {
                title: "Retrieval Pipeline",
                value: "Iteratively Improved",
                description:
                    "Evaluated multiple embedding and retrieval strategies to improve conversational phase identification."
            }
        ],

        lessonsLearned: [
            "Conversational AI should progressively validate assumptions instead of making immediate predictions.",
            "Retrieval quality has a significant impact on downstream language model performance.",
            "Modular architectures make experimentation substantially easier than tightly coupled pipelines.",
            "Fine-tuning alone cannot solve every conversational problem; system design is equally important.",
            "Building reliable AI systems requires iterative experimentation across data, retrieval, prompting, and model behaviour rather than optimizing a single component."
        ],

        futureWork: [
            "Expand contrastive learning for more robust conversational phase representations.",
            "Introduce reranking models to improve retrieval accuracy before language model inference.",
            "Replace heuristic conversation control with learned policy-based decision making.",
            "Evaluate larger instruction-tuned language models while maintaining efficient deployment.",
            "Extend the intervention framework with additional games, activities, and personalized recommendation strategies."
        ]
    }
};