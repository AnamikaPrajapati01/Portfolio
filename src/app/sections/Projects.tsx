"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

// ─── TYPES ───
interface Project {
  image: string
  title: string
  category: string
  description: string
  tags: string[]
  color: string
  gradient: string
  liveDemo: string
  github: string
}

// ─── PROJECT DATA ───
const projects: Project[] = [
  {
    image: "/eccomerce.webp",
    title: "Hekto",
    category: "E-Commerce",
    description: "Full-stack e-commerce platform with React.js, Node.js/Express REST API, JWT authentication, and Cloudinary integration.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#22d3ee",
    gradient: "from-accent/20 to-coral/20",
    liveDemo: "https://hekto-ecommerce-nepal.onrender.com/",
    github: "https://github.com/AnamikaPrajapati01/hekto-ecommerce-Nepal",
  },
  {
    image: "/linkmate.jpg",
    title: "LinkMates",
    category: "Real-Time",
    description: "Real-time chat application using Socket.io with separate message rooms, live status updates, and delivery tracking.",
    tags: ["Socket.io", "Node.js", "Express"],
    color: "#f472b6",
    gradient: "from-coral/20 to-gold/20",
    liveDemo: "https://realtime-chatapplication-gn97.onrender.com/login",
    github: "https://github.com/AnamikaPrajapati01/RealTime_Chat_Application",
  },
  {
    image: "/interview.jpg",
    title: "Interview AI",
    category: "AI-Powered",
    description: "AI-powered career prep platform using Google Gemini. Features CV improvement, ATS scoring, and interview preparation.",
    tags: ["Gemini API", "React", "PDF Parse"],
    color: "#fbbf24",
    gradient: "from-purple-400/20 to-accent/20",
    liveDemo: "",
    github: "https://github.com/AnamikaPrajapati01/Interview_AI",
  },
]

// ─── PROJECT CARD COMPONENT ───
function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.03]">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={`${project.title} — ${project.category} project by Anamika Prajapati`}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Category badge */}
          <div className="absolute top-4 right-4">
            <span 
              className="px-3 py-1 rounded-full text-[11px] font-mono border backdrop-blur-sm"
              style={{ 
                color: project.color,
                borderColor: `${project.color}30`,
                backgroundColor: `${project.color}10`
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white/90 mb-2 group-hover:text-white transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-white/40 leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="text-[11px] font-mono text-white/30 px-2 py-1 rounded-md bg-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{ 
                  backgroundColor: `${project.color}12`,
                  color: project.color,
                }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Live Demo
              </a>
            ) : (
              <span className="px-4 py-2 rounded-lg text-sm text-white/20 bg-white/[0.02] cursor-not-allowed">
                Coming Soon
              </span>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white/40 hover:text-white/70 border border-white/[0.06] hover:border-white/[0.12] transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─── REVEAL ON SCROLL ───
function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// ─── MAIN EXPORT ───
export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <RevealOnScroll>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-white/20" />
              <span className="text-[11px] font-mono text-white/30 tracking-widest uppercase">
                My Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight">
              Projects
            </h2>
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}