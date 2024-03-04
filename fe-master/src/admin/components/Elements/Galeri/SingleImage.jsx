import { useState, useEffect } from "react";
import s from "./image.module.css";
import add from "/public/addimg.svg";

const SingleImage = ({ onFileSelect, initialImageUrl }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (initialImageUrl) {
      setSelectedImage(initialImageUrl);
    }
  }, [initialImageUrl]);

  const handleImageChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file) {
        try {
          const imageUrl = URL.createObjectURL(file);
          setSelectedImage(imageUrl);
          onFileSelect(file);
        } catch (error) {
          console.error("Error creating object URL for the selected file:", error);
        }
      }
    } else {
      console.log("No file selected.");
    }
  };

  const handleAddImage = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className={s.flex}>
      <div className={s.preview}>
        {selectedImage && (
          <img
            className={s.layout}
            src={selectedImage}
            alt="selected image"
            onClick={handleAddImage} // Reusing handleAddImage for consistency
          />
        )}

        {!selectedImage && (
          <button onClick={handleAddImage} className={s.button}>
            <img className={s.add} src={add} alt="add image" />
            <h1>
              Klik untuk <br /> tambah foto
            </h1>
          </button>
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
