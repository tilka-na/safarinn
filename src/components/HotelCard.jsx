import React from 'react'
import { Link } from 'react-router-dom'
import { assets} from '../assets/Images/asset'

const HotelCard = ({room,index}) => {
    return (
    <Link to={'/hotels/'+ room.id} onClick={()=> window.scrollTo(0,0)} key={room.id}
    className='relative max-w-sm w-full rounded-md overflow-hidden
    bg-white text-gray-600 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col'>
    <img src={room.images[0]} alt=""  className='w-full h-[200px] object-cover'/>
    {/* BADGE */}
    {index % 2===0 && <p className='px-3 py-1 absolute top-3 left-3 text-xs
    bg-white text-gray-800 font-medium rounded-full shadow'>Best Hotel</p>}
     {/* CONTENT */}
    <div className='p-4 flex flex-col justify-between h-full'>
         {/* TITLE + RATING */}
        <div className='flex items-center justify-between'>
        <p className='font-playfair text-lg font-semibold  text-gray-900'>{room.name}</p>
            <div className='flex items-center gap-1'>
                <img src={assets.starIconFilled} alt="star-icon" className='w-3 h-3' />{room.rating}
            </div>
        </div>
        {/* LOCATION */}
        <div className='flex items-center gap-1 text-sm'>
            <img src={assets.LocationIcon} alt="location-icon" className='w-3 h-3' />
            <span>{room.location.address}</span>
        </div>
         {/* PRICE + BUTTON */}
        <div className='flex items-center justify-between mt-2'>
            <p><span className='text-xl text-gray-700 font-semibold'>${room.price}</span><span className='text-sm text-gray-500'> /night</span></p>
            <button  className="px-2.5 py-1 bg-customBlue text-white text-xs rounded-full border border-safari-gold
            hover:bg-safari-gold hover:text-customBlue active:scale-95 transition-all duration-300 shadow-md">Réserver maintenant</button>
        </div>
    </div>
    </Link>
)
}

export default HotelCard;