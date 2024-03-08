import { Container, Row, Col } from "react-bootstrap"
import logo from "/public/iconFooter/logoSecondary.svg"
import logo2 from "/public/iconFooter/logoTertiary.svg"
import style from "./footer.module.css"
import { Link } from "react-router-dom"


const FooterComponent = () => {
  return (
    <div>
      <div className={style.footer}>
        <Container>
          <div className={style.logo}>
            <a href="/beranda">
              <img src={logo} alt="Fiable Law Office" />
            </a>
          </div>
          <Row>
            <Col className="col-lg-6">
              <div className={style.location}>
                <Link to="https://maps.app.goo.gl/srahzfiZPLMZ53LK7">
                  <img src="/public/iconFooter/location.svg" alt="Lokasi" />
                  <p>Jalan Padang Pasir IX No. 55, Kel. Padang Pasir, Kec. Padang Barat, Kota Padang, Provinsi Sumatera Barat</p>
                </Link>
              </div>
              <div className={style.mail}>
                <Link to="mailto:info@fiablelawyers.com">
                  <img src="/public/iconFooter/mail.svg" alt="Mail" />
                  <p>info@fiablelawyers.com</p>
                </Link>
              </div>
              <div className={style.phone}>
                <Link to="https://wa.me/+6285375917227">
                  <img src="/public/iconFooter/phone.svg" alt="Telepon" />
                  <p className={style.no}>085375917227</p>
                </Link>
              </div>
              <div className={style.logo}>
                <a href="https://peradi.or.id/">
                  <img src={logo2} alt="Fiable Law Office" />
                </a>
              </div>
            </Col>
            <Col className="col-lg-4">
              <h5>Halaman Kami</h5>
              <div className={style.menus}>
                <div  className={style.menu}>
                  <Link to="/beranda">Beranda</Link>
                  <Link to="/tentang">Tentang Kami</Link>
                  <Link to="/layanan">Layanan Kami</Link>
                  <Link to="/tim">Tim</Link>
                </div>
                <div className={style.menu}>
                  <Link to="/testimoni">Testimoni</Link>
                  <Link to="/artikel">Artikel</Link>
                  <Link>Galeri</Link>
                  <Link>Konsultasi Gratis</Link>
                </div>
              </div>
            </Col>
            <Col className="col-lg-2">
              <h5>Sosial Media</h5>
              <div className={style.menus}>
                <Link to="https://www.instagram.com/fiablelawyers">
                  <img src="/iconFooter/instagram.svg" alt="Instagram" />
                </Link>
                <Link to="https://www.linkedin.com/">
                  <img src="/iconFooter/linkedin.svg" alt="Instagram" />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={style.copyright}>
        <h5>©2024 Fiable Law Office | Powered by Magang Februari Metro Software</h5>
      </div>
    </div>
  )
}

export default FooterComponent