interface LessonsLearnedProps {
    lessonsLearned?: string[];
}

const LessonsLearned = ({ lessonsLearned }: LessonsLearnedProps) => {
    if (!lessonsLearned?.length) return null;

    return (
        <section className="py-10">
            <div className="mx-auto max-w-3xl px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    Lessons Learned
                </h2>

                <ul className="mt-8 space-y-4">
                    {lessonsLearned.map((lesson, index) => (
                        <li
                            key={index}
                            className="text-lg leading-8 text-muted-foreground"
                        >
                            <span className="mr-3 text-foreground">•</span>
                            {lesson}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default LessonsLearned;
