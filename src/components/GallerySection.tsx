
const GallerySection = () => {
  const images = [
    {
      src: "/lovable-uploads/6ab30f3c-38b6-4816-b29a-2a821c5d877b.png",
      alt: "Night view of the venue"
    },
    {
      src: "/lovable-uploads/2319584b-78b4-4d46-a477-9baee4e62c17.png",
      alt: "Cozy bedroom atmosphere"
    },
    {
      src: "/lovable-uploads/d4a782f5-0a34-4704-b124-5217bf5a05c3.png",
      alt: "Pool area with thatched roof"
    },
    {
      src: "/lovable-uploads/7f72a774-68f7-462e-b32d-291b2e0b3980.png",
      alt: "Pool area with mountain view"
    },
    {
      src: "/lovable-uploads/cd4e3292-56b9-4c97-b37d-976828ddb8f5.png",
      alt: "Lounge area interior"
    },
    {
      src: "/lovable-uploads/e20f28fe-c166-4c18-b2c0-d74b01053f12.png",
      alt: "Bedroom interior"
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cream mb-12">
          Experience Our Lodge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-lg group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-center h-full">
                  <span className="text-cream text-lg font-medium">View Gallery</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
