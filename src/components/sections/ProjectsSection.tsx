import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import { projects } from "@/data/projects"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import { VideoModal } from "@/components/ui/VideoModal"
import { TiltCard } from "@/components/ui/TiltCard"

export function ProjectsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string>("")

  const handleOpenVideo = (videoUrl: string, title: string) => {
    setSelectedVideo(videoUrl)
    setSelectedTitle(title)
  }

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
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } 
    }
  }

  return (
    <section id="projects" className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="container mx-auto px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="font-outfit text-lg text-white/40 max-w-2xl mx-auto leading-relaxed">
            Blended <span className="text-primary font-bold">engineering precision</span> with <span className="text-accent font-bold">user-centric design</span>.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {projects.filter(p => p.featured).map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <TiltCard>
                <Card className="group overflow-hidden bg-white/[0.02] border-white/5 hover:border-primary/20 transition-all duration-500 h-full flex flex-col luxury-card backdrop-blur-md">
                  <div className="relative overflow-hidden aspect-[21/9]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80" />
                  </div>

                  <CardHeader className="pt-4 pb-1 px-6">
                    <h3 className="font-playfair text-xl font-black text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="flex-grow px-6">
                    <p className="font-outfit text-white/30 mb-4 leading-relaxed text-xs group-hover:text-white/50 transition-colors line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-[8px] border-white/5 text-white/20 px-2 py-0 font-outfit uppercase tracking-widest"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3 pb-6 pt-2 px-6">
                    <Button
                      variant="outline"
                      className="flex-1 bg-white/5 border-white/5 hover:border-white/20 text-white/40 hover:text-white h-9 text-[10px] rounded-full transition-all group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      className="flex-1 bg-white text-black hover:bg-white/90 h-9 text-[10px] font-black rounded-full transition-all group/btn shadow-xl"
                      onClick={() => handleOpenVideo(project.live, project.title)}
                    >
                      <Play className="h-3 w-3 mr-2 fill-current" />
                      Demo
                    </Button>
                  </CardFooter>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center">
          <Button 
            className="bg-white/5 border border-white/10 hover:border-white/30 text-white/60 font-outfit text-xs px-8 py-5 rounded-full transition-all duration-300 group hover:bg-white/10" 
            asChild
          >
            <Link to="/projects" className="flex items-center gap-2">
              Explore More Archive
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                <ExternalLink className="h-4 w-4" />
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo}
        title={selectedTitle}
      />
    </section>
  )
}
