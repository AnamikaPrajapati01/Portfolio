"use client"

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

const phrases = ["Full Stack Developer", "React Native Developer", "AI Integration Specialist", "IoT Enthusiast"]

function Typewriter() {
  const [text, setText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, text.length - 1))
        if (text.length === 1) { setIsDeleting(false); setPhraseIndex((i) => (i + 1) % phrases.length) }
      } else {
        setText(current.substring(0, text.length + 1))
        if (text.length === current.length - 1) setIsDeleting(true)
      }
    }, isDeleting ? 50 : text.length === current.length - 1 ? 2000 : 100)
    return () => clearTimeout(timeout)
  }, [text, isDeleting, phraseIndex])

  return <span className="text-xl md:text-2xl font-mono text-sage">{text}<span className="animate-pulse">|</span></span>
}

import { useState, useEffect } from "react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-accent rounded-full blur-[80px] opacity-40 animate-float" />
      <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] bg-[#457b9d] rounded-full blur-[80px] opacity-40 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-[10%] left-[40%] w-[250px] h-[250px] bg-coral rounded-full blur-[80px] opacity-40 animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-accent">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" /> Available for opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-white/60 text-2xl md:text-3xl font-mono mb-4 font-normal">Hi, I&apos;m</span>
            <span className="block text-gradient text-3d">Anamika</span>
            <span className="block text-gradient text-3d">Prajapati</span>
          </h1>

          <div className="h-8"><Typewriter /></div>

          <p className="text-lg text-white/60 max-w-lg leading-relaxed">
            Crafting digital experiences with code and creativity. Full Stack Developer specializing in modern web technologies, AI integration, and IoT systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-accent text-white rounded-full font-semibold hover:shadow-xl hover:shadow-accent/30 transition-all flex items-center gap-2 group">
              View My Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="mailto:subiprajapati5@gmail.com" className="px-8 py-4 glass rounded-full font-semibold hover:border-accent/50 transition-all">Get in Touch</a>
          </div>

          <div className="flex gap-6 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:subiprajapati5@gmail.com" className="text-white/40 hover:text-accent transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }} className="relative hidden md:block">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-coral/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-4 glass-strong rounded-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl font-bold text-gradient mb-2">3+</div>
                <div className="text-sm font-mono text-white/60">Years of<br />Learning & Building</div>
              </div>
            </div>
            <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-8 h-8 bg-accent rounded-full shadow-lg shadow-accent/50" />
            </motion.div>
            <motion.div className="absolute inset-0" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-6 h-6 bg-coral rounded-full shadow-lg shadow-coral/50" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <svg className="w-6 h-6 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
      </motion.div>
    </section>
  )
}