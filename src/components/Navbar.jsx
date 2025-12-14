import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../images/pic4.png";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
   <nav className="w-full h-20 bg-white/80 dark:bg-customGrey/70 backdrop-blur-md border-b dark:border-gray-700 shadow-sm px-4 fixed top-0 left-0 z-50 flex items-center justify-between">
  <div className="flex items-center gap-2 h-full">
    <img src={logo} alt="logo" className="h-14 w-auto object-contain" />
    <div className="text-2xl font-extrabold tracking-wide text-customBlue dark:text-gray-100">
      Safarinn
    </div>
  </div>
  <div className="hidden md:flex gap-8 text-sm font-medium">
    <Link to="/" className="py-2 hover:text-customBlue dark:hover:text-white">Accueil</Link>
    <Link to="/hotels" className="py-2 hover:text-customBlue dark:hover:text-white">Hôtels</Link>
    <Link to="/add-property" className="py-2 hover:text-customBlue dark:hover:text-white">Lister un bien</Link>
    <Link to="/about" className="py-2 hover:text-customBlue dark:hover:text-white">À propos</Link>
    <Link to="/contact" className="py-2 hover:text-customBlue dark:hover:text-white">Contact</Link>
    <Link to="/login" className="px-4 py-2 bg-customBlue text-white rounded-lg hover:bg-customGrey transition">Se connecter</Link>
    <Link to="/register" className="px-4 py-2 bg-customBlue text-white rounded-lg hover:bg-customGrey transition">S’inscrire</Link>
  </div>
  <div className="flex items-center gap-4">
    <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition">
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
    <button className="md:hidden hover:opacity-70 cursor-pointer" onClick={() => setOpenMenu(!openMenu)}>
      {openMenu ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>
{/* Mobile Menu */}
{openMenu && (
  <div className="md:hidden fixed inset-0 bg-black/50 z-50">
    <div className="absolute top-20 left-4 right-4 flex flex-col gap-3 
                    text-sm font-medium bg-white dark:bg-gray-800 
                    p-4 rounded-xl shadow-lg border dark:border-gray-700">

      <Link to="/" onClick={() => setOpenMenu(false)} className="py-2">Accueil</Link>
      <Link to="/hotels" onClick={() => setOpenMenu(false)} className="py-2">Hôtels</Link>
      <Link to="/add-property" onClick={() => setOpenMenu(false)} className="py-2">Lister un bien</Link>
      <Link to="/about" onClick={() => setOpenMenu(false)} className="py-2">À propos</Link>
      <Link to="/contact" onClick={() => setOpenMenu(false)} className="py-2">Contact</Link>
      <Link to="/login" onClick={() => setOpenMenu(false)}
        className="px-4 py-2 bg-customBlue text-white rounded-lg">
        Se connecter
      </Link>
      <Link to="/register" onClick={() => setOpenMenu(false)}
        className="px-4 py-2 bg-customBlue text-white rounded-lg">
        S’inscrire
      </Link>

    </div>
  </div>
)}
</nav>

  );
}
