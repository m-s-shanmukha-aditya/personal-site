const Resume = () => {
  return (
    <main className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="max-w-3xl">
          <p className="eyebrow">Experience &amp; practice</p>
          <h1 className="font-display mt-4 text-5xl tracking-tight sm:text-6xl">
            Resume
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A summary of my education, internships and technical skills.
          </p>
        </section>

        {/* Experience */}
        <section className="mt-20">
          <h2 className="font-display text-3xl">Experience</h2>

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
                Implemented a three-class tomato leaf disease classifier using TensorFlow/Keras and an ImageNet-pretrained MobileNetV2 backbone, with image augmentation and a custom classification head. Used EarlyStopping and ModelCheckpoint for model selection and evaluated held-out performance with classification reports and confusion matrices.
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
                Developed a supervised anomaly detection pipeline for NASA SMAP spacecraft telemetry using feature extraction, standardization and PCA. Addressed class imbalance with SMOTE on training data and tuned an RBF-kernel SVC with RandomizedSearchCV. Reached 88% accuracy with about 65% anomaly precision and recall on held-out test telemetry.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mt-20">
          <h2 className="font-display text-3xl">Education</h2>

          <div className="mt-8 border-l border-border pl-6">
            <h3 className="text-lg font-semibold">
              B.Tech (Hons.) in Computer Science &amp; Engineering
            </h3>

            <p className="mt-1 text-muted-foreground">
              Central University of Jharkhand, Ranchi
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              2023 – 2027
            </p>

            <p className="mt-2 text-sm text-muted-foreground">
              CGPA: 8.82 / 10
            </p>
          </div>
        </section>

        {/* Technical Expertise */}
        <section className="mt-20">
          <h2 className="font-display text-3xl">
            Technical Expertise
          </h2>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-medium">Languages</h3>
              <p className="mt-2 text-muted-foreground">
                Java, Python, SQL
              </p>
            </div>

            <div>
              <h3 className="font-medium">Backend</h3>
              <p className="mt-2 text-muted-foreground">
                Spring Boot, REST APIs, session-based authentication, role-based authorization, FastAPI
              </p>
            </div>

            <div>
              <h3 className="font-medium">Databases</h3>
              <p className="mt-2 text-muted-foreground">
                PostgreSQL, Redis
              </p>
            </div>

            <div>
              <h3 className="font-medium">Tools and Cloud</h3>
              <p className="mt-2 text-muted-foreground">
                Git, Docker, Postman, AWS (hands-on in progress)
              </p>
            </div>

            <div>
              <h3 className="font-medium">AI/ML</h3>
              <p className="mt-2 text-muted-foreground">
                PyTorch, TensorFlow/Keras, scikit-learn, Transformers, FAISS
              </p>
            </div>
          </div>
        </section>

        {/* Resume Download */}
        <section className="mt-20">
          <h2 className="font-display text-3xl">
            Resume
          </h2>

          <p className="mt-4 text-muted-foreground">
            Download the latest PDF version of my resume for a complete overview
            of my experience, projects, and technical background.
          </p>

          <a
            href="/M_S_SHANMUKHA_ADITYA_RESUME.pdf"
            download
            className="mt-6 inline-flex items-center border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-accent hover:bg-accent hover:text-white"
          >
            Download Resume
          </a>
        </section>
      </div>
    </main>
  );
};

export default Resume;