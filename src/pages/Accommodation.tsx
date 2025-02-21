
import React from "react";
import Navbar from "@/components/Navbar";

const Accommodation = () => {
  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-cormorant">
            Luxury Accommodation
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <img
              src="/lovable-uploads/7f72a774-68f7-462e-b32d-291b2e0b3980.png"
              alt="Luxury Suite"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <h2 className="text-2xl font-cormorant font-bold">Royal Suite</h2>
            <p className="text-cream/80">
              Experience unparalleled luxury in our spacious Royal Suite, featuring
              a private balcony with panoramic views of the wilderness.
            </p>
          </div>
          <div className="space-y-4">
            <img
              src="/lovable-uploads/2319584b-78b4-4d46-a477-9baee4e62c17.png"
              alt="Executive Room"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <h2 className="text-2xl font-cormorant font-bold">Executive Room</h2>
            <p className="text-cream/80">
              Our Executive Rooms offer a perfect blend of comfort and elegance,
              with modern amenities and traditional Swati décor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
