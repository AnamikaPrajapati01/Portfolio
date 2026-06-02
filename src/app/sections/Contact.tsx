"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import RevealOnScroll from "../components/RevealOnScroll"

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      console.error(error)
      setStatus("error")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <RevealOnScroll>
          <div className="inline-block px-4 py-2 rounded-full glass text-accent font-mono text-sm mb-6">06. Get In Touch</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Let&apos;s Work <span className="text-gradient">Together</span></h2>
          <p className="text-white/40 text-lg mb-12 max-w-2xl mx-auto">Have a project in mind or want to collaborate? I&apos;m always open to discussing new opportunities.</p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="mailto:subiprajapati5@gmail.com" className="glass rounded-2xl p-6 hover:border-accent/30 transition-all group">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors"><Mail className="w-6 h-6 text-accent" /></div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-white/40 text-sm">subiprajapati5@gmail.com</p>
            </a>
            <div className="glass rounded-2xl p-6 hover:border-coral/30 transition-all group">
              <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-coral/20 transition-colors"><Phone className="w-6 h-6 text-coral" /></div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-white/40 text-sm">+977 9767563658</p>
            </div>
            <div className="glass rounded-2xl p-6 hover:border-gold/30 transition-all group">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors"><MapPin className="w-6 h-6 text-gold" /></div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-white/40 text-sm">Kathmandu, Nepal</p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.3}>
          <div className="glass rounded-3xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-mono text-white/60 mb-2">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-white placeholder-white/20" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-mono text-white/60 mb-2">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-white placeholder-white/20" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-mono text-white/60 mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-white placeholder-white/20" placeholder="Project inquiry" />
              </div>
              <div>
                <label className="block text-sm font-mono text-white/60 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-accent focus:outline-none transition-colors text-white placeholder-white/20 resize-none" placeholder="Tell me about your project..." />
              </div>

              {status === "success" && (
                <div className="px-4 py-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm text-center">
                  Message sent successfully! I will get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-4 bg-accent text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/30 transition-all flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>Sending...</>
                ) : (
                  <>Send Message <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                )}
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}