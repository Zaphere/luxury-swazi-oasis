
import { Crown, Landmark, Star } from "lucide-react";

const features = [
  {
    title: "Luxury Accommodation",
    description:
      "Experience unparalleled comfort in our meticulously designed suites, where traditional Swati artistry meets modern luxury.",
    icon: Star,
  },
  {
    title: "Exclusive Events",
    description:
      "Create timeless memories in our world-class venues, perfect for both intimate gatherings and grand celebrations.",
    icon: Crown,
  },
  {
    title: "Royal Swati Experiences",
    description:
      "Immerse yourself in authentic Swati culture through curated experiences that honor our rich heritage.",
    icon: Landmark,
  },
];

const USPSection = () => {
  return (
    <section id="content" className="bg-black px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cream mb-4">
            Welcome to Royal Luxury
          </h2>
          <p className="text-stone max-w-2xl mx-auto">
            Discover a sanctuary where luxury meets tradition, offering an unparalleled
            experience in the heart of Eswatini.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-black/50 backdrop-blur-sm border border-bronze/20 rounded-lg p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-gold w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <feature.icon className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-primary text-xl font-semibold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-cream/80 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
