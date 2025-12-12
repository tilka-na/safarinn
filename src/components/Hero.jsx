import React, { useState, useEffect } from "react";
import SwiperSection from "./SwiperSection";

export default function HERO() {
    return (
    <section className="w-full mt-20 px-6 md:pb-24 grid md:grid-cols-2 items-center gap-16">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white">
            Trouvez votre <span className="text-customGrey">séjour parfait</span>
            <br /> au Maroc
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md">
            Réservez parmi les meilleurs hôtels, riads et appartements avec une
            plateforme simple, rapide et moderne.
          </p>

          <button className="mt-2 bg-customBlue text-white px-7 py-4 rounded-xl shadow-md font-semibold hover:bg-blue-800 transition-all">
            Explorer les hôtels
          </button>
        </div>
        <SwiperSection/>
    </section>

    );
}
