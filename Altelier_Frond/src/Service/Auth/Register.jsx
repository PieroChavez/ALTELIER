import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/registro', {
        nombre,
        email,
        contraseña: contrasena,
        rol: 'cliente'  // Opcional
      });

      setMensaje(response.data.mensaje);
    } catch (error) {
      setMensaje(error.response?.data?.mensaje || 'Error al registrar');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Registro</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            className="w-full border p-2 rounded"
          />
          <button
            
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Registrarse
          </button>
        </form>
        {mensaje && <p className="mt-4 text-center text-sm">{mensaje}</p>}
      </div>
    </div>
  );
};

export default Register;
