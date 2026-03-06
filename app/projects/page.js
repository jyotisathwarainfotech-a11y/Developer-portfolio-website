const projects = [
  {
    title: "Project One",
    description:
      "A responsive landing page built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS"],
  },
  {
    title: "Project Two",
    description:
      "Dashboard UI with interactive charts and authentication flow.",
    tech: ["React", "Node.js", "REST API"],
  },
  {
    title: "Project Three",
    description:
      "Portfolio website featuring smooth animations and modern design.",
    tech: ["Next.js", "Framer Motion"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bungee text-primary">Projects</h1>
      <p className="max-w-2xl text-base text-foreground/80">
        A selection of recent work that highlights my focus on clean UI, strong
        UX, and solid engineering practices.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col justify-between rounded-2xl border border-secondary/20 bg-background/70 p-5 shadow-sm"
          >
            <div className="space-y-2">
              <h2 className="text-lg font-semibold text-primary">
                {project.title}
              </h2>
              <p className="text-sm text-foreground/80">
                {project.description}
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs font-sharetech text-secondary">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-secondary/40 px-3 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

