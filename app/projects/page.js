'use client';
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, X } from "lucide-react";
import Button from "@/src/common/Button";

const projects = [
  {
    name: "UI UX Case Study",
    tag: "Full Stack",
    year: "2025",
    desc: "Modern event booking platform with responsive UI.",
    image: "/home/uiux.jpg",
    highlights: ["React", "Tailwind", "Next.js"],
    details: {
      role: "Product design • Frontend development",
      timeline: "Jan 2025 – Mar 2025",
      industry: "Events & Ticketing",
      overview:
        "End‑to‑end case study focused on improving the discoverability and booking experience for live events, with responsive layouts and clear information hierarchy.",
      sections: [
        {
          title: "Project Goals",
          items: [
            "Increase event discovery and filter clarity",
            "Streamline the booking funnel to reduce drop‑offs",
            "Deliver a mobile‑first experience with fast loading times",
          ],
        },
        {
          title: "My Contributions",
          items: [
            "Information architecture and user flows",
            "High‑fidelity UI design and interaction patterns",
            "Implementation in React & Tailwind with responsive behavior",
          ],
        },
      ],
    },
  },
  {
    name: "Creative Portfolio",
    tag: "Frontend",
    year: "2025",
    desc: "Creative portfolio with animations and dark UI.",
    image: "/home/portfolio.jpg",
    highlights: ["Next.js", "Framer Motion", "Tailwind"],
    details: {
      role: "Frontend engineer • UI designer",
      timeline: "May 2025 – Jun 2025",
      industry: "Personal branding",
      overview:
        "A bold, cinematic portfolio that uses motion and contrast to highlight case studies, services, and personality in a single flowing experience.",
      sections: [
        {
          title: "Experience Design",
          items: [
            "Scroll‑driven storytelling for featured projects",
            "Subtle micro‑interactions on cards and CTAs",
            "Dark interface with carefully tuned contrast and legibility",
          ],
        },
        {
          title: "Implementation",
          items: [
            "Next.js app router with dynamic sections",
            "Framer Motion transitions between page segments",
            "Reusable layout primitives and theme tokens",
          ],
        },
      ],
    },
  },
  {
    name: "E-commerce website",
    tag: "Full Stack",
    year: "2024",
    desc: "Modern e-commerce platform with seamless shopping experience.",
    image: "/home/eco.jpg",
    highlights: ["React", "Node.js", "MongoDB"],
    details: {
      role: "Full‑stack engineer",
      timeline: "Aug 2024 – Nov 2024",
      industry: "Retail & Commerce",
      overview:
        "Conversion‑focused e‑commerce storefront with product discovery, cart, and checkout experiences optimized for clarity and speed.",
      sections: [
        {
          title: "Key Features",
          items: [
            "Advanced product filters and search",
            "Persistent cart and saved items",
            "Order tracking and transactional emails",
          ],
        },
        {
          title: "Technical Highlights",
          items: [
            "REST API built with Node.js & Express",
            "MongoDB for product, user, and order data",
            "Responsive layout that feels native on mobile",
          ],
        },
      ],
    },
  },
  {
    name: "SaaS Dashboard",
    tag: "Full Stack",
    year: "2024",
    desc: "A comprehensive dashboard for managing and analyzing SaaS metrics.",
    image: "/home/saas.jpg",
    highlights: ["React", "Tailwind", "Next.js"],
    details: {
      role: "Product engineer",
      timeline: "Mar 2024 – Jul 2024",
      industry: "B2B SaaS",
      overview:
        "Analytics dashboard that helps teams monitor MRR, churn, and activation with real‑time charts and customizable widgets.",
      sections: [
        {
          title: "Analytics & Reporting",
          items: [
            "KPI overview cards for executive reporting",
            "Time‑range filters and comparison views",
            "Segmented views for cohorts and plans",
          ],
        },
        {
          title: "Interface System",
          items: [
            "Token‑based design system using Tailwind",
            "Modular cards and panels for new metrics",
            "Dark‑mode friendly color palette",
          ],
        },
      ],
    },
  },
  {
    name: "Brand Experience",
    tag: "Branding",
    year: "2024",
    desc: "A visually stunning brand experience for a tech startup.",
    image: "/home/b.jpg",
    highlights: ["Figma", "Adobe XD", "Illustrator"],
    details: {
      role: "Brand & visual designer",
      timeline: "Feb 2024 – Apr 2024",
      industry: "Tech startup",
      overview:
        "A cohesive digital brand built around bold typography, gradients, and motion to communicate innovation and trust.",
      sections: [
        {
          title: "Brand System",
          items: [
            "Logo and wordmark exploration",
            "Color, type, and component tokens",
            "Landing page and social media templates",
          ],
        },
        {
          title: "Outcomes",
          items: [
            "Clear visual language across touchpoints",
            "Improved perception of professionalism",
            "Launch assets ready for marketing campaigns",
          ],
        },
      ],
    },
  },
  {
    name: "Mobile App Design",
    tag: "UI/UX",
    year: "2024",
    desc: "A sleek and intuitive mobile app design for a fitness startup.",
    image: "/home/app.jpg",
    highlights: ["Figma", "Sketch", "InVision"],
    details: {
      role: "Product designer",
      timeline: "Jan 2024 – Mar 2024",
      industry: "Health & Fitness",
      overview:
        "Native‑inspired mobile flows for onboarding, workout tracking, and progress insights, focused on clarity and motivation.",
      sections: [
        {
          title: "User Experience",
          items: [
            "Onboarding with goal selection and personalization",
            "Daily workout scheduling and reminders",
            "Progress views with streaks and milestones",
          ],
        },
        {
          title: "Design System",
          items: [
            "Reusable UI kit for iOS & Android",
            "Iconography and illustration style",
            "Interaction specs for handoff",
          ],
        },
      ],
    },
  },
  {
    name: "Data Visualization",
    tag: "Data Viz",
    year: "2024",
    desc: "Interactive data visualization dashboard for business insights.",
    image: "/home/dv.jpg",
    highlights: ["D3.js", "React", "Tailwind"],
    details: {
      role: "Frontend engineer",
      timeline: "Apr 2024 – Jun 2024",
      industry: "Analytics",
      overview:
        "Interactive dashboards that turn complex datasets into visuals that are easy to explore and understand.",
      sections: [
        {
          title: "Visualization",
          items: [
            "Custom charts with D3.js",
            "Hover states with rich tooltips",
            "Responsive SVG layouts",
          ],
        },
        {
          title: "Performance",
          items: [
            "Virtualized lists for large datasets",
            "Memoized components for smooth interactions",
            "Lazy‑loading less critical panels",
          ],
        },
      ],
    },
  },
  {
    name: "Backend API",
    tag: "Backend",
    year: "2024",
    desc: "A robust backend API for handling complex business logic.",
    image: "/home/api.jpg",
    highlights: ["Node.js", "Express", "MongoDB"],
    details: {
      role: "Backend engineer",
      timeline: "Jul 2024 – Sep 2024",
      industry: "Platform",
      overview:
        "Scalable API layer to manage authentication, permissions, and business workflows for multiple client applications.",
      sections: [
        {
          title: "Architecture",
          items: [
            "Modular route and controller structure",
            "JWT‑based authentication and role checks",
            "Centralized error and logging strategy",
          ],
        },
        {
          title: "Operations",
          items: [
            "Environment‑based configuration",
            "Health checks and monitoring endpoints",
            "Performance‑oriented database indexes",
          ],
        },
      ],
    },
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="overflow-x-hidden">
    {/* hero */}
    <section className="relative overflow-hidden bg-primary text-white py-12">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6 }}
            className="space-y-6"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-primary ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Featured Project
            </p>

            <h1 className="text-4xl font-bungee  md:text-5xl lg:text-5xl font-bold leading-tight">
              My Work & <span className="text-accent">Portfolio</span>
            </h1>

            <p className="text-gray-400 max-w-xl">
              A modern marketplace where users can discover, explore and compare
              the best AI tools for productivity, design, coding and marketing.
              Built with a fast and scalable tech stack.
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["Next.js", "Tailwind", "Framer Motion", "Node.js"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 text-sm bg-white/10 border border-white/10 rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 pt-4">

              <Button
                href="#"
                variant="filled"
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
              >
                <ExternalLink size={18}/>
                Live Demo
              </Button>

              <Button
                href="#"
                variant="outline"
                className="flex items-center gap-2 px-6 py-3 rounded-xl transition"
              >
                <Github size={18}/>
                Source Code
              </Button>

            </div>

          </motion.div>


          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity:0, scale:0.9 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.7 }}
            className="relative"
          >

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">

              <Image
                src="/home/eco.jpg"
                alt="Project Preview"
                width={900}
                height={600}
                className="object-cover"
              />

            </div>

            {/* floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-primary px-5 py-3 rounded-xl shadow-xl text-sm font-semibold">
             Featured Work
            </div>

          </motion.div>

        </div>

      </div>
    </section>

    {/* portfolio spotlight */}
    <section className="relative bg-primary py-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-primary ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Portfolio Spotlight
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-secondary">
              Crafted experiences for{" "}
              <span className="text-accent">modern brands</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/65 max-w-xl">
              A curated glimpse of UI, product, and brand explorations designed
              to feel premium, performant, and delightfully interactive across
              devices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-md text-xs md:text-sm">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                Delivered
              </p>
              <p className="mt-1 text-lg font-semibold text-accent">30+ projects</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                Clients
              </p>
              <p className="mt-1 text-lg font-semibold text-secondary">Startups &amp; Brands</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white/80">
              <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">
                Focus
              </p>
              <p className="mt-1 text-lg font-semibold">Product, Web, Identity</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-80px" }}
            className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-secondary/25 opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <div className="h-full w-full overflow-hidden">
                  <Image
                    src="/home/b2.webp"
                    alt="Portfolio case study collage"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute left-4 bottom-4 flex gap-3">
                  <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/20">
                    Portfolio • 2025
                  </span>
                  <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/20">
                    Motion &amp; Micro‑interactions
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-7 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-secondary">
                    Immersive portfolio layouts
                  </h3>
                  <p className="mt-3 text-sm text-white/70 leading-7">
                    Sections designed to highlight work with cinematic imagery,
                    layered depth, and smooth motion. Perfect for designers,
                    developers, and studios who want their story to feel
                    elevated and memorable.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    {["Scroll-based reveals", "3D hover cards", "Dark & light ready"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent ring-1 ring-accent/30"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href="/projects"
                    variant="filled"
                  >
                    View project gallery
                  </Button>
                  <Button
                    href="/resume"
                    variant="outline"
                  >
                    See experience &amp; roles →
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-secondary/30 p-5"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
              <div className="relative space-y-2">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                  Visual Direction
                </p>
                <h3 className="text-lg font-semibold text-secondary">
                  Modular portfolio sections
                </h3>
                <p className="text-sm text-white/70">
                  Reusable, composable sections that can adapt to case
                  studies, product shots, UI showcases, and narrative content.
                </p>
                <ul className="mt-3 space-y-1.5 text-xs text-white/65">
                  <li>• Grid &amp; masonry layouts</li>
                  <li>• Rich hover states with motion</li>
                  <li>• Optimized for mobile-first viewing</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative overflow-hidden rounded-3xl border border-accent/20 bg-secondary/30 p-5 flex flex-col justify-between"
            >
              <div className="absolute -left-6 bottom-0 h-20 w-20 rounded-full bg-white/30 blur-2xl opacity-40" />
              <div className="relative">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                  Performance
                </p>
                <h3 className="mt-2 text-lg font-semibold text-secondary">
                  Built for speed &amp; clarity
                </h3>
                <p className="mt-2 text-xs md:text-sm text-secondary">
                  Optimized images, accessible typography, and motion tuned to
                  feel fast yet smooth – even on smaller devices.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-semibold text-primary/90">
                <span className="rounded-full bg-white/60 px-3 py-1">
                  Lighthouse friendly
                </span>
                <span className="rounded-full bg-white/60 px-3 py-1">
                  Mobile‑first layouts
                </span>
                <span className="rounded-full bg-white/60 px-3 py-1">
                  Smooth animations
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* projects grid */}
    <section id="projects" className="bg-primary">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-primary ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Projects
            </p>
            <h2 className="mt-4 text-secondary text-3xl font-extrabold tracking-tight sm:text-4xl">
              Selected work with{" "}
              <span className="text-accent">real</span> impact.
            </h2>
            <p className="mt-3 text-sm text-white/65">
              A mix of product dashboards, commerce builds, and brand
              experiences.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 transition duration-500 hover:-translate-y-2 hover:ring-accent"
            >
              {/* Corner action button */}
              <button
                type="button"
                onClick={() => setSelectedProject(p)}
                className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-primary shadow-lg ring-1 ring-white/20 transition hover:bg-secondary hover:text-primary hover:scale-105"
              >
                <ArrowUpRight size={18} />
              </button>

              {/* Hover Image Background */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover scale-110 transition duration-700 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/70" />
              </div>

              {/* Glow Gradient */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-r from-accent/40 via-transparent to-secondary/30 blur-xl" />

              {/* Card Content */}
              <div className="relative p-6 z-10">
                
                {/* Top Tag */}
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-accent px-3 py-1 font-semibold text-primary ring-1 ring-white/10">
                    {p.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-xl text-secondary font-bold tracking-tight">
                  {p.name}
                </h3>
                <span className="text-white/50">{p.year}</span>


                {/* Description */}
                <p className="mt-2 text-sm text-white/70 leading-7">
                  {p.desc}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-primary ring-1 ring-white/10"
                    >
                      {h}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Project details popup */}
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:py-8 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-50 max-w-4xl w-full rounded-3xl border border-white/15 bg-primary p-6 md:p-8 shadow-[0_30px_120px_rgba(0,0,0,0.7)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-white/20 transition"
            >
              <X size={18} />
            </button>

            <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
              {/* Left: Main content */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {selectedProject.tag} • {selectedProject.year}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-secondary">
                  {selectedProject.name}
                </h3>

                <p className="text-sm md:text-base text-white/80 leading-7">
                  {selectedProject.details?.overview || selectedProject.desc}
                </p>

                <div className="grid gap-4 text-xs md:text-sm text-white/70 md:grid-cols-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
                      Role
                    </p>
                    <p className="mt-1 font-medium">
                      {selectedProject.details?.role || "Design & Development"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
                      Timeline
                    </p>
                    <p className="mt-1 font-medium">
                      {selectedProject.details?.timeline || "—"}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-accent">
                      Industry
                    </p>
                    <p className="mt-1 font-medium">
                      {selectedProject.details?.industry || "—"}
                    </p>
                  </div>
                </div>

                {/* Sections */}
                <div className="mt-4 space-y-4">
                  {(selectedProject.details?.sections || []).map((section) => (
                    <div
                      key={section.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <h4 className="text-sm font-semibold text-secondary">
                        {section.title}
                      </h4>
                      <ul className="mt-2 space-y-1.5 text-xs text-white/75">
                        {section.items?.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="pt-2">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">
                    Tech & tools
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedProject.highlights?.map((h) => (
                      <span
                        key={h}
                        className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent ring-1 ring-accent/40"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Visual card */}
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    width={700}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute left-4 bottom-4 flex flex-wrap gap-2 text-[11px]">
                    <span className="rounded-full bg-black/70 px-3 py-1 text-white/85">
                      {selectedProject.tag}
                    </span>
                    <span className="rounded-full bg-black/60 px-3 py-1 text-white/80">
                      {selectedProject.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 text-[11px] text-white/70">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    In production‑ready quality
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                    Smooth motion &amp; micro‑interactions
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* CTA section */}
    <section className="relative overflow-hidden bg-primary py-16">

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-80px" }}
          className="rounded-3xl border border-white/25 bg-black/10 p-8 md:p-10 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Now booking new projects
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                Ready to level up your{" "}
                <span className="text-accent-foreground">portfolio presence?</span>
              </h2>
              <p className="text-sm md:text-base text-white/80">
                Whether you are a founder, creator, or team, I design and build
                portfolio experiences that feel tailored, polished, and
                conversion‑focused.
              </p>
            </div>

            <div className="flex flex-col gap-3 min-w-[220px]">
              <Button
                href="/services"
                variant="filled"
              >
                Start a project
              </Button>
              <Button
                href="/contact"
                variant="outline"
              >
                Let&apos;s talk about your portfolio →
              </Button>
              <div className="flex items-center gap-3 text-[11px] text-white/70">
                <div className="flex -space-x-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold">
                    UI
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold">
                    UX
                  </span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-[10px] font-semibold">
                    Dev
                  </span>
                </div>
                <p>End‑to‑end support from idea to launch.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </div>
  );
}

