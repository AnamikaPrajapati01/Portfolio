import { Award } from "lucide-react"
import RevealOnScroll from "../components/RevealOnScroll"

const certificates = [
  { color: "orange-400", year: "2024", title: "AWS Academy Graduate", desc: "AWS Academy Cloud Web Application Builder from Amazon Web Services" },
  { color: "blue-400", year: "2024", title: "HP LIFE Inventory Management", desc: "Professional inventory management course by HP Foundation" },
  { color: "green-400", year: "2024", title: "Career Essentials in Generative AI", desc: "By Microsoft and LinkedIn - AI fundamentals and applications" },
]

export default function Certificates() {
  return (
    <section id="certificates" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass text-accent font-mono text-sm mb-6">05. Achievements</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient">Certifications</span></h2>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <div className="group hover:scale-105 transition-transform duration-300">
                <div className="rounded-2xl p-6 h-full" style={{ background: "linear-gradient(135deg, rgba(233,69,96,0.1), rgba(244,162,97,0.1))", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className={`w-12 h-12 rounded-xl bg-${cert.color}/10 flex items-center justify-center mb-4 group-hover:bg-${cert.color}/20 transition-colors`}>
                    <Award className={`w-6 h-6 text-${cert.color}`} />
                  </div>
                  <div className={`text-${cert.color} font-mono text-xs mb-2`}>{cert.year}</div>
                  <h3 className="font-bold mb-2">{cert.title}</h3>
                  <p className="text-white/50 text-sm">{cert.desc}</p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}