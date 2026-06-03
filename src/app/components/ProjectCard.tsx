"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
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

export default function ProjectCard({ 
  image, 
  title, 
  category, 
  description, 
  tags, 
  color,
  gradient, 
  liveDemo, 
  github 
}: ProjectCardProps) {
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
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <span 
              className="px-3 py-1 rounded-full text-[11px] font-mono border backdrop-blur-sm"
              style={{ 
                color: color,
                borderColor: `${color}30`,
                backgroundColor: `${color}10`
              }}
            >
              {category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white/90 mb-2 group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-sm text-white/40 leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span 
                key={tag}
                className="text-[11px] font-mono text-white/30 px-2 py-1 rounded-md bg-white/[0.04]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {liveDemo ? (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{ 
                  backgroundColor: `${color}12`,
                  color: color,
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
              href={github}
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