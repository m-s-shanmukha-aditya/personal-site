interface ApproachProps {
    approach: string[];
}

const Approach = ({ approach }: ApproachProps) => {
    return (
        <section className="py-10">
            <div className="mx-auto max-w-3xl px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    The Approach
                </h2>

                <div className="mt-6 space-y-6">
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