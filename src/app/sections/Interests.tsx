"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code, Smartphone, FlaskConical, Sparkles, ArrowRight } from "lucide-react"

const interests = [
  {
    icon: Code,
    label: "Full Stack Development",
    description: "Building scalable web applications with React, Node.js, and MongoDB.",
    color: "#22d3ee",
    projects: "5+ Projects",
  },
  {
    icon: Smartphone,
    label: "Mobile Development",
    description: "Cross-platform apps with React Native that feel native on every device.",
    color: "#f472b6",
    projects: "2+ Apps",
  },
  {
    icon: FlaskConical,
    label: "IoT Systems",
    description: "Connecting hardware to software through embedded systems and networking.",
    color: "#34d399",
    projects: "3+ Devices",
  },
  {
    icon: Sparkles,
    label: "AI Integration",
    description: "Leveraging Gemini API and prompt engineering for intelligent applications.",
    color: "#fbbf24",
    projects: "2+ Integrations",
  },
]

function InterestCard({ item, index }: { item: typeof interests[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div 
        className="relative p-6 md:p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-500"
        style={{
          borderColor: isHovered ? `${item.color}20` : undefined,
          backgroundColor: isHovered ? `${item.color}08` : undefined,
        }}
      >
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300"
            style={{ backgroundColor: `${item.color}15` }}
          >
            <Icon 
              className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
              style={{ color: item.color }}
            />
          </div>

          <span className="text-[11px] font-mono text-white/25 tracking-wide">
            {item.projects}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-white/90 mb-2 group-hover:text-white transition-colors duration-300">
          {item.label}
        </h3>

        <p className="text-sm text-white/35 leading-relaxed group-hover:text-white/45 transition-colors duration-300">
          {item.description}
        </p>

        {/* Bottom accent */}
        <motion.div
          className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full"
          style={{ backgroundColor: item.color }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ 
            scaleX: isHovered ? 1 : 0,
            opacity: isHovered ? 0.6 : 0
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

export default function Interests() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: "-80px" })

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#22d3ee" }} />
            <span className="text-xs font-mono text-white/40 tracking-wide">Focus Areas</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight mb-4"
          >
            What I Work On
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/35 text-lg max-w-md mx-auto"
          >
            The technologies and domains I spend my time exploring and building with
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((item, index) => (
            <InterestCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 text-sm text-white/30 hover:text-white/60 transition-colors group"
          >
            <span>See my work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}