"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const outlineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const outline = outlineRef.current
    if (!dot || !outline) return

    const moveCursor = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
      outline.animate(
        { left: `${e.clientX}px`, top: `${e.clientY}px` },
        { duration: 500, fill: "forwards" }
      )
    }

    const handleMouseEnter = () => outline.classList.add("hover")
    const handleMouseLeave = () => outline.classList.remove("hover")

    window.addEventListener("mousemove", moveCursor)
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-[5px] h-[5px] bg-accent rounded-full pointer-events-none z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2" />
      <div ref={outlineRef} className="fixed top-0 left-0 w-[30px] h-[30px] border border-accent/50 rounded-full pointer-events-none z-[9999] hidden md:block -translate-x-1/2 -translate-y-1/2 transition-all duration-200 [&.hover]:w-[50px] [&.hover]:h-[50px] [&.hover]:bg-accent/10 [&.hover]:border-accent" />
    </>
  )
}