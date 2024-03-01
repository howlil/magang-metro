import React, { useState } from 'react';
import s from "./image.module.css";
import silang from "/public/silang.svg";
import add from "/public/addimg.svg";

const Image = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = Array.from(files).map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };

  const handleAddImage = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <div className={s.flex}>
      {images.map((image, index) => (
          <div key={index} className={s.container}>
            <button className={s.close} onClick={() => handleRemoveImage(index)}>
              <img width="7rem" height="7rem" src={silang} alt='silang'/>
            </button>
            <img src={image} className={s.layout} alt={`Image ${index + 1}`} />      
          </div>
      ))}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <button onClick={handleAddImage} className={s.button}>
        <div>
          <img src={add} alt='addimage'/>
        </div>
        <h1>Klik untuk <br /> tambah foto</h1>
      </button>
      
        
    </div>
  );
};

export default Image;
