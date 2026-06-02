"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 glass-strong border-b border-white/5 transition-colors ${scrolled ? "bg-[#0a0a0a]/80" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-mono tracking-tighter" onClick={(e) => handleClick(e, "#")}>
          <span className="text-gradient">&lt;AP/&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-mono text-sm">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} className="link-underline hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleClick(e, "#contact")} className="px-6 py-2 bg-accent text-white rounded-full font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all">
            Let&apos;s Talk
          </a>
        </div>

        <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`fixed top-0 right-0 w-80 h-full bg-[#1a1a2e] z-50 p-8 md:hidden transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button className="absolute top-6 right-6 text-white" onClick={() => setMobileOpen(false)}>
          <X className="w-6 h-6" />
        </button>
        <div className="flex flex-col gap-6 mt-16 font-mono">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleClick(e, link.href)} className="text-xl hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleClick(e, "#contact")} className="text-xl text-accent">Contact</a>
        </div>
      </div>
    </nav>
  )
}