// src/Components/Footer.jsx
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10 mt-16">
      {/* <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        

        <div>
          
          <div className="flex space-x-4 text-zinc-300 text-xl">
            <a href="#"><FaFacebook className="hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaGithub className="hover:text-white" /></a>
          </div>
        </div>
      </div> */}
      

      <div className="text-center text-sm text-zinc-500 mt-10">
        © {new Date().getFullYear()} Altelier. Todos los derechos reservados.
      </div>
    </footer>
  );
}
export default Footer;