import style from "./swiper.module.css"
import previous from "/public/previous.svg"


const Previous = () => {
    return (
        <div className={`${style.navigator} swiper-button-prev`}>
            <div className={style.navigator}>
            <img src={previous} alt="Previous" />
            </div>
        </div>
    )
  }
  
  export default Previous