import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import image1 from "../images/pic1.jpg";
import image2 from "../images/pic2.jpg";
export default function SwiperSection() {
    return(        
    <div className="rounded-3xl overflow-hidden shadow-xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop={true}
            slidesPerView={1}
            >
            <SwiperSlide>
              <img src={image1} alt="hotel" className="w-full h-96 object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} alt="hotel" className="w-full h-96 object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
    );

}