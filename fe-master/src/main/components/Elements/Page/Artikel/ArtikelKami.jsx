import artikel from "/public/artikel.svg";
import popup from "/public/popup.svg";
import style from "./artikelkami.module.css";
import tampilArtikel from "../../../../../api/pengguna/tampilArtikel";
import { Container, Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ArtikelKami = () => {
    const [artikelData, setArtikelData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await tampilArtikel();
                console.log(data);
                if (data.success) {
                    setArtikelData(data.data);
                } else {
                    setErrorMessage(data.message);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setErrorMessage("Error fetching data from server.");
            }
        };
        fetchData();
    }, []);

    return (
        <div className={style.artikel}>
            <Container>
                <Row className={style.artikelBox}>
                    <Col lg="4">
                        <img src={artikel} alt="Artikel Kami" />
                        <div className={style.artikelTitle}>
                            <h1>Artikel Kami</h1>
                            <a href="/artikel">
                                <img src={popup} alt="Lihat Semua Artikel" />
                            </a>
                        </div>
                    </Col>
                    <Col lg="8">
                        <div className={style.middle}>
                            {errorMessage && <p className={style.error}>{errorMessage}</p>}
                            {artikelData.length > 0 && (
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
                                    {artikelData.map((arc) => (
                                        <SwiperSlide key={arc.id_postingan}>
                                            <div className={style.swiperSlideArtikel}>
                                                <img src={`http://localhost:5000/fotoPostingan/${arc.foto_postingan}`} alt="Artikel" />
                                                <div className={style.artikelCard}>
                                                    <h1>{arc.judul}</h1>
                                                    <p>{arc.body}</p>
                                                    <a href={`/detailArtikel/${arc.id_postingan}`}>Baca Selengkapnya</a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ArtikelKami;
