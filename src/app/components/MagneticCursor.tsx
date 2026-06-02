"use client"

import { useRef, ReactNode } from "react"
import { motion } from "framer-motion"

interface MagneticCursorProps {
  children: ReactNode
  className?: string
}

export default function MagneticCursor({ children, className = "" }: MagneticCursorProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    const element = ref.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const handleMouseLeave = () => {
    const element = ref.current
    if (!element) return
    element.style.transform = "translate(0, 0)"
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  )
}