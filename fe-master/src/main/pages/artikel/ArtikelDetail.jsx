import fetchDetailArtikel  from "../../../api/pengguna/detailArtikel";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import style from "./artikel.module.css"

const ArtikelDetail = () => {
    const [detailArtikel, setDetailArtikel] = useState(null);
    const { id_postingan } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchDetailArtikel(id_postingan);
                setDetailArtikel(data);
                setIsLoading(false); 
            } catch (error) {
                console.error('Error:', error);
                setIsLoading(false); 
            }
        };

        if (id_postingan) {
            fetchData();
        }
    }, [id_postingan]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const formatTanggal = (tanggal) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(tanggal).toLocaleDateString('id-ID', options);
        return formattedDate;
      };

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <div className={style.detail}>
        <div className={style.container}>
            <h6>{formatTanggal(detailArtikel.data.created_at)}</h6>
            <h1>{detailArtikel.data.judul}</h1>
            <h6>Author : Fiable Lawyer</h6>
            <img src={detailArtikel.data.foto_postingan} alt="Foto" />
            <p>{detailArtikel.data.body}</p>
        </div>
      </div>
       <FooterComponent></FooterComponent>
    </>
  )
}

export default ArtikelDetail