import { useState, useEffect } from "react";
import s from "./image.module.css";
import add from "/public/addimg.svg";
import { useParams } from "react-router-dom";

const SingleImage = (props) => {
  const { onFileSelect, initialImageUrl } = props;
  const [selectedImage, setSelectedImage] = useState(null);
  const [apiImg, setApiImg] = useState("");
  const { id_team } = useParams();
  const isEditing = !!id_team;

  useEffect(() => {
    if (initialImageUrl) {
      setApiImg(initialImageUrl); // Langsung set initialImageUrl ke state apiImg
    }
  }, [initialImageUrl]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      console.log(file);
      try {
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl); // Set preview image
        onFileSelect(file); // Kirim file ke parent component
      } catch (error) {
        console.error(
          "Error creating object URL for the selected file:",
          error
        );
      }
    } else {
      console.log("No file selected.");
    }
  };

  const handleAddImage = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
      <div className={s.flex}>
        <div className={s.preview}>
          {selectedImage ? (
            <img
              className={s.layout}
              src={selectedImage}
              alt="Selected image"
              onClick={handleAddImage}
            />
          ) : isEditing && apiImg ? (
            <img
              className={s.layout}
              alt={apiImg}
              src={`http://localhost:5000/fotoTim/${apiImg}`}
              onClick={handleAddImage}
            />
          ) : (
            <button onClick={handleAddImage} className={s.button}>
              <img className={s.add} src={add} alt="Add image" />
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
    </>
  );
};

export default SingleImage;
