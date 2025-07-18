const Joi = require("joi");

const createBookSchema = Joi.object({
  title: Joi.string().min(1).max(100).required().messages({
    "string.empty": "Nama tidak boleh kosong",
    "string.min": "Nama minimal 1 karakter",
    "string.max": "Nama maksimal 100 karakter",
    "any.required": "Nama wajib diisi",
  }),

  authorId: Joi.number().messages({
    "number.base": "ID Author harus berupa angka",
  }),

  year_published: Joi.number().integer().max(new Date().getFullYear()).messages({
    "number.base": "Tahun Terbit harus berupa angka",
    "number.integer": "Tahun Terbit harus berupa bilangan bulat",
    "number.max": "Tahun terbit tidak valid",
  }),
});

module.exports = {
  createBookSchema,
};