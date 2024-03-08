import style from "./tentang.module.css"
import { Container, Row, Col } from "react-bootstrap"
import tentang from "/public/tentang.svg"

const TentangKami = () => {
    return (
        <div className={style.tentang}>
        <Container>
            <Row className={style.tentangBox}>
              <Col lg="6">
              <span className={style.line}>Siapa Kami?</span>
              <h1>Tentang Kami</h1>
              <p>Fiable Law Office berbasis di Kota Padang, Sumatra Barat Indonesia adalah firma hukum yang didedikasikan untuk memberikan solusi yang tepat bagi kepentingan hukum dan individu, kelompok masyarakat dan perusahaan.</p>
              <p>Fiable Law Office, tempat dimana kepercayaan dan keberlanjutan menjadi landasan bagi setiap layanan kami</p>
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