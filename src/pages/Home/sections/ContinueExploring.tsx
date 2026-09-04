import { Link } from "react-router-dom";
import Container from "../../../components/layout/Container";
import { ArrowUpRight } from "lucide-react";

const links = [
    {
        title: "Projects",
        href: "/projects",
        description:
            "Explore the engineering decisions, trade-offs, and outcomes behind each project.",
    },
    {
        title: "Resume",
        href: "/resume",
        description:
            "View my experience, education, technical skills, and professional background.",
    },
    {
        title: "Blog",
        href: "/blog",
        description:
            "Read essays and notes on software engineering, intelligent systems, and technology.",
    },
    {
        title: "Contact",
        href: "/contact",
        description:
            "Get in touch to discuss opportunities, collaborations, or ideas.",
    },
];

const ContinueExploring = () => {
    return (
        <Container>
            <section className="border-t border-border py-16 sm:py-20">
                <div className="max-w-3xl">
                    <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
                        Continue Exploring
                    </h2>

                    <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">
                        Continue through the sections below to explore my work, writing, and background in more detail.
                    </p>
                </div>

                <nav className="mt-10 grid border-t border-border sm:grid-cols-2">
                    {links.map((link) => (
                        <Link
                            key={link.title}
                            to={link.href}
                            className="group block border-b border-border py-6 sm:pr-8"
                        >
                            <h3 className="flex items-center justify-between text-xl font-semibold tracking-tight transition-colors group-hover:text-foreground">
                                {link.title} <ArrowUpRight size={18} />
                            </h3>

                            <p className="mt-2 leading-8 text-muted-foreground">
                                {link.description}
                            </p>
                        </Link>
                    ))}
                </nav>
            </section>
        </Container>
    );
};

export default ContinueExploring;