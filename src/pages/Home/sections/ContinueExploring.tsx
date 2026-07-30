import { Link } from "react-router-dom";
import Container from "../../../components/layout/Container";

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
            <section className="py-16 sm:py-20 border-t border-neutral-200">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-semibold tracking-tight">
                        Continue Exploring
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-neutral-600">
                        Continue through the sections below to explore my work, writing, and background in more detail.
                    </p>
                </div>

                <nav className="mt-10 space-y-8">
                    {links.map((link) => (
                        <Link
                            key={link.title}
                            to={link.href}
                            className="group block max-w-3xl"
                        >
                            <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-neutral-600">
                                {link.title}
                            </h3>

                            <p className="mt-2 leading-8 text-neutral-600">
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