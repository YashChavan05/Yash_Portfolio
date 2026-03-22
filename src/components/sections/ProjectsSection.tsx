import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import { projects } from "@/data/projects"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import { VideoModal } from "@/components/ui/VideoModal"

export function ProjectsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string>("")

  const handleOpenVideo = (videoUrl: string, title: string) => {
    setSelectedVideo(videoUrl)
    setSelectedTitle(title)
  }

  return (
    <section id="projects" className="py-30 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="font-playfair text-luxury-lg md:text-luxury-xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, demonstrating expertise across full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden luxury-card border-none animate-scale-in stagger-animation"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>

              <CardHeader>
                <h3 className="font-playfair text-2xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-border/50 hover:border-accent/50 transition-colors duration-300 font-montserrat"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="group/btn font-montserrat"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 group/btn font-montserrat"
                  onClick={() => handleOpenVideo(project.live, project.title)}
                >
                  <Play className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  Live Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.04, y: -2, boxShadow: "0 12px 40px -12px rgba(47,255,176,0.35)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-block"
          >
            <Button size="lg" className="bg-accent hover:bg-accent/90 font-montserrat" asChild>
              <Link to="/projects">View more projects</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo}
        title={selectedTitle}
      />
    </section>
  )
}
