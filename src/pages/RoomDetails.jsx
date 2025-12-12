import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import roomCommonData, { assets, Hotels } from '../assets/Images/asset'
import Layout from "../layout/layout.jsx";

const RoomsDetails = () => {
  const {id}=useParams()
  const [room,setRoom]=useState(null)
   const [mainImage,setMainImage]=useState(null)
   useEffect(()=>{
    const room=Hotels.find(room=>room.id === parseInt(id))
    room && setRoom(room)
    room && setMainImage(room.images[0])
   },[]);

  return room && (
    <Layout>
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{room.name}</h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
      </div>
      {/*room rating*/}
      <div className='flex items-center gap-1 mt-2'>
        <img src={assets.Starratingicon} alt="StartRating-icon" className='w-12 h-12'/>
      <p className='ml-2'>200+ reviews</p>
      </div>
          {/*room adresse*/}
          <div className='flex items-center gap-1 text-gray-500 mt-2'>
              <img src={assets.LocationIcon} alt="locationIcon" className='w-4 h-4'/>
              <span>{room.location.address}</span>
          </div>
          {/*room images*/}
          <div className='flex flex-col lg:flex-row mt-6 gap-4'>
            <div className='lg:w-2/3 w-full'>
              <img src={mainImage} alt="room image" className='w-full rounded-lg shadow-lg object-cover h-80'/>
            </div>
            <div className='grid grid-cols-3 gap-2 lg:w-1/3 w-full'>
              {room?.images.length>1 && room.images.map((image,index)=>(
                  <img onClick={()=>setMainImage(image)}
                  key={index} src={image} alt="Room Image"
                  className={`w-full rounded-lg shadow-md object-cover h-20
                  cursor-pointer ${mainImage===image && 'ring-2 ring-orange-500'}`}/>
              ))}
            </div>
          </div>
              {/*room highlights*/}
                <div className='flex flex-col mt-10'>
                    <h1 className='text-3xl md:text-4xl font-playfair mb-4'>Experience Luxury like never before</h1>
                      {/*room amenities*/}
                      <div className="flex flex-wrap items-center gap-3">
                      {room.facilities.map((item, index) => (
                        <div key={index}
                        className="flex items-center gap-2 px-3 py-2 bg-gray border border-customBlue hover:bg-safari-gold rounded-lg transition-colors">
                          <img src={item.icon} alt={item.name} className="w-5 h-5" />
                          <p className="text-xs text-safari-dark">{item.name}</p>
                        </div>
                      ))}
                    </div>
                    {/*room types*/}
                    <div className="flex flex-wrap items-center gap-3 mb-6 mt-6">
                      {room.rooms.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray border border-customBlue hover:bg-safari-slate  hover:text-white transition-colors">
                          <p className="text-xs text-safari-dark font-medium">{item.type}</p>
                          <p className="text-xs text-safari-dark font-medium">${item.price}</p>
                        </div>
                      ))}
                    </div>
                </div>
                {/*Room Price*/}
                  <div>
                    <p className='text-2xl font-medium mt-6'>${room.price}/night</p>
                    </div>
                {/*chekin chekout form*/}
                    <form className='flex flex-col md:flex-row items-start md:items-center
                    justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl
                    mx-auto mt-16 max-w-6xl'>
                        <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center
                        gap-4 md:gap-10 text-gray-500'>

                            <div className='flex flex-col'>
                              <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
                              <input type="date" id='checkInDate' placeholder='Check-In'
                              className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                            </div>

                            <div className='w-px h-16 bg-gray-300/70 max-md:hidden'></div>

                            <div className='flex flex-col'>
                              <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
                              <input type="date" id='checkOutDate' placeholder='Check-Out'
                              className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                            </div>

                            <div className='w-px h-16 bg-gray-300/70 max-md:hidden'></div>

                            <div className='flex flex-col'>
                              <label htmlFor="guests" className='font-medium'>Guests</label>
                              <input type="number" id='guests' placeholder='0'
                              className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                            </div>
                        </div>
                        <button type='submit' className='bg-safari-slate hover:bg-primary-dull
                        active:scale-95 transition-all text-white rounded-md max-md:w-full
                        max-md:mt-6 md:px-6 py-3 md:py-4 text-base cursor-pointer hover:bg-safari-dark transition-colors'>
                          Check Availability
                        </button>
                      </form>

                      {/* Common Specifications*/}
                      <div className='mt-32 space-y-4 mb-10'>
                        {roomCommonData.map((spec,index)=>(
                          <div key={index} className='flex items-start gap-2'>
                            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-8'/>
                            <div>
                              <p className='text-lg'>{spec.title}</p>
                              <p className='text-gray-500'>{spec.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                        <p>Les clients seront attribués dans la meilleure chambre ou suite disponible selon les disponibilités.
                           Vous profiterez d’un espace confortable et décoré dans le style authentique de Meknès,
                            offrant une atmosphère chaleureuse et traditionnelle. Le tarif affiché correspond à deux personnes ;
                             veuillez ajuster le nombre de voyageurs lors de la réservation afin d’obtenir le prix exact pour les groupes.
                              Selon les disponibilités, les chambres peuvent être situées à différents étages ou dans différentes parties de l’établissement,
                           tout en garantissant confort, tranquillité et une véritable expérience marocaine.</p>
                      </div>
    </div>
    </Layout>
  )
}

export default RoomsDetails