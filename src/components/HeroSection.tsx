
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
          poster="/lovable-uploads/6ab30f3c-38b6-4816-b29a-2a821c5d877b.png"
        >
          <source src="/video-placeholder.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Content with improved styling */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto relative">
          {/* Decorative elements */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-cream mb-6 animate-fade-down">
            Lawu Le Ngwenya Lodge
          </h1>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary rounded-full" />
        </div>
        
        <p className="text-lg md:text-xl text-cream/90 max-w-2xl mb-12 animate-fade-up backdrop-blur-sm py-4">
          Experience the harmonious blend of royal Swati heritage and contemporary luxury
          in the heart of Eswatini's pristine wilderness.
        </p>
        
        <div className="space-x-4 animate-fade-up backdrop-blur-sm py-2" style={{ animationDelay: "200ms" }}>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-lg">
            Book Your Stay
          </Button>
          <Button 
            variant="outline" 
            className="text-cream border-cream hover:bg-cream/10 text-lg"
          >
            Explore
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cream/80 hover:text-cream transition-colors duration-200"
          aria-label="Scroll to content"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-light tracking-wider">Discover More</span>
            <ChevronDown size={32} className="animate-bounce" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
