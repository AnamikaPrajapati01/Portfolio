import { Code, Smartphone, Zap, FlaskConical } from "lucide-react"
import RevealOnScroll from "../components/RevealOnScroll"

const specialties = [
  { icon: Code, title: "Full Stack Development", desc: "MERN Stack Specialist", color: "accent" },
  { icon: Smartphone, title: "Mobile Development", desc: "React Native & Expo", color: "coral" },
  { icon: Zap, title: "AI Integration", desc: "Gemini API & Prompt Engineering", color: "gold" },
  { icon: FlaskConical, title: "IoT Systems", desc: "Networking & Hardware", color: "sage" },
]

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div className="inline-block px-4 py-2 rounded-full glass text-accent font-mono text-sm mb-6">01. About Me</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Creative<br /><span className="text-gradient">Product?</span> I can<br />Help You!
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>Hi! I&apos;m Anamika, a passionate Full Stack Developer with a keen interest in building scalable web applications, mobile solutions, and AI-integrated systems.</p>
              <p>Currently pursuing my Bachelor&apos;s in Information Technology at Presidential Graduate School, with 91% in Web Programming-I and 94% in Web Programming II.</p>
              <p>I specialize in MERN stack development, React Native mobile apps, and IoT systems.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-6 py-3 glass rounded-xl text-center"><div className="text-2xl font-bold text-accent">5+</div><div className="text-xs text-white/40 font-mono">Projects</div></div>
              <div className="px-6 py-3 glass rounded-xl text-center"><div className="text-2xl font-bold text-coral">3+</div><div className="text-xs text-white/40 font-mono">Certificates</div></div>
              <div className="px-6 py-3 glass rounded-xl text-center"><div className="text-2xl font-bold text-gold">10+</div><div className="text-xs text-white/40 font-mono">Technologies</div></div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-coral/20 rounded-2xl blur-xl" />
              <div className="relative glass-strong rounded-2xl p-8 space-y-6">
                {specialties.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-${item.color}/20 flex items-center justify-center`}>
                      <item.icon className={`w-6 h-6 text-${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-white/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}