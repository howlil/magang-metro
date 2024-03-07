import React, { useEffect, useState } from "react";
import s from "./image.module.css";
import silang from "/public/silang.svg";
import add from "/public/addimg.svg";
import hapusGaleri from "../../../../api/galeri/hapusGaleri";
import tambahGaleri from "../../../../api/galeri/tambahGaleri";
import tampilGaleri from "../../../../api/galeri/tampilGaleri";

const Image = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      await tampilGaleri().then((data) => {
        setImages(data.data);
      });
    };
    fetchdata();
  }, []);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleAddImage = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className={s.flex}>
      <button onClick={handleAddImage} className={s.button}>
        <div>
          <img className={s.add} src={add} alt="addimage" />
        </div>
        <h1>
          Klik untuk <br /> tambah foto
        </h1>
      </button>
      {images.map((image) => (
        <div key={image.id_galeri} className={s.container}>
          <button className={s.close} onClick={() => handleRemoveImage(image.id_galeri)}>
            <img className={s.silang} src={silang} alt="silang" />
          </button>
          <img
            src={`https://28jqlrhg-5000.asse.devtunnels.ms/fotoGaleri/${image.foto_galeri}`}
            className={s.layout}
            alt={`Image ${image.id_galeri + 1}`}
          />
        </div>
      ))}
      <input
        id="fileInput"
        type="file"
        accept="images/*"
        multiple
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default Image;
