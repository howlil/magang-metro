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
import React from 'react';


const Beranda = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.hero}>
      <NavbarComponent></NavbarComponent>
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className={style.headerBox}>
              <Col>
              <h1>We <span>Fight</span> For <br /> The Right</h1>
              <p>Temukan solusi permasalahan hukum yang tepat untuk Anda dengan Fiable Law Office!</p>
              <button onClick={() => window.location.href = "https://wa.me/+6285375917227"} className={style.btnPrimary}>Hubungi Kami</button>
              <button className={style.btnSecondary}>Konsultasi Gratis</button>
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
        <Konsultasi></Konsultasi>
        <FooterComponent></FooterComponent>
        
      </div>
    </>
  )
}

export default Beranda