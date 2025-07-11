const bookService = require('../services/book.service');

exports.add = async (req, res) => {
    try {
        const bookData = req.body;
        const newBook = await bookService.createBook(bookData);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const books = await bookService.findAllBooks();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await bookService.findBookById(bookId);

        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: `Buku dengan id=${bookId} tidak ditemukan`});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};