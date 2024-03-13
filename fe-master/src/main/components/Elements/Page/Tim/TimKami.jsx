import style from "./timkami.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import tampilTim from "../../../../../api/pengguna/tampilTim";
import React, { useEffect, useState } from 'react';

const TimKami = () => {
    const [timData, setTimData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPDFModal, setShowPDFModal] = useState(false);
    const [selectedPDF, setSelectedPDF] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await tampilTim();
                console.log(data);
                if (data.success) {
                    setTimData(data.data);
                } else {
                    setErrorMessage(data.message);
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
                setErrorMessage("Error fetching data from server.");
            }
        };
        fetchData();
    }, []);

    const handleLihatPortofolio = (portofolio) => {
        setSelectedPDF(portofolio);
        setShowPDFModal(true);
    };

    const handleClosePDFModal = () => {
        setShowPDFModal(false);
        setSelectedPDF('');
    };

    return (
        <>
        <div data-aos="fade-up" data-aos-duration="1000">
            <div className={style.timBox} >
                <h1>Tim Kami</h1>
            </div>
            {errorMessage && <p className={style.error}>{errorMessage}</p>}
            {timData.length > 0 && (
                <Swiper 
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        425: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}
                    modules={[Pagination]}
                    className={style.swiper}
                >
                    {timData.map((tim) => (
                        <SwiperSlide key={tim.nama}>
                            <div className={style.swiperTim}>
                                <img className={style.image} src={`http://localhost:5000/fotoTim/${tim.foto_tim}`} alt="Foto" />
                                <h1>{tim.nama}</h1>
                                <h5>{tim.spesialis}</h5>
                                <div className={style.sosmed}>
                                    <Link to={tim.instagram}>
                                        <img src="/iconFooter/instagram.svg" alt={tim.instagram} />
                                    </Link>
                                    <Link to={tim.linkedln}>
                                        <img src="/iconFooter/linkedin.svg" alt={tim.linkedin} />
                                    </Link>
                                    <button onClick={() => handleLihatPortofolio(tim.portofolio)}>Lihat Portofolio</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
            {showPDFModal && (
                <div className={style.modalBackdrop}>
                    <div className={style.modalContent}>
                        <button className={style.closeButton} onClick={handleClosePDFModal}>
                            <img src="/public/silang.svg" alt="close" />
                        </button>
                        <iframe src={`http://localhost:5000/portofolio/${selectedPDF}`} className={style.pdfViewer}></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default TimKami;
