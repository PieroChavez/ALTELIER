// src/Components/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección de marca */}
        <div>
          <h2 className="text-2xl font-bold text-white">Altelier</h2>
          <p className="text-sm text-zinc-400 mt-2">
            Innovación, estilo y funcionalidad para tu espacio.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm text-zinc-300">
            <li><a href="/" className="hover:text-white">Inicio</a></li>
            <li><a href="/about" className="hover:text-white">Nosotros</a></li>
            <li><a href="/products" className="hover:text-white">Productos</a></li>
            <li><a href="/contact" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
          <div className="flex space-x-4 text-zinc-300 text-xl">
            <a href="#"><FaFacebook className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaGithub className="hover:text-white" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-zinc-500 mt-10">
        © {new Date().getFullYear()} Altelier. Todos los derechos reservados.
      </div>
    </footer>
  );
}
export default Footer;