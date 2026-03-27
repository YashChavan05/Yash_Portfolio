import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Tech Solutions Inc.",
    period: "June 2024 - Present",
    description: "Developing and optimizing internal tools using React and Node.js. Improved performance by 30%.",
    tech: ["React", "TypeScript", "Node.js"]
  },
  {
    title: "Full Stack Developer (Freelance)",
    company: "Personal Projects & Clients",
    period: "2023 - 2024",
    description: "Built several custom web applications for small businesses. Focused on UI/UX and scalability.",
    tech: ["Next.js", "Tailwind", "Supabase"]
  },
  {
    title: "Open Source Contributor",
    company: "Various Projects",
    period: "2022 - Present",
    description: "Contributing to various open-source projects on GitHub, focusing on bug fixes and new features.",
    tech: ["JavaScript", "Python", "Git"]
  }
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
    }
  }

  return (
    <section id="experience" className="relative h-screen flex items-center justify-center overflow-hidden" ref={sectionRef}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Journey
          </h2>
          <p className="font-outfit text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            A chronological timeline of <span className="text-primary font-bold">professional growth</span> and <span className="text-accent font-bold">technical milestones</span>.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:grid md:grid-cols-[1fr,2px,1fr] md:gap-12 items-center">
                {/* Info Card */}
                <div className={`${index % 2 === 0 ? "md:text-right" : "md:col-start-3"} order-2 md:order-none`}>
                  <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl backdrop-blur-3xl hover:border-primary/20 transition-all duration-500 group">
                    <span className="text-primary/60 text-[10px] font-black uppercase tracking-widest mb-2 block">{exp.period}</span>
                    <h4 className="font-playfair text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{exp.title}</h4>
                    <p className="text-white/60 font-medium text-sm mb-4">{exp.company}</p>
                    <p className="text-white/30 text-xs leading-relaxed mb-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {exp.tech.map(t => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-white/5 text-white/20 text-[8px] font-bold uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Line/Node */}
                <div className="hidden md:flex flex-col items-center h-full relative">
                  <div className="w-0.5 h-full bg-white/5" />
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/20 border border-primary/40 shadow-glow" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}