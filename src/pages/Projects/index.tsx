import Container from "../../components/layout/Container";
import { projects } from "../../content/projects";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <section className="py-15">
            <Container>
                <div className="space-y-12">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight">
                            Projects
                        </h1>

                        <p className="max-w-2xl text-muted-foreground">
                            A collection of research and engineering projects, 
                            documenting the systems I've built, the problems 
                            they address, and the ideas behind their design.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                className="border-b pb-8 last:border-none"
                            >
                                <div className="space-y-3">
                                    <div className="space-y-2">
                                        <h2 className="text-2xl font-semibold tracking-tight">
                                            {project.title}
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
                                        className="inline-flex font-medium transition-colors hover:text-foreground"
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