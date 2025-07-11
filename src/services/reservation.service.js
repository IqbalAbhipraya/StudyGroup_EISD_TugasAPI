const db = require('../models');
const Reservation = db.Reservation;

exports.createReservation = async (reservationData) => {
    const {userId, reservedTime, status} = reservationData;

    if (!userId) {
        throw new Error('Harus ada user id.');
    }

    const newReservation = await Reservation.create({userId, reservedTime, status});

    return newReservation;
};

exports.findAllReservations = async () => {
    const reservations = await Reservation.findAll();
    return reservations;
};

exports.findReservationById = async (id) => {
    const reservation = await Reservation.findByPk(id);
    return reservation;
};

exports.updateReservation = async (id, updateData) => {
    const [num] = await Reservation.update(updateData, {
        where: {id: id}
    });

    if (num == 1) {
        const updatedReservation = await Reservation.findByPk(id);
        return updatedReservation;
    } else {
        throw new Error(`Tidak dapat memperbarui reservation dengan id=${id}.`);
    }
};

exports.deleteReservation = async (id) => {
    const num = await Reservation.destroy({
        where: {id: id}
    });

    if (num != 1) {
        throw new Error(`Tidak dapat menghapus reservation dengan id=${id}.`);
    }
};

