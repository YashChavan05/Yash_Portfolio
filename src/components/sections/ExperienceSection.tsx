import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Building2, GraduationCap, Award } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const companyLogos: Record<string, string> = {
  'Mastercard': '/mastercard.svg',
  'TATA': '/tata.svg',
  'HP': '/hp.svg',
  'Deloitte': '/deloitte.svg',
  'Microsoft': '/microsoft.svg',
  'Udemy': '/udemy.svg',
};

export function ExperienceSection() {
  const experiences = [
    {
      type: "education",
      title: "Diploma in Information Technology",
      company: "Pimpri Chinchwad Polytechnic, Pune",
      period: "October 2021 - June 2024",
      location: "Pune, India",
      description: "Completed Diploma in IT with GPA 9.6, building a strong foundation in programming & software development.",
      skills: ["Information Technology", "Programming", "Databases", "Software Development"]
    },
    {
      type: "work",
      title: "Intern",
      company: "KPIT Technologies",
      period: "June 2024 - September 2024",
      location: "Pune, India",
      description: "Built and optimized CAN diagnostics in embedded automotive systems using C and Python, improving ECU response by 12% and accelerating validation by 15%.",
      skills: ["C", "Python", "Embedded Systems", "Automotive", "ISTQB"]
    },
    {
      type: "education",
      title: "B.Tech in Computer Engineering",
      company: "MIT Academy of Engineering, Pune",
      period: "September 2024 - June 2027",
      location: "Pune, India",
      description: "Pursuing Computer Engineering with a focus on embedded systems, AI, and cybersecurity. GPA 8.06. Actively engaged in projects and tech competitions.",
      skills: ["Computer Engineering", "AI", "ML", "Cybersecurity"]
    }
  ]

  // Example structure for certifications with URLs
  const certifications = [
    {
      name: "Cybersecurity Virtual XP",
      provider: "Mastercard (July 2025)",
      url: "#" // Add your certificate URL here
    },
    {
      name: "Generative AI",
      provider: "TATA (June 2025)",
      url: "#"
    },
    {
      name: "Data Science & Analytics",
      provider: "HP (June 2025)",
      url: "#"
    },
    {
      name: "Cyber Security",
      provider: "Deloitte (May 2025)",
      url: "#"
    },
    {
      name: "Python Programming",
      provider: "Microsoft (Feb 2025)",
      url: "#"
    },
    {
      name: "Python + Flask",
      provider: "Udemy (Dec 2024)",
      url: "#"
    },
    {
      name: "Data Science with Python",
      provider: "Udemy (Dec 2024)",
      url: "#"
    },
    {
      name: "Core JAVA Bootcamp",
      provider: "Udemy (Dec 2024)",
      url: "#"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return Building2
      case "education":
        return GraduationCap
      default:
        return Award
    }
  }

  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const sectionHeight = rect.height
      const visible = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0))
      let percent = visible / sectionHeight
      percent = Math.max(0, Math.min(1, percent))
      setProgress(percent)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="experience" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          {/* Download CV button removed */}
        </div>

        {/* Timeline */}
        <div className="w-full flex flex-col items-center">
          {/* Timeline Line with Dots - Hidden on mobile */}
          <div className="relative hidden md:flex items-center justify-between mb-10 w-full max-w-5xl mx-auto" style={{minHeight: '32px'}}>
            {/* Timeline Progress Bar */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black/20 dark:bg-white/20 opacity-60 z-0" style={{transform: 'translateY(-50%)'}}></div>
            <div
              className="absolute top-1/2 left-0 h-1 rounded-full bg-black dark:bg-white z-10 transition-all duration-700"
              style={{
                width: `${progress * 100}%`,
                transform: 'translateY(-50%)',
                boxShadow: '0 0 32px 8px rgba(255,255,255,0.18), 0 2px 8px 0 rgba(255,255,255,0.10)'
              }}
            />
            {/* Timeline Dots */}
            <div className="absolute top-1/2 left-0 w-full flex justify-between items-center z-20" style={{transform: 'translateY(-50%)'}}>
              {experiences.map((exp, idx) => {
                const dotFraction = experiences.length === 1 ? 1 : idx / (experiences.length - 1)
                const isGlowing = progress >= dotFraction - 0.01
                return (
                  <div key={exp.title + '-dot'} className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 bg-accent rounded-full border-2 border-background transition-all duration-300 ${isGlowing ? 'glow-dot' : ''}`}
                      style={{
                        boxShadow: isGlowing
                          ? '0 0 24px 8px rgba(47,255,176,0.35), 0 0 0 4px rgba(255,255,255,0.18)'
                          : '0 0 8px 2px var(--tw-shadow-color, #fff)'
                      }}
                    ></div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* Timeline Cards - Vertical on mobile, Horizontal on desktop */}
          <div className="flex flex-col md:flex-row justify-center items-stretch w-full max-w-5xl mx-auto gap-8">
            {experiences.map((exp, index) => {
              const Icon = getIcon(exp.type)
              return (
                <div key={`${exp.company}-${exp.period}`} className="flex flex-col items-center flex-1 w-full max-w-md mx-auto">
                  <Card className="h-full group border-border/50 bg-gradient-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 w-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className={`w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300 ${exp.type === 'education' ? 'bg-primary/10 group-hover:bg-primary/20' : ''}`}>
                          <Icon className={`h-6 w-6 ${exp.type === 'education' ? 'text-primary' : 'text-accent'}`} />
                        </div>
                        <Badge 
                          variant="outline" 
                          className="text-xs font-medium border-border/50"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="font-inter text-base font-medium text-primary">
                        {exp.company}
                      </p>
                      <p className="font-inter text-sm text-muted-foreground">
                        {exp.location}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="text-xs bg-muted/50 hover:bg-accent/20 transition-colors duration-300"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <style>{`
        .glow-dot {
          animation: dot-glow 1.2s cubic-bezier(0.4,0,0.2,1) both;
          box-shadow: 0 0 24px 8px rgba(47,255,176,0.35), 0 0 0 4px rgba(255,255,255,0.18);
        }
        @keyframes dot-glow {
          0% { box-shadow: 0 0 0 0 rgba(47,255,176,0.0), 0 0 0 0 rgba(255,255,255,0.0); }
          60% { box-shadow: 0 0 32px 12px rgba(47,255,176,0.45), 0 0 0 8px rgba(255,255,255,0.22); }
          100% { box-shadow: 0 0 24px 8px rgba(47,255,176,0.35), 0 0 0 4px rgba(255,255,255,0.18); }
        }
      `}</style>
    </section>
  )
}