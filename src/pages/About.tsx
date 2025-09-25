import React from 'react';
import { FaWhatsapp, FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-dark text-white py-10 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : Photo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/photo d'identité.jpg"
              alt="Photo de Heriniaina Buanco"
              className="w-80 h-80 rounded-full object-cover shadow-2xl ring-4 ring-blue-400/20"
            />
          </div>
          {/* Colonne droite : Texte et bouton */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              À propos de moi
            </h1>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Développeur Web Full Stack passionné dans la création d'applications modernes et performantes. 
              Je m'appelle SOLONDRAIBE Heriniaina Buanco, Etudiant à l'Ecole Nationale d'Informatique (ENI), développeur web spécialisé dans la création d'applications 
              modernes et performantes. Avec une expertise en Java, PHP, React et les architectures système, je 
              transforme vos idées en solutions numériques robustes et évolutives. Mon approche combine excellence 
              technique, design intuitif et expérience utilisateur optimale pour des résultats qui atteignent les attentes.
            </p>
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block mb-8">
              Engagez-moi pour votre projet
            </a>
          </div>
        </div>
        {/* Réseaux sociaux en bas */}
        <div className="mt-16 flex justify-center space-x-8">
          <a href="https://wa.me/261340168866" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
            <FaWhatsapp size={32} />
          </a>
          <a href="https://www.facebook.com/heriniaina.andrianiaina.752" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
            <FaFacebook size={32} />
          </a>
          <a href="https://linkedin.com/in/heriniaina-buanco-8a318b2a8" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
            <FaLinkedin size={32} />
          </a>
          <a href="https://github.com/jonasman18" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
            <FaGithub size={32} />
          </a>
          <a href="mailto:buancoheriniaina@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;