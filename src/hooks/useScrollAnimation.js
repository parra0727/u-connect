import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const elements = document.querySelectorAll('.fade-up, .fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}