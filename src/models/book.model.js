import { DataTypes } from "sequelize";
import sequelize  from "../config/database.js";

const Book = sequelize.define('book', {
    
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

export default Book;