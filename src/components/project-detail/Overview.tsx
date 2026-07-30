interface OverviewProps {
    overview: string;
}

const Overview = ({ overview }: OverviewProps) => {
    return (
        <section className="py-10">
            <div className="mx-auto max-w-3xl px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                    Overview
                </h2>

                <div className="mt-6">
                    <p className="text-lg leading-8 text-muted-foreground">
                        {overview}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Overview;