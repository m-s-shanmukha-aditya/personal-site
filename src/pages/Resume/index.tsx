const Resume = () => {
  return (
    <main className="py-15">
      <div className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Resume
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A concise overview of my academic background, professional
            experience, and technical expertise. While my projects and research
            are documented in greater detail throughout this website, this page
            summarizes the experience and technical foundation behind them.
          </p>
        </section>

        {/* Experience */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Experience</h2>

          <div className="mt-8 space-y-12">
            <div className="border-l border-border pl-6">
              <h3 className="text-lg font-semibold">
                AI Engineer Intern
              </h3>

              <p className="mt-1 text-muted-foreground">
                Srikari Impetus Solutions Pvt. Ltd.
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                May 2026 – June 2026
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                Contributed to improving a deep learning pipeline for tomato
                leaf disease classification using transfer learning. Worked
                across dataset preparation, preprocessing, model training,
                evaluation, and experimentation workflows, with an emphasis on
                building reliable and reproducible machine learning pipelines.
              </p>
            </div>

            <div className="border-l border-border pl-6">
              <h3 className="text-lg font-semibold">
                Machine Learning Research Intern
              </h3>

              <p className="mt-1 text-muted-foreground">
                Indian Institute of Technology Patna
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                May 2025 – July 2025
              </p>

              <p className="mt-4 leading-7 text-muted-foreground">
                Implemented and evaluated supervised anomaly detection models
                for NASA SMAP spacecraft telemetry based on published research.
                Focused on data preprocessing, feature engineering, model
                optimization, and experimentation to develop a reproducible
                machine learning pipeline capable of handling highly imbalanced
                real-world telemetry data.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Education</h2>

          <div className="mt-8 border-l border-border pl-6">
            <h3 className="text-lg font-semibold">
              Integrated B.Tech + M.Tech
            </h3>

            <p className="mt-1 text-muted-foreground">
              Data Science &amp; Machine Learning
            </p>

            <p className="mt-2">
              Central University of Jharkhand
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              2023 – 2028
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              CGPA: 8.82 / 10
            </p>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">
            Technical Expertise
          </h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-medium">Languages</h3>
              <p className="mt-2 text-muted-foreground">
                Java, Python, C, C++, SQL
              </p>
            </div>

            <div>
              <h3 className="font-medium">Backend &amp; Databases</h3>
              <p className="mt-2 text-muted-foreground">
                Spring Boot, REST APIs, PostgreSQL, MySQL, Redis
              </p>
            </div>

            <div>
              <h3 className="font-medium">AI &amp; Machine Learning</h3>
              <p className="mt-2 text-muted-foreground">
                PyTorch, TensorFlow, scikit-learn, Hugging Face, Transformers,
                LoRA, SentenceTransformers, FAISS
              </p>
            </div>

            <div>
              <h3 className="font-medium">Developer Tools</h3>
              <p className="mt-2 text-muted-foreground">
                Git, Maven, Postman, VS Code
              </p>
            </div>
          </div>
        </section>

        {/* Resume Download */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">
            Resume
          </h2>

          <p className="mt-4 text-muted-foreground">
            Download the latest PDF version of my resume for a complete overview
            of my experience, projects, and technical background.
          </p>

          <a
            href="/Munukutla_Sri_Shanmukha_Aditya_Resume.pdf"
            download
            className="mt-6 inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            Download Resume
          </a>
        </section>
      </div>
    </main>
  );
};

export default Resume;