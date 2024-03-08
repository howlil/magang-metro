import { Card } from "react-bootstrap"
import NavbarComponent from "../../components/Navbar/NavbarComponent"
import {artikelData} from "../../data/dataArtikel"
import style from "./artikel.module.css"


const Artikel = () => {
  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className={style.artikelBack}>
        <h1>Artikel Kami</h1>
      </div>
      <div className={style.artikel}>
        {artikelData.map((arc) =>{
          return <Card className={style.card}  key={arc.id}>
            <div>
              <img src={arc.image} alt="Artikel" />
              <div className={style.cardInfo}>
                <h1>{arc.title}</h1>
                <p>{arc.desc}</p>
                <a href="/artikel/{id}">Baca Selengkapnya</a>
              </div>
            </div>
          </Card>
        })}
      </div>
    </>
  )
}

export default Artikel