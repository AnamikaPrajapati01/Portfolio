import { ShoppingCart, MessageSquare, Sparkles } from "lucide-react"
import RevealOnScroll from "../components/RevealOnScroll"
import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    icon: ShoppingCart,
    title: "Hekto",
    category: "E-Commerce",
    description:
      "Full-stack e-commerce platform with React.js frontend, Node.js/Express REST API, JWT authentication, role-based access, and Cloudinary integration.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "accent",
    gradient: "from-accent/20 to-coral/20",
  },
  {
    icon: MessageSquare,
    title: "LinkMates",
    category: "Real-Time",
    description:
      "Real-time chat application using Socket.io with separate message rooms, live status updates, and real-time delivery tracking.",
    tags: ["Socket.io", "Node.js", "Express"],
    color: "coral",
    gradient: "from-coral/20 to-gold/20",
  },
  {
    icon: Sparkles,
    title: "Interview AI",
    category: "AI-Powered",
    description:
      "AI-powered career prep platform using Google Gemini. Features CV improvement, ATS scoring, weakness detection, and personalized interview preparation.",
    tags: ["Gemini API", "React", "PDF Parse"],
    color: "purple-400",
    gradient: "from-purple-400/20 to-accent/20",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass text-accent font-mono text-sm mb-6">
            03. Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto">Showcasing my best work and innovations</p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={index} delay={index * 0.15}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}