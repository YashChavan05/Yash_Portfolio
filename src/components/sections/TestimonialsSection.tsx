import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Medal, Star } from "lucide-react"

export function TestimonialsSection() {
  const achievements = [
    {
      title: "1st Place – Tech-Titans, PCP 2K24",
      description: "April 2024",
      category: "Technical Competition",
      icon: Trophy,
      color: "text-yellow-500"
    },
    {
      title: "1st Place – DIPEX 2024 (Cybersecurity)",
      description: "March 2024, Navi Mumbai",
      category: "Cybersecurity",
      icon: Award,
      color: "text-emerald-500"
    },
    {
      title: "1st Place – Brain Teaser, InfoSpark 2K23",
      description: "October 2023",
      category: "Problem Solving",
      icon: Medal,
      color: "text-blue-500"
    },
    {
      title: "1st Place – Tech-Vaganza, SCOE",
      description: "November 2022",
      category: "Technical Innovation",
      icon: Star,
      color: "text-purple-500"
    }
  ]

  return (
    <section id="achievements" className="py-30 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="font-playfair text-luxury-lg md:text-luxury-xl font-bold text-foreground mb-6">
            Awards & Achievements
          </h2>
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognition for excellence in technical competitions and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card 
                key={achievement.title}
                className="group luxury-card border-none animate-scale-in stagger-animation"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br from-emerald/10 to-emerald/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300`}>
                    <Icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  <h4 className="font-playfair text-lg font-semibold text-foreground mb-3 group-hover:text-emerald transition-colors duration-300">
                    {achievement.title}
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground mb-3">
                    {achievement.description}
                  </p>
                  <Badge 
                    variant="outline" 
                    className="text-xs border-emerald/30 text-emerald hover:bg-emerald/10 transition-colors duration-300"
                  >
                    {achievement.category}
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}