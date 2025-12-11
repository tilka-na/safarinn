import React from "react";
import { Link } from "react-router-dom";
import { Hotels } from "../assets/Images/asset";
import hotels from "../assets/Images/asset";
hotels

export default function AllHotels() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Available Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Hotels.map((hotel) => (
          <div key={hotel.id} className="border p-4 rounded shadow">
            <img src={hotel.images[0]} className="rounded mb-3" />
            <h2 className="text-xl font-semibold">{hotel.name}</h2>

            <Link
              to={`/hotels/${hotel.id}`}
              className="text-blue-600 underline mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
