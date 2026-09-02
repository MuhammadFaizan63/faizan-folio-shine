import { createFileRoute } from "@tanstack/react-router";
import cv from "../muhammad-faizan.pdf"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowRight,
  ExternalLink,
  Code2,
  Server,
  Wrench,
  Hammer,
  Cpu,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Faizan — Full-Stack Developer & Technical Specialist" },
      {
        name: "description",
        content:
          "Portfolio of Muhammad Faizan, a Karachi-based Full-Stack Developer with a hardware diagnostics background, building clean React, Node.js & MongoDB applications.",
      },
      { property: "og:title", content: "Muhammad Faizan — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "From diagnosing hardware to architecting full-stack code. React, Node.js, MongoDB & Docker projects.",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "Build-AI-Social-Media-Scheduler",
    description:
      "Build-AI-Social-Media-Scheduler is an enterprise-grade, full-stack automation platform designed to streamline content creation and multi-platform publishing. Powered by Artificial Intelligence, the application enables users to seamlessly generate high-engaging posts, orchestrate advanced content pipelines, and schedule automated publishing workflows. Featuring reliable event-driven queue architectures and real-time webhook tracking, it optimizes social media management with production-ready scalability.",
    stack: ["next.js", "Typescript", "insforge", "ngrok", "Prisma ORM", "Neon DB / PostgreSQL", "Clerk Authentication", "Tailwind CSS", "Shadcn UI / Radix Primitives"],
    live: "https://xnd7ui6p.insforge.site/",
    code: "https://github.com/MuhammadFaizan63",
  },
  {
    title: "Glow Cut",
    description:
      "Glow-Cut is a modern digital grooming platform built to bridge the gap between clients and top-tier salons. It offers seamless online appointment scheduling, an advanced AI-driven facial scanner for personalized haircut suggestions, and a robust dashboard for owners to manage bookings and daily operations.",
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Mongoose",
      "JWT Authentication",
      "PWA (Progressive Web App)",
      "AI Integration"
    ],
    live: "https://www.glowcut.bond/",
    code: "https://github.com/MuhammadFaizan63",
  },
  {
    title: "Helplytics",
    description:
      "Heplytics is a lightweight, high-performance web analytics platform engineered from scratch during a fast-paced hackathon. Built entirely using core web technologies, the application processes data inputs to deliver instant, real-time visual insights through clean, interactive dashboards. By avoiding heavy framework overhead, it achieves blazing-fast load times and seamless browser rendering, proving that robust data monitoring and responsive layouts can be beautifully executed using pure vanilla architecture",
    stack: ["HTML5", "CSS3", "Vanilla JavaScript (ES6+)", "Fetch API"],
    live: "https://hackathon-frontend-omega-three.vercel.app/",
    code: "https://github.com/MuhammadFaizan63/hackathon-frontend.git",
  },
];

const skills = [
  {
    label: "Frontend",
    icon: Code2,
    items: ["React", "JavaScript (ES5/ES6+)", "HTML5", "CSS3", "Responsive Web Design"],
  },
  {
    label: "Backend & DevOps",
    icon: Server,
    items: ["Node.js", "MongoDB", "Docker (newly mastered)"],
  },
  {
    label: "Systems & Hardware",
    icon: Cpu,
    items: ["Laptop & PC Repair", "System Maintenance", "Technical Diagnostics"],
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
    link.href = cv;
    link.download = cv;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-400/30 selection:text-emerald-100">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/30">
              MF
            </span>
            <span className="text-slate-200">Muhammad Faizan</span>
          </a>
          <nav className="hidden gap-8 text-sm text-slate-400 md:flex">
            <a href="#about" className="transition hover:text-emerald-400">About</a>
            <a href="#skills" className="transition hover:text-emerald-400">Skills</a>
            <a href="#projects" className="transition hover:text-emerald-400">Projects</a>
            <a href="#contact" className="transition hover:text-emerald-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden border-b border-white/5"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.18),transparent_60%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            Full-Stack Developer · Karachi, Pakistan
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            From Diagnosing Hardware to{" "}
            <span className="bg-linear-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Architecting Full-Stack Code.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            I'm <span className="text-slate-200">Muhammad Faizan</span> — a Full-Stack
            Developer who spent years inside motherboards before turning the same
            troubleshooting instincts to React, Node.js and MongoDB. I build clean,
            reliable web apps with the discipline of a hardware engineer.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300 hover:shadow-emerald-400/40"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-400/40 hover:bg-white/10"
            >
              <Download className="h-4 w-4" />
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-b border-white/5">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              About me
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              The tech transition.
            </h2>
          </div>
          <div className="md:col-span-3 space-y-5 text-slate-400 leading-relaxed">
            <p>
              For more than <span className="text-slate-200 font-medium">3 years</span> I
              ran computer and laptop repair work and managed a shop in Karachi —
              diagnosing dead boards, tracing shorted rails, recovering data and
              fixing what looked impossible to fix.
            </p>
            <p>
              Every fault on a motherboard is a logic puzzle: isolate the symptom,
              form a hypothesis, test it, narrow the surface area. That mindset
              didn't change when I moved to code — it sharpened. Today I apply the
              same discipline to build full-stack web applications with
              <span className="text-slate-200"> React, Node.js, MongoDB and Docker</span>.
            </p>
            <p>
              The result is software that's easier to debug, easier to reason about,
              and built like it has to survive in the real world — because that's
              the only kind of work I've ever done.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { k: "3+", v: "Years hardware" },
                { k: "10+", v: "Projects shipped" },
                { k: "100%", v: "Self-taught" },
              ].map((s) => (
                <div
                  key={s.v}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-2xl font-bold text-emerald-400">{s.k}</div>
                  <div className="mt-1 text-xs text-slate-400">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
              Tech stack
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Skills, categorized.
            </h2>
            <p className="mt-4 text-slate-400">
              A toolkit shaped by both the soldering iron and the source editor.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map(({ label, items, icon: Icon }) => (
              <div
                key={label}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/10"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{label}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
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
      <section id="projects" className="border-b border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Projects worth shipping.
              </h2>
            </div>
            <a
              href="https://github.com/MuhammadFaizan63"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-emerald-400"
            >
              All repositories on GitHub <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/5 to-transparent p-6 transition hover:-translate-y-1 hover:border-emerald-400/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">
                    0{i + 1}
                  </span>
                  <Hammer className="h-4 w-4 text-emerald-400/70" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 pt-4">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-400 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-300"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 transition hover:border-emerald-400/40 hover:bg-white/10"
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

      {/* CONTACT / FOOTER */}
      <footer id="contact" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(16,185,129,0.12),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
                Get in touch
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Let's build something reliable.
              </h2>
              <p className="mt-4 max-w-md text-slate-400">
                Open to full-stack roles, freelance projects and collaborations.
                The fastest way to reach me is email.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:smartfaizan63@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-emerald-400/30 hover:bg-white/10"
              >
                <span className="flex items-center gap-3 text-slate-200">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  smartfaizan63@gmail.com
                </span>
                <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-emerald-400" />
              </a>
              <a
                href="tel:+923118237936"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-emerald-400/30 hover:bg-white/10"
              >
                <span className="flex items-center gap-3 text-slate-200">
                  <Phone className="h-4 w-4 text-emerald-400" />
                  0311-8237936
                </span>
                <ArrowRight className="h-4 w-4 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-emerald-400" />
              </a>
              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/MuhammadFaizan63"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400/40 hover:bg-white/10 hover:text-emerald-400"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-faizan-723b79235"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400/40 hover:bg-white/10 hover:text-emerald-400"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Muhammad Faizan. All rights reserved.</p>
            <p>Built with React & Tailwind CSS · Karachi, PK</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
