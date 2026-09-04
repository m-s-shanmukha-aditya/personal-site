interface OverviewProps {
    overview: string;
}

const Overview = ({ overview }: OverviewProps) => {
    return (
        <section className="py-14">
            <div className="mx-auto max-w-5xl px-6">
                <h2 className="font-display text-3xl tracking-tight">
                    Overview
                </h2>

                <div className="mt-6">
                    <p className="max-w-4xl text-lg leading-8 text-muted-foreground">
                        {overview}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Overview;