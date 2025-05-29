const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 🔌 Conexión a MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// 🔁 Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar con MySQL:', err);
    return;
  }
  console.log('✅ Conectado a MySQL');
});

// ✅ Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando con MySQL y .env');
});

// 🔐 Registro
app.post('/registro', async (req, res) => {
  const { nombre, telefono, email, contraseña, rol } = req.body;

  if (!nombre || !telefono || !email || !contraseña || !rol) {
    return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
  }

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, resultados) => {
    if (err) return res.status(500).json({ mensaje: 'Error en la base de datos', error: err });

    if (resultados.length > 0) {
      return res.status(400).json({ mensaje: 'El usuario ya existe' });
    }

    const hash = await bcrypt.hash(contraseña, 10);

    const sql = 'INSERT INTO usuarios (nombre, telefono, email, contraseña, rol) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [nombre, telefono, email, hash, rol], (err, result) => {
      if (err) return res.status(500).json({ mensaje: 'Error al registrar usuario', error: err });
      res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
    });
  });
});

// 🔐 Login
app.post('/login', (req, res) => {
  const { email, contraseña } = req.body;

  db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, resultados) => {
    if (err || resultados.length === 0) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    const usuario = resultados[0];
    const valida = await bcrypt.compare(contraseña, usuario.contraseña);

    if (!valida) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ mensaje: 'Login exitoso', token });
  });
});

// 🔐 Ruta protegida de ejemplo
app.get('/perfil', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).json({ mensaje: 'Token requerido' });

  jwt.verify(token, process.env.JWT_SECRET, (err, datos) => {
    if (err) return res.status(403).json({ mensaje: 'Token inválido' });
    res.json({ mensaje: 'Acceso autorizado', datos });
  });
});

// 🟢 Iniciar servidor
app.listen(3000, () => {
  console.log('🚀 Servidor corriendo en http://localhost:3000');
});
