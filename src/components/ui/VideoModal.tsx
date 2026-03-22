import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { motion } from "framer-motion"

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
    videoUrl: string | null
    title?: string
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
    // Helper to determine video type and get URL
    const getVideoContent = (url: string) => {
        if (!url) return null

        // Handle Google Drive links
        if (url.includes("drive.google.com")) {
            // Convert /view or /sharing to /preview for embedding
            const embedUrl = url.replace(/\/view.*$/, "/preview").replace(/\/sharing.*$/, "/preview")
            return (
                <iframe
                    src={embedUrl}
                    className="w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            )
        }

        // Handle YouTube links
        if (url.includes("youtube.com") || url.includes("youtu.be")) {
            const videoId = url.includes("v=")
                ? url.split("v=")[1]?.split("&")[0]
                : url.split("/").pop()
            return (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            )
        }

        // Handle direct video files (mp4, webm, ogg)
        if (url.match(/\.(mp4|webm|ogg)$/i)) {
            return (
                <video
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                >
                    <source src={url} type={`video/${url.split('.').pop()}`} />
                    Your browser does not support the video tag.
                </video>
            )
        }

        // Default to iframe for other sources
        return (
            <iframe
                src={url}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        )
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black/95 border-accent/20 backdrop-blur-xl">
                <DialogHeader className="sr-only">
                    <DialogTitle>{title || "Project Demo"}</DialogTitle>
                </DialogHeader>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-video w-full flex items-center justify-center bg-black"
                >
                    {videoUrl && getVideoContent(videoUrl)}
                </motion.div>
            </DialogContent>
        </Dialog>
    )
}
