import type { Project } from "./types";

const troubleshooter: Project = {
    id: "ai-troubleshooter",
    slug: "ai-troubleshooter",
    title: "Adaptive AI Troubleshooting System",
    summary:
        "A FastAPI service that analyses technical issue reports, retrieves a matching troubleshooting blueprint with sentence embeddings and FAISS, and generates structured diagnoses with a local LLM (Ollama, Mistral), with a validation layer that checks the model's output before it reaches the user.",
    overview:
        "A FastAPI service that analyses technical issue reports, retrieves a matching troubleshooting blueprint with sentence embeddings and FAISS, and generates structured diagnoses with a local LLM (Ollama, Mistral), with a validation layer that checks the model's output before it reaches the user.",
    status: "In Progress",
    category: "Software Engineering",
    technologies: ["Python", "FastAPI", "Ollama (Mistral)", "FAISS", "Pydantic"],
    year: 2026,
    featured: true,
    github:"https://github.com/m-s-shanmukha-aditya/adaptive-ai-troubleshooting-system"
};

export default troubleshooter;
