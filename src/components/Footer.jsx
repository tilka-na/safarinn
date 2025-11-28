import React from "react";
export default function Footer() {
    return (
        <footer className="px-6 py-14 bg-customGrey text-gray-300 dark:bg-black dark:text-gray-400 grid md:grid-cols-3 gap-12">
            <div>
            <h3 className="text-xl font-bold text-white mb-3">Safarinn</h3>
            <p>Votre partenaire pour trouver les meilleurs hôtels au Maroc.</p>
            </div>

            <div className="flex flex-col gap-2 text-sm">
            <a href="#" className="hover:text-white">Accueil</a>
            <a href="#" className="hover:text-white">Hôtels</a>
            <a href="#" className="hover:text-white">Lister un bien</a>
            <a href="#" className="hover:text-white">À propos</a>
            <a href="#" className="hover:text-white">Contact</a>
            </div>

            <div className="text-sm">
            <p>Email : contact@safarinn.com</p>
            <p>Téléphone : +212 6 00 00 00 00</p>
            </div>
      </footer>
    );
}