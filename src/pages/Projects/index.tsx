import Container from "../../components/layout/Container";
import { projects } from "../../content/projects";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <section className="projects-page py-20 sm:py-24">
            <Container>
                <div className="space-y-12">
                    <div className="space-y-2">
                        <p className="eyebrow">A working archive</p>
                        <h1 className="font-display mt-4 text-5xl tracking-tight">
                            Projects
                        </h1>

                        <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                            A collection of research and engineering projects, 
                            documenting the systems I've built, the problems 
                            they address, and the ideas behind their design.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                className="border-b border-border py-8 first:pt-0 last:border-none"
                            >
                                <div className="space-y-3">
                                    <div className="space-y-2">
                                        <h2 className="font-display text-3xl tracking-tight">
                                            <Link to={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
                                                {project.title}
                                            </Link>
                                        </h2>

                                        <div className="flex items-center gap-2 text-sm">
                                            <span className="text-muted-foreground">
                                                {project.category}
                                            </span>

                                            <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="max-w-3xl leading-7 text-muted-foreground">
                                        {project.overview}
                                    </p>

                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="inline-flex font-medium text-foreground transition-colors hover:text-accent"
                                    >
                                        Explore Project →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Projects;