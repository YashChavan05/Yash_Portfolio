import { ArrowRight, Download, Github, Linkedin, Mail, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroBackground from "@/assets/hero-bg.jpg"
import { useEffect, useRef } from "react"

// Particle background component
function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animationId: number
    const isDark = document.documentElement.classList.contains('dark')
    const colors = isDark
      ? [
          'rgba(243,244,246,0.10)', // Platinum White
          'rgba(156,163,175,0.10)', // Cool Gray
          'rgba(55,65,81,0.10)'     // Dark Gray
        ]
      : [
          'rgba(107,114,128,0.10)', // Slate Gray
          'rgba(229,231,235,0.10)', // Soft Gray
          'rgba(35,35,35,0.10)'     // Charcoal Black
        ]
    const particles: {x: number, y: number, r: number, dx: number, dy: number, o: number}[] = []
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    for (let i = 0; i < 32; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: 16 + Math.random() * 24,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        o: Math.random() * 0.5 + 0.2
      })
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI)
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        ctx.globalAlpha = p.o
        ctx.fill()
        ctx.globalAlpha = 1
        p.x += p.dx
        p.y += p.dy
        if (p.x < -p.r) p.x = canvas.width + p.r
        if (p.x > canvas.width + p.r) p.x = -p.r
        if (p.y < -p.r) p.y = canvas.height + p.r
        if (p.y > canvas.height + p.r) p.y = -p.r
      }
      animationId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />
}

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY
        bgRef.current.style.transform = `translateY(${y * 0.2}px)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform z-0">
        <div 
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(245, 245, 244, 0.92), rgba(229, 231, 235, 0.85)), url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "scroll"
          }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
        {/* Dark mode animated gradient overlay & vignette */}
        <div className="hidden dark:block absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 animate-dark-gradient bg-gradient-to-br from-[#0f2027]/80 via-[#2c5364]/60 to-[#232526]/90 opacity-80" />
          <div className="absolute inset-0 bg-black/60" style={{maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, black 100%)'}} />
        </div>
      </div>
      {/* Animated Particles */}
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight tracking-tight text-black dark:text-white dark:drop-shadow-dark-glow">
            Yash Chavan
          </h1>
          <h2 className="font-inter text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 font-medium text-slate-700 dark:text-white/90">
            Computer Engineering Student
          </h2>
          <p className="font-inter text-lg sm:text-xl md:text-2xl mb-16 max-w-3xl mx-auto leading-relaxed text-slate-700 dark:text-white/80">
          Code. Create. Dominate.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up">
          <a href="/Yash_Resume.pdf" download className="inline-block">
            <Button 
              size="lg"
              className="bg-accent text-white font-inter font-bold px-10 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:bg-accent/90 hover:shadow-xl group dark:border-2 dark:border-emerald/60 dark:hover:shadow-glow-dark dark:hover:border-emerald"
            >
              <Download className="mr-3 h-6 w-6 group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </a>
          <Button 
            onClick={scrollToProjects}
            size="lg"
            className="bg-accent text-white font-inter font-bold px-10 py-4 text-lg rounded-full transition-all duration-300 shadow-lg hover:bg-accent/90 hover:shadow-xl group dark:border-2 dark:border-emerald/60 dark:hover:shadow-glow-dark dark:hover:border-emerald"
          >
            Explore My Work
            <div className="ml-3 w-2 h-2 bg-white rounded-full group-hover:animate-pulse"></div>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 animate-slide-in-right">
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            asChild
          >
            <a href="https://github.com/YashChavan05" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-black dark:text-white" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            asChild
          >
            <a href="https://linkedin.com/in/yash-chavan-78b009233" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6 text-black dark:text-white" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            asChild
          >
            <a href="https://instagram.com/the_yashchavan" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-6 w-6 text-black dark:text-white" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            asChild
          >
            <a href="mailto:yashkiranchavan05@gmail.com">
              <Mail className="h-6 w-6 text-black dark:text-white" />
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      <style>{`
        @keyframes dark-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-dark-gradient {
          background-size: 200% 200%;
          animation: dark-gradient 8s ease-in-out infinite;
        }
        .dark .drop-shadow-dark-glow {
          filter: drop-shadow(0 0 32px #00ffd0cc) drop-shadow(0 2px 8px #00ffd044);
        }
        .dark .shadow-glow-dark {
          box-shadow: 0 0 32px 8px #00ffd088, 0 2px 8px 0 #00ffd044;
        }
      `}</style>
    </section>
  )
}