import React from 'react';

const Skills = () => {
  const skillCategories = {
    Backend: [
      { name: 'Java', level: 80 },
      { name: 'PHP', level: 80 },
      { name: 'C#', level: 50 },
      { name: 'Python', level: 40 },
    ],
    Frontend: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 80 },
      { name: 'React', level: 70 },
      { name: 'Tailwind CSS', level: 70 },
    ],
    'Bases de données': [
      { name: 'MySQL', level: 75 },
      { name: 'PostgreSQL', level: 70 },
    ],
    Méthodologies: [
      { name: 'Merise', level: null },
      { name: 'UML', level: null },
    ],
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-4xl font-extrabold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Mes Compétences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillCategories).map(([category, skills], index) => {
          const categoryStyles = {
            Backend: 'from-blue-300 to-blue-600',
            Frontend: 'from-green-300 to-green-600',
            'Bases de données': 'from-purple-300 to-purple-600',
            Méthodologies: 'from-orange-300 to-orange-600',
          }[category];

          return (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-md ${categoryStyles}/20 border-2 border-${categoryStyles.split(' ')[1]}/60 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-2xl font-bold text-white mb-6 bg-gradient-to-r from-${categoryStyles.split(' ')[0]}/50 to-${categoryStyles.split(' ')[1]}/50 bg-clip-text text-transparent border-b-2 border-${categoryStyles.split(' ')[1]}/40 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-1 gap-5">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`bg-${categoryStyles.split(' ')[0]}/10 border border-${categoryStyles.split(' ')[1]}/30 rounded-lg p-4 hover:bg-${categoryStyles.split(' ')[1]}/10 hover:shadow-lg transition-all duration-200`}
                  >
                    <h4 className="text-xl font-semibold text-white">{skill.name}</h4>
                    {skill.level !== null ? (
                      <>
                        <div className="w-full bg-gray-800 rounded-full h-5 mt-2">
                          <div
                            className={`bg-${categoryStyles.split(' ')[1]} h-5 rounded-full`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-200 text-base mt-1 inline-block font-medium">
                          {skill.level}%
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-200 text-base mt-1 inline-block font-medium">
                        Maîtrise conceptuelle
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;