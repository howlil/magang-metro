import style from "./tentang.module.css"
import { Container, Row, Col } from "react-bootstrap"
import tentang from "/public/tentang.svg"
import getKonsul from "../../../../../api/pengguna/getKonsul"
import React, { useEffect, useState } from "react";

const TentangKami = () => {
  const [konsul, setKonsul] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resKonsul = getKonsul();
      Promise.all([resKonsul]).then(
        (values) => {
          setKonsul(values[0].total || "Belum ada Konsultasi")
        }
      )
    }
    fetchData();
  }, []);

    return (
        <div className={style.tentang} data-aos="fade-up" data-aos-duration="1000">
        <Container>
            <Row className={style.tentangBox}>
              <Col lg="6">
              <span className={style.line}>Siapa Kami?</span>
              <h1>Tentang Kami</h1>
              <p>Fiable Law Office berbasis di Kota Padang, Sumatra Barat Indonesia adalah firma hukum yang didedikasikan untuk memberikan solusi yang tepat bagi kepentingan hukum dan individu, kelompok masyarakat dan perusahaan.</p>
              <p>Fiable Law Office, tempat dimana kepercayaan dan keberlanjutan menjadi landasan bagi setiap layanan kami</p>
              <div className={style.lineV}>
                <h1>{konsul}</h1>
                <p>Konsultasi Klien</p>
              </div>
              </Col>
              <Col lg="6">
              <img src={tentang} alt="Tentang Kami" />
              </Col>
            </Row>
          </Container>
        </div>
    )
  }
  
  export default TentangKami