const Home = () => {
  return (
    <div className="w-full text-center">
      <img
        src="/images/photo.jpg"
        alt="Photo de SOLONDRAIBE Heriniaina Buanco"
        className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full object-cover shadow-lg ring-4 ring-white/20 mb-6 transition-transform duration-300 hover:scale-105"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-100 mb-4">SOLONDRAIBE Heriniaina Buanco</h1>
      <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-md sm:max-w-xl mx-auto px-4">
        Développeur web fullstack passionné et motivé. Découvrez mes projets et compétences ci-dessous !
      </p>
      <a href="#projects" className="bg-navy-light text-white px-6 py-3 rounded-md hover:bg-navy transition-colors duration-300">
        Voir mes projets
      </a>
    </div>
  );
};

export default Home;