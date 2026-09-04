import type { ProjectDetail } from "../../content/projects/types";

interface ResourcesProps {
    resources?: ProjectDetail["resources"];
}

const Resources = ({ resources }: ResourcesProps) => {
    if (!resources) return null;

    const links = [
        { label: "Article", value: resources.article },
        { label: "Documentation", value: resources.documentation },
        { label: "Presentation", value: resources.presentation },
    ].filter((item) => item.value);

    if (!links.length) return null;

    return (
        <section className="py-14">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="font-display text-3xl tracking-tight">
                    Resources
                </h2>

                <div className="mt-8 space-y-4">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block max-w-4xl border p-5 text-lg transition-colors hover:border-accent hover:bg-muted"
                        >
                            <span className="font-medium text-foreground">
                                {link.label}:
                            </span>{" "}
                            <span className="text-muted-foreground">
                                {link.value}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Resources;
