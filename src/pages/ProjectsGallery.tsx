import { useEffect } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowLeft } from "lucide-react"
import { projects } from "@/data/projects"
import { Link } from "react-router-dom"
import { motion, cubicBezier, type Variants } from "framer-motion"

const easeLuxury = cubicBezier(0.22, 1, 0.36, 1)

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: easeLuxury } }
}

const ProjectsGallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <motion.main
        className="pt-28 pb-20"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.45, ease: easeLuxury }}
      >
        <div className="container mx-auto px-6">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="font-playfair text-luxury-lg md:text-luxury-xl font-bold">All Projects</h1>
              <p className="font-inter text-muted-foreground mt-2">A complete gallery of my work</p>
            </div>
            <Button variant="ghost" asChild className="font-montserrat">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to home
              </Link>
            </Button>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {projects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card
                  className="group overflow-hidden border-border/50 bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1 luxury-card rounded-3xl h-full flex flex-col"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <CardHeader className="pb-2">
                    <h3 className="font-playfair text-xl font-semibold text-foreground line-clamp-2">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="pb-2 flex-1 flex flex-col">
                    <p className="font-inter text-sm text-muted-foreground mb-3 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 min-h-[40px]">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-montserrat">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 pt-2">
                    <Button variant="outline" size="sm" className="font-montserrat" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-2" /> Code
                      </a>
                    </Button>
                    <Button size="sm" className="bg-accent hover:bg-accent/90 font-montserrat" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" /> Live
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.main>
      <Footer />
    </div>
  )
}

export default ProjectsGallery


