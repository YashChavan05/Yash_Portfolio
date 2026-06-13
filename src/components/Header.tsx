import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { ThemeToggle } from "./ThemeToggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const location = typeof window !== 'undefined' ? window.location : { pathname: '/' };
  const isHome = location.pathname === "/";
  const showExpanded = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-elegant border-b border-border/50"
          : "bg-transparent"
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="font-playfair text-4xl font text-black dark:text-white cursor-default select-none"
            style={{ fontFamily: "'Brush Script MT', cursive, 'Playfair Display', serif", textShadow: "0 2px 8px rgba(47,255,176,0.18), 0 1px 0 #fff" }}
            tabIndex={0}
            aria-label="Go to home page"
          >
            Yash Chavan
          </a>

          {/* Navigation Tabs or Hamburger Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div
              className={`hidden md:flex items-center space-x-8 transition-all duration-500 ease-in-out ${showExpanded ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-12 pointer-events-none absolute right-0'}`}
              style={{ minHeight: '48px' }}
            >
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-inter font-medium transition-colors duration-300 text-black dark:text-white hover:text-accent dark:hover:text-accent whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Navigation Toggle & Theme Toggle for Scrolled/Mobile State */}
            <div
              className={`flex items-center space-x-2 transition-all duration-500 ease-in-out ${showExpanded ? 'md:opacity-0 md:-translate-x-12 md:pointer-events-none' : 'opacity-100 translate-x-0 pointer-events-auto'}`}
              style={{ minHeight: '48px' }}
            >
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Open menu"
                className="md:hidden"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Vertical Navbar for Compressed Mode */}
        {isMobileMenuOpen && (
          <div className="absolute right-6 top-16 md:top-20 z-50 w-48 rounded-2xl shadow-xl bg-background/95 border border-border/60 animate-fade-in flex flex-col py-4 px-2 space-y-2 luxury-card transition-all duration-500">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => { scrollToSection(item.href); setIsMobileMenuOpen(false); }}
                className="w-full text-left px-4 py-2 rounded-lg font-inter font-medium text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}