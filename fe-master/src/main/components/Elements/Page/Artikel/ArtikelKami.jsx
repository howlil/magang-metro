import artikel from "/public/artikel.svg"
import popup from "/public/popup.svg"

import style from "./artikelkami.module.css"

import {artikelData} from "../../../../data/dataArtikel"

import { Container, Row, Col } from "react-bootstrap"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const ArtikelKami = () => {
    return (
        <div className={style.artikel}>
          <Container>
            <Row className={style.artikelBox}>
              <Col lg="4">
              <img src={artikel} alt="Artikel Kami" />
              <div className={style.artikelTitle}>
                <h1>Artikel Kami</h1>
                <a href="/artikel">
                  <img src={popup}  alt="Lihat Semua Artikel" />
                </a>
              </div>
              </Col>
              <Col lg="8">
                <div className={style.middle}>
                <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className={style.swiper}
              >
                {artikelData.map((arc) =>{
                  return <SwiperSlide  key={arc.id}>
                    <div className={style.swiperSlideArtikel}>
                      <img src={arc.image} alt="Artikel" />
                      <div className={style.artikelCard}>
                        <h1>{arc.title}</h1>
                        <p>{arc.desc}</p>
                        <a href="/artikel/{id}">Baca Selengkapnya</a>
                      </div>
                    </div>
                  </SwiperSlide>
                })}
              </Swiper>
                </div>
              
              </Col>
            </Row>
          </Container>
        </div>

        )
    }
    
    export default ArtikelKami