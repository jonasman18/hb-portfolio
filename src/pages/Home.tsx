const Home = () => {
  return (
    <div className="w-full text-center">
      <img
        src="/images/photo.jpg"
        alt="Photo de SOLONDRAIBE Heriniaina Buanco"
        className="w-48 h-48 mx-auto rounded-full object-cover shadow-md mb-6 ring-2 ring-white"
      />
      <h1 className="text-4xl font-bold text-gray-100 mb-4">SOLONDRAIBE Heriniaina Buanco</h1>
      <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
        Développeur web passionné par Java, PHP, React et Vite. Découvrez mes projets et compétences ci-dessous !
      </p>
      <a href="#projects" className="bg-navy-light text-white px-6 py-3 rounded-md hover:bg-navy">
        Voir mes projets
      </a>
    </div>
  );
};

export default Home;