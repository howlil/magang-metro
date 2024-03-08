import style from "./swiper.module.css"
import next from "/public/next.svg"


const Previous = () => {
    return (
        <div className={`${style.navigator} swiper-button-next`}>
            <div className={style.navigator}>
            <img src={next} alt="Next" />
            </div>
        </div>
    )
  }
  
  export default Previous