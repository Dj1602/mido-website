import { Link } from "react-router-dom";
import logo from "../assets/Logo 19.png";

function Navbar() {
  return (
    <nav className="w-full bg-blue-600 text-white shadow-md h-30 flex items-center">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center w-full px-4">
        {/* Logo */}
        <Link to="/" className="transform transition-transform duration-1000 hover:shadow-lg">
          <img src={logo} alt="MIDO Engineering PLC" className="h-25 w-auto" />
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-gray-300 transition-colors duration-300">Home</Link>
          <Link to="/services" className="hover:text-gray-300 transition-colors duration-300">Services</Link>
          <Link to="/projects" className="hover:text-gray-300 transition-colors duration-300">Projects</Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors duration-300">Contact</Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors duration-300">About</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
