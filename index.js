require('dotenv').config();

const express = require('express');
const db = require('./src/models');
const app = express();
const userRoutes = require('./src/routes/user.routes');
const bookRoutes = require('./src/routes/book.routes');
const port = process.env.PORT || 3000;

// async function testDbConnection() {
//     try {
//         await db.sequelize.authenticate();
//         console.log('Koneksi ke daabase berhasil terkoneksi');   
//     } catch (error) {
//         console.error('Tidak dapat terhubung ke database: ', error);
//     }
// }

// testDbConnection();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({ message: 'Selamat datang di API aplikasi.'});
});

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
