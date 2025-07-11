const express = require('express');
const reservationController = require('../controllers/reservation.controller');
const router = express.Router();

router.post('/', reservationController.add);
router.get('/', reservationController.findAll);
router.get('/:id', reservationController.findOne);
router.put('/:id', reservationController.update);
router.delete('/:id', reservationController.delete);

module.exports = router;