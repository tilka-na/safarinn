import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="px-6 py-14 bg-customGrey text-gray-300 dark:bg-black dark:text-gray-400 grid md:grid-cols-3 gap-12">
            <div>
            <h3 className="text-xl font-bold text-white mb-3">Safarinn</h3>
            <p>Votre partenaire pour trouver les meilleurs hôtels au Maroc.</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
        <Link to="/" className="hover:text-white">Accueil</Link>
        <Link to="/hotels" className="hover:text-white">Hôtels</Link>
        <Link to="/add-property" className="hover:text-white">Lister un bien</Link>
        <Link to="/about" className="hover:text-white">À propos</Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>

            <div className="text-sm">
            <p>Email : contact@safarinn.com</p>
            <p>Téléphone : +212 6 00 00 00 00</p>
            </div>
      </footer>
    );
}