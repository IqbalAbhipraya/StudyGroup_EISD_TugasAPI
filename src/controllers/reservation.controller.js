const reservationService = require('../services/reservation.service');
const AppError = require("../utils/AppError");

exports.add = async (req, res) => {
    try {
        const reservationData = req.body;
        const newReservation = await reservationService.createReservation(reservationData);
        res.status(201).json(newReservation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const reservations = await reservationService.findAllReservations();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const reservationId = req.params.id;
        const reservation = await reservationService.findReservationById(reservationId);

        if (reservation) {
            res.status(200).json(reservation);
        } else {
            res.status(404).json({ message: `reservation dengan id=${reservationId} tidak ditemukan`});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const reservationId = req.params.id;
        const updateData = req.body;
        const updatedReservation = await reservationService.updateReservation(reservationId, updateData);

        res.status(200).json(updatedReservation);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const reservationId = req.params.id;
        await reservationService.deleteReservation(reservationId);

        res.status(200).json({ message: "Successful"});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};