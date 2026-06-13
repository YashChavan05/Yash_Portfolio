import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yashchavan",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/yashchavan",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:yash@example.com",
      icon: Mail,
    },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a
              href="/"
              className="font-playfair text-2xl text-black dark:text-white"
              style={{
                fontFamily: "'Brush Script MT', cursive, 'Playfair Display', serif",
                textShadow: "0 2px 8px rgba(47,255,176,0.18)",
              }}
            >
              Yash Chavan
            </a>
            <p className="font-inter text-sm text-muted-foreground">
              Full Stack Developer
            </p>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="font-inter text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={name}
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-inter text-xs text-muted-foreground">
            © {currentYear} Yash Chavan. All rights reserved.
          </p>
          <p className="font-inter text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-accent fill-accent" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
