import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
      setIsSubmitting(false)
    }, 1000)
  }

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
      value: "+91 8799883659",
      href: "tel:+918799883659"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, India",
      href: "https://maps.google.com"
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/YashChavan05",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yash-chavan-78b009233",
      color: "hover:text-primary"
    }
  ]

  return (
    <section id="contact" className="py-10 relative luxury-contact-section overflow-hidden">
      {/* Animated Gradient or Particle Background */}
      <div className="absolute inset-0 z-0 animate-gradient-move bg-gradient-to-br from-accent/10 via-background to-emerald/10 blur-[2px] opacity-80" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          {/* Decorative Accent Bar */}
          <div className="mx-auto mb-4 w-24 h-1 rounded-full bg-gradient-to-r from-accent to-emerald animate-pulse-glow" />
          <h2 className="font-playfair text-luxury-lg md:text-luxury-xl font-bold text-foreground mb-4 luxury-title drop-shadow-glow animate-slide-in-up">
            Let's Work Together
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="luxury-card border-2 border-accent/30 bg-gradient-luxury/80 shadow-glow animate-float-in-left p-3 md:p-4 transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-1 dark:bg-black/60 dark:bg-gradient-to-br dark:from-black/80 dark:via-accent/10 dark:to-black/60 dark:backdrop-blur-xl dark:shadow-glow-accent">
              <CardHeader className="pb-2">
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Get in Touch
                </h3>
                <p className="font-inter text-sm text-muted-foreground">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
              </CardHeader>
              <CardContent className="space-y-2">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent/10 transition-colors duration-300 group"
                  >
                    <div className="w-9 h-9 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <info.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-inter text-xs font-medium text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="font-inter text-sm text-foreground group-hover:text-accent transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="luxury-card border-2 border-accent/30 bg-gradient-luxury/80 shadow-glow animate-float-in-left p-3 md:p-4 transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-1 dark:bg-black/60 dark:bg-gradient-to-br dark:from-black/80 dark:via-accent/10 dark:to-black/60 dark:backdrop-blur-xl dark:shadow-glow-accent" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-2">
                <h4 className="font-playfair text-lg font-semibold text-foreground">
                  Connect with Me
                </h4>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.label}
                      variant="ghost"
                      size="icon"
                      className={`h-9 w-9 rounded-full bg-accent/10 hover:bg-accent/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="luxury-card border-2 border-accent/40 bg-gradient-luxury/90 shadow-glow animate-float-in-right p-3 md:p-6 transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-1 backdrop-blur-xl dark:bg-black/70 dark:bg-gradient-to-br dark:from-black/90 dark:via-accent/10 dark:to-black/70 dark:backdrop-blur-xl dark:shadow-glow-accent">
              <CardHeader className="pb-2">
                <h3 className="font-playfair text-xl font-semibold text-foreground">
                  Send Message
                </h3>
              </CardHeader>
              <CardContent>
                <form
                  action="https://formspree.io/f/mjkovoqy"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid md:grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <Label htmlFor="name" className="font-inter font-medium text-foreground text-sm">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        required
                        className="border-border/50 focus:border-accent focus:ring-accent/20 transition-colors duration-300 text-base py-3"
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="email" className="font-inter font-medium text-foreground text-sm">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="border-border/50 focus:border-accent focus:ring-accent/20 transition-colors duration-300 text-base py-3"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="subject" className="font-inter font-medium text-foreground text-sm">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      required
                      className="border-border/50 focus:border-accent focus:ring-accent/20 transition-colors duration-300 text-base py-3"
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="message" className="font-inter font-medium text-foreground text-sm">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or how I can help you..."
                      required
                      rows={6}
                      className="border-border/50 focus:border-accent focus:ring-accent/20 transition-colors duration-300 resize-none text-base py-3"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="sm"
                    className="w-full bg-gradient-to-r from-accent to-emerald hover:from-emerald hover:to-accent text-white dark:text-black font-inter font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-glow hover:shadow-glow-lg group text-lg tracking-wide animate-pulse-glow"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <style>{`
        .luxury-card {
          box-shadow: 0 8px 40px 0 hsl(var(--cool-gray, 210, 22%, 49%) / 0.10), 0 1.5px 8px 0 hsl(var(--dark-gray, 222, 47%, 11%) / 0.08);
          border-radius: 1.5rem;
          backdrop-filter: blur(18px) saturate(1.2);
          -webkit-backdrop-filter: blur(18px) saturate(1.2);
        }
        .shadow-glow {
          box-shadow: 0 0 32px hsl(var(--accent, 160, 100%, 40%) / 0.18), 0 2px 8px 0 hsl(var(--accent, 160, 100%, 40%) / 0.10);
        }
        .shadow-glow-lg {
          box-shadow: 0 0 64px hsl(var(--accent, 160, 100%, 40%) / 0.28), 0 4px 16px 0 hsl(var(--accent, 160, 100%, 40%) / 0.18);
        }
        .animate-float-in-left {
          animation: float-in-left 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-float-in-right {
          animation: float-in-right 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes float-in-left {
          0% { opacity: 0; transform: translateY(40px) translateX(-40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) translateX(0) scale(1); }
        }
        @keyframes float-in-right {
          0% { opacity: 0; transform: translateY(40px) translateX(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) translateX(0) scale(1); }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .drop-shadow-glow {
          filter: drop-shadow(0 0 16px hsl(var(--accent, 160, 100%, 40%) / 0.25));
        }
        .animate-pulse-glow {
          animation: pulse-glow 2.2s infinite alternate;
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 hsl(var(--accent, 160, 100%, 40%) / 0.18); }
          100% { box-shadow: 0 0 24px 8px hsl(var(--accent, 160, 100%, 40%) / 0.22); }
        }
        .luxury-title {
          letter-spacing: 0.04em;
        }
        .dark .luxury-card {
          background: linear-gradient(135deg, rgba(10,10,10,0.92) 70%, rgba(47,255,176,0.08) 100%);
          border-color: rgba(47,255,176,0.18);
        }
        .dark .shadow-glow-accent {
          box-shadow: 0 0 48px 0 rgba(47,255,176,0.18), 0 2px 8px 0 rgba(47,255,176,0.10);
        }
      `}</style>
    </section>
  )
}