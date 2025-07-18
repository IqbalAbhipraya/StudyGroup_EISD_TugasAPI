const express = require('express');
const borrowController = require('../controllers/borrow.controller');
const router = express.Router();
const { createBorrowSchema } = require("../validators/borrow.schema");
const validateRequest = require("../middleware/validateRequest");
const { authenticate } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/rbac.middleware');

router.post('/', authenticate, validateRequest(createBorrowSchema), borrowController.borrow);
router.get('/', authenticate, borrowController.findAll);
router.get('/:id', authenticate, borrowController.findOne);
router.put('/return/:id', authenticate, borrowController.return);
router.delete('/:id', authenticate, borrowController.delete);

module.exports = router;