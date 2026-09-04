import Container from "../../../components/layout/Container";
import { featuredProjects } from "../../../content/projects";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const [primaryProject, ...otherProjects] = featuredProjects;

const FeaturedProjects = () => {
    return (
        <Container>
            <section className="py-16 sm:py-20">

                <div className="flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end">
                    <div className="max-w-3xl">
                    <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
                        Selected Work
                    </h2>

                    <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
                        These projects represent different stages of my journey in
                        building intelligent software systems, spanning
                        conversational AI, backend engineering, and applied
                        machine learning.
                    </p>
                    </div>
                    <Link to="/projects" className="accent-link shrink-0 text-sm font-semibold">View all projects</Link>
                </div>

                <article className={`mt-10 border-b border-border pb-12 ${primaryProject.thumbnail ? "grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14" : ""}`}>
                    {primaryProject.thumbnail && (
                        <div className="relative min-h-64 overflow-hidden border border-border bg-muted p-7 sm:min-h-80">
                            <img src={primaryProject.thumbnail} alt={primaryProject.title} className="absolute inset-0 h-full w-full object-cover" />
                            <span className="relative bg-[#e8edef] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">Featured project</span>
                        </div>
                    )}
                    <div className="flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                            <span>{primaryProject.category}</span>
                            <span className="h-1 w-1 rounded-full bg-accent" />
                            <span>{primaryProject.year}</span>
                            <span className="text-accent">{primaryProject.status}</span>
                        </div>
                        <h3 className="font-display mt-5 text-4xl tracking-tight sm:text-5xl">{primaryProject.title}</h3>
                        <p className="mt-4 text-base leading-8 text-muted-foreground">{primaryProject.summary}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {primaryProject.technologies.slice(0, 4).map((technology) => (
                                <span key={technology} className="border border-border px-2.5 py-1 text-xs text-muted-foreground">{technology}</span>
                            ))}
                        </div>
                        <Link to={`/projects/${primaryProject.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent">
                            Read case study <ArrowUpRight size={16} />
                        </Link>
                    </div>
                </article>

                <div className="mt-8 grid gap-x-8 md:grid-cols-2">

                    {otherProjects.map((project) => (
                        <article
                            key={project.id}
                            className="group border-b border-border py-8 first:pt-0 md:nth-[2]:pt-0"
                        >
                            <div>
                                <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                                    <span>{project.category}</span>
                                    <span>{project.year}</span>
                                </div>
                                <h3 className="font-display mt-4 text-3xl tracking-tight transition-colors group-hover:text-foreground">
                                    {project.title}
                                </h3>
                                <p className="mt-3 text-base leading-7 text-muted-foreground">
                                    {project.summary}
                                </p>
                                <Link to={`/projects/${project.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-accent">
                                    Read case study <ArrowUpRight size={15} />
                                </Link>
                            </div>
                        </article>
                    ))}

                </div>

            </section>
        </Container>
    );
};

export default FeaturedProjects;