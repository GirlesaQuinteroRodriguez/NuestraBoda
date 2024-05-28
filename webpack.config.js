const path = require('path');

module.exports = {
  entry: './src/asistencia_firebase.js',  // Archivo de entrada
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',  // Puedes cambiar a 'production' para optimizaciones
};
