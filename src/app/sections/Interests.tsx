"use client"
import { Code, Smartphone, FlaskConical, Sparkles } from "lucide-react"
import RevealOnScroll from "../components/RevealOnScroll"

const interests = [
  { icon: Code, label: "Full Stack Development", color: "accent" },
  { icon: Smartphone, label: "Mobile App Development", color: "coral" },
  { icon: FlaskConical, label: "Internet of Things (IoT)", color: "sage" },
  { icon: Sparkles, label: "AI & Generative Technologies", color: "purple-400" },
]

export default function Interests() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll>
          <div className="glass-strong rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Interests & Passions</h3>
              <p className="text-white/40">What drives me beyond code</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {interests.map((item, index) => (
                <div key={index} className={`px-6 py-3 rounded-full bg-${item.color}/10 text-${item.color} border border-${item.color}/20 flex items-center gap-2`}>
                  <item.icon className="w-5 h-5" /> {item.label}
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}