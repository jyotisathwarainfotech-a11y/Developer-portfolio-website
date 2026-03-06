import Button from "../../src/common/Button";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bungee text-primary">Contact</h1>
      <p className="max-w-2xl text-base text-foreground/80">
        Have a project in mind or want to collaborate? Send me a message and
        I&apos;ll get back to you as soon as possible.
      </p>

      <form className="space-y-4 rounded-2xl border border-secondary/20 bg-background/70 p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-secondary/30 bg-background px-3 py-2 text-sm outline-none ring-primary/30 placeholder:text-foreground/40 focus:ring-2"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-secondary/30 bg-background px-3 py-2 text-sm outline-none ring-primary/30 placeholder:text-foreground/40 focus:ring-2"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            rows={4}
            className="w-full rounded-xl border border-secondary/30 bg-background px-3 py-2 text-sm outline-none ring-primary/30 placeholder:text-foreground/40 focus:ring-2"
            placeholder="Tell me a bit about your project..."
          />
        </div>

        <Button type="submit">Send Message</Button>
      </form>
    </section>
  );
}

