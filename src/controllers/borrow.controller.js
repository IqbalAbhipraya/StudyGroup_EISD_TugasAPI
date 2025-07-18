const borrowService = require('../services/borrow.service');
const AppError = require("../utils/AppError");

exports.borrow = async (req, res) => {
    try {
        const borrowData = req.body;
        const newBorrow = await borrowService.borrowBook(borrowData);
        res.status(201).json(newBorrow);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const Borrows = await borrowService.findAllBorrows();
        res.status(200).json(Borrows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const borrowId = req.params.id;
        const borrow = await borrowService.findBorrowById(borrowId);

        if (borrow) {
            res.status(200).json(borrow);
        } else {
            res.status(404).json({ message: `Data borrow dengan id=${borrowId} tidak ditemukan`});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.return = async (req, res) => {
    try {
        const borrowId = req.params.id;
        const updateData = req.body;
        const updatedUser = await borrowService.returnBook(borrowId, updateData);

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const borrowId = req.params.id;
        await borrowService.deleteBorrow(borrowId);

        res.status(200).json({ message: "Successful"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};