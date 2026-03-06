const skills = {
  "Frontend Skills": ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS"],
  "Backend & Tools": ["Node.js", "Express", "REST APIs", "Git & GitHub"],
  "Other": ["Responsive Design", "UI/UX Basics", "Performance Optimization"],
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bungee text-primary">Skills</h1>
      <p className="max-w-2xl text-base text-foreground/80">
        Technologies and tools I use regularly to design, build, and ship
        high-quality web experiences.
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        {Object.entries(skills).map(([group, list]) => (
          <div
            key={group}
            className="rounded-2xl border border-secondary/20 bg-background/70 p-5 shadow-sm"
          >
            <h2 className="text-sm font-sharetech uppercase tracking-[0.22em] text-secondary">
              {group}
            </h2>
            <ul className="mt-3 space-y-1.5 text-sm text-foreground/80">
              {list.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

