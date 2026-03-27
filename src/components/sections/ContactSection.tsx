import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Send, Instagram } from "lucide-react"
import { motion } from "framer-motion"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yashkiranchavan05@gmail.com",
      href: "mailto:yashkiranchavan05@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 80101 27855",
      href: "tel:+918010127855"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Maharashtra, India",
      href: "#"
    }
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } 
    }
  }

  return (
    <section id="contact" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Connect
          </h2>
          <p className="font-outfit text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Let's discuss <span className="text-primary font-bold">future possibilities</span> and <span className="text-accent font-bold">creative architectural</span> solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="font-playfair text-3xl font-black text-white tracking-tight leading-tight">
              Awaiting your <br />
              <span className="text-primary">Inquiry</span>
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-primary/30 group-hover:scale-105 transition-all duration-500">
                    <info.icon className="h-6 w-6 text-white/40 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em] mb-1">{info.label}</p>
                    <a href={info.href} className="text-white/60 font-medium text-lg hover:text-white transition-colors">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links / Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-8">
            <p className="font-outfit text-white/40 leading-relaxed font-light">
              Always open for <span className="text-white">challenging engineering</span> roles and <span className="text-white">creative partnerships</span>. Let's build something exceptional together.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 px-8 py-6 rounded-full font-black text-xs shadow-glow-white hover:scale-105 transition-all duration-500">
                <Send className="w-4 h-4 mr-2" />
                Let's Talk
              </Button>
            </div>
            <div className="flex gap-6 pt-4">
              {[Github, Linkedin, Instagram, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 hover:border-primary/40 hover:scale-110 transition-all duration-500 text-white/20 hover:text-primary">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}