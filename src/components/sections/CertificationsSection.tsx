import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { TiltCard } from "@/components/ui/TiltCard"

export function CertificationsSection() {
  const certifications = [
    {
      title: "Full Stack Development",
      issuer: "Coursera",
      date: "2023",
      icon: Award,
    },
    {
      title: "Data Science Specialization",
      issuer: "IBM",
      date: "2022",
      icon: Zap,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any } 
    }
  }

  return (
    <section id="certifications" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Recognitions
          </h2>
          <p className="font-outfit text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            A testament to <span className="text-primary font-bold">academic excellence</span> and <span className="text-accent font-bold">continuous learning</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <motion.div key={cert.title} variants={itemVariants}>
              <TiltCard>
                <Card className="bg-white/[0.02] border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden group luxury-card">
                  <CardContent className="p-8 flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center border border-white/5 shrink-0 group-hover:scale-105 transition-all duration-500">
                      <Zap className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-playfair text-lg font-bold text-white group-hover:text-primary transition-colors duration-500 tracking-tight leading-tight">
                        {cert.title}
                      </h4>
                      <div className="flex flex-col text-[10px] text-white/40 font-outfit uppercase tracking-widest gap-0.5">
                        <span className="text-white/60 font-black">{cert.issuer}</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}