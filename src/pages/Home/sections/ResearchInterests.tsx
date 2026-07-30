import Container from "../../../components/layout/Container";

const ResearchInterests = () => {
    return (
        <section className="py-16 sm:py-20">
            <Container>
                <div className="space-y-8 sm:space-y-10">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tight">
                            Research Interests
                        </h2>

                        <p className="max-w-2xl text-muted-foreground">
                            Research directions that guide the systems I build
                            and the problems I choose to explore.
                        </p>
                    </div>

                    <div className="space-y-6 sm:space-y-7">
                        <article className="border-b pb-7">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Intelligent Software Systems
                                </h3>

                                <p className="max-w-3xl leading-7 text-muted-foreground">
                                    Exploring architectures that enable software
                                    systems to reason, adapt, retain context,
                                    and evolve through long-term interaction
                                    while remaining transparent and
                                    maintainable.
                                </p>
                            </div>
                        </article>

                        <article className="border-b pb-7">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    AI &amp; Machine Learning
                                </h3>

                                <p className="max-w-3xl leading-7 text-muted-foreground">
                                    Applying machine learning and AI techniques
                                    to understand complex data, support
                                    intelligent decision-making, and develop
                                    practical solutions for real-world
                                    challenges.
                                </p>
                            </div>
                        </article>

                        <article className="pb-7">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-semibold tracking-tight">
                                    Software Engineering
                                </h3>

                                <p className="max-w-3xl leading-7 text-muted-foreground">
                                    Designing modular and scalable software
                                    architectures that prioritize clarity,
                                    extensibility, and long-term evolution as
                                    systems grow in complexity.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ResearchInterests;