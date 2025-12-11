import FreeWifiIcon from '../Images/freewifiicon.png';
import BreakfastIcon from '../Images/breakfasticon.png';
import ParkingIcon from '../Images/parkingicon.png';
import PoolIcon from '../Images/poolicon.png';
import spaIcon from '../Images/spaicon.png';
import restaurantIcon from '../Images/restauranticon.png';
import roomServiceIcon from '../Images/roomservicesicon.png';
import nonSmokingIcon from '../Images/nonsmokingicon.png';
import receptionIcon from '../Images/receptionicon.png';
import starIconFilled from '../Images/starIconFilled.png';
import LocationIcon from '../Images/locationicon.png';
import Starratingicon from '../Images/startRatingico.jpg';
import heartIcon from '../Images/heartIcon.png';
import homeIcon from '../Images/homeIcon.png';
import badgeIcon from '../Images/badgeIcon.png';

import { imag } from './LesImages';
export const assets={
    FreeWifiIcon,BreakfastIcon,
    ParkingIcon,PoolIcon,
    spaIcon,restaurantIcon,
    roomServiceIcon,nonSmokingIcon,
    receptionIcon,starIconFilled,
    LocationIcon,Starratingicon,
    heartIcon,homeIcon,badgeIcon
}

export const facilityIcons = {
  "Free WiFi": assets.FreeWifiIcon,
  "Breakfast Included": assets.BreakfastIcon,
  "Parking": assets.ParkingIcon,
  "Pool": assets.PoolIcon,
  "Spa": assets.spaIcon,
  "Restaurant": assets.restaurantIcon,
  "Room Service": assets.roomServiceIcon,
  "Non-Smoking": assets.nonSmokingIcon,
  "24h Reception": assets.receptionIcon,
};

export const roomCommonData=[
  {icon:assets.homeIcon, title:"Clean & Safe Stay",description:"A well-maintained and hygienic space just for you."},
  {icon:assets.badgeIcon, title:"Enhanced Cleaning",description:"This host follows Staybnb's strict cleaning standards."},
  {icon:assets.LocationIcon, title:"Excellent Location",description:"90% of guests rated the location 5 stars."},
  {icon:assets.heartIcon, title:"Smooth Check-In",description:"100% of guests gave check-in a 5-star rating."},
];

export default roomCommonData;


export const Hotels = [
  {
    id: 1,
    name: "Riad Zahraa",
    city: "Meknès",
    price: 35,
    rating: 4.3,
    images: [imag.roomZahra,imag.roommZahra,imag.dwiraZahra,imag.salonZahra,imag.bedroomZahra,
      imag.breakfastZahra,imag.ketchenZahra],
    description: "Riad traditionnel dans la médina de Meknès avec patio et terrasse panoramique. Wi-Fi gratuit et petit-déjeuner inclus.",
    location: { address: "5, Derb Sidi Abdellah El Kassri, Ancienne Médina" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] },
      { name: "Parking", icon: facilityIcons["Parking"] }
    ],
    rooms: [
      { type: "Single", price: 35 },
      { type: "Double", price: 50 },
      { type: "Suite", price: 70 }
    ]
  },
  {
    id: 2,
    name: "Hotel Menzeh Dalia",
    city: "Meknès",
    price: 50,
    rating: 4.1,
    images: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/75/a5/26/belle-facade.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/569910934.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/569910935.jpg"
    ],
    description: "Hôtel confortable avec chambres modernes, situé au centre de Meknès. Proximité des monuments et restaurants.",
    location: { address: "Quartier Marjane, Meknès" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Pool", icon: facilityIcons["Pool"] },
      { name: "Restaurant", icon: facilityIcons["Restaurant"] }
    ],
    rooms: [
      { type: "Single", price: 50 },
      { type: "Double", price: 65 },
      { type: "Suite", price: 90 }
    ]
  },
  {
    id: 3,
    name: "Ibis Meknès",
    city: "Meknès",
    price: 40,
    rating: 4.0,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max500/717002606.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/f8/c0/cc/ibis-meknes-hotel.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/717002607.jpg"
    ],
    description: "Hôtel pratique et économique avec chambres confortables, idéal pour voyageurs d'affaires et touristes.",
    location: { address: "Avenue des F.A.R & My Ismaïl" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] },
      { name: "24h Reception", icon: facilityIcons["24h Reception"] }
    ],
    rooms: [
      { type: "Single", price: 40 },
      { type: "Double", price: 55 },
      { type: "Suite", price: 80 }
    ]
  },
  {
    id: 4,
    name: "Z Hotel Meknès",
    city: "Meknès",
    price: 45,
    rating: 4.2,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max500/409001139.jpg",
      "https://q-xx.bstatic.com/xdata/images/hotel/max500/390398043.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/409001140.jpg"
    ],
    description: "Hôtel milieu de gamme à Meknès, avec chambres modernes et service de qualité, proche du centre-ville.",
    location: { address: "Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single", price: 45 },
      { type: "Double", price: 60 },
      { type: "Suite", price: 85 }
    ]
  },
  {
    id: 5,
    name: "Hotel Akouas",
    city: "Meknès",
    price: 30,
    rating: 3.9,
    images: [
      "https://images.trvl-media.com/lodging/21000000/20460000/20451000/20450950/009a2d84.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/58474682.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/58474683.jpg"
    ],
    description: "Hôtel simple et économique, idéal pour les courts séjours à Meknès. Chambres confortables et service basique.",
    location: { address: "27, rue Émir Abdelkader, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] },
      { name: "24h Reception", icon: facilityIcons["24h Reception"] }
    ],
    rooms: [
      { type: "Single", price: 30 },
      { type: "Double", price: 45 },
      { type: "Suite", price: 65 }
    ]
  },
  {
    id: 6,
    name: "Riad Bahia",
    city: "Meknès",
    price: 38,
    rating: 4.5,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max500/63789913.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/298599926.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/298599927.jpg"
    ],
    description: "Riad charmant avec décoration traditionnelle, situé dans la médina. Idéal pour un séjour tranquille au cœur de la ville.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single", price: 38 },
      { type: "Double", price: 55 },
      { type: "Suite", price: 75 }
    ]
  },
  {
    id: 7,
    name: "Riad Safir",
    city: "Meknès",
    price: 36,
    rating: 4.4,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/245609006.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/245635475.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/245635476.jpg"
    ],
    description: "Riad cosy avec patio et chambres confortables. Parfait pour découvrir la médina de Meknès.",
    location: { address: "1, derb Lalla Alamia, Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single", price: 36 },
      { type: "Double", price: 50 },
      { type: "Suite", price: 70 }
    ]
  },
  {
    id: 8,
    name: "Riad Idrissi",
    city: "Meknès",
    price: 32,
    rating: 4.3,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/642692390.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/643228494.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/643228495.jpg"
    ],
    description: "Maison d’hôtes traditionnelle avec ambiance familiale, proche des sites historiques.",
    location: { address: "Ville ancienne, Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Room Service", icon: facilityIcons["Room Service"] }
    ],
    rooms: [
      { type: "Single", price: 32 },
      { type: "Double", price: 48 },
      { type: "Suite", price: 68 }
    ]
  },
  {
    id: 9,
    name: "Hotel Swani",
    city: "Meknès",
    price: 42,
    rating: 4.0,
    images: [
      "https://q-xx.bstatic.com/xdata/images/hotel/max500/429970332.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/0b/08/55/hotel-swani.jpg",
      "https://q-xx.bstatic.com/xdata/images/hotel/max500/429970333.jpg"
    ],
    description: "Hôtel moderne et confortable avec chambres spacieuses et proche du centre-ville.",
    location: { address: "6, rue n°1, Bel Air, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] }
    ],
    rooms: [
      { type: "Single", price: 42 },
      { type: "Double", price: 58 },
      { type: "Suite", price: 82 }
    ]
  },
  {
    id: 10,
    name: "Hôtel Rif",
    city: "Meknès",
    price: 33,
    rating: 3.8,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/58477240.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/58474682.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/58477241.jpg"
    ],
    description: "Hôtel simple avec chambres correctes et prix abordable, idéal pour les séjours économiques.",
    location: { address: "Rue Omar Benchemssi, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single", price: 33 },
      { type: "Double", price: 47 },
      { type: "Suite", price: 65 }
    ]
  },
  {
    id: 11,
    name: "Riad Benchekroun",
    city: "Meknès",
    price: 37,
    rating: 4.4,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/245612838.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/631164168.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/631164169.jpg"
    ],
    description: "Riad typique avec patios et terrasses, parfait pour un séjour au cœur de la médina.",
    location: { address: "8, Derb Mekka Tiberbarine, Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single", price: 37 },
      { type: "Double", price: 52 },
      { type: "Suite", price: 72 }
    ]
  },
  {
    id: 12,
    name: "Riad Selma",
    city: "Meknès",
    price: 34,
    rating: 4.2,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630000123.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630000456.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630000789.jpg"
    ],
    description: "Petit riad accueillant avec chambres confortables et décoration traditionnelle.",
    location: { address: "Quartier Tiberbarine / Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Single", price: 34 },
      { type: "Double", price: 48 },
      { type: "Suite", price: 68 }
    ]
  },
  {
    id: 13,
    name: "Hotel Volubilis",
    city: "Meknès",
    price: 40,
    rating: 4.1,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max500/330285457.jpg",
      "https://q-xx.bstatic.com/xdata/images/hotel/max500/609240704.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/330285458.jpg"
    ],
    description: "Hôtel confortable, idéal pour les voyageurs souhaitant visiter Meknès et ses environs.",
    location: { address: "Moulay Idriss Zerhoun / Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single", price: 40 },
      { type: "Double", price: 56 },
      { type: "Suite", price: 78 }
    ]
  },
  {
    id: 14,
    name: "Riad Ritaj",
    city: "Meknès",
    price: 36,
    rating: 4.3,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630123456.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630123789.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630123790.jpg"
    ],
    description: "Maison d’hôtes traditionnelle avec patios et chambres confortables.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single", price: 36 },
      { type: "Double", price: 50 },
      { type: "Suite", price: 70 }
    ]
  },
  {
    id: 15,
    name: "Riad Yacout",
    city: "Meknès",
    price: 38,
    rating: 4.4,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630234567.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630234890.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630234891.jpg"
    ],
    description: "Charmant riad avec ambiance traditionnelle et terrasse pour se détendre.",
    location: { address: "22 Place Lalla Aouda, Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Single", price: 38 },
      { type: "Double", price: 54 },
      { type: "Suite", price: 74 }
    ]
  },
  {
    id: 16,
    name: "Riad Zidania",
    city: "Meknès",
    price: 37,
    rating: 4.3,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630345678.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630345901.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630345902.jpg"
    ],
    description: "Petit riad avec chambres confortables, idéal pour découvrir la médina.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Single", price: 37 },
      { type: "Double", price: 52 },
      { type: "Suite", price: 72 }
    ]
  },
  {
    id: 17,
    name: "Riad Atika",
    city: "Meknès",
    price: 36,
    rating: 4.2,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630456789.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630456012.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630456013.jpg"
    ],
    description: "Riad traditionnel avec patios et chambres décorées à la marocaine.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Single", price: 36 },
      { type: "Double", price: 50 },
      { type: "Suite", price: 70 }
    ]
  },
  {
    id: 18,
    name: "Riad Bab Berdaine",
    city: "Meknès",
    price: 34,
    rating: 4.1,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630567890.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630567123.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630567124.jpg"
    ],
    description: "Maison d’hôtes avec ambiance traditionnelle et proximité du centre-ville.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Single", price: 34 },
      { type: "Double", price: 48 },
      { type: "Suite", price: 68 }
    ]
  },
  {
    id: 19,
    name: "Riad Amazigh",
    city: "Meknès",
    price: 35,
    rating: 4.2,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630678901.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630678234.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630678235.jpg"
    ],
    description: "Riad charmant avec chambres confortables et patios typiques marocains.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Single", price: 35 },
      { type: "Double", price: 50 },
      { type: "Suite", price: 68 }
    ]
  },
  {
    id: 20,
    name: "Hotel Bab Mansour",
    city: "Meknès",
    price: 45,
    rating: 4.3,
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630789012.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630789345.jpg",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/630789346.jpg"
    ],
    description: "Hôtel de standing avec chambres modernes et proximité de Bab Mansour.",
    location: { address: "Rue Émir Abdelkader, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] }
    ],
    rooms: [
      { type: "Single", price: 45 },
      { type: "Double", price: 60 },
      { type: "Suite", price: 88 }
    ]
  }
];
