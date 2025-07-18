require('dotenv').config();

const express = require('express');
const db = require('./src/models');
const app = express();
const userRoutes = require('./src/routes/user.routes');
const bookRoutes = require('./src/routes/book.routes');
const authorRoutes = require('./src/routes/author.routes');
const borrowRoutes = require('./src/routes/borrow.routes');
const reservationRoutes = require('./src/routes/reservation.routes');
const authRoutes = require('./src/routes/auth.routes');
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({ message: 'Selamat datang di API aplikasi.'});
});

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/authors', authorRoutes);
app.use('/api/borrow', borrowRoutes);
app.use('/api/reservation', reservationRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
