"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion"
import { Code, Smartphone, Zap, FlaskConical } from "lucide-react"

// ─── ASCII ART PORTRAIT COMPONENT ───
function AsciiPortrait() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  const asciiChars = " .:-=+*#%@"

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const w = 40
    const h = 50
    canvas.width = w * 12
    canvas.height = h * 12

    let time = 0
    let raf: number

    const draw = () => {
      time += 0.02
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = "10px monospace"

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const nx = x / w
          const ny = y / h

          // Create organic blob shape
          const distFromCenter = Math.sqrt(
            Math.pow(nx - 0.5 + (mousePos.x - 0.5) * 0.1, 2) + 
            Math.pow(ny - 0.5 + (mousePos.y - 0.5) * 0.1, 2)
          )

          const wave = Math.sin(nx * 8 + time) * Math.cos(ny * 6 + time * 0.7) * 0.15
          const noise = Math.sin(x * 0.5 + time * 2) * Math.cos(y * 0.3 + time) * 0.1

          const value = 1 - distFromCenter * 2 + wave + noise
          const charIndex = Math.floor(Math.max(0, Math.min(1, value)) * (asciiChars.length - 1))

          const colorIntensity = value > 0.6 ? 255 : value > 0.3 ? 180 : 100
          const r = colorIntensity
          const g = colorIntensity * (0.5 + Math.sin(time + x * 0.1) * 0.5)
          const b = colorIntensity * (0.8 + Math.cos(time + y * 0.1) * 0.2)

          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`
          ctx.fillText(asciiChars[charIndex], x * 12, y * 12)
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(raf)
  }, [mousePos])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    })
  }

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-black cursor-crosshair"
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ imageRendering: "pixelated" }}
      />
      <div className="absolute bottom-4 left-4 text-[10px] font-mono text-white/30">
        ASCII_GENERATIVE_v1.0
      </div>
    </div>
  )
}

// ─── LIQUID MORPHING BLOB ───
function LiquidBlob() {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    let time = 0
    let raf: number

    const animate = () => {
      time += 0.015
      if (pathRef.current) {
        const points = 8
        let d = "M"

        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2
          const radius = 180 + 
            Math.sin(angle * 3 + time) * 30 + 
            Math.sin(angle * 5 + time * 1.3) * 15 +
            Math.sin(angle * 2 + time * 0.7) * 20

          const x = 200 + Math.cos(angle) * radius
          const y = 200 + Math.sin(angle) * radius

          if (i === 0) d += `${x},${y}`
          else {
            const prevAngle = ((i - 1) / points) * Math.PI * 2
            const cpRadius = radius * 0.5
            const cpx = 200 + Math.cos(prevAngle + 0.3) * cpRadius
            const cpy = 200 + Math.sin(prevAngle + 0.3) * cpRadius
            d += ` Q${cpx},${cpy} ${x},${y}`
          }
        }

        d += "Z"
        pathRef.current.setAttribute("d", d)
      }
      raf = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none opacity-30">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <defs>
          <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
          </filter>
        </defs>
        <path 
          ref={pathRef}
          fill="url(#blobGrad)"
          filter="url(#goo)"
          opacity="0.6"
        />
      </svg>
    </div>
  )
}

// ─── TYPEWRITER WITH CURSOR TRAIL ───
function TypewriterText({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  const [displayed, setDisplayed] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [started, setStarted] = useState(false)
  const sectionRef = useRef<HTMLSpanElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!isInView) return
    const startTimer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(startTimer)
  }, [isInView, delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1))
      }, 40 + Math.random() * 60)
      return () => clearTimeout(timer)
    }
  }, [displayed, started, text])

  useEffect(() => {
    const interval = setInterval(() => setShowCursor(p => !p), 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <span ref={sectionRef} className={className}>
      {displayed}
      <motion.span 
        animate={{ opacity: showCursor ? 1 : 0 }}
        className="inline-block w-[3px] h-[1em] bg-cyan-400 ml-1 align-middle"
      />
    </span>
  )
}

// ─── MAGNETIC GRID BACKGROUND ───
function MagneticGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const spacing = 40
    let raf: number

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener("resize", resize)

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleLeave = () => { mouseRef.current = { x: -1000, y: -1000 } }

    canvas.addEventListener("mousemove", handleMove)
    canvas.addEventListener("mouseleave", handleLeave)

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      const mouse = mouseRef.current
      const cols = Math.ceil(w / spacing)
      const rows = Math.ceil(h / spacing)

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing
          const y = j * spacing
          const dx = mouse.x - x
          const dy = mouse.y - y
          const dist = Math.sqrt(dx * dx + dy * dy)

          const maxDist = 150
          const size = dist < maxDist ? (1 - dist / maxDist) * 4 : 0.5
          const opacity = dist < maxDist ? (1 - dist / maxDist) * 0.8 : 0.1

          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(100, 200, 255, ${opacity})`
          ctx.fill()

          // Draw lines to neighbors when close to mouse
          if (dist < maxDist && i < cols) {
            ctx.beginPath()
            ctx.moveTo(x, y)
            ctx.lineTo((i + 1) * spacing, j * spacing)
            ctx.strokeStyle = `rgba(100, 200, 255, ${opacity * 0.3})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMove)
      canvas.removeEventListener("mouseleave", handleLeave)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ opacity: 0.4 }}
    />
  )
}

// ─── HOLOGRAPHIC CARD ───
function HolographicCard({ icon: Icon, title, desc, index }: { 
  icon: React.ElementType; 
  title: string; 
  desc: string; 
  index: number 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    setRotation({
      x: (y - 0.5) * -20,
      y: (x - 0.5) * 20
    })
    setGlarePos({ x: x * 100, y: y * 100 })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setGlarePos({ x: 50, y: 50 })
  }

  const colors = [
    "from-cyan-500/20 to-blue-500/20",
    "from-pink-500/20 to-rose-500/20", 
    "from-amber-500/20 to-orange-500/20",
    "from-emerald-500/20 to-teal-500/20"
  ]

  const iconColors = [
    "text-cyan-400",
    "text-pink-400",
    "text-amber-400",
    "text-emerald-400"
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm cursor-pointer overflow-hidden group"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.1s ease-out"
        }}
      >
        {/* Holographic glare */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
          }}
        />

        {/* Border glow on hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className="relative z-10 flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors`}>
            <Icon className={`w-5 h-5 ${iconColors[index]}`} />
          </div>

          <div className="flex-1">
            <h4 className="font-semibold text-white/90 group-hover:text-white transition-colors">{title}</h4>
            <p className="text-sm text-white/30 group-hover:text-white/50 transition-colors mt-1">{desc}</p>
          </div>
        </div>

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
          <div className={`absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rotate-45`} />
        </div>
      </div>
    </motion.div>
  )
}

// ─── GLITCH TEXT ON SCROLL ───
function GlitchText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const glitchAmount = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, 20])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.span 
        className="absolute inset-0 text-red-400/50"
        style={{ x: useTransform(glitchAmount, v => v * 0.5) }}
      >
        {text}
      </motion.span>
      <motion.span 
        className="absolute inset-0 text-cyan-400/50"
        style={{ x: useTransform(glitchAmount, v => -v * 0.5) }}
      >
        {text}
      </motion.span>
      <span className="relative">{text}</span>
    </div>
  )
}

// ─── DATA ───
const specialties = [
  { icon: Code, title: "Full Stack Development", desc: "MERN Stack Specialist" },
  { icon: Smartphone, title: "Mobile Development", desc: "React Native & Expo" },
  { icon: Zap, title: "AI Integration", desc: "Gemini API & Prompt Engineering" },
  { icon: FlaskConical, title: "IoT Systems", desc: "Networking & Hardware" },
]

const stats = [
  { value: "05", label: "Projects", suffix: "+" },
  { value: "03", label: "Certificates", suffix: "+" },
  { value: "10", label: "Technologies", suffix: "+" },
]

// ─── MAIN ───
export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 relative overflow-hidden min-h-screen"
    >
      {/* Magnetic Grid Background */}
      <MagneticGrid />

      {/* Liquid Blob */}
      <LiquidBlob />

      {/* Scanlines overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* LEFT: ASCII Portrait */}
          <motion.div 
            className="lg:col-span-4 lg:sticky lg:top-32"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <AsciiPortrait />

            {/* Terminal-style info below portrait */}
            <motion.div 
              className="mt-4 p-4 rounded-xl border border-white/10 bg-black/50 font-mono text-xs space-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="text-white/30">$ whoami</div>
              <div className="text-cyan-400/80">anamika_dev</div>
              <div className="text-white/30 mt-2">$ cat location.txt</div>
              <div className="text-pink-400/80">Presidential Graduate School</div>
              <div className="text-white/30 mt-2">$ cat skills.json</div>
              <div className="text-amber-400/80">{`["MERN", "React Native", "AI", "IoT"]`}</div>
              <motion.div 
                className="text-white/30 mt-2"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                █
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-8 space-y-12">

            {/* Header with typewriter */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02]"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/40 text-xs font-mono">AVAILABLE_FOR_WORK</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                {/* Static fallback for SSR / SEO — hidden visually but present in the DOM */}
                <span className="sr-only">About Me — Building digital experiences that matter.</span>

                {/* Animated typewriter spans, hidden from screen readers since the static text above covers them */}
                <span aria-hidden="true">
                  <TypewriterText 
                    text="Building digital" 
                    className="block text-white/90"
                  />
                  <TypewriterText 
                    text="experiences that" 
                    delay={800}
                    className="block text-white/90"
                  />
                  <TypewriterText 
                    text="matter." 
                    delay={1600}
                    className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  />
                </span>
              </h2>
            </div>

            {/* Bio */}
            <motion.div 
              className="space-y-4 text-white/50 leading-relaxed text-lg max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              <p>
                I&apos;m Anamika — a developer who believes code should feel like magic. 
                Not the cheap kind, but the kind that makes someone stop and wonder 
                <span className="text-white/70 italic"> "how did they do that?"</span>
              </p>
              <p>
                Currently deep in Information Technology at Presidential Graduate School, 
                crushing it with <span className="text-cyan-400 font-mono">91%</span> in Web Programming-I and 
                <span className="text-cyan-400 font-mono"> 94%</span> in Web Programming-II.
              </p>
              <p>
                I don&apos;t just build apps. I craft experiences where every pixel, 
                every interaction, every millisecond of animation has purpose.
              </p>
            </motion.div>

            {/* Stats - Digital Counter Style */}
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 + i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="relative group cursor-default"
                >
                  <div className="text-4xl font-mono font-bold text-white/20 group-hover:text-white/40 transition-colors">
                    {stat.value}
                    <span className="text-cyan-400/60">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest mt-1">
                    {stat.label}
                  </div>
                  <motion.div 
                    className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ delay: 1.3 + i * 0.1, duration: 0.8 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Specialties - Holographic Cards */}
            <div className="space-y-4 pt-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                <span className="text-white/30 text-xs font-mono uppercase tracking-widest">Specialties</span>
                <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4">
                {specialties.map((item, index) => (
                  <HolographicCard 
                    key={index} 
                    icon={item.icon} 
                    title={item.title} 
                    desc={item.desc} 
                    index={index}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}