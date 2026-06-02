"use client"

import { useState, useEffect } from "react"

const phrases = [
  "Full Stack Developer",
  "React Native Developer",
  "AI Integration Specialist",
  "IoT Enthusiast",
]

export default function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(currentPhrase.substring(0, charIndex - 1))
          setCharIndex((prev) => prev - 1)
        } else {
          setDisplayText(currentPhrase.substring(0, charIndex + 1))
          setCharIndex((prev) => prev + 1)
        }

        let typeSpeed = isDeleting ? 50 : 100

        if (!isDeleting && charIndex === currentPhrase.length) {
          typeSpeed = 2000
          setIsDeleting(true)
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length)
          typeSpeed = 500
        }

        // Re-schedule with dynamic speed
        // This is handled by the effect re-running due to state changes
      },
      isDeleting ? 50 : charIndex === phrases[phraseIndex].length ? 2000 : 100
    )

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  return (
    <span className="text-xl md:text-2xl font-mono text-sage">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}