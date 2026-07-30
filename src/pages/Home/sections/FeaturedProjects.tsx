import Container from "../../../components/layout/Container";
import { featuredProjects } from "../../../content/projects";

const [primaryProject, ...otherProjects] = featuredProjects;

const FeaturedProjects = () => {
    return (
        <Container>
            <section className="py-16 sm:py-20">

                <div className="max-w-3xl">
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Selected Work
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        These projects represent different stages of my journey in
                        building intelligent software systems, spanning
                        conversational AI, backend engineering, and applied
                        machine learning.
                    </p>
                </div>

                {/* Primary Project */}
                <div className="mt-8 h-px bg-neutral-200" />
                <article className="mt-10 pt-2">

                    <div className="max-w-3xl">

                        <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            {primaryProject.title}
                        </h3>

                        <p className="mt-4 text-lg leading-8 text-neutral-600">
                            {primaryProject.summary}
                        </p>

                        <a
                            href={`/projects/${primaryProject.slug}`}
                            className="mt-5 inline-flex items-center font-medium transition-colors hover:text-neutral-700"
                        >
                            Read Case Study
                            <span className="ml-2 transition-transform duration-200 hover:translate-x-1">
                                →
                            </span>
                        </a>

                    </div>

                </article>

                {/* Remaining Projects */}

                <div className="mt-6">

                    {otherProjects.map((project) => (
                        <article
                            key={project.id}
                            className="group pt-8"
                        >
                            <div className="max-w-3xl">

                                <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-neutral-700">
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-lg leading-8 text-neutral-600">
                                    {project.summary}
                                </p>

                                <a
                                    href={`/projects/${project.slug}`}
                                    className="mt-4 inline-flex items-center font-medium transition-colors hover:text-neutral-700"
                                >
                                    Read Case Study
                                    <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">
                                        →
                                    </span>
                                </a>

                            </div>
                        </article>
                    ))}

                </div>

            </section>
        </Container>
    );
};

export default FeaturedProjects;