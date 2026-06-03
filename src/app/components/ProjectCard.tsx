"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectCard({ 
  image, 
  title, 
  category, 
  description, 
  tags, 
  color,
  liveDemo, 
  github 
}: {
  image: string
  title: string
  category: string
  description: string
  tags: string[]
  color: string
  liveDemo: string
  github: string
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute top-4 right-4">
            <span 
              className="px-3 py-1 rounded-full text-[11px] font-mono border backdrop-blur-sm"
              style={{ color, borderColor: `${color}30`, backgroundColor: `${color}10` }}
            >
              {category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white/90 mb-2">{title}</h3>
          <p className="text-sm text-white/40 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {tags.map((tag) => (
              <span key={tag} className="text-[11px] font-mono text-white/30 px-2 py-1 rounded bg-white/[0.04]">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {liveDemo ? (
              <a href={liveDemo} target="_blank" rel="noopener noreferrer"
                className="flex-1 py-2 rounded-lg text-sm text-center flex items-center justify-center gap-2"
                style={{ backgroundColor: `${color}12`, color }}>
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            ) : (
              <span className="flex-1 py-2 rounded-lg bg-white/5 text-white/20 text-sm text-center">Coming Soon</span>
            )}
            <a href={github} target="_blank" rel="noopener noreferrer"
              className="flex-1 py-2 rounded-lg border border-white/10 text-white/60 text-sm text-center flex items-center justify-center gap-2">
              <Github className="w-4 h-4" /> Source
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}