import { DataTypes } from "sequelize";
import sequelize  from "../config/database.js";

const book = sequelize.define('book', {
    id : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
            min: 1,
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
  timestamps: false 
});

export default book;