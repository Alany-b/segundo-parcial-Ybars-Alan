import express from 'express';
import dotenv from 'dotenv';
import Sequelize from './src/config/database.js';
import Book from './src/models/book.model.js';
import bookRoutes from './routes/BookRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


try {
await Sequelize.authenticate();
console.log('conexion a la base de datos establecida correctamente');
} catch (error) {
console.error('error al conectarse con la base de datos', error);



}
 try{
await Sequelize.sync({ force:false});
console.log('Modelo Book sincronizado correctamente');
  } catch (error) {
    console.error('Error al sincronizar el modelo Bool:',error);



 }


app.listen(PORT,() => {
console.log(`Servidor corriendo en http://localhost:${PORT}`); 

});
