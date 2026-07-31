import {
    ArrowLeft,
    ArrowUpRight,
    Calendar,
    Clock3,
    ImageIcon,
    User,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

import type { Project, ProjectDetail } from "../../content/projects/types";

interface HeroProps {
    project: Project;
    details: ProjectDetail;
}

const Hero = ({ project, details }: HeroProps) => {
    return (
        <section className="pt-14 pb-12">
            <div className="mx-auto max-w-7xl px-6">
                <Link
                    to="/projects"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-black"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                </Link>

                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Left */}
                    <div>
                        <div className="mb-6 flex flex-wrap gap-3">
                            <span className="rounded-full border px-3 py-1 text-sm">
                                {project.status}
                            </span>

                            <span className="rounded-full border px-3 py-1 text-sm">
                                {project.category}
                            </span>
                        </div>

                        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                            {project.title}
                        </h1>

                        {project.subtitle && (
                            <p className="mt-3 text-xl text-muted-foreground">
                                {project.subtitle}
                            </p>
                        )}

                        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                            {project.description ?? project.summary}
                        </p>

                        {/* Metadata */}
                        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Clock3 className="h-4 w-4" />
                                <span>{details.hero.duration}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                <span>{details.hero.role}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{project.year}</span>
                            </div>
                        </div>

                        {/* Technologies */}
                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-full border px-3 py-1 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 transition-colors hover:bg-muted"
                                >
                                    <FaGithub className="h-4 w-4" />
                                    GitHub
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            )}

                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 transition-colors hover:bg-muted"
                                >
                                    Live Demo
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            )}

                            {project.paper && (
                                <a
                                    href={project.paper}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 transition-colors hover:bg-muted"
                                >
                                    Research Paper
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right */}
                    <div>
                        {project.thumbnail ? (
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="aspect-[4/3] w-full rounded-2xl border object-cover shadow-sm"
                            />
                        ) : (
                            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border bg-muted/20">
                                <div className="text-center">
                                    <ImageIcon className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />

                                    <p className="font-medium">
                                        {project.title}
                                    </p>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Preview coming soon
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-14">
                    <hr className="border-neutral-200" />
                </div>
            </div>
        </section>
    );
};

export default Hero;