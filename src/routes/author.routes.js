const express = require('express');
const authorController = require('../controllers/author.controller');
const router = express.Router();

router.post('/', authorController.add);
router.get('/', authorController.findAll);
router.get('/:id', authorController.findOne);
router.put('/:id', authorController.update);
router.delete('/:id', authorController.delete);

module.exports = router;