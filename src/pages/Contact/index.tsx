const Contact = () => {
  return (
    <main className="py-15">
      <div className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether it's a research discussion, project collaboration, or simply
            connecting with fellow developers, I'm always happy to hear from you.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">
            Get in Touch
          </h2>

          <div className="mt-8 space-y-6">

            <div>
              <h3 className="font-medium">Email</h3>
              <a
                href="mailto:m.s.shanmukha.aditya@gmail.com"
                className="mt-2 inline-block text-muted-foreground hover:text-foreground"
              >
                m.s.shanmukha.aditya@gmail.com
              </a>
            </div>

            <div>
              <h3 className="font-medium">GitHub</h3>
              <a
                href="https://github.com/m-s-shanmukha-aditya"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-muted-foreground hover:text-foreground"
              >
                github.com/m-s-shanmukha-aditya
              </a>
            </div>

            <div>
              <h3 className="font-medium">LinkedIn</h3>
              <a
                href="https://linkedin.com/in/m-s-shanmukha-aditya"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-muted-foreground hover:text-foreground"
              >
                linkedin.com/in/m-s-shanmukha-aditya
              </a>
            </div>

            <div>
              <h3 className="font-medium">Location</h3>
              <p className="mt-2 text-muted-foreground">
                Ranchi, Jharkhand, India
              </p>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;