import React from "react";
export default function About() {
  return (
    <section className="px-6 py-20 text-center bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        À propos de Safarinn
      </h2>
      <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg">
        Safarinn est une plateforme moderne dédiée à la recherche et la réservation
        d'hôtels au Maroc. Nous offrons une expérience intuitive, rapide et sécurisée.
      </p>
    </section>
  );
}
