import Container from "../../../components/layout/Container";

export default function Thesis() {
    return (
        <Container>
            <section id="thesis" className="border-b border-border py-20 sm:py-28">
                <div className="flex items-end justify-between gap-8 border-b border-border pb-6">
                    <div>
                        <p className="eyebrow">A working thesis</p>
                        <h2 className="font-display mt-4 text-4xl tracking-tight sm:text-5xl">What I keep coming back to</h2>
                    </div>
                    <span className="hidden max-w-48 text-right text-sm leading-6 text-muted-foreground md:block">The question behind the systems I build.</span>
                </div>

                <div className="mt-12 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                    <p className="font-display max-w-3xl text-3xl leading-[1.08] tracking-tight text-foreground sm:text-5xl">
                        Software is becoming increasingly intelligent, yet building
                        systems that remain reliable, maintainable, and adaptable
                        as they grow in complexity is still one of engineering's
                        biggest challenges.
                    </p>

                    <div className="space-y-8 border-l-2 border-accent pl-7 lg:pt-2">
                        <p className="text-lg leading-8 text-muted-foreground">
                        I'm interested in understanding how software engineering,
                        machine learning, and intelligent systems can work together
                        to build software that is not only capable, but also easier
                        to reason about, extend, and trust over time.
                    </p>

                        <p className="border-t border-border pt-8 text-lg leading-8 text-muted-foreground">
                        Across projects in conversational AI, retrieval systems,
                        backend engineering, and machine learning, I enjoy exploring
                        different approaches to that challenge. Each project teaches
                        me something new about designing systems that balance
                        intelligence with simplicity, performance with
                        maintainability, and innovation with practical engineering.
                        </p>
                    </div>
                </div>
            </section>
        </Container>
    );
}