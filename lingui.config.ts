module.exports = {
  locales: ['fr', 'en', 'es'],          // Ajoute 'mg' pour malgache si besoin
  sourceLocale: 'fr',
  catalogs: [{
    path: 'src/locales/{locale}/messages',
    include: ['src'],
    exclude: ['**/node_modules/**'],
  }],
  format: 'po',                         // ou 'json' si tu préfères
  fallbackLocales: {
    default: 'fr',
  },
}