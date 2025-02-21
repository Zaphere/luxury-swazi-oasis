
import React from "react";
import Navbar from "@/components/Navbar";

const Dining = () => {
  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-cormorant">
            Fine Dining Experience
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="space-y-4">
            <img
              src="/lovable-uploads/cd4e3292-56b9-4c97-b37d-976828ddb8f5.png"
              alt="Restaurant"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h2 className="text-2xl font-cormorant font-bold">Main Restaurant</h2>
            <p className="text-cream/80">
              Experience the finest local and international cuisine in our elegant
              main restaurant.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src="/lovable-uploads/d4a782f5-0a34-4704-b124-5217bf5a05c3.png"
              alt="Bar Lounge"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h2 className="text-2xl font-cormorant font-bold">Bar & Lounge</h2>
            <p className="text-cream/80">
              Unwind with premium drinks and light bites in our sophisticated bar
              and lounge area.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src="/lovable-uploads/e20f28fe-c166-4c18-b2c0-d74b01053f12.png"
              alt="Private Dining"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <h2 className="text-2xl font-cormorant font-bold">Private Dining</h2>
            <p className="text-cream/80">
              Enjoy intimate dining experiences in our exclusive private dining
              rooms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;
