export interface Project {
    id: string;
    slug: string;

    title: string;
    subtitle?: string;

    summary: string;
    overview: string;

    description?: string;

    thumbnail?: string;

    year: number;

    category: ProjectCategory;

    technologies: string[];

    status: ProjectStatus;

    featured?: boolean;

    github?: string;
    live?: string;
    paper?: string;

    detail?: ProjectDetail;
}
export interface ProjectDetail {
    hero: {
        duration: string;
        role: string;
    };

    problem: string[];

    solution: string[];

    architecture?: {
        description: string[];
        image?: string;
    };

    challenges?: {
        title: string;
        description: string;
        solution?: string;
    }[];

    results?: {
        title: string;
        value: string;
        description?: string;
    }[];

    lessonsLearned?: string[];

    futureWork?: string[];

    resources?: {
        article?: string;
        documentation?: string;
        presentation?: string;
    };
}
export type ProjectStatus =
    | "Completed"
    | "In Progress"
    | "Archived";

export type ProjectCategory =
    | "Research"
    | "Software Engineering"
    | "Machine Learning";