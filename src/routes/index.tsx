import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowUpRight,
  Code2,
  Server,
  Wrench,
  Cpu,
  Sparkles,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Faizan — Full-Stack Developer & Technical Specialist" },
      {
        name: "description",
        content:
          "Karachi-based Full-Stack Developer with a hardware diagnostics background. React, Node.js, MongoDB, Docker.",
      },
      { property: "og:title", content: "Muhammad Faizan — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "From diagnosing hardware to architecting full-stack code. Selected work, stack and contact.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "To-Do Full-Stack App",
    description:
      "Task management with auth, persistence and a clean REST API on Node.js and MongoDB.",
    stack: ["React", "Node.js", "MongoDB"],
    live: "#",
    code: "https://github.com/MuhammadFaizan63",
  },
  {
    title: "Weather Application",
    description:
      "Real-time weather with dynamic third-party API integration and geolocation.",
    stack: ["React", "REST API"],
    live: "#",
    code: "https://github.com/MuhammadFaizan63",
  },
  {
    title: "Netflix Clone",
    description:
      "Pixel-perfect, fully responsive Netflix landing clone focused on premium UI/UX.",
    stack: ["React", "Tailwind"],
    live: "#",
    code: "https://github.com/MuhammadFaizan63",
  },
];

const skills = [
  {
    label: "Frontend",
    icon: Code2,
    items: ["React", "JavaScript ES5/ES6+", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    label: "Backend & DevOps",
    icon: Server,
    items: ["Node.js", "MongoDB", "Docker"],
  },
  {
    label: "Systems & Hardware",
    icon: Cpu,
    items: ["Laptop & PC Repair", "System Maintenance", "Diagnostics"],
  },
  {
    label: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "Netlify", "Vercel"],
  },
];

function Portfolio() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Faizan.pdf";
    link.download = "Resume_Faizan.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-gold/40 selection:text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-ink font-display font-bold">
              MF
            </span>
            <span className="font-display text-sm font-medium tracking-wide text-foreground/90">
              Muhammad Faizan
            </span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="transition hover:text-gold">About</a>
            <a href="#stack" className="transition hover:text-gold">Stack</a>
            <a href="#projects" className="transition hover:text-gold">Work</a>
            <a href="#contact" className="transition hover:text-gold">Contact</a>
          </nav>
          <button
            onClick={handleDownloadCV}
            className="hidden items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs font-medium text-gold transition hover:bg-gold hover:text-ink md:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            CV
          </button>
        </div>
      </header>

      {/* HERO + BENTO */}
      <section
        id="top"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(201,168,76,0.18),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          {/* Bento grid */}
          <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
            {/* Headline — large */}
            <div className="relative md:col-span-4 md:row-span-2 overflow-hidden rounded-3xl border border-white/10 bg-card p-8 md:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-xs font-medium text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                Full-Stack Developer
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                From diagnosing hardware to{" "}
                <span className="italic text-gold">architecting</span>{" "}
                full-stack code.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                I'm Muhammad Faizan — a developer who spent years inside motherboards
                before turning the same troubleshooting instincts to React, Node.js
                and MongoDB.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={scrollToProjects}
                  className="group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition hover:bg-gold-soft"
                >
                  View My Work
                  <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-foreground transition hover:border-gold/50 hover:text-gold"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </button>
              </div>
            </div>

            {/* Portrait / Monogram */}
            <div className="relative md:col-span-2 overflow-hidden rounded-3xl border border-gold/20 bg-linear-to-br from-gold/15 via-gold/5 to-transparent p-8">
              <div className="flex h-full flex-col justify-between">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-gold/80">
                  /portfolio · 2026
                </span>
                <div className="font-display text-7xl font-bold text-gold leading-none md:text-8xl">
                  MF
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="rounded-3xl border border-white/10 bg-card p-6 md:col-span-2">
              <MapPin className="h-5 w-5 text-gold" />
              <div className="mt-4 font-display text-xl font-medium text-foreground">
                Karachi, Pakistan
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Available worldwide · Remote-first
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 rounded-3xl border border-white/10 bg-card p-6 md:col-span-4">
              {[
                { k: "3+", v: "Years hardware" },
                { k: "10+", v: "Projects shipped" },
                { k: "100%", v: "Self-taught" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-semibold text-gold md:text-4xl">
                    {s.k}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-white/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-gold">
              01 — About
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
              The tech transition.
            </h2>
          </div>
          <div className="space-y-5 text-muted-foreground md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              For more than <span className="text-gold">3 years</span> I ran computer
              and laptop repair work and managed a shop in Karachi — diagnosing dead
              boards, tracing shorted rails, and recovering what looked unrecoverable.
            </p>
            <p className="leading-relaxed">
              Every fault on a motherboard is a logic puzzle: isolate the symptom,
              form a hypothesis, test it, narrow the surface area. That mindset
              didn't change when I moved to code — it sharpened. Today I apply the
              same discipline to build full-stack web apps with React, Node.js,
              MongoDB and Docker.
            </p>
            <p className="leading-relaxed">
              The result is software that's easier to debug, easier to reason about,
              and built like it has to survive in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* STACK — bento */}
      <section id="stack" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.2em] text-gold">
                02 — Stack
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
                Tools of the craft.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Shaped by the soldering iron and the source editor.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
            {skills.map(({ label, items, icon: Icon }, i) => (
              <div
                key={label}
                className={`group rounded-3xl border border-white/10 bg-card p-7 transition hover:border-gold/40 hover:bg-ink-soft ${
                  i === 0 ? "md:col-span-3" : i === 1 ? "md:col-span-3" : "md:col-span-3"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                  {label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-white/10 bg-background/40 px-3 py-1 text-xs text-foreground/80"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.2em] text-gold">
                03 — Work
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
                Selected projects.
              </h2>
            </div>
            <a
              href="https://github.com/MuhammadFaizan63"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-gold"
            >
              All repositories <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-card p-7 transition hover:border-gold/40 ${
                  i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-6"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-xs text-muted-foreground">
                    /work · 0{i + 1}
                  </span>
                  <div className="flex gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium text-foreground md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <div className="mt-8 flex gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-xs font-medium text-ink transition hover:bg-gold-soft"
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-xs font-medium text-foreground transition hover:border-gold/50 hover:text-gold"
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub Code
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contact" className="relative overflow-hidden border-t border-white/5">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(201,168,76,0.15),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-gold">
                04 — Contact
              </p>
              <h2 className="mt-4 font-display text-5xl font-semibold text-foreground md:text-7xl">
                Let's build <span className="italic text-gold">something</span> reliable.
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Open to full-stack roles, freelance and collaborations. Email is the
                fastest way to reach me.
              </p>
            </div>
            <div className="space-y-3 md:col-span-5 md:col-start-8">
              <a
                href="mailto:smartfaizan63@gmail.com"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-card px-5 py-4 transition hover:border-gold/40"
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-gold" />
                  <span className="text-sm">smartfaizan63@gmail.com</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:rotate-45 group-hover:text-gold" />
              </a>
              <a
                href="tel:+923118237936"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-card px-5 py-4 transition hover:border-gold/40"
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-gold" />
                  <span className="text-sm">0311-8237936</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:rotate-45 group-hover:text-gold" />
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/MuhammadFaizan63"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-card text-foreground transition hover:border-gold/40 hover:text-gold"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-faizan-723b79235"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-card text-foreground transition hover:border-gold/40 hover:text-gold"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Muhammad Faizan</p>
            <p className="font-display tracking-wide">Built with React & Tailwind · Karachi, PK</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
