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
    style.width = '12px'
    style.height = '12px'
    style.borderRadius = '50%'
    style.pointerEvents = 'none'
    style.transition = 'transform 0.18s cubic-bezier(0.4,0,0.2,1), box-shadow 0.18s, background 0.18s'
    style.transform = 'translate(-50%, -50%) scale(1)'
    let mouseX = 0, mouseY = 0

    // Theme-aware color
    const setCursorColor = () => {
      const isDark = document.documentElement.classList.contains('dark')
      if (isDark) {
        style.background = 'radial-gradient(circle, #fff 60%, #bbb 100%)'
        style.boxShadow = '0 0 24px 6px #fff8, 0 0 0 2px #fff4 inset'
      } else {
        style.background = 'radial-gradient(circle, #111 60%, #444 100%)'
        style.boxShadow = '0 0 24px 6px #1118, 0 0 0 2px #1114 inset'
      }
    }
    setCursorColor()
    const observer = new MutationObserver(setCursorColor)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const move = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      style.left = mouseX + 'px'
      style.top = mouseY + 'px'
    }
    const grow = () => {
      style.transform = 'translate(-50%, -50%) scale(1.7)'
      const isDark = document.documentElement.classList.contains('dark')
      style.boxShadow = isDark
        ? '0 0 48px 12px #fffA, 0 0 0 2px #fff4 inset'
        : '0 0 48px 12px #111A, 0 0 0 2px #1114 inset'
    }
    const shrink = () => {
      style.transform = 'translate(-50%, -50%) scale(1)'
      setCursorColor()
    }
    document.addEventListener('mousemove', move)
    document.querySelectorAll('a, button, input, textarea, [role="button"], .cursor-pointer').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', move)
      cursor.remove()
      observer.disconnect()
      document.querySelectorAll('a, button, input, textarea, [role="button"], .cursor-pointer').forEach(el => {
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
