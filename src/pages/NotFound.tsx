import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Zap } from "lucide-react"

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-section">
      <div className="container mx-auto px-6">
        <Card className="luxury-card max-w-2xl mx-auto text-center border-none">
          <CardContent className="p-16">
            {/* Animated 404 */}
            <div className="mb-12">
              <h1 className="font-playfair text-9xl font-bold text-transparent bg-gradient-accent bg-clip-text animate-glow-pulse">
                404
              </h1>
              <div className="flex justify-center mt-4">
                <Zap className="h-8 w-8 text-emerald animate-bounce" />
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-12 space-y-4">
              <h2 className="font-playfair text-3xl font-semibold text-foreground">
                Page Not Found
              </h2>
              <p className="font-inter text-xl text-muted-foreground leading-relaxed max-w-md mx-auto">
                Oops! The page you're looking for seems to have wandered off into the digital void.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="luxury-button font-inter font-semibold px-8 py-3 rounded-full group"
              >
                <Link to="/">
                  <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Back to Home
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => window.history.back()}
                className="border-emerald/30 text-foreground hover:bg-emerald/10 font-inter font-semibold px-8 py-3 rounded-full group"
              >
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                Go Back
              </Button>
            </div>

            {/* Decorative Elements */}
            <div className="mt-16 flex justify-center space-x-4 opacity-30">
              <div className="w-2 h-2 bg-emerald rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-mint rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-platinum rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
