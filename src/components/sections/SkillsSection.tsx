import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/ui/TiltCard";

export function SkillsSection() {
  const skills = [
    "Python", "C", "C++", "Java", "SQL", "PHP", "JavaScript",
    "Flutter", "Tkinter", "Pandas", "NumPy", "MATLAB", "TensorFlow", "Matplotlib",
    "MySQL", "Excel", "Tableau", "Git", "Android Studio", "VS Code"
  ];

  const qualities = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable, scalable, and well-documented with best practices.",
      color: "from-blue-500/20"
    },
    {
      icon: Palette,
      title: "Design-Minded",
      description: "Focus on UI/UX with attention to detail and user experience.",
      color: "from-purple-500/20"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing speed, accessibility, and smooth interactions.",
      color: "from-primary/20"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with strong communication skills.",
      color: "from-emerald-500/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <section id="skills" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Expertise
          </h2>
          <p className="font-outfit text-lg text-white/40 max-w-xl mx-auto leading-relaxed">
            Professional toolkit for building <span className="text-primary font-bold tracking-wide">robust digital architecture.</span>
          </p>
        </motion.div>

        {/* Clean Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 mb-12 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "rgba(0, 242, 255, 0.2)",
                color: "var(--primary)"
              }}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-white/40 font-outfit text-[10px] text-center cursor-default transition-all duration-300 backdrop-blur-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        {/* Qualities Grid - More compact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {qualities.map((quality) => (
            <motion.div key={quality.title} variants={itemVariants}>
              <TiltCard>
                <Card className="bg-white/[0.02] border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden group luxury-card h-full">
                  <CardContent className="p-6 text-center flex flex-col items-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${quality.color} to-transparent rounded-xl flex items-center justify-center mb-4 border border-white/5 group-hover:scale-105 transition-all duration-500`}>
                      <quality.icon className="h-5 w-5 text-white/80 group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <h4 className="font-playfair text-lg font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-500">
                      {quality.title}
                    </h4>
                    <p className="font-outfit text-white/30 leading-snug text-xs group-hover:text-white/50 transition-colors">
                      {quality.description}
                    </p>
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}