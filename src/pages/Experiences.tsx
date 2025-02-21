
import React from "react";
import Navbar from "@/components/Navbar";

const Experiences = () => {
  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-cormorant">
            Unforgettable Experiences
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-bronze/20">
            <h2 className="text-2xl font-cormorant font-bold mb-4">Safari Tours</h2>
            <p className="text-cream/80 mb-4">
              Embark on guided safari adventures through Eswatini's pristine wilderness.
            </p>
            <button className="text-primary hover:text-primary/80 transition-colors">
              Learn More →
            </button>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-bronze/20">
            <h2 className="text-2xl font-cormorant font-bold mb-4">Cultural Immersion</h2>
            <p className="text-cream/80 mb-4">
              Experience traditional Swati customs, dance, and crafts with local guides.
            </p>
            <button className="text-primary hover:text-primary/80 transition-colors">
              Learn More →
            </button>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-bronze/20">
            <h2 className="text-2xl font-cormorant font-bold mb-4">Spa & Wellness</h2>
            <p className="text-cream/80 mb-4">
              Rejuvenate your body and soul with our traditional and modern spa treatments.
            </p>
            <button className="text-primary hover:text-primary/80 transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
