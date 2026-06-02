"use client"

import { ExternalLink, Github } from "lucide-react"
import RevealOnScroll from "../components/RevealOnScroll"
import { motion } from "framer-motion"

const projects = [
  {
    image: "/eccomerce.webp",
    title: "Hekto",
    category: "E-Commerce",
    description: "Full-stack e-commerce platform with React.js frontend, Node.js/Express REST API, JWT authentication, and Cloudinary integration.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "accent",
    gradient: "from-accent/20 to-coral/20",
    liveDemo: "https://hekto-ecommerce-nepal.onrender.com/",
    github: "https://github.com/AnamikaPrajapati01/hekto-ecommerce-Nepal",
  },
  {
    image: "/linkmate.jpg",
    title: "LinkMates",
    category: "Real-Time",
    description: "Real-time chat application using Socket.io with separate message rooms, live status updates, and real-time delivery tracking.",
    tags: ["Socket.io", "Node.js", "Express"],
    color: "coral",
    gradient: "from-coral/20 to-gold/20",
    liveDemo: "https://realtime-chatapplication-gn97.onrender.com/login",
    github: "https://github.com/AnamikaPrajapati01/RealTime_Chat_Application",
  },
  {
    image: "/interview.jpg",
    title: "Interview AI",
    category: "AI-Powered",
    description: "AI-powered career prep platform using Google Gemini. Features CV improvement, ATS scoring, and personalized interview preparation.",
    tags: ["Gemini API", "React", "PDF Parse"],
    color: "purple-400",
    gradient: "from-purple-400/20 to-accent/20",
    liveDemo: "",
    github: "https://github.com/AnamikaPrajapati01/Interview_AI",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass text-accent font-mono text-sm mb-6">
            03. Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">Showcasing my best work and innovations</p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-${project.color} text-xs font-mono`}>
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 group-hover:text-${project.color} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-white/5 text-xs text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveDemo ? (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 py-2 rounded-lg bg-${project.color}/10 text-${project.color} text-sm font-medium hover:bg-${project.color}/20 transition-colors text-center flex items-center justify-center gap-2`}
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    ) : (
                      <span className="flex-1 py-2 rounded-lg bg-white/5 text-white/20 text-sm font-medium text-center flex items-center justify-center gap-2 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" /> Coming Soon
                      </span>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-lg glass text-white/60 text-sm font-medium hover:text-white transition-colors text-center flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}