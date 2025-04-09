// src/components/FeaturesSection.jsx
import FeatureCard from './FeatureCard';

export default function FeaturesSection({ t }) {
  const features = [
    {
      title: t.feature1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: t.feature2,
      description: "Praesent quis venenatis nunc, ut blandit lorem."
    },
    {
      title: t.feature3,
      description: "Fusce interdum est eget lacus ultricies, id pellentesque."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{t.features}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}