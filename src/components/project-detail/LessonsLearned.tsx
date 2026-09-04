interface LessonsLearnedProps {
    lessonsLearned?: string[];
}

const LessonsLearned = ({ lessonsLearned }: LessonsLearnedProps) => {
    if (!lessonsLearned?.length) return null;

    return (
        <section className="py-14">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="font-display text-3xl tracking-tight">
                    Lessons Learned
                </h2>

                <ul className="mt-8 max-w-4xl space-y-4">
                    {lessonsLearned.map((lesson, index) => (
                        <li
                            key={index}
                            className="text-lg leading-8 text-muted-foreground"
                        >
                            <span className="mr-3 text-accent">•</span>
                            {lesson}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default LessonsLearned;
