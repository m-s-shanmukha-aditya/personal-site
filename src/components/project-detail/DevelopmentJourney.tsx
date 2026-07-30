interface DevelopmentJourneyProps {
    summary: string;
    overview: string;
    problem: string[];
    solution: string[];
}

const DevelopmentJourney = ({
    summary,
    overview,
    problem,
    solution,
}: DevelopmentJourneyProps) => {
    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    Development Journey
                </h2>

                <div className="mt-8 space-y-8">
                    <p className="text-lg leading-8 text-muted-foreground">
                        {summary}
                    </p>

                    <p className="text-lg leading-8 text-muted-foreground">
                        {overview}
                    </p>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div className="rounded-2xl border p-6">
                            <h3 className="text-xl font-semibold">Context</h3>

                            <ul className="mt-4 space-y-3 text-muted-foreground">
                                {problem.map((item, index) => (
                                    <li key={index} className="leading-7">
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl border p-6">
                            <h3 className="text-xl font-semibold">Approach</h3>

                            <ul className="mt-4 space-y-3 text-muted-foreground">
                                {solution.map((item, index) => (
                                    <li key={index} className="leading-7">
                                        • {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentJourney;
