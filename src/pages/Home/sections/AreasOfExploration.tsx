import Container from "../../../components/layout/Container";

const areas = [
    {
        title: "Intelligent Software Systems",
        description:
            "Exploring how software can better understand context, reason about information, and assist people through intelligent behaviour.",
    },
    {
        title: "Software Architecture",
        description:
            "Designing modular, maintainable, and scalable systems that continue to evolve without becoming difficult to understand or extend.",
    },
    {
        title: "Applied Machine Learning",
        description:
            "Using machine learning to solve practical engineering problems where it provides measurable value alongside traditional software approaches.",
    },
];

const AreasOfExploration = () => {
    return (
        <Container>
            <section className="py-16 sm:py-20">

                <div className="max-w-3xl">
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Areas of Exploration
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        While every project is different, I find myself returning
                        to a few recurring engineering challenges. These are the
                        areas I'm most interested in exploring as I continue to
                        learn and build.
                    </p>
                </div>

                <div className="mt-10 space-y-8">

                    {areas.map((area) => (
                        <article
                            key={area.title}
                            className="max-w-3xl"
                        >
                            <h3 className="text-xl font-semibold tracking-tight">
                                {area.title}
                            </h3>

                            <p className="mt-2 leading-8 text-neutral-600">
                                {area.description}
                            </p>

                        </article>
                    ))}

                </div>

            </section>
        </Container>
    );
};

export default AreasOfExploration;