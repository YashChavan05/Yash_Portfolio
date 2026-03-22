import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-3 bg-card border-t border-border/50 text-xs">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="font-inter text-muted-foreground text-center">
            © {currentYear} Yash Kiran Chavan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}