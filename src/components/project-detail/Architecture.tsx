// import type { ProjectDetail } from "../../content/projects/types";

interface ArchitectureProps {
    architecture?: {
        description: string[];
        image?: string;
    };
    // challenges?: ProjectDetail["challenges"];
}

const Architecture = ({ architecture }: ArchitectureProps) => {
    if (!architecture) return null;

    return (
        <section className="py-10">
            <div className="mx-auto max-w-3xl px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    Architecture
                </h2>

                <div className="mt-7 space-y-6">
                    {architecture.image && (
                        <img
                            src={architecture.image}
                            alt="Architecture Diagram"
                            className="w-full rounded-xl border"
                        />
                    )}

                    <div className="space-y-5">
                        {architecture.description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-lg leading-8 text-muted-foreground"
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* {challenges?.length ? (
                        <div className="space-y-4">
                            {challenges.map((challenge, index) => (
                                <p
                                    key={index}
                                    className="text-lg leading-8 text-muted-foreground"
                                >
                                    <span className="font-medium text-foreground">
                                        {challenge.title}:
                                    </span>{" "}
                                    {challenge.description}
                                    {challenge.solution ? ` ${challenge.solution}` : ""}
                                </p>
                            ))}
                        </div>
                    ) : null} */}
                </div>
            </div>
        </section>
    );
};

export default Architecture;