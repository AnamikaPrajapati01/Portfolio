import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo */}
        <div className="text-center md:text-left">
          <div className="text-2xl font-bold font-mono mb-2">
            <span className="text-gradient">&lt;AP/&gt;</span>
          </div>
          <p className="text-white/30 text-sm">
            Designed & Built with passion
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/AnamikaPrajapati01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anamika-prajapati-989007321/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=subiprajapati5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-accent transition-colors cursor-pointer"
            aria-label="Email"
            title="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-white/30 text-sm font-mono">
          © {new Date().getFullYear()} Anamika Prajapati
        </div>
      </div>
    </footer>
  );
}