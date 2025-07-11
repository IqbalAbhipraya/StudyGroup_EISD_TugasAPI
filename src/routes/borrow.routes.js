const express = require('express');
const borrowController = require('../controllers/borrow.controller');
const router = express.Router();

router.post('/', borrowController.borrow);
router.get('/', borrowController.findAll);
router.get('/:id', borrowController.findOne);
router.put('/return/:id', borrowController.return);
router.delete('/:id', borrowController.delete);

module.exports = router;