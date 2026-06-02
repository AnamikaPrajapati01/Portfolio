import CustomCursor from "./components/CustomCursor"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Certificates from "./sections/Certificates"
import Interests from "./sections/Interests"
import Contact from "./sections/Contact"

export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </>
  )
}