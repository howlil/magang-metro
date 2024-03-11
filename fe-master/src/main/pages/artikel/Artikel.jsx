import { Card } from "react-bootstrap";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import style from "./artikel.module.css";
import React, { useEffect, useState } from 'react';
import tampilArtikel from "../../../api/pengguna/tampilArtikel";

const Artikel = () => {
    const [artikelData, setArtikelData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await tampilArtikel();
                console.log(data);
                if (data.success) {
                    setArtikelData(data.data);
                } else {
                    setErrorMessage(data.message);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setErrorMessage("Error fetching data from server.");
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <NavbarComponent />
            <div className={style.artikelBack}>
                <h1>Artikel Kami</h1>
            </div>
            <div className={style.artikel}>
                {errorMessage && <p className={style.error}>{errorMessage}</p>}
                {artikelData.map((arc) => (
                    <Card className={style.card} key={arc.id_postingan}>
                        <div>
                            <img src={`http://localhost:5000/fotoPostingan/${arc.foto_postingan}`} alt="Artikel" />
                            <div className={style.cardInfo}>
                                <h1>{arc.judul}</h1>
                                <p>{arc.body}</p>
                                <a href={`/detailArtikel/${arc.id_postingan}`}>Baca Selengkapnya</a>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
}

export default Artikel;
