import style from "./swiper.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation} from 'swiper/modules';


export default function SwiperTestimoni (props) {
    const { data } = props
    return (
      
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className={style.swiper}
      >
        {data.map((item) =>{
          return <SwiperSlide className={style.swiperSlide} key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className={style.user}>
              <img src={item.image} alt="Testimoni" />
              <div className={style.userInfo}>
                <h5>{item.name}</h5>
                <p>{item.skill}</p>
              </div>
            </div>
          </SwiperSlide>
        })}
      </Swiper>
    )
  }            