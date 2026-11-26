import Container from "../../../components/layout/Container";

const stack = [
    {
        title: "Languages",
        description: "Java, Python, SQL",
    },
    {
        title: "Backend",
        description: "Spring Boot, REST APIs, session-based auth, role-based authorization, FastAPI",
    },
    {
        title: "Data",
        description: "PostgreSQL, Redis",
    },
    {
        title: "Tools",
        description: "Git, Docker, Postman, AWS (hands-on in progress)",
    },
];

const AreasOfExploration = () => {
    return (
        <Container>
            <section className="py-16 sm:py-20">

                <div className="max-w-3xl">
                    <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
                        Stack
                    </h2>

                    <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
                        The tools and technologies I use in my backend projects.
                    </p>
                </div>

                <div className="mt-8 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">

                    {stack.map((group) => (
                        <article
                            key={group.title}
                            className="border-b border-border py-5 sm:border-r sm:px-5 sm:first:pl-0 sm:nth-[2]:border-r-0 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-5 lg:nth-[2]:border-r lg:nth-[4]:border-r-0 lg:first:pl-0"
                        >
                            <h3 className="text-base font-semibold tracking-tight">{group.title}</h3>

                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                {group.description}
                            </p>
                        </article>
                    ))}

                </div>

            </section>
        </Container>
    );
};

export default AreasOfExploration;