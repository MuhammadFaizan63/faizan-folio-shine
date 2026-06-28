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

// Reusable glass card classes
const glassCard =
  "rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-md transition duration-300";
const glassCardHover =
  "hover:border-cyan-400/40 hover:bg-slate-900/70 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.45)] hover:-translate-y-1";

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
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100 antialiased selection:bg-cyan-400/30 selection:text-white">
      {/* Ambient glow background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,145,178,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-linear-to-br from-cyan-300 to-teal-500 font-display text-sm font-bold text-slate-950 shadow-[0_0_20px_-2px_rgba(34,211,238,0.6)]">
              MF
            </span>
            <span className="font-display text-sm font-medium tracking-wide text-white">
              Muhammad Faizan
            </span>
          </a>
          <nav className="hidden gap-8 text-sm text-slate-400 md:flex">
            <a href="#about" className="transition hover:text-cyan-400">About</a>
            <a href="#stack" className="transition hover:text-cyan-400">Stack</a>
            <a href="#projects" className="transition hover:text-cyan-400">Work</a>
            <a href="#contact" className="transition hover:text-cyan-400">Contact</a>
          </nav>
          <button
            onClick={handleDownloadCV}
            className="hidden items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-xs font-medium text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_24px_-4px_rgba(34,211,238,0.7)] md:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            CV
          </button>
        </div>
      </header>

      {/* HERO + BENTO */}
      <section id="top" className="relative">
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
            {/* Headline */}
            <div className={`relative overflow-hidden p-8 md:col-span-4 md:row-span-2 md:p-12 ${glassCard}`}>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-400">
                <Sparkles className="h-3.5 w-3.5" />
                Full-Stack Developer
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                From diagnosing hardware to{" "}
                <span className="bg-linear-to-r from-cyan-300 via-teal-300 to-cyan-400 bg-clip-text italic text-transparent">
                  architecting
                </span>{" "}
                full-stack code.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
                I'm Muhammad Faizan — a developer who spent years inside motherboards
                before turning the same troubleshooting instincts to React, Node.js
                and MongoDB.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={scrollToProjects}
                  className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-teal-400 px-6 py-3 text-sm font-medium text-slate-950 shadow-[0_0_30px_-6px_rgba(34,211,238,0.6)] transition hover:shadow-[0_0_40px_-4px_rgba(34,211,238,0.8)]"
                >
                  View My Work
                  <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:border-cyan-400/50 hover:text-cyan-400"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </button>
              </div>
            </div>

            {/* Monogram */}
            <div className={`relative overflow-hidden p-8 md:col-span-2 ${glassCard}`}>
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.18),transparent_60%)]"
              />
              <div className="relative flex h-full flex-col justify-between">
                <span className="font-display text-xs uppercase tracking-[0.2em] text-cyan-400/80">
                  /portfolio · 2026
                </span>
                <div className="bg-linear-to-br from-cyan-300 to-teal-500 bg-clip-text font-display text-7xl font-bold leading-none text-transparent md:text-8xl">
                  MF
                </div>
              </div>
            </div>

            {/* Location */}
            <div className={`p-6 md:col-span-2 ${glassCard}`}>
              <MapPin className="h-5 w-5 text-cyan-400" />
              <div className="mt-4 font-display text-xl font-medium text-white">
                Karachi, Pakistan
              </div>
              <p className="mt-1 text-sm text-slate-400">
                Available worldwide · Remote-first
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 p-6 md:col-span-4 ${glassCard}`}>
              {[
                { k: "3+", v: "Years hardware" },
                { k: "10+", v: "Projects shipped" },
                { k: "100%", v: "Self-taught" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="bg-linear-to-br from-cyan-300 to-teal-400 bg-clip-text font-display text-3xl font-semibold text-transparent md:text-4xl">
                    {s.k}
                  </div>
                  <div className="mt-2 text-xs text-slate-400">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-cyan-400">
              01 — About
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
              The tech transition.
            </h2>
          </div>
          <div className="space-y-5 text-slate-400 md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed text-slate-200">
              For more than <span className="text-cyan-400">3 years</span> I ran
              computer and laptop repair work and managed a shop in Karachi —
              diagnosing dead boards, tracing shorted rails, and recovering what
              looked unrecoverable.
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

      {/* STACK */}
      <section id="stack" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.2em] text-cyan-400">
                02 — Stack
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
                Tools of the craft.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-slate-400">
              Shaped by the soldering iron and the source editor.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {skills.map(({ label, items, icon: Icon }, i) => (
              <div key={label} className={`group p-7 ${glassCard} ${glassCardHover}`}>
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 shadow-[0_0_20px_-6px_rgba(34,211,238,0.6)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-xs text-slate-500">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-medium text-white">
                  {label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 transition group-hover:border-cyan-400/20"
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
      <section id="projects" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.2em] text-cyan-400">
                03 — Work
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-5xl">
                Selected projects.
              </h2>
            </div>
            <a
              href="https://github.com/MuhammadFaizan63"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-400"
            >
              All repositories <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`group relative flex flex-col overflow-hidden p-7 ${glassCard} ${glassCardHover} ${
                  i === 0 ? "md:col-span-4" : i === 1 ? "md:col-span-2" : "md:col-span-6"
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-32 -right-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition group-hover:opacity-100"
                />
                <div className="relative flex items-center justify-between">
                  <span className="font-display text-xs text-slate-500">
                    /work · 0{i + 1}
                  </span>
                  <div className="flex gap-1.5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="relative mt-6 font-display text-2xl font-medium text-white md:text-3xl">
                  {p.title}
                </h3>
                <p className="relative mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>
                <div className="relative mt-8 flex gap-3">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-cyan-400 to-teal-400 px-5 py-2.5 text-xs font-medium text-slate-950 shadow-[0_0_20px_-6px_rgba(34,211,238,0.7)] transition hover:shadow-[0_0_30px_-4px_rgba(34,211,238,0.9)]"
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-medium text-white backdrop-blur-md transition hover:border-cyan-400/50 hover:text-cyan-400"
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
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(34,211,238,0.12),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-cyan-400">
                04 — Contact
              </p>
              <h2 className="mt-4 font-display text-5xl font-semibold text-white md:text-7xl">
                Let's build{" "}
                <span className="bg-linear-to-r from-cyan-300 to-teal-300 bg-clip-text italic text-transparent">
                  something
                </span>{" "}
                reliable.
              </h2>
              <p className="mt-6 max-w-md text-slate-400">
                Open to full-stack roles, freelance and collaborations. Email is the
                fastest way to reach me.
              </p>
            </div>
            <div className="space-y-3 md:col-span-5 md:col-start-8">
              <a
                href="mailto:smartfaizan63@gmail.com"
                className={`group flex items-center justify-between px-5 py-4 ${glassCard} ${glassCardHover}`}
              >
                <span className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm text-white">smartfaizan63@gmail.com</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:rotate-45 group-hover:text-cyan-400" />
              </a>
              <a
                href="tel:+923118237936"
                className={`group flex items-center justify-between px-5 py-4 ${glassCard} ${glassCardHover}`}
              >
                <span className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm text-white">0311-8237936</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:rotate-45 group-hover:text-cyan-400" />
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/MuhammadFaizan63"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/50 text-slate-300 backdrop-blur-md transition hover:border-cyan-400/40 hover:text-cyan-400 hover:shadow-[0_0_20px_-6px_rgba(34,211,238,0.6)]"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-faizan-723b79235"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-900/50 text-slate-300 backdrop-blur-md transition hover:border-cyan-400/40 hover:text-cyan-400 hover:shadow-[0_0_20px_-6px_rgba(34,211,238,0.6)]"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Muhammad Faizan</p>
            <p className="font-display tracking-wide">
              Built with React & Tailwind · Karachi, PK
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
