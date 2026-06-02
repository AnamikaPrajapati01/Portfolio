import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold font-mono mb-2"><span className="text-gradient">&lt;AP/&gt;</span></div>
          <p className="text-white/30 text-sm">Designed & Built with passion</p>
        </div>
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
          <a href="mailto:subiprajapati5@gmail.com" className="text-white/30 hover:text-accent transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
        <div className="text-white/30 text-sm font-mono">© {new Date().getFullYear()} Anamika Prajapati</div>
      </div>
    </footer>
  )
}