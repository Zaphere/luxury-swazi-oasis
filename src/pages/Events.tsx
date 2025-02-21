
import React from "react";
import Navbar from "@/components/Navbar";

const Events = () => {
  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-cormorant">
            Events & Celebrations
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-bronze/20">
            <h2 className="text-3xl font-cormorant font-bold mb-4">Weddings</h2>
            <p className="text-cream/80 mb-6">
              Create magical moments in our stunning venues, perfect for intimate
              ceremonies or grand celebrations.
            </p>
            <ul className="list-disc list-inside text-cream/80 space-y-2 mb-6">
              <li>Outdoor ceremony spaces</li>
              <li>Reception halls</li>
              <li>Custom catering packages</li>
              <li>Wedding planning services</li>
            </ul>
            <button className="text-primary hover:text-primary/80 transition-colors">
              Request Information →
            </button>
          </div>

          <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-bronze/20">
            <h2 className="text-3xl font-cormorant font-bold mb-4">
              Corporate Events
            </h2>
            <p className="text-cream/80 mb-6">
              Host productive meetings and memorable corporate events in our
              well-equipped venues.
            </p>
            <ul className="list-disc list-inside text-cream/80 space-y-2 mb-6">
              <li>Conference rooms</li>
              <li>Team building activities</li>
              <li>Audio-visual equipment</li>
              <li>Corporate packages</li>
            </ul>
            <button className="text-primary hover:text-primary/80 transition-colors">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
