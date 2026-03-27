import { useState, useEffect } from "react"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const container = document.querySelector(".snap-y")
    const handleScroll = () => {
      if (container) setIsScrolled(container.scrollTop > 50)
    }
    container?.addEventListener("scroll", handleScroll)
    return () => container?.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "py-4 bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl" 
          : "py-8 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-purple-500 p-[1px] group-hover:rotate-12 transition-transform duration-500">
              <div className="w-full h-full bg-[#09090b] rounded-[11px] flex items-center justify-center font-playfair font-bold text-white text-xl">
                Y
              </div>
            </div>
            <span className="font-playfair text-2xl font-bold text-white tracking-tight hidden sm:block group-hover:text-primary transition-colors">
              Yash<span className="text-primary group-hover:text-white transition-colors">.</span>Chavan
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <div className="flex items-center bg-white/5 backdrop-blur-md rounded-2xl p-1 border border-white/5 mr-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-6 py-2 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="h-8 w-[1px] bg-white/10 mr-4" />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/5 rounded-xl"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#09090b] border-b border-white/5 shadow-2xl lg:hidden p-6"
          >
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-6 py-4 rounded-2xl text-lg font-medium text-white/60 hover:text-primary hover:bg-white/5 transition-all duration-300"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}