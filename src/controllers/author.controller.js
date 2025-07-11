const authorService = require('../services/author.service');

exports.add = async (req, res) => {
    try {
        const authorData = req.body;
        const newAuthor = await authorService.createAuthor(authorData);
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const Authors = await authorService.findAllAuthors();
        res.status(200).json(Authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const authorId = req.params.id;
        const author = await authorService.findAuthorById(authorId);

        if (author) {
            res.status(200).json(author);
        } else {
            res.status(404).json({ message: `author dengan id=${authorId} tidak ditemukan`});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const authorId = req.params.id;
        const updateData = req.body;
        const updatedAuthor = await authorService.updateAuthor(authorId, updateData);

        res.status(200).json(updatedAuthor);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const authorId = req.params.id;
        await authorService.deleteAuthor(authorId);

        res.status(200).json({ message: "Successful"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};