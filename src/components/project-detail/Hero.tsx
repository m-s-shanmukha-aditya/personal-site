import {
    ArrowLeft,
    Calendar,
    Clock3,
    ImageIcon,
    Tag,
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
        <section className="pt-16 pb-8">
            <div className="mx-auto max-w-7xl px-6">
                <Link
                    to="/projects"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                </Link>

                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Left */}
                    <div>
                        <div className="mb-8 flex flex-wrap gap-3">
                            <span className="rounded-full border px-3 py-1 text-sm">
                                {project.status}
                            </span>

                            <span className="rounded-full border px-3 py-1 text-sm">
                                {project.category}
                            </span>
                        </div>

                        <h1 className="text-5xl font-bold tracking-tight">
                            {project.title}
                        </h1>

                        {project.subtitle && (
                            <p className="mt-4 text-2xl text-muted-foreground">
                                {project.subtitle}
                            </p>
                        )}

                        <p className="mt-6 text-lg leading-8 text-muted-foreground">
                            {project.description ?? project.summary}
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                            <div className="flex items-center gap-3">
                                <Clock3 className="h-5 w-5 text-muted-foreground" />

                                <div>
                                    <p className="min-w-0-text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                                        Duration
                                    </p>

                                    <p>{details.hero.duration}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <User className="h-5 w-5 text-muted-foreground" />

                                <div>
                                    <p className="min-w-0-text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                                        Role
                                    </p>

                                    <p>{details.hero.role}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-muted-foreground" />

                                <div>
                                    <p className="min-w-0-text-[11px] uppercase tracking-[0.2em] font-medium text-muted-foreground">
                                        Year
                                    </p>

                                    <p>{project.year}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <div className="mb-3 flex items-center gap-2">
                                <Tag className="h-4 w-4" />

                                <span className="font-medium">
                                    Technologies
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border px-3 py-1 text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border px-5 py-2.5 transition-colors hover:bg-muted"
                                >
                                    <FaGithub className="h-4 w-4" />
                                    GitHub
                                </a>
                            )}

                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border px-5 py-2.5 transition-colors hover:bg-muted"
                                >
                                    Live
                                </a>
                            )}

                            {project.paper && (
                                <a
                                    href={project.paper}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border px-5 py-2.5 transition-colors hover:bg-muted"
                                >
                                    Paper
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
                            <div className="relative flex aspect-[8/5] items-center justify-center overflow-hidden rounded-2xl border bg-gradient-to-br from-muted/40 via-background to-muted/10 p-8">
                                {/* Decorative Background */}
                                <div className="absolute inset-0 opacity-30">
                                    <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-muted blur-3xl" />

                                    <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-muted blur-3xl" />
                                </div>

                                <div className="relative text-center">
                                    <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border bg-background shadow-sm">
                                        <ImageIcon className="h-10 w-10 text-muted-foreground" />
                                    </div>

                                    <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
                                        PROJECT PREVIEW
                                    </p>

                                    <div className="mt-8 flex justify-center gap-2">
                                        <span className="rounded-full border px-3 py-1 text-sm">
                                            {project.category}
                                        </span>

                                        <span className="rounded-full border px-3 py-1 text-sm">
                                            {project.year}
                                        </span>
                                    </div>

                                    <p className="mt-8 max-w-xs text-sm leading-6 text-muted-foreground">
                                        A representative project image,
                                        interface preview, or conceptual
                                        illustration will appear here.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;