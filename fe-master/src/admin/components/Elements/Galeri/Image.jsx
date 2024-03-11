import React, { useEffect, useState } from "react";
import s from "./image.module.css";
import silang from "/public/silang.svg";
import add from "/public/addimg.svg";
import hapusGaleri from "../../../../api/galeri/hapusGaleri";
import tambahGaleri from "../../../../api/galeri/tambahGaleri";
import tampilGaleri from "../../../../api/galeri/tampilGaleri";
import AlertNotif from "../Alert/AlertNotif";
import Toast from "../Alert/Toast";
import Skeleton from "@mui/material/Skeleton";
import CircularProgress from "@mui/material/CircularProgress";

const Image = () => {
  const [images, setImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteGaleri, setDeleteGaleri] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notif, setNotif] = useState("");
  const [initialImageCount, setInitialImageCount] = useState(5); // State baru untuk jumlah Skeleton

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await tampilGaleri();
      setImages(data.data);
      setInitialImageCount(data.data.length); // Set jumlah Skeleton berdasarkan jumlah data
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImageChange = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (files.length === 0) return; // Early return jika tidak ada file yang dipilih

    setLoading(true);
    try {
      await tambahGaleri(files[0]);
      setNotif("Gambar berhasil ditambahkan");
      fetchData(); // Memanggil ulang data gambar dari API setelah menambahkan
    } catch (error) {
      setNotif("Gagal menambahkan gambar");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveImage = async (id) => {
    setIsModalOpen(false); // Tutup modal konfirmasi
    setLoading(true);
    try {
      await hapusGaleri(id);
      setNotif("Gambar berhasil dihapus");
      fetchData(); // Memanggil ulang data gambar dari API setelah menghapus
    } catch (error) {
      setNotif("Gagal menghapus gambar");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const showDeleteConfirmation = (id) => {
    setDeleteGaleri(id);
    setIsModalOpen(true);
  };

  const handleAddImage = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
      <div className={s.flex}>
        <button onClick={handleAddImage} className={s.button}>
          <div>
            <img className={s.add} src={add} alt="addimage" />
          </div>
          <h1>
            Klik untuk <br /> tambah foto
          </h1>
        </button>
        {loading ? (
          <>
            {Array.from(new Array(initialImageCount)).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width="8rem"
                height="8rem"
                style={{ marginBottom: "1rem", borderRadius: "1rem" }}
              />
            ))}
          </>
        ) : images ? (
          images.map((image) => (
            <div key={image.id_galeri} className={s.container}>
              <button
                className={s.close}
                onClick={() => showDeleteConfirmation(image.id_galeri)}
              >
                <img className={s.silang} src={silang} alt="silang" />
              </button>
              <img
                src={`http://localhost:5000/fotoGaleri/${image.foto_galeri}`}
                className={s.layout}
                alt={`Image ${image.id_galeri + 1}`}
              />
            </div>
          ))
        ) : (
          <p>Belum Ada data</p>
        )}

        <input
          id="fileInput"
          type="file"
          accept="images/*"
          multiple
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>
      <AlertNotif
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => handleRemoveImage(deleteGaleri)}
      />
      {notif && <Toast message={notif} onClose={() => setNotif("")} />}
      {loading && (
        <CircularProgress
          style={{
            position: "absolute",
            top: "35%",
            left: "60%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </>
  );
};

export default Image;
