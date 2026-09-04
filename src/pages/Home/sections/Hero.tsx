import Container from "../../../components/layout/Container";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <Container>
            <section className="relative grid min-h-[calc(100vh-7.5rem)] items-center gap-16 overflow-hidden border-b border-border py-20 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-24 lg:py-24">
                <div className="relative z-10 max-w-4xl">
                    <p className="eyebrow">Software engineering / applied ML</p>

                    <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
                        Munukutla Sri
                        <br />
                        Shanmukha Aditya
                    </h1>

                    <p className="mt-8 max-w-2xl text-xl font-medium leading-8 text-foreground sm:text-2xl">
                        Building Intelligent Software Systems.
                    </p>

                    <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                        I enjoy building software systems that combine software engineering and machine learning to solve complex real-world problems.
                        I am particularly interested in how intelligent systems understand context, evolve over time, and remain reliable as they grow.
                    </p>

                    <div className="mt-9 flex flex-wrap items-center gap-5">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 bg-[#25251f] px-5 py-3 text-sm font-semibold text-[#f6f4ee] transition-transform hover:-translate-y-0.5"
                        >
                            Explore selected work
                            <ArrowUpRight size={16} />
                        </Link>
                        <Link
                            to="/contact"
                            className="accent-link text-sm font-semibold"
                        >
                            Let&apos;s connect
                        </Link>
                    </div>
                </div>

                <aside className="relative border-l border-border pl-6 lg:mt-20">
                    <div className="absolute -left-px top-0 h-16 w-px bg-accent" />
                    <p className="eyebrow">Current focus</p>
                    <p className="font-display mt-5 text-2xl leading-tight">
                        Making complex systems easier to understand, extend, and trust.
                    </p>
                    <dl className="mt-10 space-y-5 text-sm">
                        <div className="flex items-start justify-between gap-4 border-t border-border pt-3">
                            <dt className="text-muted-foreground">Based in</dt>
                            <dd className="text-right font-medium">Ranchi, India</dd>
                        </div>
                        <div className="flex items-start justify-between gap-4 border-t border-border pt-3">
                            <dt className="text-muted-foreground">Status</dt>
                            <dd className="text-right font-medium text-accent">Building &amp; learning</dd>
                        </div>
                    </dl>
                    <a href="#thesis" className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
                        Scroll to explore <ArrowDown size={15} />
                    </a>
                </aside>
            </section>
        </Container>
    );
}