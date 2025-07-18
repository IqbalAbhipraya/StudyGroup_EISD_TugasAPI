const express = require('express');
const bookController = require('../controllers/book.controller');
const router = express.Router();
const { createBookSchema } = require("../validators/book.schema");
const validateRequest = require("../middleware/validateRequest");
const { authenticate } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/rbac.middleware');

router.post('/', authenticate, validateRequest(createBookSchema),bookController.add);
router.get('/', authenticate, bookController.findAll);
router.get('/:id', authenticate, bookController.findOne);
router.put('/:id', authenticate, bookController.update);
router.delete('/:id', authenticate, bookController.delete);

module.exports = router;