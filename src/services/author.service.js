const db = require('../models');
const Author = db.Author;

exports.createAuthor = async (authorData) => {
    const {name} = authorData;

    if (!name) {
        throw new Error('Nama harus di isi.');
    }

    const newAuthor = await Author.create({name});

    return newAuthor;
};

exports.findAllAuthors = async () => {
    const authors = await Author.findAll();
    return authors;
};

exports.findAuthorById = async (id) => {
    const author = await Author.findByPk(id);
    return author;
};

exports.updateAuthor = async (id, updateData) => {
    const [num] = await Author.update(updateData, {
        where: {id: id}
    });

    if (num == 1) {
        const updatedAuthor = await Author.findByPk(id);
        return updatedAuthor;
    } else {
        throw new Error(`Tidak dapat memperbarui author dengan id=${id}.`);
    }
};

exports.deleteAuthor = async (id) => {
    const num = await Author.destroy({
        where: {id: id}
    });

    if (num != 1) {
        throw new Error(`Tidak dapat menghapus author dengan id=${id}.`);
    }
};
