
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Bed, Wifi, Bath, Mountain, Tv } from "lucide-react";

const Accommodation = () => {
  const amenities = [
    { icon: Bath, text: "Natural Spring Water Baths" },
    { icon: Wifi, text: "Free High-Speed Wi-Fi" },
    { icon: Tv, text: "Satellite TV (HD)" },
    { icon: Mountain, text: "Mountain Views" },
    { icon: Bed, text: "Daily Housekeeping" },
  ];

  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-cormorant">
            Luxury Accommodation
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-cream/80 max-w-2xl mx-auto">
            Experience unparalleled comfort in our meticulously designed suites,
            where traditional Swati artistry meets modern luxury.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <img
              src="/lovable-uploads/7f72a774-68f7-462e-b32d-291b2e0b3980.png"
              alt="The Morocco Suite"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="space-y-4">
              <h2 className="text-2xl font-cormorant font-bold">
                The Morocco Suite
              </h2>
              <p className="text-cream/80">
                Our signature suite features exquisite wooden finishes, an outdoor
                patio with breathtaking mountain views, and a luxurious natural
                spring water bath.
              </p>
              <div className="flex flex-wrap gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-bronze/20 rounded-full px-4 py-2"
                  >
                    <amenity.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-cream/80">{amenity.text}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Now
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src="/lovable-uploads/2319584b-78b4-4d46-a477-9baee4e62c17.png"
              alt="Deluxe Double Room"
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <div className="space-y-4">
              <h2 className="text-2xl font-cormorant font-bold">
                Deluxe Double Room
              </h2>
              <p className="text-cream/80">
                Immerse yourself in comfort with our deluxe rooms featuring
                blackout drapes, cultural Swati decor, and a private outdoor
                patio perfect for morning coffee or evening relaxation.
              </p>
              <div className="flex flex-wrap gap-4">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-bronze/20 rounded-full px-4 py-2"
                  >
                    <amenity.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-cream/80">{amenity.text}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Rates Section */}
        <div className="bg-black/50 backdrop-blur-sm border border-bronze/20 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-cormorant font-bold mb-6">Rates & Booking</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Base Rates</h3>
              <p className="text-cream/80">
                Bed-only base rate starts from 120 SZL per person per day
              </p>
              <p className="text-cream/80">Optional breakfast available</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Check-in Information</h3>
              <ul className="text-cream/80 space-y-2">
                <li>Check-in: 14:00 – 23:00</li>
                <li>Check-out: 11:00</li>
                <li>24-hour reception available</li>
                <li>Airport transfers available (surcharge)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
