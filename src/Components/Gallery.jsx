import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import gallery1 from '../assets/andas/jollof-6.jpg';
import gallery2 from '../assets/andas/Beef-Bucket-2.jpg';
import gallery3 from '../assets/andas/friedrice-5.jpg';
import gallery4 from '../assets/andas/brisllet.jpg';
import gallery5 from '../assets/andas/jollof-4.jpg';
import gallery6 from '../assets/andas/friedrice-4.jpg';
import gallery7 from '../assets/andas/pizza.jpg';
import gallery8 from '../assets/andas/small pizza-3.jpg';
import gallery9 from '../assets/andas/wings only.jpg';
import gallery10 from '../assets/andas/wings5.jpg';





// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Gallery.css';

// import required modules
import {Autoplay, EffectCoverflow, Pagination, Navigation} from 'swiper/modules';


export default function Gallery() {
  return (
    <>
    <div className='flex flex-col items-center justify-center mt-20 '>
        <h4 className='font-bold text-6xl font-custom pb-5 border-b-2 border-b-[#e93e21]'>Gallery</h4>
        
        <span className='font-custom text-xlg my-2'>Check Our Gallery</span>
    </div>
      <Swiper id="mySwiper" style={{width: '100%'}}
 
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay,Pagination, Navigation]}
        className="swiper_container"
     
      >
        <SwiperSlide>
          <img src={gallery3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery7} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery8} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery9} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gallery10} />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}
