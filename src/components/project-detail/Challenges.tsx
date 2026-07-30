import type { ProjectDetail } from "../../content/projects/types";

interface ChallengesProps {
    challenges?: ProjectDetail["challenges"];
}

const Challenges = ({ challenges }: ChallengesProps) => {
    if (!challenges?.length) return null;

    return (
        <section className="py-16">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    Challenges
                </h2>

                <div className="mt-8 space-y-6">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="rounded-2xl border p-6">
                            <h3 className="text-xl font-semibold">
                                {challenge.title}
                            </h3>

                            <p className="mt-4 text-lg leading-8 text-muted-foreground">
                                {challenge.description}
                            </p>

                            {challenge.solution && (
                                <p className="mt-4 text-lg leading-8 text-muted-foreground">
                                    <span className="font-medium text-foreground">
                                        Solution:
                                    </span>{" "}
                                    {challenge.solution}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Challenges;
