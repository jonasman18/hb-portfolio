const Contact = () => {
  return (
    <div className="container mx-auto p-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-4">
        N'hésitez pas à me contacter pour toute opportunité ou question !
      </p>
      <ul className="text-center text-gray-600 space-y-2">
        <li>Email : <a href="mailto:buancoheriniaina@gmail.com" className="text-blue-500 hover:underline">buancoheriniaina@gmail.com</a></li>
        <li>GitHub : <a href="https://github.com/jonasman18" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/jonasman18</a></li>
        <li>WhatsApp : <a href="https://wa.me/261340168866" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">+261340168866</a></li>
      </ul>
    </div>
  );
};

export default Contact;