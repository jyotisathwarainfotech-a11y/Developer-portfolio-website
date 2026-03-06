import Button from "@/src/common/Button";
import Link from "next/link";

export default function Home() {
  return (
    <>
    {/* HERO */}
    <section className="relative overflow-hidden bg-primary text-white">
      <div className="container mx-auto max-w-7xl px-6 py-10 lg:py-25 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 animate-fadeInUp">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300">
              Hey! I'm
            </h2>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
              Full Stack Developer
            </h1>

            <p className="text-gray-400 max-w-xl">
              Obviously I'm a Full Stack Developer. Web Developer with over 7 years of
              experience. Experienced with all stages of the development.
            </p>

            <div className="flex flex-wrap gap-4">

              {/* Hire Me Button */}
              <Button variant="filled">
                Hire Me
              </Button>

              {/* Download CV Button */}
              <Link href="/cv.pdf" target="_blank">
                <Button variant="outline">
                  Download CV
                </Button>
              </Link>

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
    <section
    id="about"
    className="relative overflow-hidden border-t border-white/10"
  >
    <div className="pointer-events-none absolute inset-0 bg-primary" />
    <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-5">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-white/70 ring-1 ring-white/10">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            About me
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            I build{" "}
            <span className="text-secondary">fast</span>,{" "}
            <span className="text-secondary">polished</span> web products.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            I focus on conversion-friendly layouts, clean component systems,
            and robust backend integrations. My goal is simple: ship work
            that looks premium and stays maintainable.
          </p>

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

        <div className="lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-white/8 to-white/3 p-6 ring-1 ring-white/10">
              <p className="text-sm font-semibold">My approach</p>
              <ul className="mt-4 space-y-3 text-sm text-white/65">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  Start with structure: content hierarchy + layout rhythm.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  Build a component system that stays consistent.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                  Optimize performance early so it feels instant.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-white/8 to-white/3 p-6 ring-1 ring-white/10">
              <p className="text-sm font-semibold">Core stack</p>
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

          <div className="mt-4 rounded-2xl bg-secondary p-6 ring-1 ring-white/10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-primary text-sm font-semibold">Quick intro</p>
                <p className="mt-1 text-sm text-gray-800">
                  Want a clean, unique portfolio or product site?
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-secondary transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                Let&apos;s talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  </>
  );
}
