import React, { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    navigate(`/hotels?search=${keyword}`);
  }

  return (
    <div className="px-6 -mt-10 relative z-30">
      <div className="bg-white/90 dark:bg-customGrey shadow-xl rounded-2xl p-6 md:flex gap-6 items-end">

        <div className="flex flex-col w-full">
          <label className="font-medium text-sm">
            Rechercher à Meknès
          </label>
          <input
            className="border rounded-lg p-3 mt-1"
            placeholder="Nom, quartier, type..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>

        <button
          onClick={handleSearch}
          className="bg-customBlue text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <Search size={18} /> Rechercher
        </button>

      </div>
    </div>
  );
}
