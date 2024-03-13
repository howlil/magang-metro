import NavbarComponent from "../../components/Navbar/NavbarComponent"
import FooterComponent from "../../components/Footer/FooterComponent"
import style from "./kontak.module.css"

const Kontak = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className={style.kontak} >
        <h1 data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
      </div>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default Kontak