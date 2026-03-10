'use client';

import Button from "@/src/common/Button";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 95 },
  { name: "CSS3", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "Next.js", level: 75 },
  { name: "Tailwind CSS", level: 80 },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "Creative Web Studio",
    period: "2023 - Present",
    description:
      "Building responsive landing pages, dashboards and modern UI with strong animation and performance focus."
  },
  {
    role: "Web Designer & Developer",
    company: "Freelance",
    period: "2021 - 2023",
    description:
      "Designed and developed custom portfolio websites and business websites."
  }
];

const education = [
  {
    title: "Bachelor’s in Computer Science",
    school: "Your University",
    period: "2019 - 2022"
  },
  {
    title: "Web Development Bootcamp",
    school: "Online Learning",
    period: "2022 - Present"
  }
];

const projects = [
  {
    title: "Modern Portfolio Website",
    description:
      "A fully responsive portfolio website built with Next.js and Tailwind CSS featuring smooth animations and modern UI.",
    tech: ["Next.js", "React", "Tailwind"],
    live: "/projects",
  },
  {
    title: "Landing Page UI",
    description:
      "High-converting landing page with interactive sections, responsive layout and optimized performance.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "/projects",
  },
  {
    title: "Dashboard UI",
    description:
      "Modern admin dashboard design with reusable components and responsive charts.",
    tech: ["React", "Tailwind", "API"],
    live: "/projects",
  },
];

const codingSkills = [
  { name: "HTML5", level: 95, category: "Frontend" },
  { name: "CSS3", level: 92, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Next.js", level: 82, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "PHP", level: 60, category: "Backend" },
  { name: "Express.js", level: 82, category: "Backend" },
  { name: "Django", level: 70, category: "Backend" },
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "Vs code", level:77, category: "Tools"},
  { name: "Word Press", level:62, category: "Tools"}
];

export default function ResumePage() {
  const codingSkillGroups = codingSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className="bg-primary text-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION TITLE */}

        <div className="text-center mb-20">
        <p className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-accent px-3 py-1 text-xs font-sharetech tracking-[0.22em] uppercase text-primary shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Resume
            </p>

          <h2 className="text-4xl md:text-4xl font-bungee font-bold mt-3">
            My Professional <span className="text-accent" > Journey </span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A combination of technical expertise, creativity and passion for
            crafting beautiful web experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT PROFILE CARD */}

          <div className="lg:sticky lg:top-32 h-fit">

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

              <div className="flex flex-col items-center text-center">

                <div className="w-28 h-28 rounded-full bg-accent flex items-center justify-center text-3xl text-primary font-bold">
                  MD
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  Frontend Developer
                </h3>

                <p className="text-accent text-sm mt-2">
                  Specialized in building modern UI with React, Next.js and
                  Tailwind CSS.
                </p>

                <div className="mt-6 space-y-2 text-sm text-secondary/60">

                  <p>📍 Open for Remote Work</p>
                  <p>✉ yourname@email.com</p>
                  <p>🌐 yourportfolio.com</p>

                </div>

                <Button
                variant="filled"
                >
                  Download CV
                </Button>

              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}

          <div className="lg:col-span-2 space-y-16">

            {/* EXPERIENCE TIMELINE */}

            <div>

              <h3 className="text-2xl text-accent font-semibold mb-8">
                Experience
              </h3>

              <div className="space-y-10 border-l border-white/10 pl-8">

                {experiences.map((exp, index) => (

                  <div key={index} className="relative">

                    <span className="absolute -left-[38px] top-1 w-4 h-4 bg-accent rounded-full"></span>

                    <h4 className="text-lg font-semibold">
                      {exp.role}
                    </h4>

                    <p className="text-accent text-sm">
                      {exp.company} • {exp.period}
                    </p>

                    <p className="text-gray-400 mt-2 text-sm">
                      {exp.description}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* EDUCATION */}

            <div>

              <h3 className="text-2xl text-accent font-semibold mb-8">
                Education
              </h3>

              <div className="grid md:grid-cols-2 gap-6">

                {education.map((edu, index) => (

                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-indigo-400 transition"
                  >

                    <h4 className="font-semibold">
                      {edu.title}
                    </h4>

                    <p className="text-sm text-secondary mt-1">
                      {edu.school}
                    </p>

                    <p className="text-accent text-xs mt-3">
                      {edu.period}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* SKILLS */}

            <div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl text-accent font-semibold">
                    Technical Skills
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">
                    Core technologies I use to build fast, modern and pixel-perfect user interfaces.
                  </p>
                </div>

                <span className="inline-flex w-fit rounded-full border border-accent bg-accent px-4 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                  UI / Frontend Focus
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {skills.map((skill, index) => {
                  const levelLabel =
                    skill.level >= 90
                      ? "Expert level"
                      : skill.level >= 80
                      ? "Advanced level"
                      : "Intermediate level";

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true, amount: 0.4 }}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <h4 className="text-sm font-semibold">
                            {skill.name}
                          </h4>
                          <p className="mt-1 text-xs text-gray-400">
                            {levelLabel}
                          </p>
                        </div>

                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-xs text-primary font-semibold">
                            {skill.level}%
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.15 }}
                          viewport={{ once: true }}
                          className="relative h-full rounded-full bg-gradient-to-r from-secondary/60 via-secondary/30 to-accent"
                        >
                          <span className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-secondary/10 shadow-[0_0_14px_rgba(129,140,248,0.9)]" />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}

              </div>

            </div>

            {/* PROJECTS */}
            <div className="card-base bg-primary p-2">

            <h2 className="text-sm font-sharetech uppercase tracking-[0.22em] text-accent">
              Featured Projects
            </h2>

            <p className="mt-3 text-xs text-secondary sm:text-sm">
              A selection of projects that demonstrate my frontend development
              skills and design approach.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

              {projects.map((project) => (

                <div
                  key={project.title}
                  className="group rounded-2xl border border-foreground/10 bg-white/10 p-5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                >

                  <h3 className="text-sm font-semibold text-secondary sm:text-base">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs text-secondary/60 sm:text-sm">
                    {project.description}
                  </p>

                  {/* TECH STACK */}

                  <div className="mt-3 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-primary"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* BUTTONS */}

                  <div className="mt-4 flex gap-3">

                    <a
                      href={project.live}
                      className="text-xs font-medium text-secondary hover:underline"
                    >
                      Live Demo →
                    </a>

                  </div>

                </div>

              ))}

            </div>

            </div>

            {/* CODING SKILLS */}
            <div className="card-base bg-primary p-2">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-base sm:text-lg font-sharetech uppercase tracking-[0.22em] text-accent">
                    Coding Skills
                  </h2>
                  <p className="mt-3 text-xs text-secondary/60 sm:text-sm">
                    Technologies and tools I use across the full development cycle — from crafting UI to managing data and version control.
                  </p>
                </div>

                {/* <div className="flex flex-wrap gap-2">
                  {Object.keys(codingSkillGroups).map((category) => (
                    <span
                      key={category}
                      className="rounded-full border border-accent bg-accent px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary"
                    >
                      {category}
                    </span>
                  ))}
                </div> */}
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {Object.entries(codingSkillGroups).map(
                  ([category, skillsInCategory]) => (
                    <div
                      key={category}
                      className="rounded-2xl border border-foreground/10 bg-white/10 p-4"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
                        {category}
                      </p>

                      <div className="mt-4 space-y-3">
                        {skillsInCategory.map((skill) => (
                          <div
                            key={skill.name}
                            className="flex items-center justify-between gap-3"
                          >
                            <span className="text-xs text-secondary/70 sm:text-sm">
                              {skill.name}
                            </span>

                            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-primary">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {skill.level}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}