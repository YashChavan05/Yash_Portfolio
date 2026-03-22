import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Zap, Users } from "lucide-react"
import profileImage from "@/assets/profile.jpeg"

export function AboutSection() {
  const skills = [
    "Python", "C", "C++", "Java", "SQL", "PHP", "JavaScript",
    "Flutter", "Tkinter", "Pandas", "NumPy", "MATLAB", "TensorFlow", "Matplotlib",
    "MySQL", "Excel", "Tableau", "Git", "Android Studio", "VS Code"
  ]

  const qualities = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code with modern best practices."
    },
    {
      icon: Palette,
      title: "Design-Minded",
      description: "Strong eye for UI/UX design with attention to detail and user experience."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interactions."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication and leadership skills."
    }
  ]

  return (
    <section id="about" className="py-30 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="font-playfair text-luxury-lg md:text-luxury-xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-18 items-center mb-20">
          {/* Text on the left */}
          <div className="space-y-8 scroll-reveal order-2 lg:order-1">
            <h3 className="font-playfair text-luxury-md font-semibold text-foreground">
              Computer Engineering Student & Tech Enthusiast
            </h3>
            <div className="space-y-6 font-inter text-lg text-muted-foreground leading-relaxed">
              <p>
                I’m a developer who enjoys building practical and scalable solutions using modern web technologies. My focus lies in creating clean, efficient, and user-focused applications, with a growing interest in AI and data-driven systems. I believe in learning by building and continuously improving through real-world projects.              </p>
              <p>
                I enjoy solving complex problems through clean, efficient code. I actively explore new tech, contribute to open-source, and participate in tech competitions.
              </p>
            </div>
          </div>
          {/* Image on the right */}
          <div className="space-y-8 scroll-reveal order-1 lg:order-2 flex items-center justify-center h-full">
            <div className="relative">
              <img
                src={profileImage}
                alt="Yash Kiran Chavan"
                className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-luxury"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}