import RevealOnScroll from "../components/RevealOnScroll"
import ProjectCard from "../components/ProjectCard"

const projects = [
  {
    image: "/hekto.webp",
    title: "Hekto",
    category: "E-Commerce",
    description:
      "Full-stack e-commerce platform with React.js frontend, Node.js/Express REST API, JWT authentication, role-based access, and Cloudinary integration.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#22d3ee",
    gradient: "from-accent/20 to-coral/20",
    liveDemo: "https://hekto-ecommerce-nepal.onrender.com/",
    github: "https://github.com/AnamikaPrajapati01/hekto-ecommerce-Nepal",
  },
  {
    image: "/linkmate.jpg",
    title: "LinkMates",
    category: "Real-Time",
    description:
      "Real-time chat application using Socket.io with separate chat rooms, live status updates, and delivery tracking.",
    tags: ["Socket.io", "Node.js", "Express"],
    color: "#f472b6",
    gradient: "from-coral/20 to-gold/20",
    liveDemo: "https://realtime-chatapplication-gn97.onrender.com/login",
    github: "https://github.com/AnamikaPrajapati01/RealTime_Chat_Application",
  },
  {
    image: "/interview.jpg",
    title: "Interview AI",
    category: "AI-Powered",
    description:
      "AI-powered career prep platform using Google Gemini. Includes CV improvement, ATS scoring, and interview preparation tools.",
    tags: ["Gemini API", "React", "PDF Parse"],
    color: "#a855f7",
    gradient: "from-purple-400/20 to-accent/20",
    liveDemo: "",
    github: "https://github.com/AnamikaPrajapati01/Interview_AI",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <RevealOnScroll className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass text-accent font-mono text-sm mb-6">
            03. Featured Work
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-white/40 max-w-2xl mx-auto">
            Showcasing my best full-stack and AI-powered projects
          </p>
        </RevealOnScroll>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <RevealOnScroll key={project.title} delay={index * 0.15}>
              <ProjectCard {...project} />
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}