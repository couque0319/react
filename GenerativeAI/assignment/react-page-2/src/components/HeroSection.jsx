// src/components/HeroSection.jsx
export default function HeroSection({ t }) {
    return (
      <header className="bg-blue-500 text-white text-center py-16">
        <h1 className="text-4xl font-bold mb-4">{t.welcome}</h1>
        <p className="text-xl">{t.description}</p>
      </header>
    );
  }