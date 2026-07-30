interface KeyFeaturesProps {
    technologies: string[];
}

const KeyFeatures = ({ technologies }: KeyFeaturesProps) => {
    if (!technologies.length) return null;

    return (
        <section className="py-16">
            <div className="mx-auto max-w-3xl px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    Key Features
                </h2>

                <ul className="mt-8 grid gap-4 md:grid-cols-2">
                    {technologies.map((technology) => (
                        <li
                            key={technology}
                            className="rounded-2xl border p-4 text-lg text-muted-foreground"
                        >
                            {technology}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default KeyFeatures;
