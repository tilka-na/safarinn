import React, { useState, useEffect } from "react";
import { Menu, Search, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
export default function Navbar({ darkMode, toggleDarkMode }) {
    return (
        <nav className="w-full bg-white/80 dark:bg-customGrey/70 backdrop-blur-md border-b dark:border-gray-700 shadow-sm px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-colors">
                
            <div className="text-2xl font-extrabold tracking-wide text-customBlue dark:text-gray-100">Safarinn</div>
            <div className="hidden md:flex gap-8 text-sm font-medium">
                <Link to="/" className="hover:text-customBlue dark:hover:text-white">Accueil</Link>
                <Link to="/hotels" className="hover:text-customBlue dark:hover:text-white">Hôtels</Link>
                <Link to="/add-property" className="hover:text-customBlue dark:hover:text-white">Lister un bien</Link>
                <Link to="/about" className="hover:text-customBlue dark:hover:text-white">À propos</Link>
                <Link to="/contact" className="hover:text-customBlue dark:hover:text-white">Contact</Link>
            </div>
            
            <div className="flex items-center gap-4">
            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
                >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="md:hidden hover:opacity-70">
            <Menu size={26} />
            </button>
            </div>
        </nav>
    );
}