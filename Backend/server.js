const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Lidhja me Databazën
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Gabim gjatë lidhjes me MySQL:', err);
    } else {
        console.log(' Sukses: U lidhëm me databazën MySQL');
    }
});

// Rruga e parë (Test)
app.get('/', (req, res) => {
    res.send('Serveri është LIVE dhe po punon...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(` Serveri po punon në portin ${PORT}`);
});
