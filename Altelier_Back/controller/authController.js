const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("../models/userModel");

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  findUserByEmail(email, async (err, user) => {
    if (user) return res.status(400).json({ msg: "Usuario ya existe" });

    const hashedPassword = await bcrypt.hash(password, 10);
    createUser(name, email, hashedPassword, (err, result) => {
      if (err) return res.status(500).json({ msg: "Error al registrar usuario" });
      res.status(201).json({ msg: "Usuario registrado correctamente" });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, async (err, user) => {
    if (!user) return res.status(400).json({ msg: "Credenciales inválidas" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Credenciales inválidas" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  });
};
