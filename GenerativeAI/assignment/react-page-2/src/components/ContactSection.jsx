// src/components/ContactSection.jsx
export default function ContactSection({ t }) {
    return (
      <section className="py-12 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.contact}</h2>
          <p>{t.contactContent}</p>
        </div>
      </section>
    );
  }