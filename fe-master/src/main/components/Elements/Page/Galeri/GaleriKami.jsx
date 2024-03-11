import Gallery from '../../Swiper/SwiperGaleri';
import tampilGaleri from '../../../../../api/pengguna/tampilGaleri';
import React, { useRef, useEffect, useState } from 'react';
import style from "./galerikami.module.css";

const GaleriKami = () => {
  const [galeriData, setGaleriData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await tampilGaleri();
        console.log(data)
        setGaleriData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={style.galeri}>
      <div className={style.judul}>
        <h1>Galeri</h1>
        <p>Kumpulan foto dokumentasi pekerjaan kami</p>
      </div>
      <Gallery images={galeriData.map(item => `http://localhost:5000/fotoGaleri/${item.foto_galeri}`)} />
    </div>
  );

}


export default GaleriKami;
