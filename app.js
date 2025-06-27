import express from 'express';
import dotenv from 'dotenv';
import Sequelize from './src/config/database.js';

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

app.listen(PORT,() => {
console.log(`Servidor corriendo en http://localhost:${PORT}`); 

});
