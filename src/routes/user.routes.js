const express = require('express');
const userController = require('../controllers/user.controller');
const router = express.Router();
const { createUserSchema } = require("../validators/user.schema");
const validateRequest = require("../middleware/validateRequest");
const { authenticate } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/rbac.middleware');

router.post('/', validateRequest(createUserSchema), userController.create);
router.get('/', authenticate, userController.findAll);
router.get('/:id', authenticate, userController.findOne);
router.put('/:id', authenticate, userController.update);
router.delete('/:id', authenticate, userController.delete);

module.exports = router;