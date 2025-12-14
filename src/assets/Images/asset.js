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
import Starratingicon from '../Images/startRatingico.png';
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
      { type: "Single Room", price: 35 },
      { type: "Double Room", price: 50 }
    ]
  },
  {
    id: 2,
    name: "Hotel Menzeh Dalia",
    city: "Meknès",
    price: 50,
    rating: 4.1,
    images: [imag.HotelMenzahDalia8,imag.HotelMenzahDalia2,imag.HotelMenzahDalia3,imag.HotelMenzahDalia4,
      imag.HotelMenzahDalia5,imag.HotelMenzahDalia6,imag.HotelMenzahDalia7,imag.HotelMenzahDalia1,imag.HotelMenzahDalia9
    ],
    description: "Hôtel confortable avec chambres modernes, situé au centre de Meknès. Proximité des monuments et restaurants.",
    location: { address: "Quartier Marjane, Meknès" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Pool", icon: facilityIcons["Pool"] },
      { name: "Restaurant", icon: facilityIcons["Restaurant"] }
    ],
    rooms: [
      { type: "Single Room", price: 50 },
      { type: "Double Room", price: 65 },
      { type: "Suite", price: 90 }
    ]
  },
  {
    id: 3,
    name: "Ibis Meknès",
    city: "Meknès",
    price: 40,
    rating: 4.5,
    images: [imag.HotelIbis1,imag.HotelIbis2,imag.HotelIbis3,imag.HotelIbis4,
      imag.HotelIbis5,imag.HotelIbis6,imag.HotelIbis7
    ],
    description: "Hôtel pratique et économique avec chambres confortables, idéal pour voyageurs d'affaires et touristes.",
    location: { address: "Avenue des F.A.R & My Ismaïl" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] },
      { name: "24h Reception", icon: facilityIcons["24h Reception"] }
    ],
    rooms: [
      { type: "Double Room", price: 55 },
      { type: "Suite", price: 80 }
    ]
  },
  {
    id: 4,
    name: "Zaki Hotel Meknès",
    city: "Meknès",
    price: 45,
    rating: 4.2,
    images: [imag.ZHotelMeknes1,imag.ZHotelMeknes2,imag.ZHotelMeknes3,imag.ZHotelMeknes4,
      imag.ZHotelMeknes5,imag.ZHotelMeknes6,imag.ZHotelMeknes7,imag.ZHotelMeknes8
    ],
    description: "Hôtel milieu de gamme à Meknès, avec chambres modernes et service de qualité, proche du centre-ville.",
    location: { address: "Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single room", price: 45 },
      { type: "Double room", price: 60 },
      { type: "Suite", price: 85 }
    ]
  },
  {
    id: 5,
    name: "Hotel Akouas",
    city: "Meknès",
    price: 30,
    rating: 3,
    images: [imag.HotelAkouas1,imag.HotelAkouas2,imag.HotelAkouas3,imag.HotelAkouas4,
      imag.HotelAkouas5,imag.HotelAkouas6,imag.HotelAkouas7,imag.HotelAkouas8,imag.HotelAkouas9
    ],
    description: "Hôtel simple et économique, idéal pour les courts séjours à Meknès. Chambres confortables et service basique.",
    location: { address: "27, rue Émir Abdelkader, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] },
      { name: "24h Reception", icon: facilityIcons["24h Reception"] }
    ],
    rooms: [
      { type: "Single room", price: 30 },
      { type: "Double room", price: 45 },
      { type: "Suite", price: 65 }
    ]
  },
  {
    id: 6,
    name: "Riad Bahia",
    city: "Meknès",
    price: 38,
    rating: 4.5,
    images: [imag.RiadBahia1,imag.RiadBahia2,imag.RiadBahia3,imag.RiadBahia4,
      imag.RiadBahia5,imag.RiadBahia6,imag.RiadBahia7,imag.RiadBahia8
    ],
    description: "Riad charmant avec décoration traditionnelle, situé dans la médina. Idéal pour un séjour tranquille au cœur de la ville.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single Room", price: 38 },
      { type: "Double Room", price: 55 },
      { type: "Suite", price: 75 }
    ]
  },
  {
    id: 7,
    name: "Riad Safir",
    city: "Meknès",
    price: 36,
    rating: 3.5,
    images: [imag.RiadSafir1,imag.RiadSafir2,imag.RiadSafir3,imag.RiadSafir4,
      imag.RiadSafir5,imag.RiadSafir6,imag.RiadSafir7,imag.RiadSafir8,imag.RiadSafir9
    ],
    description: "Riad cosy avec patio et chambres confortables. Parfait pour découvrir la médina de Meknès.",
    location: { address: "1, derb Lalla Alamia, Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single Room", price: 36 },
      { type: "Double Room", price: 50 },
      { type: "Suite", price: 70 }
    ]
  },
  {
    id: 8,
    name: "Riad Idrissi",
    city: "Meknès",
    price: 32,
    rating: 4.3,
    images: [imag.RiadIdrissi1,imag.RiadIdrissi2,imag.RiadIdrissi3,imag.RiadIdrissi4,
      imag.RiadIdrissi5,imag.RiadIdrissi6,imag.RiadIdrissi7
    ],
    description: "Maison d’hôtes traditionnelle avec ambiance familiale, proche des sites historiques.",
    location: { address: "Ville ancienne, Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Room Service", icon: facilityIcons["Room Service"] }
    ],
    rooms: [
      { type: "Double Room", price: 48 },
      { type: "Suite", price: 68 }
    ]
  },
  {
    id: 9,
    name: "Hotel Swani",
    city: "Meknès",
    price: 42,
    rating: 4.5,
    images: [imag.HotelSwani1,imag.HotelSwani2,imag.HotelSwani3,imag.HotelSwani4,
      imag.HotelSwani5,imag.HotelSwani6,imag.HotelSwani7,imag.HotelSwani8,imag.HotelSwani9
    ],
    description: "Hôtel moderne et confortable avec chambres spacieuses et proche du centre-ville.",
    location: { address: "6, rue n°1, Bel Air, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] }
    ],
    rooms: [
      { type: "Single Room", price: 42 },
      { type: "Double Room", price: 58 }
    ]
  },
  {
    id: 10,
    name: "Hôtel Rif",
    city: "Meknès",
    price: 33,
    rating: 4.5,
    images: [imag.HôtelRif1,imag.HôtelRif2,imag.HôtelRif3,imag.HôtelRif4,
      imag.HôtelRif5,imag.HôtelRif6,imag.HôtelRif7,imag.HôtelRif8,imag.HôtelRif9
    ],
    description: "Hôtel simple avec chambres correctes et prix abordable, idéal pour les séjours économiques.",
    location: { address: "Rue Omar Benchemssi, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single Room", price: 33 },
      { type: "Double Room", price: 47 },
      { type: "Suite", price: 65 }
    ]
  },
  {
    id: 11,
    name: "Riad Benchekroun",
    city: "Meknès",
    price: 37,
    rating: 3,
    images: [imag.RiadBenchekroun,imag.RiadBenchekroun1,imag.RiadBenchekroun2,imag.RiadBenchekroun3,
      imag.RiadBenchekroun4,imag.RiadBenchekroun5,imag.RiadBenchekroun6
    ],
    description: "Riad typique avec patios et terrasses, parfait pour un séjour au cœur de la médina.",
    location: { address: "8, Derb Mekka Tiberbarine, Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single Room", price: 37 },
      { type: "Suite", price: 72 }
    ]
  },
  {
    id: 12,
    name: "Riad Selma",
    city: "Meknès",
    price: 34,
    rating: 3.5,
    images: [imag.RiadSelma1,imag.RiadSelma2,imag.RiadSelma3,imag.RiadSelma4,
      imag.RiadSelma5,imag.RiadSelma6,imag.RiadSelma7,imag.RiadSelma8
    ],
    description: "Petit riad accueillant avec chambres confortables et décoration traditionnelle.",
    location: { address: "Quartier Tiberbarine / Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Single Room", price: 34 },
      { type: "Double Room", price: 48 },
      { type: "Suite", price: 68 }
    ]
  },
  {
    id: 13,
    name: "Hotel Volubilis",
    city: "Meknès",
    price: 40,
    rating: 4.1,
    images: [imag.HotelVolubilis1,imag.HotelVolubilis2,imag.HotelVolubilis3,imag.HotelVolubilis4,
      imag.HotelVolubilis5,imag.HotelVolubilis6,imag.HotelVolubilis7,imag.HotelVolubilis8,imag.HotelVolubilis9
    ],
    description: "Hôtel confortable, idéal pour les voyageurs souhaitant visiter Meknès et ses environs.",
    location: { address: "Moulay Idriss Zerhoun / Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single Room", price: 40 },
      { type: "Double Room", price: 56 },
      { type: "Suite", price: 78 }
    ]
  },
  {
    id: 14,
    name: "Riad Ritaj",
    city: "Meknès",
    price: 36,
    rating: 4.3,
    images: [imag.RiadRitaj1,imag.RiadRitaj2,imag.RiadRitaj3,imag.RiadRitaj4,
      imag.RiadRitaj5,imag.RiadRitaj6,imag.RiadRitaj7,imag.RiadRitaj8,imag.RiadRitaj9
    ],
    description: "Maison d’hôtes traditionnelle avec patios et chambres confortables.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] }
    ],
    rooms: [
      { type: "Single Room", price: 36 },
      { type: "Double Room", price: 50 },
      { type: "Suite", price: 70 }
    ]
  },
  {
    id: 15,
    name: "Riad Yacout",
    city: "Meknès",
    price: 38,
    rating: 4.4,
    images: [imag.RiadYacout1,imag.RiadYacout2,imag.RiadYacout3,imag.RiadYacout4,
      imag.RiadYacout5,imag.RiadYacout6,imag.RiadYacout7,imag.RiadYacout8
    ],
    description: "Charmant riad avec ambiance traditionnelle et terrasse pour se détendre.",
    location: { address: "22 Place Lalla Aouda, Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Double Room", price: 54 },
      { type: "Suite", price: 74 }
    ]
  },
  {
    id: 16,
    name: "Riad Zidania",
    city: "Meknès",
    price: 37,
    rating: 4.3,
    images: [imag.RiadZidania1,imag.RiadZidania2,imag.RiadZidania3,imag.RiadZidania4,
      imag.RiadZidania5,imag.RiadZidania6,imag.RiadZidania7
    ],
    description: "Petit riad avec chambres confortables, idéal pour découvrir la médina.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Single Room", price: 37 },
      { type: "Double Room", price: 52 },
      { type: "Suite", price: 72 }
    ]
  },
  {
    id: 17,
    name: "Riad Atika",
    city: "Meknès",
    price: 36,
    rating: 4.2,
    images: [imag.RiadAtika1,imag.RiadAtika2,imag.RiadAtika3,imag.RiadAtika4,
      imag.RiadAtika5,imag.RiadAtika6
    ],
    description: "Riad traditionnel avec patios et chambres décorées à la marocaine.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Single Room", price: 36 },
      { type: "Double Room", price: 50 },
      { type: "Suite", price: 70 }
    ]
  },
  {
    id: 18,
    name: "Riad Bab Berdaine",
    city: "Meknès",
    price: 34,
    rating: 4.1,
    images: [imag.RiadBabBerdaine1,imag.RiadBabBerdaine2,imag.RiadBabBerdaine3,imag.RiadBabBerdaine4,
      imag.RiadBabBerdaine5,imag.RiadBabBerdaine6,imag.RiadBabBerdaine7
    ],
    description: "Maison d’hôtes avec ambiance traditionnelle et proximité du centre-ville.",
    location: { address: "Médina, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Non-Smoking", icon: facilityIcons["Non-Smoking"] },
      { name: "Breakfast Included", icon: facilityIcons["Breakfast Included"] }
    ],
    rooms: [
      { type: "Single Room", price: 34 },
      { type: "Double Room", price: 48 },
      { type: "Suite", price: 68 }
    ]
  },
  {
    id: 19,
    name: "Hotel Bab Mansour",
    city: "Meknès",
    price: 45,
    rating: 4.3,
    images: [imag.BabMansour1,imag.BabMansour2,imag.BabMansour3,imag.BabMansour4,
      imag.BabMansour5,imag.BabMansour6
    ],
    description: "Hôtel de standing avec chambres modernes et proximité de Bab Mansour.",
    location: { address: "Rue Émir Abdelkader, Meknès, Maroc" },
    facilities: [
      { name: "Free WiFi", icon: facilityIcons["Free WiFi"] },
      { name: "Parking", icon: facilityIcons["Parking"] }
    ],
    rooms: [
      { type: "Double Room", price: 60 },
      { type: "Suite", price: 88 }
    ]
  }
];
