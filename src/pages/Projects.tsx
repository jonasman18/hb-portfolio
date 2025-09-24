import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Gestion de personnel',
      description: 'Gérer les congés, présences, absences et salaires des personnels dans votre entreprise.',
      technologies: 'PHP, Bootstrap',
      demoLink: 'https://lien-vers-la-demo.com',
      codeLink: 'https://github.com/jonasman18/gestion-de-personnel',
      image: '/images/accueil.png',
    },
    {
      title: 'Gestion de soutenances',
      description: 'Une application pour gérer facilement les soutenances d\'une école à l\'université ',
      technologies: 'Java',
      demoLink: 'https://lien-vers-la-demo.com',
      codeLink: 'https://github.com/votreprofil/repo2',
      image: '/images/photo2.jpg',
    },
  ];

  return (
    <div className="w-full text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Mes Projets</h2>
      <div className="grid gap-6 md:grid-cols-2 mx-auto max-w-4xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;