const User = require('../models/User');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await User.create({ name, email, password });
        res.status(201).json({ message: "Përdoruesi u regjistrua!" });
    } catch (error) {
        res.status(500).json({ message: "Gabim!" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmail(email);
        if (!user) return res.status(404).json({ message: "Nuk u gjet!" });
        res.json({ message: "Login sukses!", user });
    } catch (error) {
        res.status(500).json({ message: "Gabim!" });
    }
};

module.exports = { register, login };
