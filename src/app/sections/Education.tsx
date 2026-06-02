"use client"
import RevealOnScroll from "../components/RevealOnScroll"

const education = [
  { year: "2023 – 2027", title: "Bachelor's in Information Technology", school: "Presidential Graduate School, Kathmandu", tags: ["Web Prog I: 91%", "Web Prog II: 94%"], color: "accent", side: "left" },
  { year: "2020 – 2022", title: "Higher Secondary Education", school: "Hetauda School of Management", tags: ["Management Stream"], color: "coral", side: "right" },
  { year: "2020", title: "Secondary Education (SEE)", school: "Jaycees Secondary Boarding School, Sarlahi", tags: ["Completed"], color: "gold", side: "left" },
]

export default function Education() {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass text-accent font-mono text-sm mb-6">04. Academic Journey</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient">Education</span></h2>
        </RevealOnScroll>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-coral to-gold transform md:-translate-x-1/2" />
          {education.map((edu, index) => (
            <RevealOnScroll key={index} delay={index * 0.2}>
              <div className="relative mb-12">
                <div className="md:flex items-center justify-between">
                  {edu.side === "left" ? (
                    <>
                      <div className="md:w-5/12 md:text-right md:pr-8 mb-4 md:mb-0 ml-12 md:ml-0">
                        <div className="glass rounded-2xl p-6 hover:border-accent/30 transition-all">
                          <div className={`text-${edu.color} font-mono text-sm mb-2`}>{edu.year}</div>
                          <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
                          <p className="text-white/50 text-sm mb-2">{edu.school}</p>
                          <div className="flex items-center gap-2 md:justify-end flex-wrap">
                            {edu.tags.map((tag, i) => <span key={i} className={`px-3 py-1 rounded-full bg-${edu.color}/10 text-${edu.color} text-xs`}>{tag}</span>)}
                          </div>
                        </div>
                      </div>
                      <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-${edu.color} rounded-full border-4 border-[#0a0a0a] transform -translate-x-1/2 z-10`} />
                      <div className="md:w-5/12 md:pl-8 hidden md:block" />
                    </>
                  ) : (
                    <>
                      <div className="md:w-5/12 hidden md:block" />
                      <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-${edu.color} rounded-full border-4 border-[#0a0a0a] transform -translate-x-1/2 z-10`} />
                      <div className="md:w-5/12 md:pl-8 mb-4 md:mb-0 ml-12 md:ml-0">
                        <div className="glass rounded-2xl p-6 hover:border-coral/30 transition-all">
                          <div className={`text-${edu.color} font-mono text-sm mb-2`}>{edu.year}</div>
                          <h3 className="text-xl font-bold mb-2">{edu.title}</h3>
                          <p className="text-white/50 text-sm mb-2">{edu.school}</p>
                          <div className="flex items-center gap-2 flex-wrap">
                            {edu.tags.map((tag, i) => <span key={i} className={`px-3 py-1 rounded-full bg-${edu.color}/10 text-${edu.color} text-xs`}>{tag}</span>)}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}