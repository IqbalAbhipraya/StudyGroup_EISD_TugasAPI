const db = require('../models');
const Book = db.Book;

exports.createBook = async (bookData) => {
    const {title, author, year_published, stock} = bookData;
    const available = stock > 0;

    if (!title) {
        throw new Error('Minimal title harus diisi.');
    }

    const newBook = await Book.create({title, author, year_published, stock, available});

    return newBook;
};

exports.findAllBooks = async () => {
    const books = await Book.findAll();
    return books;
};

exports.findBookById = async (id) => {
    const book = await Book.findByPk(id);
    return book;
};
