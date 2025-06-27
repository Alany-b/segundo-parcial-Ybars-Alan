import Book from '../models/Book.js';
import {Op} from  'sequelize';

export const getAllBooks = async (req, res) => {
    try {
        const books = await book.findall();
        return res.status(200).json(books);
         } catch (error) {
            return res.status(500).json({message: 'Error al obtener los libros', error: error.message});
         }

    
    };
    export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el libro', error });
  }
};