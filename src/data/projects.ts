export type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
  featured: boolean
}

export const projects: Project[] = [
  {
    title: "ROI Systems - Real-Time Investment Analytics",
    description: "ROI Systems is a real-time financial analytics platform that transforms live stock market data into actionable investment insights. It features interactive market visualizations, ROI computation, technical indicators, and AI-generated insights to help users analyze trends, assess risk, and make data-driven investment decisions through an intuitive dashboard.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    tech: ["React", "Node.js", "MongoDB", "Yahoo Finance API", "Chart.js"],
    github: "https://github.com/YashChavan05/ROI-Systems",
    live: "",
    featured: true
  },
  {
    title: "FlexiRent - Rental Management System",
    description: "FlexiRent is an end-to-end rental management platform that streamlines product discovery, booking, and dynamic invoicing for customers, while equipping shopkeepers with powerful tools for inventory control, order tracking, and performance analytics — all within a sleek, intuitive interface.",
    image: "https://spectrumrealtypm.com/wp-content/uploads/2022/08/Rental-property-background-R-S-1200x600.jpg",
    tech: ["React", "MongoDB", "Razorpay", "Typescript"],
    github: "https://github.com/YashChavan05/FlexiRent",
    live: "",
    featured: true
  },
  {
    title: "FitAI-Coach",
    description: "AI-powered personal fitness assistant that uses pose detection to track workouts, correct posture, count reps, and estimate calories. Built using Python, TensorFlow, and Streamlit for real-time feedback and progress tracking.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "MatplotLib", "RoboFlow API", "Pandas"],
    github: "https://github.com/YashChavan05/FitAI_Coach",
    live: "",
    featured: false
  },
  {
    title: "STOXIGHT – AI-Powered Stock Market Predictor",
    description: "Real-time stock dashboard using Python + Streamlit with interactive Plotly graphs. Sentiment analysis from news using VADER and TextBlob, boosting prediction accuracy by 18%. Included technical indicators like RSI and moving averages.",
    image: "/src/assets/project-finance.jpg",
    tech: ["Python", "Streamlit", "Plotly", "VADER", "TextBlob", "Pandas"],
    github: "https://github.com/YashChavan05",
    live: "",
    featured: false
  },
  {
    title: "GYANGANJ – TikTok-Style Wikipedia",
    description: "Built a Flutter app for vertical-scrolling through Wikipedia articles. AI-generated audio summaries using Python. Firebase-based personalization, increasing user engagement by 22%.",
    image: "/src/assets/project-ai-tasks.jpg",
    tech: ["Flutter", "Python", "Firebase", "AI", "Wikipedia API"],
    github: "https://github.com/YashChavan05",
    live: "",
    featured: false
  },
  {
    title: "VPN Sneak",
    description: "Developed secure Android VPN client with OpenVPN and Flutter. Deployed VPN servers via Raspberry Pi and ESP-32. Won 1st place at DIPEX 2024, Cybersecurity category.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter", "OpenVPN", "Raspberry Pi", "ESP-32", "Android"],
    github: "https://github.com/YashChavan05",
    live: "",
    featured: false
  },
  {
    title: "PyPass Manager",
    description: "Python Tkinter-based GUI for password generation and secure storage. Clipboard integration and entropy-based password logic. Received 90%+ positive feedback during testing.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tech: ["Python", "Tkinter", "Cryptography", "SQLite"],
    github: "https://github.com/YashChavan05",
    live: "",
    featured: false
  }
]


