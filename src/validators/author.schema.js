const Joi = require("joi");

const createAuthorSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.empty": "Nama tidak boleh kosong",
    "string.min": "Nama minimal 2 karakter",
    "string.max": "Nama maksimal 50 karakter",
    "any.required": "Nama wajib diisi",
  }),
});

module.exports = {
  createAuthorSchema,
};