import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'navy': '#1A2A44', // Bleu marine principal
        'navy-dark': '#0F1C2E', // Bleu marine foncé pour les fonds
        'navy-light': '#2E4066', // Bleu marine clair pour les accents
        'gray-dark': '#2D3748', // Gris foncé pour le texte
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Active le mode sombre avec la classe 'dark'
};

export default config;