import express from 'express';
import dotenv from 'dotenv';
import Sequelize from './src/config/database.js';
import bookRoutes from './src/routes/book.routes.js';  // Cambié aquí

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

try {
  await Sequelize.authenticate();
  console.log("Conexion a la base de datos establecida correctamente");
} catch (error) {
  console.error("Error al conectarse con la base de datos", error);
}

try {
  await Sequelize.sync({ force: false });
  console.log('Modelo Book sincronizado correctamente');
} catch (error) {
  console.error('Error al sincronizar el modelo Book:', error);
}

// Usa las rutas para books
app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
