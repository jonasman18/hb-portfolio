import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  demoLink?: string;
  codeLink?: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  demoLink,
  codeLink,
  image,
}) => {
  return (
    <div className="bg-navy-light shadow-md rounded-lg p-4 sm:p-6 mb-4 sm:mb-6 hover:shadow-xl transition-all duration-300 group">
      <div className="overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-32 sm:h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-100 mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 mb-2 text-sm sm:text-base line-clamp-3">
        {description}
      </p>
      <p className="text-gray-300 font-semibold mb-4 text-xs sm:text-sm">
        Technologies : {technologies}
      </p>
      <div className="flex space-x-4">
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200 underline decoration-1 underline-offset-2 transition-all duration-200 text-sm"
            aria-label={`Voir la démo de ${title}`}
          >
            Démo
          </a>
        )}
        {codeLink && (
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200 underline decoration-1 underline-offset-2 transition-all duration-200 text-sm"
            aria-label={`Voir le code source de ${title}`}
          >
            Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;