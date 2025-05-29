import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook } from 'react-icons/fa';

const Login = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [rol, setRol] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        contraseña: contrasena,
      });
      alert(response.data.mensaje);
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      alert(error.response?.data?.mensaje || 'Error al iniciar sesión');
    }
    setEmail('');
    setContrasena('');
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (contrasena !== confirmarContrasena) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/registro', {
        nombre,
        telefono,
        rol,
        email,
        contraseña: contrasena,
      });
      alert(response.data.mensaje);
      setIsRegistering(false);
    } catch (error) {
      alert(error.response?.data?.mensaje || 'Error al registrarse');
    }
    setNombre('');
    setTelefono('');
    setRol('');
    setEmail('');
    setContrasena('');
    setConfirmarContrasena('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          {isRegistering ? 'Regístrate' : 'Iniciar Sesión'}
        </h2>

        <form onSubmit={isRegistering ? handleRegister : handleLogin} className="space-y-4">
          {isRegistering && (
            <>
              <input
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Número de celular"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecciona tu rol</option>
                <option value="barista">Barista</option>
                <option value="estudiante">Estudiante de cafés especiales</option>
                <option value="productor">Productor</option>
                <option value="catador">Catador</option>
                <option value="tostador">Tostador</option>
                <option value="dueño">Dueño de cafetería</option>
                <option value="empresa">Empresa que vende cafés especiales</option>
                <option value="amante">Amante del café</option>
              </select>
            </>
          )}

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {isRegistering && (
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              value={confirmarContrasena}
              onChange={(e) => setConfirmarContrasena(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isRegistering ? 'Registrarse' : 'Iniciar Sesión'}
          </button>
        </form>

        <div className="my-6 text-center text-sm text-gray-500">
          O {isRegistering ? 'regístrate' : 'continúa'} con
        </div>

        <div className="flex justify-between gap-4">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition">
            <FcGoogle size={20} />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition text-gray-700">
            <FaGithub size={20} />
            GitHub
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-100 transition text-blue-600">
            <FaFacebook size={20} />
            Facebook
          </button>
        </div>

        <p className="mt-6 text-center text-sm">
          {isRegistering ? (
            <>
              ¿Ya tienes cuenta?{' '}
              <button
                onClick={() => setIsRegistering(false)}
                className="text-blue-600 hover:underline focus:outline-none"
              >
                Iniciar Sesión
              </button>
            </>
          ) : (
            <>
              ¿No tienes cuenta?{' '}
              <button
                onClick={() => setIsRegistering(true)}
                className="text-blue-600 hover:underline focus:outline-none"
              >
                Regístrate
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
