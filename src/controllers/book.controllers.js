import { createConnection } from "mysql2";
import Book from "../models/book.model.js";
import { Op } from "sequelize";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findall();
    return res.status(200).json(books);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al obtener los libros", error: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    return res.status(200).json(book);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al obtener el libro", error });
  }
};

export const createBook = async (req, res) => {};

export const updateBook = async (req, res) => {};
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.destroy({ where: { id } });
    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    return res.status(200).json({ message: "Libro eliminado correctamente" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error al eliminar el libro", error });
  }
};
