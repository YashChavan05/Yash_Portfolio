import { motion } from "framer-motion"
import { TiltCard } from "@/components/ui/TiltCard"
import profileImage from "@/assets/profile.jpeg"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] as any
      } 
    }
  }

  return (
    <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            The Architect
          </h2>
          <p className="font-outfit text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between <span className="text-primary font-bold">human intuition</span> and <span className="text-accent font-bold">digital logic</span>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Text area */}
          <motion.div variants={itemVariants} className="space-y-6 order-2 lg:order-1">
            <h3 className="font-playfair text-2xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Computer Engineering & <br />
              <span className="text-primary">Full-Stack Exploration</span>
            </h3>
            <div className="space-y-4 font-outfit text-base text-white/50 leading-relaxed font-light">
              <p>
                Developer focused on building <span className="text-white font-medium">practical and scalable</span> solutions. I specialize in clean, efficient applications with a deep interest in <span className="text-white font-medium">AI-driven systems</span> and embedded engineering.
              </p>
              <p>
                Active explorer of emerging technologies and frequent hackathon participant. I believe in the power of <span className="text-primary font-bold tracking-wide">continuous iteration</span> and learning by building.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-2">
              {["Problem Solver", "Quick Learner", "Creative Thinker", "Strategic Planner"].map((trait) => (
                <div key={trait} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-white/30 text-[10px] font-black uppercase tracking-widest hover:border-primary/30 transition-all duration-500">
                  {trait}
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3D Profile Image */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2 flex justify-center">
            <TiltCard className="w-full max-w-xs">
              <div className="relative group">
                <div className="absolute -inset-10 bg-gradient-to-tr from-primary/10 via-accent/5 to-transparent rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                
                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 p-2 bg-white/5 backdrop-blur-3xl shadow-3xl transition-all duration-500 group-hover:border-primary/30">
                  <img
                    src={profileImage}
                    alt="Yash Kiran Chavan"
                    className="w-full aspect-[4/5] rounded-[2.5rem] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  
                  {/* Premium info overlay */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-3xl">
                    <p className="text-white font-black text-sm tracking-tight text-center">YASH CHAVAN</p>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      <p className="text-primary text-[8px] font-black uppercase tracking-[0.2em]">Software Architect</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}