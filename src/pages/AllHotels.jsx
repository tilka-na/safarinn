import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Hotels, assets } from "../assets/Images/asset";
import Layout from "../layout/layout.jsx";
const Checkbox=({label,selected=false,onChange=()=>{ }})=>{
    return (
      <label className="flex gap-3 items-center cursor-pointer mt-3 text-xs hover:bg-safari-light/70 px-3 py-2 rounded-lg transition-colors">
        <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked,label)}
        className="w-4 h-4 text-customBlue bg-gray-100 border-gray-300 rounded focus:ring-safari-light/70 focus:ring-2"/>
        <span className="font-light select-none">{label}</span>
      </label>
    )
}

const RadioButton=({label,selected=false,onChange=()=>{ }})=>{
    return (
      <label className="flex gap-3 items-center cursor-pointer mt-3 text-xs hover:bg-safari-light/70 px-3 py-2 rounded-lg transition-colors">
        <input type="radio" name="sortOption" checked={selected} onChange={()=>onChange(label)}
        className="w-4 h-4 text-customBlue bg-gray-100 border-gray-300 focus:ring-safari-light/70 focus:ring-2"/>
        <span className="font-medium select-none text-gray-500">{label}</span>
      </label>
    )
}


export default function AllHotels() {
  const navigate=useNavigate();
  const [openFilters,setOpenFilters]=useState(true);
  const [selectedRoomTypes, setSelectedRoomTypes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState('');

  const roomTypes=["Standard Room",
    "Double Room",
    "Suite",
    "Deluxe Room"
  ];
  const priceRanges=[
    '0 to 20',
    '21 to 35',
    '36 to 45',
    '46 to 55',
    '56 to 65',
    '66 to 100'
  ];
  const sortOptions=[
    "Prix croissant",
    "Prix décroissant",
    "Du plus récent au plus ancien"
  ];

  const filteredAndSortedHotels = useMemo(() => {
    let filtered = Hotels;

    // Filter by room types
    if (selectedRoomTypes.length > 0) {
      filtered = filtered.filter(hotel =>
        hotel.rooms.some(room => selectedRoomTypes.includes(room.type))
      );
    }

    // Filter by price ranges
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(hotel => {
        return selectedPriceRanges.some(range => {
          const [min, max] = range.split(' to ').map(s => parseInt(s.replace(/\D/g, '')));
          return hotel.price >= min && hotel.price <= max;
        });
      });
    }

    // Sort
    if (selectedSortOption === "Prix croissant") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (selectedSortOption === "Prix décroissant") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    } else if (selectedSortOption === "Du plus récent au plus ancien") {
      filtered = [...filtered].sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [selectedRoomTypes, selectedPriceRanges, selectedSortOption]);

  return (
    <Layout>
        <div className=' bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-customBlue dark:to-customBlue flex flex-col-reverse lg:flex-row items-start justify-between px-4 md:px-6
      lg:px-8 xl:px-25 pb-8'>
      <div>
            <div className="flex flex-col items-start text-left">
                <h1 className="font-serif text-4xl md:text-[40px] text-safari-dark dark:text-white">All Hotels</h1>
                <p className="text-sm md:text-base  text-gray-500/90 mt-2 max-w-174 text-safari-dark dark:text-white"> Découvrez tous les hôtels disponibles à Meknès. Que vous cherchiez un hôtel de luxe,
          un riad traditionnel ou un séjour économique, nous avons sélectionné les meilleures options
          pour rendre votre séjour inoubliable. Parcourez les hôtels, comparez les prix et réservez
          facilement en quelques clics.</p>
            </div>
            {filteredAndSortedHotels.map((room)=>(
              <div key={room.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 mb-6 border border-gray-100 hover:border-indigo-200">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <img onClick={()=>{navigate(`/hotels/${room.id}`); scrollTo(0,0)}}
                  src={room.images[0]} alt="hotel-img" title='View room details'
                  className="w-full md:w-1/2 h-64 rounded-xl object-cover cursor-pointer hover:scale-105 transition-transform duration-300"/>
                  <div className="md:w-1/2 flex flex-col gap-4">
                    <p onClick={()=>{navigate(`/hotels/${room.id}`); scrollTo(0,0)}}
                    className="text-gray-800 text-2xl md:text-3xl font-playfair cursor-pointer hover:text-indigo-600 transition-colors">{room.name}</p>
                    <div className="flex items-center gap-2">
                      <img src={assets.Starratingicon} alt="StartRating-icon" className='w-5 h-5'/>
                      <p className="text-gray-600 text-safari-dark dark:text-white">200+ reviews</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <img src={assets.LocationIcon} alt="Location-icon" className='w-4 h-4'/>
                      <span className="text-sm">{room.location.address}</span>
                    </div>
                    {/*room amenities*/}
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      {room.facilities.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray border border-customBlue hover:bg-safari-gold transition-colors">
                          <img src={item.icon} alt={item.name} className="w-4 h-4" />
                          <p className="text-xs text-safari-dark font-medium">{item.name}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-2xl font-bold text-customBlue dark:text-white">${room.price}/night</p>
                      <button className="px-6 py-3 bg-customBlue text-safari-dark dark:text-white rounded-full hover:bg-safari-gold transition-colors font-medium shadow-md hover:shadow-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {/*filters*/}
          <div className="bg-white w-[28rem] border-2 border-gray-300 text-gray-600
max-lg:mb-8 min-lg:mt-16">
            <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b
              border-gray-300 ${openFilters && "border-b"}`}>
              <p className="text-sm font-medium text-customBlue-800 dark:text-white">FILTERS</p>
              <div className="text-xs cursor-pointer">
                <span onClick={()=>setOpenFilters(!openFilters)}
                className="lg:hidden">{openFilters ? 'Hide':'Show'}</span>
                <span onClick={() => {
                  setSelectedRoomTypes([]);
                  setSelectedPriceRanges([]);
                  setSelectedSortOption('');
                }} className="hidden lg:block">Clear</span>
              </div>
            </div>

              <div className={`${openFilters ? 'h-auto' : "h-0"} overflow-hidden transition-all duration-700`}>
                  <div className="px-6 pt-6">
                    <p className="font-semibold text-gray-800 pb-4 text-customBlue dark:text-white">Popular filters</p>
                     {roomTypes.map((room,index)=>(
                      <Checkbox key={index} label={room} selected={selectedRoomTypes.includes(room)} onChange={(checked, label) => {
                        if (checked) {
                          setSelectedRoomTypes(prev => [...prev, label]);
                        } else {
                          setSelectedRoomTypes(prev => prev.filter(r => r !== label));
                        }
                      }}/>
                     ))}
                  </div>
                  <div className="px-6 pt-6">
                    <p className="font-semibold text-gray-800 pb-4 text-customBlue dark:text-white">Price Range</p>
                     {priceRanges.map((range,index)=>(
                      <Checkbox key={index} label={`$ ${range}`} selected={selectedPriceRanges.includes(range)} onChange={(checked, label) => {
                        const cleanLabel = label.replace('$ ', '');
                        if (checked) {
                          setSelectedPriceRanges(prev => [...prev, cleanLabel]);
                        } else {
                          setSelectedPriceRanges(prev => prev.filter(r => r !== cleanLabel));
                        }
                      }}/>
                     ))}
                  </div>
                  <div className="px-6 pt-8 pb-6">
                    <p className="font-semibold text-gray-800 pb-4 text-customBlue dark:text-white">Sort By</p>
                     {sortOptions.map((option,index)=>(
                      <RadioButton key={index} label={option}/>
                     ))}
                  </div>
              </div>
          </div>
</div>
    </Layout>
  )
}