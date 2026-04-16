const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}).promise();

const User = {
    // Për Login
    findByEmail: async (email) => {
        const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        return rows[0];
    },

    // Për Register
    create: async (userData) => {
        const { name, email, password } = userData;
        const [result] = await db.query(
            "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, 'User')",
            [name, email, password]
        );
        return result.insertId;
    }
};

module.exports = User;
