
import React from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-cream">
      <Navbar />
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-cormorant">
            Contact & Location
          </h1>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-bronze/20">
              <h2 className="text-2xl font-cormorant font-bold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-black/30 border border-bronze/30 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black/30 border border-bronze/30 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-black/30 border border-bronze/30 rounded-md px-4 py-2 focus:outline-none focus:border-primary"
                  ></textarea>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-bronze/20">
              <h2 className="text-2xl font-cormorant font-bold mb-6">Location</h2>
              <div className="space-y-4">
                <p className="text-cream/80">
                  Lawu Le Ngwenya Lodge
                  <br />
                  123 Wildlife Drive
                  <br />
                  Ezulwini Valley
                  <br />
                  Kingdom of Eswatini
                </p>
                <div className="space-y-2">
                  <p className="text-cream/80">
                    <strong>Phone:</strong> +268 2416 1234
                  </p>
                  <p className="text-cream/80">
                    <strong>Email:</strong> info@lawulengwenya.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-bronze/20">
              <h2 className="text-2xl font-cormorant font-bold mb-6">
                Getting Here
              </h2>
              <ul className="list-disc list-inside text-cream/80 space-y-2">
                <li>45 minutes from King Mswati III International Airport</li>
                <li>15 minutes from Ezulwini Valley</li>
                <li>Private transfers available upon request</li>
                <li>Ample secure parking on premises</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
