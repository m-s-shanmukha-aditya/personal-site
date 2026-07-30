import Container from "../../../components/layout/Container";

export default function Hero() {
    return (
        <Container>
            <section className="flex min-h-[calc(100vh-180px)] items-start pt-20 pb-24 sm:pt-28 sm:pb-32">
                <div className="max-w-3xl">

                    <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                        Munukutla Sri
                        <br />
                        Shanmukha Aditya
                    </h1>

                    <p className="mt-8 text-2xl font-medium tracking-tight text-neutral-700">
                        Building Intelligent Software Systems.
                    </p>

                    <p className="mt-10 max-w-2xl text-lg leading-9 text-neutral-600">
                        I enjoy building software systems that combine software engineering and machine learning to solve complex real-world problems.
                         I'm particularly interested in how intelligent systems understand context, evolve over time, and remain reliable as they grow.
                    </p>

                </div>
            </section>
        </Container>
    );
}