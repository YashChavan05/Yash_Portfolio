import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const companyLogos: Record<string, string> = {
  'Cisco': '/cisco.svg',
  'Mastercard': '/mastercard.svg',
  'TATA': '/tata.svg',
  'HP': '/hp.svg',
  'Deloitte': '/deloitte.svg',
  'Microsoft': '/microsoft.svg',
  'Udemy': '/udemy.svg',
};

export function CertificationsSection() {
  const certifications = [
    {
      name: "Junior Cybersecurity Analyst",
      provider: "Cisco (July 2025)",
      url: "#"
    },
    {
      name: "Cybersecurity Virtual Experience",
      provider: "Mastercard (July 2025)",
      url: "#"
    },
    {
      name: "Generative AI",
      provider: "TATA (June 2025)",
      url: "#"
    },
    {
      name: "Data Science & Analytics",
      provider: "HP (June 2025)",
      url: "#"
    },
    {
      name: "Cyber Security",
      provider: "Deloitte (May 2025)",
      url: "#"
    },
    {
      name: "Python Programming",
      provider: "Microsoft (Feb 2025)",
      url: "#"
    },
    {
      name: "Python + Flask",
      provider: "Udemy (Dec 2024)",
      url: "#"
    },
    {
      name: "Data Science with Python",
      provider: "Udemy (Dec 2024)",
      url: "#"
    },
    {
      name: "Core JAVA Bootcamp",
      provider: "Udemy (Dec 2024)",
      url: "#"
    },
    {
      name: "AWS Cloud Practitioner",
      provider: "Amazon (Nov 2024)",
      url: "#"
    }
  ];

  return (
    <section id="certifications" className="py-30 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="font-playfair text-luxury-lg md:text-luxury-xl font-bold text-foreground mb-6">
            Certifications
          </h2>
        </div>
        <div className="w-full py-8 px-2 bg-gradient-to-br from-mint/20 via-background to-emerald/10 rounded-3xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={cert.name + cert.provider}
                className="group luxury-card bg-gradient-luxury/80 border-2 border-accent/30 shadow-xl transition-all duration-500 rounded-2xl animate-fade-in h-full min-h-[180px] flex flex-col justify-center hover:shadow-glow hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${index * 0.08}s`, maxWidth: '100%' }}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center h-full min-h-[140px]">
                  <div className="flex items-center justify-center mb-4" style={{ height: '5rem' }}>
                    {(() => {
                      const logoKey = Object.keys(companyLogos).find(key => cert.provider.toLowerCase().includes(key.toLowerCase())) || '';
                      const logoUrl = companyLogos[logoKey] || null;
                      if (logoUrl) {
                        return <img src={logoUrl} alt={cert.provider + ' logo'} className="w-14 h-14 object-contain" style={{ maxWidth: '5rem', maxHeight: '5rem', minWidth: '5rem', minHeight: '5rem' }} />;
                      } else {
                        return <Award className="h-16 w-16 text-accent opacity-40" />;
                      }
                    })()}
                  </div>
                  <span className="font-playfair text-lg font-bold text-foreground mb-2 text-center">
                    {cert.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 