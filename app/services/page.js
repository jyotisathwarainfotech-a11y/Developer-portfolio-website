'use client';

import Button from "@/src/common/Button";
import { motion } from "framer-motion";

const featuredServices = [
  {
    title: "Portfolio Websites",
    tag: "Perfect for freelancers & creators",
    description:
      "Modern single / multi-page portfolio that highlights your work, story, and services with smooth animations and interactions.",
    deliverables: ["Custom design", "Responsive layout", "Basic SEO setup"],
    price: "₹9,999+",
    badge: "Most Popular",
  },
  {
    title: "Business Landing Pages",
    tag: "Launch your product fast",
    description:
      "High-converting landing page focused on leads and sales with clean sections, forms, and clear CTAs.",
    deliverables: ["Conversion-focused layout", "Contact / lead form", "Analytics ready"],
    price: "₹14,999+",
  },
  {
    title: "Full Website Revamp",
    tag: "Upgrade an existing site",
    description:
      "Redesign and rebuild of your existing website with better UX, speed, and a fresh visual identity.",
    deliverables: ["UX restructuring", "Visual refresh", "Performance optimization"],
    price: "₹24,999+",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    for: "Personal portfolio & mini landing pages",
    price: "₹7,999",
    highlight: false,
    features: [
      "Up to 3 sections",
      "Responsive on mobile, tablet & desktop",
      "Basic animations & transitions",
      "Delivery in 3–5 days",
      "1 round of revisions",
    ],
  },
  {
    name: "Growth",
    for: "Creators, coaches & small businesses",
    price: "₹14,999",
    highlight: true,
    features: [
      "Up to 6 sections / pages",
      "Custom interactions & micro-animations",
      "Speed & SEO-focused setup",
      "Integration with forms & basic tools",
      "2 rounds of revisions",
      "Delivery in 5–7 days",
    ],
  },
  {
    name: "Premium",
    for: "Brands that want something special",
    price: "Custom",
    highlight: false,
    features: [
      "Advanced animations & scroll effects",
      "Complex layouts & multiple pages",
      "Custom components & sections",
      "Ongoing support & iterations",
      "Priority delivery available",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="relative bg-primary py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6">
        {/* Hero Section */}
        <motion.section
          id="hero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-primary px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:gap-10"
        >
          <div className="absolute inset-0 -z-10 opacity-40">
            <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          </div>

          <div className="flex-1 space-y-5">
            <p className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-accent px-3 py-1 text-xs font-sharetech tracking-[0.22em] uppercase text-primary shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Services & Solutions
            </p>

            <h1 className="text-3xl font-bungee leading-tight tracking-tight text-secondary sm:text-4xl lg:text-5xl">
              I design & build
              <span className="block bg-accent bg-clip-text text-transparent">
                high-impact web experiences.
              </span>
            </h1>

            <p className="max-w-xl text-sm text-secondary/60 sm:text-base">
              From clean portfolios to bold landing pages, I craft fast, responsive and animated
              websites that feel premium and stay easy to maintain.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
              variant="filled"
              >
                Book a Free Call
              </Button>
              <Button
               variant="outline"
               >
                View Projects
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 text-xs text-secondary/60 sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/20 text-[10px] font-bold text-secondary">
                  3+
                </span>
                <span>Years building responsive UI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/20 text-[10px] font-bold text-secondary">
                  10+
                </span>
                <span>Projects shipped in production</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex-1 lg:mt-0 lg:max-w-sm">
            <div className="relative mx-auto max-w-xs">
              <div className="relative rounded-3xl border border-secondary/30 bg-white/110 px-6 py-6 shadow-xl backdrop-blur">
                <div className="mb-4 flex items-center justify-between text-xs text-accent">
                  <span className="font-sharetech uppercase tracking-[0.22em]">
                    Next.js / Tailwind
                  </span>
                  <span className="rounded-full border border-secondary/30 px-2 py-0.5 text-[10px]">
                    Live Preview
                  </span>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="group rounded-2xl border border-accent bg-primary/30 p-3 transition-transform duration-300 hover:-translate-y-1 hover:border-secondary/60">
                    <p className="font-medium text-secondary">Interactive Hero Sections</p>
                    <p className="text-secondary/30">
                      Animated headings, floating badges and subtle parallax effects.
                    </p>
                  </div>
                  <div className="group rounded-2xl border border-accent bg-primary/30 p-3 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/60">
                    <p className="font-medium text-secondary">Smooth Page Transitions</p>
                    <p className="text-secondary/30">
                      Micro-animations that feel polished without hurting performance.
                    </p>
                  </div>
                  <div className="group rounded-2xl border border-accent bg-primary/30 p-3 transition-transform duration-300 hover:-translate-y-1 hover:border-secondary/60">
                    <p className="font-medium text-secondary">Pixel-perfect on all devices</p>
                    <p className="text-secondary/30">
                      Layouts that adapt beautifully from mobile to large desktops.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* What I Do Section */}
        <motion.section
          id="what-i-do"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* SECTION HEADER */}
          <div className="max-w-2xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-accent px-3 py-1 text-xs font-sharetech tracking-[0.22em] uppercase text-primary shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              What I do
            </p>

            <h2 className="text-2xl font-bungee text-primary sm:text-3xl">
              From idea to interactive website.
            </h2>

            <p className="text-sm text-secondary sm:text-base">
              I take care of everything from initial wireframes to deployment, so you get a
              complete, polished experience without worrying about the tech.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border-2 border-secondary/20 bg-white/10 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/30 text-secondary shadow-sm">
                UI
              </div>
              <h3 className="text-lg font-semibold text-secondary">UI / UX Design</h3>
              <p className="mt-2 text-sm text-secondary/75">
                Clean, minimal interfaces with clear hierarchy, spacing and typography that feel
                instantly professional.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-secondary/70">
                <li>• Wireframes & page structure</li>
                <li>• Visual style & components</li>
                <li>• Design systems for consistency</li>
              </ul>
            </div>

            <div className="group rounded-2xl border-2 border-secondary/20 bg-white/10 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/30 text-secondary shadow-sm">
                FE
              </div>
              <h3 className="text-lg font-semibold text-secondary">Frontend Development</h3>
              <p className="mt-2 text-sm text-secondary/75">
                High-quality React / Next.js implementation with reusable components and clean code.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-secondary/70">
                <li>• Next.js & React with Tailwind</li>
                <li>• Smooth animations & hover states</li>
                <li>• Accessible & semantic HTML</li>
              </ul>
            </div>

            <div className="group rounded-2xl border-2 border-secondary/20 bg-white/10 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-xl">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/30 text-secondary shadow-sm">
                PL
              </div>
              <h3 className="text-lg font-semibold text-secondary">Performance & Launch</h3>
              <p className="mt-2 text-sm text-secondary/75">
                Optimization, analytics and deployment so your site loads fast and stays ready for
                real users.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-secondary/70">
                <li>• Lighthouse performance improvements</li>
                <li>• Basic SEO and metadata setup</li>
                <li>• Deployment and handover</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Most Popular Services */}
        <motion.section
          id="popular-services"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-3 text-center max-w-2xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-accent px-3 py-1 text-xs font-sharetech tracking-[0.22em] uppercase text-primary shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Services
            </p>
            <h2 className="text-2xl font-bungee text-primary sm:text-3xl">
              Most requested service packages.
            </h2>
            <p className="text-sm text-secondary sm:text-base">
              Pick a starting point that matches your goals. Every package can be customized to your
              brand, content and timeline.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredServices.map((service) => (
              <article
                key={service.title}
                className="relative group flex flex-col rounded-3xl border border-secondary/25 bg-primary/60 px-6 py-7  backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-accent/60"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-accent/10 opacity-70" />
                <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/80 to-transparent opacity-80" />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="mr-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/20 text-accent  transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                    &lt;/&gt;
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-accent">{service.title}</h3>
                    <p className="mt-1 text-xs font-medium text-secondary/80">{service.tag}</p>
                  </div>
                  {service.badge && (
                    <span className="rounded-full bg-secondary/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-secondary shadow-sm">
                      {service.badge}
                    </span>
                  )}
                </div>

                <p className="relative mt-3 text-sm text-secondary/80">
                  {service.description}
                </p>

                <ul className="relative mt-4 space-y-1.5 text-xs text-secondary/70">
                  {service.deliverables.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>

                <div className="relative mt-5 flex items-center justify-between">
                  <Button className="px-4 py-2 text-xs bg-accent text-primary shadow-md transition-transform duration-300 group-hover:scale-105 hover:bg-accent/90">
                    Enquire Now
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </motion.section> 

        {/* Pricing Section */}
        <motion.section
          id="pricing"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-3 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-accent px-3 py-1 text-xs font-sharetech tracking-[0.22em] uppercase text-primary shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Pricing 
            </p>
            <h2 className="text-2xl font-bungee text-secondary sm:text-3xl">
              Simple, transparent packages.
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-secondory/30 sm:text-base">
              Prices are starting points and can be adjusted based on your exact scope, pages and
              timeline. You only pay for what you actually need.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={"flex flex-col rounded-3xl border bg-white/10 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-accent">{plan.name}</h3>
                    <p className="mt-1 text-xs text-secondary">{plan.for}</p>
                  </div>
                  {plan.highlight && (
                    <span className="rounded-full bg-secondary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary shadow-sm">
                      Best Value
                    </span>
                  )}
                </div>

                <div className="mt-4">
                  <p className="text-2xl font-bold text-secondary">{plan.price}</p>
                  <p className="text-xs text-accent">per project</p>
                </div>

                <ul className="mt-5 space-y-1.5 text-sm text-secondaru/75">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>

                <Button
                  className={`mt-6 w-full justify-center ${
                    plan.highlight ? "bg-secondary text-primary" : ""
                  }`}
                >
                  Start {plan.name}
                </Button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          id="cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-secondary/30 bg-secondary/30 px-6 py-10 text-primary sm:px-10 sm:py-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(0,0,0,0.35),_transparent_60%)] opacity-80" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-3">
              <p className="text-xs font-sharetech uppercase tracking-[0.22em] text-accent">
                Let&apos;s build something unique
              </p>
              <h2 className="text-2xl text-secondary font-bungee sm:text-3xl">
                Ready for a modern,<span className="text-accent">animated services page?</span>
              </h2>
              <p className="text-sm text-secondary sm:text-base">
                Tell me about your idea, brand or product and I&apos;ll reply with a clear plan,
                rough timeline and starting quote within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button 
              variant="filled"
              >
                Share Your Project Details
              </Button>
              <Button
                variant="outline"
              >
                Download Service PDF
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}