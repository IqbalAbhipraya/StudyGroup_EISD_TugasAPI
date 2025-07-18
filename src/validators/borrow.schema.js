const Joi = require("joi");

const createBorrowSchema = Joi.object({
  userId: Joi.number().messages({
    "number.base": "ID User harus berupa angka",
  }),

  bookId: Joi.number().messages({
    "number.base": "ID Buku harus berupa angka",
  }),

  returnDate: Joi.date().min('now').messages({
    "date.base": "Tanggal pengembalian tidak valid",
    "date.min": "Tanggal pengembalian tidak boleh sebelum hari ini",
  }),
});

module.exports = {
  createBorrowSchema,
};