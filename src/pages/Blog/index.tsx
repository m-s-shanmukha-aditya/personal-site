export default function Blog() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      <section className="py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Blog
          </h1>

          <p className="mt-8 text-lg leading-9 text-neutral-600">
            A place where I document engineering decisions, software design,
            machine learning experiments, and lessons learned while building
            real-world systems.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl rounded-2xl border border-neutral-200 p-10">
          <h2 className="text-2xl font-semibold tracking-tight">
            Coming Soon
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            I'm currently working on the first set of articles. Rather than
            publishing generic tutorials, I want to write about the engineering
            decisions, trade-offs, and lessons I've encountered while building
            software systems.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            The first articles will be published soon.
          </p>
        </div>
      </section>
    </div>
  );
}