import React from 'react';
import { FaJava, FaPhp, FaCode, FaPython, FaHtml5, FaCss3Alt, FaReact, FaWind, FaDatabase, FaDatabase as FaPostgres, FaBrain, FaSitemap, FaGitAlt, FaGithub, FaCog, FaWindows, FaLinux, FaUbuntu } from 'react-icons/fa';

const Skills: React.FC = () => {
  const skillCategories = {
    Backend: [
      { name: 'Java', level: 90, icon: FaJava },
      { name: 'PHP', level: 85, icon: FaPhp },
      { name: 'C#', level: 70, icon: FaCode },
      { name: 'Python', level: 60, icon: FaPython },
    ],
    Frontend: [
      { name: 'HTML', level: 90, icon: FaHtml5 },
      { name: 'CSS', level: 80, icon: FaCss3Alt },
      { name: 'React+Vite', level: 75, icon: FaReact },
      { name: 'Tailwind CSS', level: 70, icon: FaWind },
    ],
    'Bases de données': [
      { name: 'MySQL', level: 90, icon: FaDatabase },
      { name: 'PostgreSQL', level: 85, icon: FaPostgres },
    ],
    Outils: [
      { name: 'Git CI/CD', level: 85, icon: FaGitAlt },
      { name: 'Github', level: 85, icon: FaGithub },
      { name: 'Gradle', level: 80, icon: FaCog },
      { name: 'Maven', level: 60, icon: FaCog },
    ],
    'Système d\'exploitation': [
      { name: 'Windows', level: 90, icon: FaWindows },
      { name: 'Ubuntu', level: 70, icon: FaLinux },
      { name: 'Linux', level: 60, icon: FaLinux },
      { name: 'Debian', level: 60, icon: FaUbuntu },
    ],
    Méthodologies: [
      { name: 'Merise', level:85, icon: FaBrain },
      { name: 'UML', level: 75, icon: FaSitemap },
    ],
  };

  // Signature d'index ajoutée pour corriger l'erreur TypeScript
  const categoryColors: { [key: string]: { barColor: string; iconColor: string } } = {
    Backend: { barColor: '#3B82F6', iconColor: '#93C5FD' },
    Frontend: { barColor: '#10B981', iconColor: '#6EE7B7' },
    'Bases de données': { barColor: '#8B5CF6', iconColor: '#C4B5FD' },
    Outils: { barColor: '#F59E0B', iconColor: '#FCD34D' },
    'Système d\'exploitation': { barColor: '#6B7280', iconColor: '#D1D5DB' },
    Méthodologies: { barColor: '#EC4899', iconColor: '#F9A8D4' },
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-extrabold text-white mb-10 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center">
        Mes Compétences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillCategories).map(([category, skills], index) => {
          const colors = categoryColors[category] || { barColor: '#3B82F6', iconColor: '#93C5FD' };

          return (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border-2 border-blue-400 rounded-xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 border-b-2 border-blue-400 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, idx) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/5 border border-blue-300 rounded-lg p-3 flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`text-${colors.iconColor} text-lg`} />
                        <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                      </div>
                      {skill.level !== null ? (
                        <>
                          <div className="w-1/3 bg-gray-700 rounded-full h-2.5">
                            <div
                              className="h-2.5 rounded-full"
                              style={{ 
                                width: `${skill.level}%`,
                                backgroundColor: colors.barColor,
                              }}
                            ></div>
                          </div>
                          <span className="text-gray-200 text-sm font-semibold ml-2">
                            {skill.level}%
                          </span>
                        </>
                      ) : (
                        <span className="text-gray-200 text-sm font-semibold ml-2">
                          Maîtrise conceptuelle
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;