import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Hotels, assets } from "../assets/Images/asset";
import Layout from "../layout/layout.jsx";
import { useLocation } from "react-router-dom";
const Checkbox = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-3 text-xs hover:bg-safari-light/70 px-3 py-2 rounded-lg transition-colors">
    <input
      type="checkbox"
      checked={selected}
      onChange={(e) => onChange(e.target.checked, label)}
      className="w-4 h-4 text-customBlue bg-gray-100 border-gray-300 rounded focus:ring-safari-light/70 focus:ring-2"
    />
    <span className="font-light select-none">{label}</span>
  </label>
);

const RadioButton = ({ label, selected = false, onChange = () => {} }) => (
  <label className="flex gap-3 items-center cursor-pointer mt-3 text-xs hover:bg-safari-light/70 px-3 py-2 rounded-lg transition-colors">
    <input
      type="radio"
      name="sortOption"
      checked={selected}
      onChange={() => onChange(label)}
      className="w-4 h-4 text-customBlue bg-gray-100 border-gray-300 focus:ring-safari-light/70 focus:ring-2"
    />
    <span className="font-medium select-none text-gray-500">{label}</span>
  </label>
);

export default function AllHotels() {
  //search query
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(true);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const roomTypes = ["Standard Room", "Double Room", "Suite", "Deluxe Room"];
  const priceRanges = ["0 to 20", "21 to 35", "36 to 45", "46 to 55", "56 to 65", "66 to 100"];
  const sortOptions = ["Prix croissant", "Prix décroissant", "Du plus récent au plus ancien"];

  const filteredAndSortedHotels = useMemo(() => {
    let filtered = Hotels;
    if (searchQuery) {

      filtered = filtered.filter(hotel =>
      hotel.name.toLowerCase().includes(searchQuery) ||
      hotel.location.address.toLowerCase().includes(searchQuery) ||
      hotel.rooms.some(room => room.type.toLowerCase().includes(searchQuery))
  );
}

    if (selectedRoomTypes.length) {
      filtered = filtered.filter(hotel =>
        hotel.rooms.some(room => selectedRoomTypes.includes(room.type))
      );
    }

    if (selectedPriceRanges.length) {
      filtered = filtered.filter(hotel =>
        selectedPriceRanges.some(range => {
          const [min, max] = range.split(" to ").map(s => parseInt(s.replace(/\D/g, "")));
          return hotel.price >= min && hotel.price <= max;
        })
      );
    }

    if (selectedSortOption === "Prix croissant") filtered = [...filtered].sort((a, b) => a.price - b.price);
    else if (selectedSortOption === "Prix décroissant") filtered = [...filtered].sort((a, b) => b.price - a.price);
    else if (selectedSortOption === "Du plus récent au plus ancien") filtered = [...filtered].sort((a, b) => b.id - a.id);

    return filtered;
  }, [searchQuery,selectedRoomTypes, selectedPriceRanges, selectedSortOption]);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-customBlue dark:to-customBlue flex flex-col-reverse lg:flex-row items-start justify-between px-4 md:px-6 lg:px-8 xl:px-25 py-8">

        <div>
          <h1 className="font-serif text-4xl md:text-[40px] text-safari-dark dark:text-white mb-6">All Hotels</h1>

          {filteredAndSortedHotels.map(room => (
            <div key={room.id} className="w-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 mb-6 border border-gray-100 hover:border-indigo-200">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img
                  src={room.images[0]}
                  alt="hotel"
                  onClick={() => { navigate(`/hotels/${room.id}`); scrollTo(0, 0); }}
                  className="w-full md:w-1/2 h-64 rounded-xl object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                />

                <div className="md:w-1/2 flex flex-col gap-4">
                  <p
                    onClick={() => { navigate(`/hotels/${room.id}`); scrollTo(0, 0); }}
                    className="text-gray-800 text-2xl md:text-3xl font-playfair cursor-pointer hover:text-indigo-600"
                  >
                    {room.name}
                  </p>

                  <div className="flex items-center gap-2">
                    <img src={assets.Starratingicon} className="w-5 h-5" />
                    <p className="text-gray-600">200+ reviews</p>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500">
                    <img src={assets.LocationIcon} className="w-4 h-4" />
                    <span className="text-sm">{room.location.address}</span>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-2">
                    {room.facilities.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-full border border-customBlue">
                        <img src={item.icon} className="w-4 h-4" />
                        <p className="text-xs font-medium">{item.name}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <p className="text-2xl font-bold text-customBlue">${room.price}/night</p>
                    <button
                      onClick={() => { navigate(`/hotels/${room.id}`); scrollTo(0, 0); }}
                      className="px-6 py-3 bg-customBlue text-white rounded-full hover:bg-safari-gold transition-colors font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-customGrey w-[15rem] border-2 border-gray-300 dark:border-customGrey text-gray-600 dark:text-white max-lg:mb-8 min-lg:mt-16">
          <div className="flex items-center justify-between px-5 py-2.5 border-b">
            <p className="text-sm font-medium">FILTERS</p>
            <span
              className="text-xs cursor-pointer"
              onClick={() => {
                setSelectedRoomTypes([]);
                setSelectedPriceRanges([]);
                setSelectedSortOption("");
              }}
            >
              Clear
            </span>
          </div>

          <div className="px-6 pt-6">
            <p className="font-semibold pb-4 text-customBlue dark:text-customBlue">Popular filters</p>
            {roomTypes.map((room, i) => (
              <Checkbox
                key={i}
                label={room}
                selected={selectedRoomTypes.includes(room)}
                onChange={(checked, label) =>
                  setSelectedRoomTypes(prev => checked ? [...prev, label] : prev.filter(r => r !== label))
                }
              />
            ))}
          </div>

          <div className="px-6 pt-6">
            <p className="font-semibold pb-4 text-customBlue dark:text-customBlue">Price Range</p>
            {priceRanges.map((range, i) => (
              <Checkbox
                key={i}
                label={`$ ${range}`}
                selected={selectedPriceRanges.includes(range)}
                onChange={(checked, label) => {
                  const clean = label.replace("$ ", "");
                  setSelectedPriceRanges(prev => checked ? [...prev, clean] : prev.filter(r => r !== clean));
                }}
              />
            ))}
          </div>

          <div className="px-6 pt-8 pb-6">
            <p className="font-semibold pb-4 text-customBlue dark:text-customBlue">Sort By</p>
            {sortOptions.map((option, i) => (
              <RadioButton
                key={i}
                label={option}
                selected={selectedSortOption === option}
                onChange={label => setSelectedSortOption(label)}
              />
            ))}
          </div>
        </div>

      </div>
    </Layout>
  );
}
