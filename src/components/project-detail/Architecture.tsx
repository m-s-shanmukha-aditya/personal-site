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
        <section className="py-14">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="font-display text-3xl tracking-tight">
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

                    <div className="max-w-4xl space-y-5">
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