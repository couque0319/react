// src/components/Navbar.jsx
export default function Navbar({ t, toggleLanguage }) {
    return (
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">MyHomepage</div>
          <div className="flex space-x-4">
            <button className="hover:underline">{t.features}</button>
            <button className="hover:underline">{t.about}</button>
            <button className="hover:underline">{t.contact}</button>
            <button 
              className="bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-200"
              onClick={toggleLanguage}
            >
              {t.languageSwitch}
            </button>
          </div>
        </div>
      </nav>
    );
  }