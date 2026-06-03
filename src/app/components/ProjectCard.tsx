"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  description: string
  tags: string[]
  color: string
  gradient?: string
  icon?: any

  image?: string
  liveDemo?: string
  github?: string
}

export default function ProjectCard({
  title,
  category,
  description,
  tags,
  color,
  gradient,
  icon: Icon,
  image,
  liveDemo,
  github
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">

        {/* IMAGE / ICON AREA */}
        <div className="relative aspect-[16/10] flex items-center justify-center">
          {image ? (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
            />
          ) : Icon ? (
            <Icon className="w-16 h-16 text-white/70" />
          ) : (
            <div className="text-white/40">No Preview</div>
          )}

          <div className="absolute top-3 right-3">
            <span
              className="px-2 py-1 text-[11px] rounded-full border"
              style={{
                color,
                borderColor: `${color}40`
              }}
            >
              {category}
            </span>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-white/50 text-sm mt-2">{description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 mt-4">
            {liveDemo ? (
              <a
                href={liveDemo}
                className="text-sm flex items-center gap-1 text-cyan-400"
              >
                <ExternalLink size={14} />
                Live
              </a>
            ) : (
              <span className="text-white/30 text-sm">Coming Soon</span>
            )}

            {github && (
              <a
                href={github}
                className="text-sm flex items-center gap-1 text-white/60"
              >
                <Github size={14} />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}