import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const  Sequelize = new sequilize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
host: process.env.DB_HOST,
dialect: process.env.DB_DIALECT || "mysql",
logging: false,


}


);
export default sequilize;