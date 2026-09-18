"use client";

import {
  Briefcase,
  Building2,
  CalendarDays,
  MapPin,
  FileBadge,
  FileText,
  ExternalLink,
} from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";

/* ------------------------------------------------------------------ */
/*  Internship Experience Data                                         */
/* ------------------------------------------------------------------ */

const experience = {
  role: "Front-End Development & Software Testing Intern",
  company: "Arvion Technologies Pvt. Ltd.",
  location: "Kathmandu, Nepal · Hybrid",
  period: "May 4, 2026 — September 4, 2026",
  duration: "4 Months",

  summary:
    "Successfully completed a four-month internship at Arvion Technologies Pvt. Ltd., contributing to front-end development and software testing while working in a professional hybrid environment.",

  highlights: [
    "Contributed to the development and refinement of user-facing features.",
    "Supported the implementation of front-end features and improvements.",
    "Performed functional testing to verify application features and user workflows.",
    "Identified defects and supported quality verification during development.",
    "Collaborated effectively with team members in a professional work environment.",
    "Demonstrated adaptability, professionalism, attention to detail, and willingness to learn.",
  ],

  skills: [
    "Front-End Development",
    "Software Testing",
    "Functional Testing",
    "Bug Identification",
    "Quality Verification",
    "Team Collaboration",
  ],

  certificateUrl:
    "/certificates/Anamika_Prajapati_Internship_Certificate.pdf",

  experiencePdfUrl:
    "/certificates/Anamika_Prajapati_Experience.pdf",
};

/* ------------------------------------------------------------------ */
/*  Experience Section — full-screen layout                            */
/* ------------------------------------------------------------------ */

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center scroll-mt-20 py-20 md:py-0"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">

        {/* Section Heading */}
        <RevealOnScroll>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Work <span className="text-emerald-400">Experience</span>
          </h2>

          <div className="w-20 h-1.5 bg-emerald-400 rounded-full mb-12 md:mb-16" />
        </RevealOnScroll>

        {/* Timeline */}
        <RevealOnScroll>
          <div className="relative md:pl-14 border-l-2 border-emerald-400/30 md:border-l-0 pb-2">

            {/* Timeline Dot (desktop) */}
            <span className="hidden md:grid absolute left-0 top-3 w-9 h-9 rounded-full bg-emerald-400/20 border-2 border-emerald-400 place-items-center">
              <Briefcase size={16} className="text-emerald-400" />
            </span>

            {/* Experience Card — spans full width */}
            <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7 md:p-12 transition-all duration-300 hover:border-emerald-400/40 hover:bg-white/[0.07]">

              <div className="grid md:grid-cols-2 gap-10 md:gap-14">

                {/* ── Left column: role, meta, documents ── */}
                <div className="flex flex-col">

                  {/* Mobile dot (inline with role) */}
                  <div className="md:hidden flex items-center gap-3 mb-4">
                    <span className="w-9 h-9 rounded-full bg-emerald-400/20 border-2 border-emerald-400 grid place-items-center shrink-0">
                      <Briefcase size={16} className="text-emerald-400" />
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                      <CalendarDays size={13} />
                      {experience.duration}
                    </span>
                  </div>

                  {/* Role + duration (desktop badge top-right of this column) */}
                  <div className="hidden md:flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 whitespace-nowrap">
                      <CalendarDays size={13} />
                      {experience.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mt-2 md:mt-4">
                    {experience.role}
                  </h3>

                  <p className="mt-3 text-lg md:text-xl text-emerald-400 font-medium">
                    {experience.company}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-col gap-3 text-sm md:text-base text-white/60 mt-6">

                    <span className="inline-flex items-center gap-2.5">
                      <Building2 size={17} className="text-emerald-400/70 shrink-0" />
                      {experience.company}
                    </span>

                    <span className="inline-flex items-center gap-2.5">
                      <MapPin size={17} className="text-emerald-400/70 shrink-0" />
                      {experience.location}
                    </span>

                    <span className="inline-flex items-center gap-2.5">
                      <CalendarDays size={17} className="text-emerald-400/70 shrink-0" />
                      {experience.period}
                    </span>
                  </div>

                  <p className="text-white/70 leading-relaxed mt-6 md:mt-8">
                    {experience.summary}
                  </p>

                  {/* Documents — pinned to bottom on desktop */}
                  <div className="flex flex-wrap gap-3 mt-8 md:mt-auto md:pt-10">
                    <a
                      href={experience.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-400 text-black text-sm font-semibold transition-all duration-300 hover:scale-[1.03] hover:bg-emerald-300"
                    >
                      <FileBadge size={16} />
                      View Certificate
                      <ExternalLink size={13} />
                    </a>

                    <a
                      href={experience.experiencePdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-white/80 transition-all duration-300 hover:border-emerald-400/50 hover:text-emerald-400"
                    >
                      <FileText size={16} />
                      Experience Letter
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* ── Right column: contributions + skills ── */}
                <div className="flex flex-col md:border-l md:border-white/10 md:pl-10 lg:pl-14">

                  <h4 className="text-base md:text-lg font-semibold text-white/90 mb-5">
                    Key Contributions
                  </h4>

                  <ul className="space-y-3.5">
                    {experience.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm md:text-[15px] text-white/65"
                      >
                        <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="text-base md:text-lg font-semibold text-white/90 mt-10 md:mt-12 mb-5">
                    Areas of Experience
                  </h4>

                  <div className="flex flex-wrap gap-2.5">
                    {experience.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs md:text-sm px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 hover:border-emerald-400/30 hover:text-emerald-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}