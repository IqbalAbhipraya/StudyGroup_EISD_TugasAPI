const express = require('express');
const authorController = require('../controllers/author.controller');
const router = express.Router();
const { createAuthorSchema } = require("../validators/author.schema");
const validateRequest = require("../middleware/validateRequest");
const { authenticate } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/rbac.middleware');

router.post('/', authenticate, validateRequest(createAuthorSchema), authorController.add);
router.get('/', authenticate, authorController.findAll);
router.get('/:id', authenticate, authorController.findOne);
router.put('/:id', authenticate, authorController.update);
router.delete('/:id', authenticate, authorController.delete);

module.exports = router;