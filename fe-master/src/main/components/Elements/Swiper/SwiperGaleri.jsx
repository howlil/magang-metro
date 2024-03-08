import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import './galeri.module.css';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

export default function SwiperGaleri(props) {
    const { data } = props
    return (
    <>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper"
      >
        {data.map((item) =>{
            return <SwiperSlide className='swiper-slide' key={item.id}>
                <img src={item.image} alt="Foto" />
            </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}
