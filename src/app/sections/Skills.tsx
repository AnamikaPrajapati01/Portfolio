import { Monitor, Server, Database, Smartphone, Brain, Wrench } from "lucide-react"
import RevealOnScroll from "../components/RevealOnScroll"

const categories = [
  { icon: Monitor, title: "Frontend", color: "accent", skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js"] },
  { icon: Server, title: "Backend", color: "coral", skills: ["Node.js", "Express.js", "REST API", "JWT Auth"] },
  { icon: Database, title: "Database & Cloud", color: "gold", skills: ["MongoDB", "Firebase", "SQL", "Render", "Cloudinary"] },
  { icon: Smartphone, title: "Mobile Dev", color: "sage", skills: ["React Native", "Expo Go"] },
  { icon: Brain, title: "AI Integration", color: "purple-400", skills: ["Google Gemini API", "Prompt Engineering", "PDF Parsing"] },
  { icon: Wrench, title: "Dev Tools", color: "pink-400", skills: ["Git", "GitHub", "VS Code", "Postman", "Packet Tracer"] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass text-accent font-mono text-sm mb-6">02. Technical Arsenal</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & <span className="text-gradient">Tools</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">Technologies I work with to bring ideas to life</p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className={`glass rounded-2xl p-6 hover:border-${cat.color}/30 transition-all group`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-${cat.color}/10 flex items-center justify-center group-hover:bg-${cat.color}/20 transition-colors`}>
                    <cat.icon className={`w-5 h-5 text-${cat.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span key={i} className={`skill-tag px-3 py-1 rounded-full bg-white/5 text-sm border border-white/10 hover:border-${cat.color}/50 transition-colors cursor-default`}>{skill}</span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}