import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icônes pour le hamburger

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    if (!sections.length) {
      console.error('No sections found');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-navy text-white p-4 shadow-md sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo et titre - Responsive pour mobile */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm sm:text-lg">
            HB
          </div>
          <h1 className="text-lg sm:text-xl font-bold hidden sm:block">Heriniaina Buanco</h1>
          {/* Version mobile du titre, plus compacte */}
          <h1 className="text-base font-bold sm:hidden">HB</h1>
        </div>

        {/* Bouton hamburger pour mobile/tablette (disparaît sur lg et plus) */}
        <button
          className="lg:hidden text-white p-1 hover:bg-blue-600 rounded transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Menu desktop - Visible sur lg et plus */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="#home"
            className={`hover:text-white px-3 py-2 transition-colors rounded-full ${
              activeSection === 'home' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30' : ''
            }`}
          >
            Accueil
          </a>
          <a
            href="#about"
            className={`hover:text-white px-3 py-2 transition-colors rounded-full ${
              activeSection === 'about' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30' : ''
            }`}
          >
            À propos
          </a>
          <a
            href="#skills"
            className={`hover:text-white px-3 py-2 transition-colors rounded-full ${
              activeSection === 'skills' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30' : ''
            }`}
          >
            Mes Compétences
          </a>
          <a
            href="#projects"
            className={`hover:text-white px-3 py-2 transition-colors rounded-full ${
              activeSection === 'projects' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30' : ''
            }`}
          >
            Mes Projets
          </a>
          <a
            href="#contact"
            className={`hover:text-white px-3 py-2 transition-colors rounded-full ${
              activeSection === 'contact' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30' : ''
            }`}
          >
            Contact
          </a>
        </div>

        {/* Menu mobile - Overlay quand ouvert */}
        <div
          className={`${
            isMobileMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-navy shadow-lg' : 'hidden'
          } lg:hidden mt-2 p-4 space-y-2 border-t border-gray-700 transition-all duration-300 ease-in-out`}
        >
          <a
            href="#home"
            className={`block hover:text-white px-3 py-2 transition-colors rounded-full ${
              activeSection === 'home' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </a>
          <a
            href="#about"
            className={`block hover:text-white px-3 py-2 transition-colors rounded-full ${
              activeSection === 'about' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            À propos
          </a>
          <a
            href="#skills"
            className={`block hover:text-white px-3 py-2 transition-colors rounded-full ${
              activeSection === 'skills' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Mes Compétences
          </a>
          <a
            href="#projects"
            className={`block hover:text-white px-3 py-2 transition-colors rounded-full ${
              activeSection === 'projects' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Mes Projets
          </a>
          <a
            href="#contact"
            className={`block hover:text-white px-3 py-2 transition-colors rounded-full ${
              activeSection === 'contact' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;