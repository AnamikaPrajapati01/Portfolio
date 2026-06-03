"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react"

const projects = [
  {
    image: "/eccomerce.webp",
    title: "Hekto",
    category: "E-Commerce",
    description: "Full-stack e-commerce platform with React.js, Node.js/Express REST API, JWT authentication, and Cloudinary integration.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#22d3ee",
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
    liveDemo: "",
    github: "https://github.com/AnamikaPrajapati01/Interview_AI",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.03]">
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
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

export default function Projects() {
  const headerRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" })
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-60px" })

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-10 h-px bg-white/20" />
            <span className="text-[11px] font-mono text-white/30 tracking-widest uppercase">
              My Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight"
          >
            Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section - Inspired by reference site's "Impressed?" */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[11px] font-mono text-white/40 tracking-wider">What's Next?</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-white/90 mb-4">
            Impressed?
          </h3>

          <p className="text-white/40 text-base max-w-md mx-auto mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/AnamikaPrajapati01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-all text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              More on GitHub
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all"
              style={{ 
                backgroundColor: "#22d3ee18",
                color: "#22d3ee",
                border: "1px solid #22d3ee30"
              }}
            >
              Let's Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}