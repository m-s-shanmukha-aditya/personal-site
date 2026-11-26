import type { ProjectDetail } from "../../content/projects/types";

interface LimitationsProps {
    limitations?: ProjectDetail["limitations"];
}

const Limitations = ({ limitations }: LimitationsProps) => {
    if (!limitations?.length) return null;

    return (
        <section className="py-14">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="font-display text-3xl tracking-tight">
                    Limitations
                </h2>

                <ul className="mt-8 max-w-4xl space-y-4">
                    {limitations.map((limitation, index) => (
                        <li
                            key={index}
                            className="text-lg leading-8 text-muted-foreground"
                        >
                            <span className="mr-3 text-accent">•</span>
                            {limitation}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Limitations;
