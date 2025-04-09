// src/components/FeatureCard.jsx
export default function FeatureCard({ title, description }) {
    return (
      <div className="bg-gray-100 p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }