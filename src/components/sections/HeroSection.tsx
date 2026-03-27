import { Download, Github, Linkedin, Mail, Instagram, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])
  
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any }
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background - Soft Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] animate-pulse" />
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          opacity,
          rotateX: mousePosition.y * -0.05,
          rotateY: mousePosition.x * 0.05,
          x: mousePosition.x * 0.2,
          y: y1
        }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <motion.div variants={itemVariants}>
          <motion.span 
            className="inline-block py-1 pr-3 rounded-full text-primary/80 text-[10px] uppercase font-bold mb-6 tracking-[0.4em]"
          >
            // Available for new opportunities
          </motion.span>
          <h1 className="font-playfair text-6xl md:text-8xl font-black mb-6 leading-[1.1] tracking-tight text-white drop-shadow-2xl">
            Yash <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">Chavan</span>
          </h1>
          <h2 className="font-outfit text-xl md:text-2xl mb-8 font-light text-white/70 tracking-widest uppercase">
            Computer Engineering <span className="text-primary/60">&</span> Full-Stack Exploration
          </h2>
          <p className="font-outfit text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed text-white/30">
            Designing digital horizons with <span className="text-white/60 font-medium">precision engineering</span> and <span className="text-white/60 font-medium tracking-wide">user-centric intentionality.</span>
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-10 py-7 text-xs font-black rounded-full transition-all duration-500 shadow-2xl hover:scale-105 active:scale-95"
            asChild
          >
            <a href="/Yash_Resume.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
          <Button 
            onClick={scrollToProjects}
            variant="outline"
            size="lg"
            className="bg-transparent border-white/10 hover:border-white/40 text-white/60 hover:text-white px-10 py-7 text-xs font-bold rounded-full transition-all duration-500 backdrop-blur-md hover:scale-105 active:scale-95"
          >
            Explore Work
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center space-x-6"
        >
          {[
            { icon: Github, href: "https://github.com/YashChavan05" },
            { icon: Linkedin, href: "https://linkedin.com/in/yash-chavan-78b009233" },
            { icon: Instagram, href: "https://instagram.com/the_yashchavan" },
            { icon: Mail, href: "mailto:yashkiranchavan05@gmail.com" }
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/20 hover:text-primary transition-all duration-300 transform hover:scale-110"
            >
              <item.icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-primary/30 to-transparent" />
      </motion.div>
    </section>
  )
}