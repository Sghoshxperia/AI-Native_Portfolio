"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import WorldMap from "./WorldMap";

/* ── Types ───────────────────────────────────────────────── */

interface SkillCategory {
  label: string;
  description: string;
  skills: string[];
  iconIndex: number;
}

interface ExperienceEntry {
  company: string;
  role: string;
  type: string;
  start: string;
  end: string;
  location: string;
  description: string;
  tags: string[];
  logoChar?: string;
  logoImage?: string;
  logoCircle?: boolean;
}

interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  gpa?: string;
}

interface Achievement {
  year: string;
  title: string;
  event: string;
}

/* ── Data ────────────────────────────────────────────────── */

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label:       "Backend & API Engineering",
    description: "Designing scalable, production-ready backend services and RESTful systems.",
    skills:      ["Java", "Spring Boot", "REST APIs", "JPA / Hibernate", "SQL (MySQL)", "Microservices"],
    iconIndex:   0,
  },
  {
    label:       "Event-Driven & Automation Systems",
    description: "Building automated workflows and asynchronous pipelines for real-time operations.",
    skills:      ["Event-Driven Architecture", "Apache Kafka", "Multithreading", "Workflow Automation", "Bash Pipelines"],
    iconIndex:   1,
  },
  {
    label:       "Systems & Infrastructure Engineering",
    description: "Developing and supporting reliable systems in Linux-based production environments.",
    skills:      ["Linux", "SSH", "Monitoring & Alarm Systems", "Docker", "Jenkins", "CI/CD", "Production Debugging"],
    iconIndex:   2,
  },
  {
    label:       "Intelligent & Adaptive Systems",
    description: "Exploring intelligent automation and adaptive system design through AI foundations.",
    skills:      ["Python", "Automation Scripting", "Data Processing", "AI/ML Foundations", "Agentic Systems"],
    iconIndex:   3,
  },
];

const EXPERIENCE: ExperienceEntry[] = [
  {
    company:     "Nokia",
    role:        "R&D Software Engineer",
    type:        "Full-time",
    start:       "Aug 2023",
    end:         "Present",
    location:    "Bengaluru, India",
    description: "Building backend automation and monitoring systems for carrier-grade optical networks. Designed event-driven workflows, real-time dashboards, and alarm-driven diagnostics to improve reliability and reduce manual intervention in production environments.",
    tags:        ["Java · Spring", "Event-Driven · Kafka", "Linux · SQL"],
    logoChar:    "N",
    logoImage:   "/images/logos/Nokia logo.png",
  },
  {
    company:     "Juniper Networks",
    role:        "Platform Software Engineer",
    type:        "Internship",
    start:       "Jan 2023",
    end:         "Jul 2023",
    location:    "Bengaluru, India",
    description: "Developed firmware and platform integrations for high-performance routing systems. Worked on GNSS timing modules and synchronization logic, ensuring precision and stability in carrier-grade networking environments.",
    tags:        ["C++ · Firmware", "GNSS · Timing", "Linux · Debugging"],
    logoChar:    "J",
    logoImage:   "/images/logos/Juniper logo.png",
  },
  {
    company:     "Indian Statistical Institute",
    role:        "Embedded Systems Research Intern",
    type:        "Part-time",
    start:       "Aug 2021",
    end:         "Oct 2021",
    location:    "Kolkata, India",
    description: "Implemented and optimized the AES (Rijndael) encryption algorithm on STM and NodeMCU platforms. Improved performance through low-level memory optimizations and secure padding techniques on resource-constrained systems.",
    tags:        ["AES · Cryptography", "STM32 · Bare-Metal", "Optimization · DMA"],
    logoChar:    "ISI",
    logoImage:   "/images/logos/ISI logo.png",
  },
  {
    company:     "Mars Rover Manipal",
    role:        "Embedded System Engineer",
    type:        "Full-time",
    start:       "May 2020",
    end:         "May 2021",
    location:    "Udupi, India",
    description: "Part of a 20+ member interdisciplinary team building a full-scale autonomous rover. Developed drive-system firmware, implemented robotic arm kinematics, and deployed CAN-based distributed control for reliable real-world operation.",
    tags:        ["Robotics · Firmware", "STM32 · CAN", "Kinematics · Control"],
    logoChar:    "MRM",
    logoImage:   "/images/logos/MRM logo.png",
    logoCircle:  true,
  },
];

const EDUCATION: EducationEntry[] = [
  {
    institution: "Manipal Institute of Technology",
    degree:      "B.Tech",
    field:       "Electronics and Communication Engineering",
    start:       "2019",
    end:         "2023",
    gpa:         "9.01 / 10",
  },
];

const ACHIEVEMENTS: Achievement[] = [
  {
    year:  "2019 – 2023",
    title: "1st Place — Indian Rover Challenge",
    event: "Robotics competition focused on Mars rover design",
  },
  {
    year:  "2019 – 2023",
    title: "7th Place — University Rover Challenge (USA)",
    event: "Global Mars rover build & navigation challenge",
  },
  {
    year:  "2019 – 2023",
    title: "Top Finish — European Rover Challenge & Int'l Mars Hackathon",
    event: "Large-scale robotics events with multidisciplinary tasks",
  },
  {
    year:  "2019 – 2023",
    title: "Winner — Young Minds Apprentice Competition",
    event: "National engineering innovation contest · Featured in The Telegraph",
  },
  {
    year:  "2019 – 2023",
    title: "APD India Volunteer",
    event: "Accessibility & inclusion initiatives",
  },
];

/* ── Component ───────────────────────────────────────────── */

export default function About() {
  const [activeCategory, setActiveCategory] = useState(0);

  const expContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = expContainerRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>(".exp-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("exp-visible");
          } else {
            entry.target.classList.remove("exp-visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const quoteRef = useRef<HTMLParagraphElement>(null);
  useEffect(() => {
    const el = quoteRef.current;
    if (!el) return;
    const words = el.querySelectorAll<HTMLSpanElement>(".quote-word");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          words.forEach((w, i) => { w.style.transitionDelay = `${i * 150}ms`; });
          el.classList.add("quote-in");
        } else {
          words.forEach((w) => { w.style.transitionDelay = "0ms"; });
          el.classList.remove("quote-in");
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const QUOTE_WORDS = [
    "\u201cThere", "are", "no", "limits", "to", "what", "you", "can",
    "accomplish", "except", "the", "limits", "you", "place", "on", "your",
    "own", "thinking.\u201d",
  ];

  const achievementYears = Array.from(new Set(ACHIEVEMENTS.map((a) => a.year)));

  return (
    <div>

      {/* ── 1. Who Am I? ─────────────────────────────────── */}
      <SectionWrapper id="who-am-i">
        <div className="swipe-left mb-12">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
            Get to know me
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary"
          >
            Who Am I?
          </h2>
        </div>

        <div className="flex flex-col xl:flex-row gap-10 xl:gap-12 items-start">

          {/* Left: photo collage + bio */}
          <div className="flex-1 min-w-0 flex flex-col gap-10">

            {/* Photo collage + name/bio side by side on md+ */}
            <div className="flex flex-col md:flex-row gap-10 items-stretch">
              {/* Photo collage */}
              <div className="reveal flex-shrink-0 self-start w-[240px] mx-auto md:mx-0">
                <div className="relative w-full h-[400px]">
                  {/* Photo 1 — top-left, front */}
                  <div className="absolute top-0 left-0 w-[165px] aspect-[3/4] rounded-xl overflow-hidden border border-border -rotate-3 shadow-lg z-20">
                    <Image
                      src="/images/about me.jpeg"
                      alt="Soham Ghosh"
                      fill
                      className="object-cover"
                      sizes="180px"
                    />
                  </div>
                  {/* Photo 2 — bottom-right, same size */}
                  <div className="absolute top-[180px] right-0 w-[165px] aspect-[3/4] rounded-xl overflow-hidden border border-border rotate-4 shadow-lg z-10">
                    <Image
                      src="/images/about me 2.jpeg"
                      alt="Soham Ghosh"
                      fill
                      className="object-cover"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>

              {/* Bio text */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="reveal">
                  <h3 className="text-xl font-semibold text-text-primary mb-0.5">
                    Soham Ghosh
                  </h3>
                  <p className="text-sm font-mono text-accent mb-4">Backend Software Engineer</p>
                  <p className="text-text-secondary leading-relaxed text-justify">
                    I build <strong className="text-text-primary font-semibold">scalable backend systems</strong> that bring clarity and structure to complex, real-world workflows. From carrier-grade network automation at <strong className="text-text-primary font-semibold">Nokia</strong> to platform software at <strong className="text-text-primary font-semibold">Juniper Networks</strong>, I&apos;ve worked on systems where <strong className="text-text-primary font-semibold">reliability, performance, and thoughtful design</strong> aren&apos;t optional — they&apos;re essential. My foundation in embedded systems and robotics shaped a <strong className="text-text-primary font-semibold">systems-first mindset</strong>: understand constraints, design for scale, and build with intent.
                  </p>
                </div>

                <div className="reveal reveal-delay-1">
                  <p className="text-text-secondary leading-relaxed text-justify">
                    Growing up across different countries and cultures made <strong className="text-text-primary font-semibold">adaptability second nature</strong>. Constantly navigating new environments taught me to communicate across perspectives, stay grounded in uncertainty, and collaborate effectively. That global lens continues to shape how I approach engineering today. I&apos;m particularly drawn to <strong className="text-text-primary font-semibold">intelligent automation</strong> and exploring how <strong className="text-text-primary font-semibold">agentic AI</strong> can evolve backend systems from static logic into adaptive, decision-capable software.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: World map */}
          <div className="w-full xl:w-[440px] 2xl:w-[500px] flex-shrink-0">
            <WorldMap />
          </div>
        </div>
      </SectionWrapper>

      {/* ── 2. Skills & Expertise ────────────────────────── */}
      <SectionWrapper id="skills" className="border-t border-border">
        <div className="swipe-right mb-10">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Skills &amp; Expertise
          </h2>
          <p className="mt-3 text-text-secondary text-sm max-w-xl">
            Explore my technical skills across different domains. Click on any category to see the specific technologies I work with.
          </p>
        </div>

        {/* Category tab cards */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              aria-pressed={activeCategory === i}
              className={`flex flex-col items-center gap-3 p-5 rounded-xl border text-center transition-all duration-200 cursor-pointer ${
                activeCategory === i
                  ? "border-accent bg-accent/10 text-text-primary shadow-md shadow-accent/10"
                  : "border-border bg-surface text-text-secondary hover:border-accent/50 hover:text-text-primary"
              }`}
            >
              <SkillIcon index={cat.iconIndex} active={activeCategory === i} />
              <div>
                <div className="text-sm font-semibold leading-snug">{cat.label}</div>
                <div className="text-xs text-text-muted mt-1 leading-tight">{cat.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tech stack pills */}
        <div className="reveal reveal-delay-1 rounded-xl border border-border bg-surface p-8 border-l-2 border-l-accent/60">
          <p className="text-xs font-mono text-text-muted uppercase tracking-widest mb-7 text-center">
            Technology Stack
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-md text-xs font-mono bg-zinc-300 text-zinc-900 transition-opacity duration-200 hover:opacity-70"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 3. Professional Experience ───────────────────── */}
      <SectionWrapper id="experience" className="border-t border-border">
        <div className="swipe-left mb-10">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
            Work history
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Professional Experience
          </h2>
        </div>

        <div className="relative">
          {/* Center vertical line — desktop only */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-border hidden md:block"
          />

          <div ref={expContainerRef} className="flex flex-col gap-12">
            {EXPERIENCE.map((exp, i) => {
              const isEven = i % 2 === 0;

              const card = (
                <div className={`flex flex-col gap-3 ${isEven ? "pr-12" : "pl-12"}`}>
                  {/* Single combined date badge */}
                  <span className="self-start px-3 py-1.5 rounded-md text-xs font-mono font-semibold bg-zinc-200 text-zinc-900 whitespace-nowrap">
                    {exp.start} – {exp.end} · {exp.location}
                  </span>
                  <div className="p-6 rounded-xl border border-border bg-surface hover:border-accent/40 transition-colors">
                    <div className="flex items-center gap-3 mb-0.5">
                      <LogoAvatar image={exp.logoImage} fallback={exp.logoChar} company={exp.company} circle={exp.logoCircle} />
                      <h3 className="text-base font-semibold text-text-primary">{exp.company}</h3>
                    </div>
                    <p className="text-sm text-text-secondary mb-4">
                      {exp.role}
                      <span className="ml-2 text-xs font-mono text-text-muted">· {exp.type}</span>
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 text-justify">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-200 text-zinc-900">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );

              return (
                <div key={i} className="exp-card">

                  {/* Desktop: alternating left / right */}
                  <div className="hidden md:grid grid-cols-2 relative">
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 -translate-x-1/2 top-4 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-background timeline-dot z-10"
                    />
                    {isEven ? <>{card}<div /></> : <><div />{card}</>}
                  </div>

                  {/* Mobile: stacked */}
                  <div className="md:hidden flex flex-col gap-4">
                    <span className="self-start px-3 py-1.5 rounded-md text-xs font-mono font-semibold bg-zinc-200 text-zinc-900 whitespace-nowrap">
                      {exp.start} – {exp.end} · {exp.location}
                    </span>
                    <div className="p-6 rounded-xl border border-border bg-surface hover:border-accent/40 transition-colors">
                      <div className="flex items-center gap-3 mb-0.5">
                        <LogoAvatar image={exp.logoImage} fallback={exp.logoChar} company={exp.company} circle={exp.logoCircle} />
                        <h3 className="text-base font-semibold text-text-primary">{exp.company}</h3>
                      </div>
                      <p className="text-sm text-text-secondary mb-4">
                        {exp.role}
                        <span className="ml-2 text-xs font-mono text-text-muted">· {exp.type}</span>
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed mb-4 text-justify">{exp.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-200 text-zinc-900">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 4. Education + Achievements ──────────────────── */}
      <SectionWrapper id="education" className="border-t border-border">
        <div className="swipe-right mb-10">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-2">
            Academic background
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Education
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Education entries + photo placeholders */}
          <div className="flex-1 flex flex-col gap-8">
            {EDUCATION.map((edu, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1}`}>
                <p className="text-sm font-mono text-text-muted mb-2">
                  {edu.start} – {edu.end}
                </p>
                <h3 className="text-lg font-semibold text-text-primary mb-1">
                  {edu.institution}
                </h3>
                <p className="text-sm text-text-secondary">
                  {edu.degree}{" "}
                  <span className="text-accent">· {edu.field}</span>
                </p>
                {edu.gpa && (
                  <p className="text-xs font-mono text-text-muted mt-1">
                    GPA <span className="text-text-primary font-semibold">{edu.gpa}</span>
                  </p>
                )}
              </div>
            ))}

            {/* Education photos + caption */}
            <div className="reveal reveal-delay-2 flex items-center gap-8">
              {/* Overlapping slanted photos */}
              <div className="relative flex-shrink-0 w-[260px] h-[400px]">
                {/* Front photo — rotated left */}
                <div className="absolute top-0 left-0 w-[185px] aspect-[3/4] rounded-xl border border-border overflow-hidden shadow-lg -rotate-6 z-20">
                  <Image
                    src="/images/education 1.jpeg"
                    alt="Education photo"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                {/* Back photo — rotated right, pulled down */}
                <div className="absolute top-[160px] right-0 w-[185px] aspect-[3/4] rounded-xl border border-border overflow-hidden shadow-xl rotate-3 z-10">
                  <Image
                    src="/images/education 2.jpeg"
                    alt="Education photo"
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
              </div>

              {/* Caption text */}
              <div className="flex-1 flex flex-col gap-5">
                <p className="text-sm text-text-secondary leading-relaxed text-justify">
                  I completed my B.Tech in Electronics and Communication Engineering at Manipal Institute of Technology, where I developed a strong foundation in <strong className="text-text-primary font-semibold">systems engineering</strong>, <strong className="text-text-primary font-semibold">robotics</strong>, and <strong className="text-text-primary font-semibold">real-time problem solving</strong>. Through coursework and hands-on projects, I learned to approach engineering challenges with structure — designing solutions that balance <strong className="text-text-primary font-semibold">performance</strong>, <strong className="text-text-primary font-semibold">reliability</strong>, and <strong className="text-text-primary font-semibold">practical constraints</strong>.
                </p>
                <p className="text-sm text-text-secondary leading-relaxed text-justify">
                  Beyond academics, my time at university shaped me as both an engineer and a person. Working in diverse, high-pressure teams strengthened my <strong className="text-text-primary font-semibold">leadership</strong>, <strong className="text-text-primary font-semibold">adaptability</strong>, and <strong className="text-text-primary font-semibold">cross-functional collaboration</strong>. Competing internationally and building real systems under constraints taught me to stay composed, think critically, and take ownership.
                </p>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="flex-1">
            <h3 className="reveal text-xl font-semibold text-text-primary mb-1">
              Achievements
            </h3>
            <p className="reveal text-sm text-text-muted mb-8">
              Notable accomplishments and recognitions.
            </p>

            {achievementYears.map((year) => (
              <div key={year} className="reveal mb-6">
                <p className="text-xs font-mono text-accent tracking-widest mb-3">{year}</p>
                <div className="flex flex-col gap-2">
                  {ACHIEVEMENTS.filter((a) => a.year === year).map((ach, i) => (
                    <div
                      key={i}
                      className="flex gap-3 p-4 rounded-lg bg-zinc-200 hover:bg-white transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/60 flex items-center justify-center">
                        <TrophyIcon />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">{ach.title}</p>
                        <p className="text-xs text-zinc-500 mt-0.5">{ach.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 5. Closing CTA ───────────────────────────────── */}
      <section className="border-t border-border px-4 py-36 text-center">
        <p
          ref={quoteRef}
          className="text-xl sm:text-2xl lg:text-3xl text-text-primary leading-relaxed max-w-2xl mx-auto mb-16"
        >
          {QUOTE_WORDS.map((word, i) => (
            <span key={i} className="quote-word">
              {word}
            </span>
          ))}
        </p>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-4 text-3xl sm:text-4xl font-bold text-text-primary hover:text-accent transition-colors group"
          aria-label="Go to contact section"
        >
          Get In Touch
          <span
            aria-hidden="true"
            className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300"
          >
            <ArrowRightIcon />
          </span>
        </Link>
      </section>

    </div>
  );
}

/* ── Logo avatar ─────────────────────────────────────────── */

function LogoAvatar({
  image,
  fallback,
  company,
  circle,
}: {
  image?: string;
  fallback?: string;
  company: string;
  circle?: boolean;
}) {
  const shape = circle ? "rounded-full" : "rounded-lg";

  if (image) {
    return (
      <div className={`w-9 h-9 flex-shrink-0 overflow-hidden ${shape}`}>
        <Image
          src={image}
          alt={`${company} logo`}
          width={36}
          height={36}
          className="object-contain w-full h-full"
        />
      </div>
    );
  }

  if (fallback) {
    return (
      <div className={`w-9 h-9 ${shape} bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-bold text-accent font-mono flex-shrink-0`}>
        {fallback}
      </div>
    );
  }

  return null;
}

/* ── Icon atoms ──────────────────────────────────────────── */

function SkillIcon({ index, active }: { index: number; active: boolean }) {
  const cls = `w-6 h-6 transition-colors ${active ? "text-accent" : "text-text-muted"}`;

  switch (index) {
    case 0:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      );
    case 1:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 2:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );
    case 3:
    default:
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
  }
}

function TrophyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
