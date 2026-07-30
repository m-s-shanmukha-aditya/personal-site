interface FutureWorkProps {
    futureWork?: string[];
}

const FutureWork = ({ futureWork }: FutureWorkProps) => {
    if (!futureWork?.length) return null;

    return (
        <section className="py-10">
            <div className="mx-auto max-w-3xl px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    Future Work
                </h2>

                <ul className="mt-8 space-y-4">
                    {futureWork.map((item, index) => (
                        <li
                            key={index}
                            className="text-lg leading-8 text-muted-foreground"
                        >
                            <span className="mr-3 text-foreground">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FutureWork;
