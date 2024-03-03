import { useState } from "react";
import s from "./image.module.css";
import add from "/public/addimg.svg";

const SingleImage = ({onFileSelect}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onFileSelect(file);
    }
  };

  const handleAddImage = () => {
    document.getElementById("fileInput").click();
  };

  const handlePreviewClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className={s.flex}>
      <div className={s.preview}>
        {selectedImage && (
          <img
            className={s.layout}
            src={selectedImage}
            alt="selectedimage"
            onClick={handlePreviewClick}
          />
        )}

        {!selectedImage && (
          <>
            <button onClick={handleAddImage} className={s.button}>
              <img className={s.add} src={add} alt="addimage" />
              <h1>
                Klik untuk <br /> tambah foto
              </h1>
            </button>
          </>
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default SingleImage;
