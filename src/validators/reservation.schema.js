const Joi = require("joi");

const createReservationSchema = Joi.object({
  userId: Joi.number().required().messages({
    "number.base": "ID User harus berupa angka",
    "number.required": "ID User harus diisi"
  }),

  reservedTime: Joi.date().min('now').required().messages({
    "date.base": "Tanggal pengembalian tidak valid",
    "date.min": "Tanggal pengembalian tidak boleh sebelum hari ini",
    "any.required": "Waktu reservasi wajib diisi"
  }),
  
  status: Joi.string().messages({
    "string.empty": "Status tidak boleh kosong",
  }),
});

module.exports = {
  createReservationSchema,
};