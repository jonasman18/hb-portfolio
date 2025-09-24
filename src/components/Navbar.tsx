import { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    console.log('Setting up IntersectionObserver');
    const sections = document.querySelectorAll('section');
    if (!sections.length) {
      console.error('No sections found');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        console.log('Observing entries:', entries);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`Section ${entry.target.id} is intersecting`);
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      if (section.id) observer.observe(section);
    });

    return () => {
      console.log('Cleaning up IntersectionObserver');
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="bg-navy text-white p-4 shadow-md sticky top-0 z-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/photo d'identité.jpg" alt="Votre photo" className="w-10 h-10 rounded-full object-cover" />
          <h1 className="text-xl font-bold">Heriniaina Buanco</h1>
        </div>
        <div className="space-x-4">
          <a
            href="#home"
            className={`hover:text-white px-3 py-2 ${activeSection === 'home' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30 rounded-full' : ''}`}
          >
            Accueil
          </a>
          <a
            href="#projects"
            className={`hover:text-white px-3 py-2 ${activeSection === 'projects' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30 rounded-full' : ''}`}
          >
            Projets
          </a>
          <a
            href="#about"
            className={`hover:text-white px-3 py-2 ${activeSection === 'about' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30 rounded-full' : ''}`}
          >
            À propos
          </a>
          <a
            href="#skills" // Nouveau lien
            className={`hover:text-white px-3 py-2 ${activeSection === 'skills' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30 rounded-full' : ''}`}
          >
            Mes Compétences
          </a>
          <a
            href="#contact"
            className={`hover:text-white px-3 py-2 ${activeSection === 'contact' ? 'border-2 border-blue-400 bg-gradient-to-r from-blue-300/30 to-blue-400/30 rounded-full' : ''}`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;