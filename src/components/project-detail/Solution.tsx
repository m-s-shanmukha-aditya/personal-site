interface ApproachProps {
    approach: string[];
}

const Approach = ({ approach }: ApproachProps) => {
    return (
        <section className="py-14">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="font-display text-3xl tracking-tight">
                    The Approach
                </h2>

                <div className="mt-6 max-w-4xl space-y-5">
                    {approach.map((paragraph, index) => (
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

export default Approach;