import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectsGallery from "./pages/ProjectsGallery";
import { useEffect } from "react"

function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.id = 'custom-cursor-dot'
    document.body.appendChild(cursor)
    const style = cursor.style
    style.position = 'fixed'
    style.zIndex = '9999'
    style.width = '10px'
    style.height = '10px'
    style.borderRadius = '50%'
    style.pointerEvents = 'none'
    style.transition = 'transform 0.15s ease-out, opacity 0.15s ease-out, background 0.15s ease-out'
    style.transform = 'translate(-50%, -50%) scale(1)'
    style.mixBlendMode = 'difference'
    style.background = 'white'
    style.opacity = '0.5'

    const move = (e: MouseEvent) => {
      style.left = e.clientX + 'px'
      style.top = e.clientY + 'px'
    }
    const grow = () => {
      style.transform = 'translate(-50%, -50%) scale(2.5)'
      style.opacity = '0.8'
    }
    const shrink = () => {
      style.transform = 'translate(-50%, -50%) scale(1)'
      style.opacity = '0.5'
    }
    document.addEventListener('mousemove', move)
    const targets = document.querySelectorAll('a, button, input, textarea, [role="button"], .cursor-pointer')
    targets.forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', move)
      cursor.remove()
      targets.forEach(el => {
        el.removeEventListener('mouseenter', grow)
        el.removeEventListener('mouseleave', shrink)
      })
    }
  }, [])
  return null
}

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<ProjectsGallery />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CustomCursor />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
