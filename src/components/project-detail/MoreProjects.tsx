import { Link } from "react-router-dom";

import { projects } from "../../content/projects";
import type { Project } from "../../content/projects/types";

interface MoreProjectsProps {
    currentProject: Project;
}

const MoreProjects = ({ currentProject }: MoreProjectsProps) => {
    const visibleProjects = projects.filter(
        (project) => project.slug !== currentProject.slug
    );

    const relatedProjects = visibleProjects.filter(
        (project) => project.category === currentProject.category
    );

    const otherProjects = visibleProjects.filter(
        (project) => project.category !== currentProject.category
    );

    const projectsToShow = [...relatedProjects, ...otherProjects].slice(0, 3);

    if (!projectsToShow.length) return null;

    return (
        <section className="py-14">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="font-display text-3xl tracking-tight">
                    More Projects
                </h2>

                <div className="mt-8 grid divide-y border-y md:grid-cols-3 md:divide-x md:divide-y-0">
                    {projectsToShow.map((project) => (
                        <Link
                            key={project.slug}
                            to={`/projects/${project.slug}`}
                            className="block px-5 py-8 transition-colors hover:bg-muted/50 first:pl-0 last:pr-0"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                                {project.category}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold">
                                {project.title}
                            </h3>

                            <p className="mt-3 text-base leading-7 text-muted-foreground">
                                {project.summary}
                            </p>

                            <p className="mt-5 font-medium">
                                View Case Study →
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MoreProjects;