const express = require('express');
const reservationController = require('../controllers/reservation.controller');
const router = express.Router();
const { createReservationSchema } = require("../validators/reservation.schema");
const validateRequest = require("../middleware/validateRequest");
const { authenticate } = require('../middleware/auth.middleware');
const { authorize } = require('../middleware/rbac.middleware');

router.post('/', authenticate, validateRequest(createReservationSchema), reservationController.add);
router.get('/', authenticate, reservationController.findAll);
router.get('/:id', authenticate, reservationController.findOne);
router.put('/:id', authenticate, reservationController.update);
router.delete('/:id', authenticate, reservationController.delete);

module.exports = router;