// src/components/AboutSection.jsx
export default function AboutSection({ t }) {
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">{t.about}</h2>
          <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
            <p>{t.aboutContent}</p>
          </div>
        </div>
      </section>
    );
  }