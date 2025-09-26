import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Gestion de personnel',
      description: 'Gérer les congés, présences, absences et salaires des personnels dans votre entreprise.',
      technologies: 'PHP, Bootstrap', 
      codeLink: 'https://github.com/jonasman18/gestion-de-personnel',
      image: '/images/accueil.png',
    },
    {
      title: 'Gestion de soutenances',
      description: 'Une application pour gérer facilement les soutenances d\'une école à l\'université ',
      technologies: 'Java',
      image: '/images/photo2.jpg',
    },
    {
      title: 'Gestion de visiteurs',
      description: 'Une application pour gérer les tarifs, bilan et liste des visiteurs dans un endroit ou pour un séjour ',
      technologies: 'React, PHP',
      image: '/images/visiteurs.png',
    },
    {
      title: 'Gestion de paiement de colocation d\'appartement',
      description: 'Gérer un appartement à louer avec les colocataires pour le paiement des frais de colocation surtout.',
      technologies: 'C#, MySQL',
      image: '/images/photo3.jpg',
    },
    {
      title: 'Portfolio développeur',
      description: 'Site vitrine pour présenter profils, compétences, expériences, contacts ',
      technologies: 'React + Vite',
      image: '/images/portfolio.png',
    },
  ];

  return (
    <div className="w-full text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">Mes Projets</h2>
      <div className="grid gap-6 md:grid-cols-3 mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;