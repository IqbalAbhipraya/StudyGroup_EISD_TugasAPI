const db = require('../models');
const Book = db.Book;

exports.createBook = async (bookData) => {
    const {title, BookId, year_published, stock} = bookData;
    const available = stock > 0;

    if (!title) {
        throw new Error('Minimal title harus diisi.');
    }

    const newBook = await Book.create({title, BookId, year_published, stock, available});

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

exports.updateBook = async (id, updateData) => {
    const [num] = await Book.update(updateData, {
        where: {id: id}
    });

    if (num == 1) {
        const updatedBook = await Book.findByPk(id);
        return updatedBook;
    } else {
        throw new Error(`Tidak dapat memperbarui buku dengan id=${id}.`);
    }
};

exports.deleteBook = async (id) => {
    const num = await Book.destroy({
        where: {id: id}
    });

    if (num != 1) {
        throw new Error(`Tidak dapat menghapus buku dengan id=${id}.`);
    }
};

