interface ProblemProps {
    problem: string[];
}

const Problem = ({ problem }: ProblemProps) => {
    return (
        <section className="py-10">
            <div className="mx-auto max-w-3xl px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    The Problem
                </h2>

                <div className="mt-6 space-y-6">
                    {problem.map((paragraph, index) => (
                        <p
                            key={index}
                            className="text-lg leading-8 text-muted-foreground"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;