import Container from "../../../components/layout/Container";

export default function Thesis() {
    return (
        <Container>
            <section className="py-24 sm:py-32">
                <div className="max-w-3xl space-y-10">

                    <p className="text-3xl font-medium leading-relaxed tracking-tight text-neutral-900">
                        Software is becoming increasingly intelligent, yet building
                        systems that remain reliable, maintainable, and adaptable
                        as they grow in complexity is still one of engineering's
                        biggest challenges.
                    </p>

                    <p className="text-lg leading-9 text-neutral-600">
                        I'm interested in understanding how software engineering,
                        machine learning, and intelligent systems can work together
                        to build software that is not only capable, but also easier
                        to reason about, extend, and trust over time.
                    </p>

                    <p className="text-lg leading-9 text-neutral-600">
                        Across projects in conversational AI, retrieval systems,
                        backend engineering, and machine learning, I enjoy exploring
                        different approaches to that challenge. Each project teaches
                        me something new about designing systems that balance
                        intelligence with simplicity, performance with
                        maintainability, and innovation with practical engineering.
                    </p>

                </div>
            </section>
        </Container>
    );
}