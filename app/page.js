'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/src/common/Button";
import { Brush, Code, Gauge, Globe, Palette, Calendar, ShoppingCart, Smartphone,Phone, Mail, MapPin } from "lucide-react";

const slides = [
  {
    title: "Full Stack Developer",
    desc: "Building scalable web apps with modern technologies.",
    highlight: "7+ Years Experience",
  },
  {
    title: "UI / UX Focused",
    desc: "Designing beautiful, high-converting interfaces.",
    highlight: "Pixel Perfect Design",
  },
  {
    title: "Freelance & Remote",
    desc: "Helping startups & brands grow digitally.",
    highlight: "180+ Projects Delivered",
  },
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Modern and responsive websites built using React, Next.js and Tailwind."
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    desc: "Clean and creative user interfaces focused on great user experience."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Websites that look perfect on mobile, tablet and desktop devices."
  },
  {
    icon: Globe,
    title: "SEO Optimization",
    desc: "SEO friendly websites to improve search engine visibility."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps built with React Native for iOS and Android."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    desc: "Custom e-commerce solutions tailored to your business needs."
  },
  {
    icon: Brush,
    title: "Branding & Identity",
    desc: "Complete brand identity packages including logos, color schemes, and style guides."
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Strategies to improve loading times and overall app performance."
  }
];

const projects = [
  {
    name: "UI UX Case Study",
    tag: "Full Stack",
    year: "2025",
    desc: "Modern event booking platform with responsive UI.",
    image: "/home/uiux.jpg",
    href: "projects",
    highlights: ["React", "Tailwind", "Next.js"],
  },
  {
    name: "Creative Portfolio",
    tag: "Frontend",
    year: "2025",
    desc: "Creative portfolio with animations and dark UI.",
    image: "/home/portfolio.jpg",
    href: "/projects",
    highlights: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    name: "E-commerce website",
    tag: "Full Stack",
    year: "2024",
    desc: "Modern e-commerce platform with seamless shopping experience.",
    image: "/home/eco.jpg",
    href: "/projects",
    highlights: ["React", "Node.js", "MongoDB"],
  },
  {
    name: "SaaS Dashboard",
    tag: "Full Stack",
    year: "2024",
    desc: "A comprehensive dashboard for managing and analyzing SaaS metrics.",
    image: "/home/saas.jpg",
    href: "/projects",
    highlights: ["React", "Tailwind", "Next.js"],
  }
];

const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Invision Soft Solution",
    period: "2022 — Present",
    points: [
      "Built reusable UI kits and improved delivery speed across teams.",
      "Optimized pages to reduce LCP and improve conversion funnels.",
      "Integrated payment, CRM, and analytics pipelines.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Product Studio",
    period: "2019 — 2022",
    points: [
      "Shipped client portals with authentication and admin tooling.",
      "Implemented API caching and background jobs for scalability.",
      "Mentored juniors and reviewed PRs for quality.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Creative Agency",
    period: "2017 — 2019",
    points: [
      "Delivered marketing websites with strong SEO + performance.",
      "Collaborated with designers to translate Figma into code.",
      "Introduced component-driven development workflows.",
    ],
  },
];

const testimonials = [
  {
    name: "Thomas Israel",
    title: "Manager",
    quote:
      "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
    image: "/home/t.jpg",
  },
  {
    name: "Sarah Johnson",
    title: "Product Manager",
    quote:
      "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
    image: "/home/t.jpg",
  },
  {
    name: "David Lee",
    title: "Startup Founder",
    quote:
      "Obviously I'm a Web Designer. Web Developer with over 7 years of experience. Experienced with all stages of the development.",
      image: "/home/t.jpg",
    },
];

const posts = [
  {
    title: "Tips For Conducting Usability Studies",
    category: "Design",
    tag: "Figma",
    date: "September 25, 2023",
    image: "/home/b1.png",
    href: "/blog"
  },
  {
    title: "Keyboard-Only Support Assistive Technology",
    category: "Design",
    tag: "Figma",
    date: "September 25, 2023",
    image: "/home/b2.webp",
    href: "/blog"
  }
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="container mx-auto max-w-7xl px-6 py-10 lg:py-25 relative z-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            
            {/* LEFT CONTENT */}
                    {/* LEFT CONTENT */}
            <div className="space-y-6">

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <p className="text-xl text-accent sm:text-2xl">
                    Hey! I'm
                  </p>

                  <h1 className="text-4xl font-extrabold leading-tight text-secondary sm:text-5xl lg:text-6xl">
                    {slides[index].title}
                  </h1>

                  <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                    {slides[index].desc}
                  </p>

                  <div className="inline-block rounded-full bg-accent px-4 py-2 text-sm text-primary ring-1 ring-primary">
                    {slides[index].highlight}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">

                <Button href="#contact"
                 variant="filled">
                  Hire Me
                </Button> 

                <Button href="#projects" 
                variant="outline">
                  View Work
                </Button>
              </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="relative flex justify-center animate-fadeIn">
              
              <img
                src="/home/me.webp" // replace with your image
                alt="profile"
                className="relative z-10 w-[300px] sm:w-[350px] lg:w-[400px]"
              />

              {/* Floating Card 1 */}
              <div className="absolute top-10 right-0 bg-secondary px-6 py-4 rounded-xl shadow-lg animate-float hidden sm:block">
                <p className="font-semibold text-primary">Web Developer</p>
                <p className="text-sm text-gray-800">2+ Years Experience</p>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute bottom-10 left-0 bg-secondary px-6 py-4 rounded-xl shadow-lg animate-float delay-200 hidden sm:block">
                <p className="text-2xl font-bold text-primary">30+</p>
                <p className="text-sm text-gray-800">Project Completed</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
       <section id="about" className="relative overflow-hidden bg-primary"
        >
          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-12">

            <div className="grid items-center gap-12 lg:grid-cols-12">

              {/* LEFT IMAGE */}
              <div className="relative lg:col-span-5 flex justify-center">

                {/* ARCH SHAPE */}
                <div className="relative w-[320px] sm:w-[380px] md:w-[420px]">

                  {/* background arch */}
                  <div className="rounded-[220px_220px_0_0] bg-secondary p-6">

                    <img
                      src="/home/a1.png"
                      alt="about"
                      className="w-full object-cover rounded-[200px_200px_0_0]"
                    />

                  </div>

                  {/* FLOAT CARD */}
                  <div className="absolute right-[-20px] bottom-[60px] rounded-xl bg-accent px-6 py-4 shadow-xl">
                    <p className="text-sm font-semibold text-primary">
                      Web Desinger
                    </p>
                    <p className="text-xl font-bold text-primary">
                      180+ <span className="text-sm font-medium text-primary">Years</span>
                    </p>
                    <p className="text-xs text-primary">Experience</p>
                  </div>

                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="lg:col-span-7">

                <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-primary ring-1 ring-white/10">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  About me
                </p>

                <h2 className="mt-4 text-3xl text-accent font-extrabold tracking-tight sm:text-4xl">
                  I build <span className="text-secondary">fast</span>,{" "}
                  <span className="text-secondary">polished</span> web products.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                  I focus on conversion-friendly layouts, clean component systems,
                  and robust backend integrations.
                </p>

                {/* cards */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-gradient-to-br from-white/8 to-white/3 p-6 ring-1 ring-white/10">
                    <p className="text-sm text-accent font-semibold">My approach</p>

                    <ul className="mt-4 space-y-3 text-sm text-white/65">
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-secondary"></span>
                        Start with structure: content hierarchy + layout rhythm.
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-secondary"></span>
                         Build a component system that stays consistent.
                      </li>
                      <li className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-secondary"></span>
                        Optimize performance early so it feels instant.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-gradient-to-br from-white/8 to-white/3 p-6 ring-1 ring-white/10">
                    <p className="text-sm text-accent font-semibold">Core stack</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {[
                        "Next.js",
                        "React",
                        "Node.js",
                        "Tailwind",
                        "MongoDB",
                        "PostgreSQL",
                        "REST/GraphQL",
                        "CI/CD",
                      ].map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/75 ring-1 ring-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-2xl font-extrabold text-white">7+</p>
                    <p className="mt-1 text-xs text-white/60">Years experience</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-2xl font-extrabold text-white">180+</p>
                    <p className="mt-1 text-xs text-white/60">Projects</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <p className="text-2xl font-extrabold text-white">24h</p>
                    <p className="mt-1 text-xs text-white/60">Response time</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      {/* SERVICES */}
      <section id="services" className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">

          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-primary ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-primary" />
              What I Do
            </p>

            <p className="mt-4 max-w-2xl mx-auto text-sm text-white/70">
              Obviously I'm a Web Designer. Web Developer with over 7 years of experience.
              Experienced with all stages of the development.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="group relative overflow-hidden rounded-xl border-2 border-white/10 bg-primary/30 p-8 backdrop-blur transition-all duration-300"
                >

                  {/* Hover Gradient Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-transparent to-primary/20 blur-xl"></div>
                  </div>

                  {/* Light Sweep Effect */}
                  <div className="absolute -left-40 top-0 h-full w-40 rotate-12 bg-white/10 blur-2xl opacity-0 group-hover:left-full group-hover:opacity-100 transition-all duration-700"></div>

                  {/* Icon */}
                  <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20 text-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <Icon size={28} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70">
                    {service.desc}
                  </p>

                  {/* Bottom Line Animation */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent transition-all duration-500 group-hover:w-full"></span>

                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-primary">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-12">
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

                    <span className="text-white/50">{p.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-xl text-secondary font-bold tracking-tight">
                    {p.name}
                  </h3>

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

                  {/* Button */}
                  <div className="mt-6">
                    <Link
                      href={p.href}
                      className="inline-block rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-primary transition hover:scale-105"
                    >
                      View Project →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative bg-primary overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-12">

          {/* heading */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1 text-xs font-semibold tracking-wide text-primary ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Experience
            </p>

            <h2 className="mt-4 text-secondary text-3xl font-extrabold sm:text-4xl">
              My Professional Journey
            </h2>

            <p className="mt-3 text-sm text-white/60">
              Projects, growth, and real-world experience building modern web applications.
            </p>
          </div>

          {/* timeline */}
          <div className="relative mt-14">

            {/* center line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block" />

            <div className="space-y-12">

              {experience.map((e, i) => (
                <div
                  key={i}
                  className={`relative grid gap-6 md:grid-cols-2 items-center ${
                    i % 2 === 0 ? "md:text-right" : ""
                  }`}
                >

                  {/* LEFT / RIGHT CONTENT */}
                  <div
                    className={`rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md transition hover:bg-white/10 ${
                      i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                    }`}
                  >
                    <p className="text-sm text-accent font-semibold">{e.role}</p>
                    <p className="text-xs text-white/60 mt-1">{e.company}</p>

                    <p className="mt-2 text-xs text-secondary font-semibold">
                      {e.period}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-white/65">
                      {e.points.map((pt) => (
                        <li key={pt} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* timeline dot */}
                  <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border border-white/20 bg-accent md:block" />

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="relative bg-primary overflow-hidden"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:px-8 lg:py-12">

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1 text-xs font-semibold tracking-wide text-primary ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Testimonials
            </p>

            <h2 className="mt-4 text-secondary text-3xl font-extrabold sm:text-4xl">
              Client's <span className="text-accent">Review</span>
            </h2>

            <p className="mt-3 text-sm text-white/60">
              Obviously I'm a Web Designer. Web Developer with over 7 years of
              experience. Experienced with all stages of the development.            </p>
          </div>

          {/* Slider */}
          <div className="relative mt-8 overflow-hidden">
            <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused]">

              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="min-w-[340px] flex flex-col items-center">

                  {/* Card */}
                  <div className="relative rounded-2xl bg-secondary/30 p-6 text-center shadow-lg ring-1 ring-white/10">

                    {/* Quote */}
                    <div className="text-accent text-4xl mb-2">“</div>

                    <p className="text-sm text-white/70 leading-7">
                      {t.quote}
                    </p>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 text-primary mt-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.447a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.538 1.118l-3.366-2.447a1 1 0 00-1.176 0l-3.366 2.447c-.783.57-1.838-.197-1.538-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                        </svg>
                      ))}
                    </div>

                    {/* Arrow */}
                    <div className="absolute left-1/2 -bottom-3 h-6 w-6 -translate-x-1/2 rotate-45 bg-accent" />
                  </div>

                  {/* Profile */}
                  <div className="mt-8 flex flex-col items-center">
                    <img
                      src={t.image}
                      className="h-14 w-14 rounded-full border-2 border-white/20 object-cover"
                    />
                    <p className="mt-3 font-semibold">{t.name}</p>
                    <p className="text-xs text-white/60">{t.title}</p>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="relative bg-primary text-white">
      <div className="mx-auto max-w-7xl px-5 py-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1 text-xs font-semibold tracking-wide text-primary ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              New Blogs
            </p>

            <h2 className="mt-4 text-secondary text-3xl font-extrabold sm:text-4xl">
              Latest News & <span className="text-accent">Blogs</span>
            </h2>

            <p className="mt-4 text-sm text-white/60">
              Obviously I'm a Web Designer. Web Developer with over 7 years of
              experience. Experienced with all stages of the development.            </p>
          </div>

        {/* Blog Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((p, index) => (
            <article
              key={index}
              className="group flex flex-col items-center gap-6 overflow-hidden rounded-[32px] bg-secondary/30 p-6 ring-1 ring-white/5 transition sm:flex-row"
            >
              {/* Image Container */}
              <div className="h-64 w-full shrink-0 overflow-hidden rounded-2xl sm:h-56 sm:w-56">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col justify-center py-2">
                <div className="flex gap-2">
                  <span className="rounded-md bg-accent px-4 py-1.5 text-xs font-medium text-primary">
                    {p.category}
                  </span>
                  <span className="rounded-md bg-accent px-4 py-1.5 text-xs font-medium text-primary">
                    {p.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-secondary text-2xl font-bold leading-snug tracking-tight">
                  <Link href={p.href}>
                    {p.title}
                  </Link>
                </h3>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <Calendar size={16} />
                    <span>{p.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="relative bg-primary overflow-hidden text-white">

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch !</h2>
          <p className="max-w-2xl mx-auto text-white/60 leading-relaxed">
            Obviously I'm a Web Designer. Web Developer with over 7 years of
            experience. Experienced with all stages of the development.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-secondary/30 p-8 rounded-xl border border-white/10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-800">Name :</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-800">Email :</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800">Subject :</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-800">Message :</label>
                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-primary  hover:bg-primary/40 text-white font-bold py-3 px-8 rounded-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-10 pt-4"
          >
            {/* Phone */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-white/80" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Phone</h4>
                <p className="text-white/60 mt-1">+152 534-468-854</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-white/80" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-white/60 mt-1">contact@example.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-white/80" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Location</h4>
                <p className="text-white/60 mt-1 leading-relaxed">
                  C/54 Northwest Freeway, Suite 558, <br />
                  Houston, USA 485
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </section>

  </>
  );
}
