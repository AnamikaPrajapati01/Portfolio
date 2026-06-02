"use client"
import RevealOnScroll from "../components/RevealOnScroll"

const certificates = [
  {
    image: "/aws.png",
    color: "orange-400",
    year: "2024",
    title: "AWS Academy Graduate",
    desc: "AWS Academy Cloud Web Application Builder from Amazon Web Services",
  },
  {
    image: "/hp.png",
    color: "blue-400",
    year: "2024",
    title: "HP LIFE Inventory Management",
    desc: "Professional inventory management course by HP Foundation",
  },
  {
    image: "/ai.png",
    color: "green-400",
    year: "2024",
    title: "Career Essentials in Generative AI",
    desc: "By Microsoft and LinkedIn - AI fundamentals and applications",
  },
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
                <div
                  className="rounded-2xl overflow-hidden h-full"
                  style={{ background: "linear-gradient(135deg, rgba(233,69,96,0.1), rgba(244,162,97,0.1))", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className={`absolute top-3 right-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-${cert.color} text-xs font-mono`}>
                      {cert.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`font-bold mb-2 text-${cert.color}`}>{cert.title}</h3>
                    <p className="text-white/50 text-sm">{cert.desc}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}