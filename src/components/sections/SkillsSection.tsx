import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

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
      description: "Writing maintainable, scalable, and well-documented code with modern best practices."
    },
    {
      icon: Palette,
      title: "Design-Minded",
      description: "Strong eye for UI/UX design with attention to detail and user experience."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and seamless user interactions."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with excellent communication and leadership skills."
    }
  ];

  return (
    <section id="skills" className="py-30 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="font-playfair text-luxury-lg md:text-luxury-xl font-bold text-foreground mb-6">
            Skills
          </h2>
        </div>
        {/* Animated horizontal scrolling skills marquee */}
        <div className="w-full mt-16 overflow-x-auto whitespace-nowrap py-4 relative no-scrollbar">
          <div className="inline-block animate-marquee min-w-full">
            {skills.concat(skills).map((skill, index) => (
              <Badge
                key={skill + '-' + index}
                variant="secondary"
                className="mx-2 mb-2 bg-gradient-luxury border border-border/30 text-foreground hover:bg-emerald/10 hover:border-emerald/50 transition-all duration-300 px-4 py-2 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .no-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera */
          }
        `}</style>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {qualities.map((quality, index) => (
            <Card
              key={quality.title}
              className="group luxury-card border-none animate-scale-in stagger-animation"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald/20 group-hover:scale-110 transition-all duration-300">
                  <quality.icon className="h-8 w-8 text-emerald" />
                </div>
                <h4 className="font-playfair text-xl font-semibold text-foreground mb-4 group-hover:text-emerald transition-colors duration-300">
                  {quality.title}
                </h4>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {quality.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 