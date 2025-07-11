const db = require('../models');
const Borrow = db.Borrow;

exports.borrowBook = async (borrowData) => {
    const {userId, bookId} = borrowData;
    const returnDate = new Date();
    const status = "Not Returned"
    returnDate.setDate(returnDate.getDate() + 7);
    
    if (!userId ||!bookId) {
        throw new Error('Isi user id dan book id');
    }

    const newBorrow = await Borrow.create({ userId, bookId, returnDate, status });

    return newBorrow;
};

exports.findAllBorrows = async () => {
    const borrows = await Borrow.findAll();
    return borrows;
};

exports.findBorrowById = async (id) => {
    const borrow = await Borrow.findByPk(id);
    return borrow;
};

exports.returnBook = async (id, updateData) => {
    const [num] = await Borrow.update(updateData, {
        where: {id: id}
    });

    if (num == 1) {
        const updatedBorrow = await Borrow.findByPk(id);
        return updatedBorrow;
    } else {
        throw new Error(`Tidak dapat memperbarui data borrow dengan id=${id}.`);
    }
};

exports.deleteBorrow = async (id) => {
    const num = await Borrow.destroy({
        where: {id: id}
    });

    if (num != 1) {
        throw new Error(`Tidak dapat menghapus data borrow dengan id=${id}.`);
    }
};