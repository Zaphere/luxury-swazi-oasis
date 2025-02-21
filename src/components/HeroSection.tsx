
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById("content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          poster="/placeholder.svg" // Replace with actual poster image
        >
          <source src="/video-placeholder.mp4" type="video/mp4" /> {/* Replace with actual video */}
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 animate-fade-down">
          Lawu Le Ngwenya Lodge
        </h1>
        <p className="text-lg md:text-xl text-cream/90 max-w-2xl mb-8 animate-fade-up">
          Experience the harmonious blend of royal Swati heritage and contemporary luxury
          in the heart of Eswatini's pristine wilderness.
        </p>
        <div className="space-x-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            Book Your Stay
          </Button>
          <Button variant="outline" className="text-cream border-cream hover:bg-cream/10">
            Explore
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream/80 hover:text-cream transition-colors duration-200 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
