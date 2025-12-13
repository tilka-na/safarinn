import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
export default function SearchBar() {
    return (
        <div className="px-6 -mt-10 relative z-30">
            <div className="bg-white/90 dark:bg-customGrey dark:border dark:border-gray-700 backdrop-blur-xl shadow-xl rounded-2xl p-6 md:flex gap-6 items-end">

            <div className="flex flex-col w-full">
                <label className="font-medium text-sm text-gray-700 dark:text-gray-300">
                Destination
                </label>
                <input
                className="border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 mt-1"
                placeholder="Où allez-vous ?"
                />
            </div>

            <div className="flex flex-col w-full mt-4 md:mt-0">
                <label className="font-medium text-sm text-gray-700 dark:text-gray-300">
                Dates
                </label>
                <input
                className="border dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg p-3 mt-1"
                placeholder="Choisissez les dates"
                />
            </div>
            <Link to="/hotels">
            <button className="bg-customBlue text-white px-6 py-3 rounded-xl shadow-md mt-4 md:mt-0 flex items-center gap-2 font-medium hover:bg-blue-800 transition">
                <Search size={18} /> Rechercher
            </button>
            </Link>
            </div>
      </div>
    );
}