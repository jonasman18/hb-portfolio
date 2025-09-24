import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
  demoLink?: string;
  codeLink?: string;
  image: string;
}

const ProjectCard = ({ title, description, technologies, demoLink, codeLink, image }: ProjectCardProps) => {
  return (
    <div className="bg-navy-light shadow-md rounded-lg p-6 mb-6 hover:shadow-lg transition-shadow">
      <img src={image} alt={title} className="rounded-md mb-4 w-full h-48 object-cover" />
      <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
      <p className="text-gray-400 mb-2">{description}</p>
      <p className="text-gray-300 font-semibold mb-4">Technologies : {technologies}</p>
      <div className="flex space-x-4">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
            Démo
          </a>
        )}
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
            Code
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;