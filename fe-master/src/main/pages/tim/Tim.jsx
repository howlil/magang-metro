import NavbarComponent from "../../components/Navbar/NavbarComponent"
import SwiperTim from "../../components/Elements/Page/Tim/TimKami"
import style from "./tim.module.css"

const Tim = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className={style.timBox}>
        <h1>Tim Kami</h1>
      </div>
      <SwiperTim></SwiperTim>
    </>
  )
}

export default Tim