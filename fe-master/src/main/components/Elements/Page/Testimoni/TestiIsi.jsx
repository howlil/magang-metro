import style from "./testimoni.module.css"
import { Container, Row, Col } from "react-bootstrap"

import Swiper from "../../Swiper/SwiperTestimoni"
import Previous from "../../Swiper/Previous"
import Next from "../../Swiper/Next"
import {testimoni} from "../../../../data/dataTestimoni"

const TestiIsi = () => {
    return (
        <div className={style.testimoniBack} data-aos="fade-up" data-aos-duration="1000">
          <Container >
            <Row className={style.testimoni}>
              <Col>
                <h1>Testimoni</h1>
                <h1>Yang Klien Kami Katakan</h1>
              </Col>
            </Row>
            <Row>
              <Col>
              <div className={style.previousNextButtons}>
              <Previous></Previous>
              <Next></Next>
              </div>
                <Swiper
                  data={testimoni}
                ></Swiper>
              </Col>
            </Row>
          </Container>
        </div>
    )
  }
  
  export default TestiIsi