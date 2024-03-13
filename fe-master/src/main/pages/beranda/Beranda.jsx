import NavbarComponent from "../../components/Navbar/NavbarComponent"
import FooterComponent from "../../components/Footer/FooterComponent"
import Testi from "../../components/Elements/Page/Testimoni/TestiIsi"
import TentangKami from "../../components/Elements/Page/Tentang/TentangKami"
import LayananKami from "../../components/Elements/Page/Layanan/LayananKami"
import ArtikelKami from "../../components/Elements/Page/Artikel/ArtikelKami"
import Konsultasi from "../../components/Elements/Page/Konsultasi/Konsultasi"
import GaleriKami from "../../components/Elements/Page/Galeri/GaleriKami"
import TimKami from "../../components/Elements/Page/Tim/TimKami"



import style from "./beranda.module.css"
import { Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import React, { useRef } from 'react';


const Beranda = () => {
  const navigate = useNavigate();
  const konsultasiRef = useRef(null);

  const scrollToKonsultasi = () => {
    if (konsultasiRef.current) {
      konsultasiRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <div className={style.hero}>
      <NavbarComponent></NavbarComponent>
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container className="animate__animated animate__fadeInUp">
            <Row className={style.headerBox}>
              <Col>
              <h1>We <span>Fight</span> For <br /> The Right</h1>
              <p>Temukan solusi permasalahan hukum yang tepat untuk Anda dengan Fiable Law Office!</p>
              <button onClick={() => window.location.href = "https://wa.me/+6285375917227"} className={style.btnPrimary}>Hubungi Kami</button>
              <button onClick={scrollToKonsultasi} className={style.btnSecondary}>Konsultasi Gratis</button>
              </Col>
            </Row>
          </Container>
        </header>
        <TentangKami></TentangKami>
        <LayananKami></LayananKami>
        <TimKami></TimKami>
        <Testi></Testi>
        <ArtikelKami></ArtikelKami>
        <GaleriKami></GaleriKami>
        <div ref={konsultasiRef}>
          <Konsultasi></Konsultasi>
        </div>
        <FooterComponent></FooterComponent>
        
      </div>
    </>
  )
}

export default Beranda