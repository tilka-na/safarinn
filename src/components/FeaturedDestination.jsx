import React from 'react'
import { Hotels } from '../assets/Images/asset'
import HotelCard from './HotelCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination  = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-customGrey dark:to-customGrey pt-20 transition-colors'>
      <Title title='Featured Destination' subTitle='Les hôtels à Meknès'/>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 w-full'>
        {Hotels.slice(0,4).map((room, index) => (
          <HotelCard key={room.id} room={room} index={index}/>
        ))}
      </div>

      <button
        onClick={() => { navigate('/hotels'); scrollTo(0,0) }}
        className='my-16 px-4 py-2 text-sm font-medium border border-gray-300
        rounded bg-white hover:bg-gray-100 dark:bg-customGrey dark:text-white dark:hover:bg-gray-700 transition-all cursor-pointer'
      >
        Afficher Tous les Hotels
      </button>
    </div>
  )
}
export default FeaturedDestination;
