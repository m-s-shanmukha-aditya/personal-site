import type { ProjectDetail } from "../../content/projects/types";

interface ResultsProps {
    results?: ProjectDetail["results"];
}

const Results = ({ results }: ResultsProps) => {
    if (!results?.length) return null;

    return (
        <section className="py-10">
            <div className="mx-auto max-w-3xl px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    Results
                </h2>

                <div className="mt-8 space-y-6">
                    {results.map((result, index) => (
                        <div
                            key={index}
                            className="border-l-2 border-muted pl-5"
                        >
                            <h3 className="text-xl font-semibold">
                                {result.title}
                            </h3>

                            <p className="mt-2 font-medium text-foreground">
                                {result.value}
                            </p>

                            {result.description && (
                                <p className="mt-3 leading-7 text-muted-foreground">
                                    {result.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results; 