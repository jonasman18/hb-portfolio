import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(''); // Pour les erreurs

  // Remplace par tes identifiants EmailJS (réels)
  const SERVICE_ID = 'service_abc123'; 
  const TEMPLATE_ID = 'template_jca15lx'; 
  const PUBLIC_KEY = 'Xlg347EcJEIUG4mOL'; 

  emailjs.init(PUBLIC_KEY);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Efface l'erreur
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+[^\s@]+$/; // Regex pour email valide
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Validation email
    if (!validateEmail(formData.email)) {
      setError('Veuillez entrer un email valide (ex. : nom@gmail.com)');
      return;
    }

    setIsLoading(true);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then((result) => {
        console.log('Email réel envoyé !', result.text);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.error('Erreur d\'envoi :', error);
        setError('Erreur lors de l\'envoi. Réessaye !');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-center">
        N'hésitez pas à me contacter pour toute opportunité ou question !
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-md border-2 border-blue-400 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Mes informations</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center space-x-3">
              <span className="text-blue-400">📍</span>
              <span>Fianarantsoa et Vangaindrano, Madagascar</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-400">📞</span>
              <a href="https://wa.me/261340168866" className="hover:underline" target="_blank" rel="noopener noreferrer">
                +261 34 01 68 866
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-400">📧</span>
              <a href="mailto:buancoheriniaina@gmail.com" className="hover:underline">
                buancoheriniaina@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-400">💼</span>
              <a href="https://linkedin.com/in/heriniaina-buanco-8a318b2a8" className="hover:underline" target="_blank" rel="noopener noreferrer">
                github.com/jonasman18
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <FaLinkedin className="text-blue-400" />
              <a href="https://linkedin.com/in/heriniaina-buanco-8a318b2a8" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center space-x-3">
            <FaFacebook className="text-blue-400" />
            <a href="https://www.facebook.com/heriniaina.andrianiaina.752" className="hover:underline"> Heriniaina Buanco </a>
            </li>
          </ul>
        </div>
        <div className="bg-white/10 backdrop-blur-md border-2 border-blue-400 rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Envoyez un message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-white/5 border border-blue-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-white/5 border border-blue-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 bg-white/5 border border-blue-400 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200 disabled:opacity-50"
            >
              <FaPaperPlane />
              <span>{isLoading ? 'Envoi en cours...' : 'Envoyer le message'}</span>
            </button>
          </form>
          {error && (
            <p className="text-red-400 text-center mt-4 font-semibold">
              {error}
            </p>
          )}
          {isSubmitted && (
            <p className="text-green-400 text-center mt-4 font-semibold">
              Message envoyé avec succès ! Je vous répondrai bientôt.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;