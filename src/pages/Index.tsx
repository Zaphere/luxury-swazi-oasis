
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import GallerySection from "@/components/GallerySection";

const Index = () => {
  useEffect(() => {
    document.body.style.background = "#000000";
    return () => {
      document.body.style.background = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      <HeroSection />
      <USPSection />
      <GallerySection />
    </div>
  );
};

export default Index;
