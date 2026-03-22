import { useEffect, useState } from "react"

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollY
}

export function useIntersectionObserver() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed", "fade-in-up")
        } else {
          entry.target.classList.remove("fade-in-up")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".scroll-reveal")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}