import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import tambahKategori from "../../../../api/kategori/tambahKategori";
import editKategori from "../../../../api/kategori/editKategori";
import detailKategori from "../../../../api/kategori/detailKategori";
import CircularProgress from "@mui/material/CircularProgress";
import Toast from "../../Elements/Alert/Toast"; 

export default function FormKategoriPost() {
  const [kategori, setKategori] = useState("");
  const [slug, setSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState({ message: "", type: "" });
  const navigate = useNavigate();
  const { id_kategori } = useParams();
  const isEditing = !!id_kategori;

  useEffect(() => {
    if (isEditing) {
      detailKategori(id_kategori)
        .then((data) => {
          if (data.success) {
            setKategori(data.data.nama_kategori);
            setSlug(data.data.slug);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [id_kategori, isEditing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;
      if (isEditing) {
        response = await editKategori(id_kategori, kategori, slug);
      } else {
        response = await tambahKategori(kategori, slug);
      }

      if (response.success) {
        setNotif({
          message: response.message || "Successfully saved!",
          type: "success",
        });
        navigate("/kelolaPostingan");
      } else {
        setNotif({
          message: response.message || "Failed to save data!",
          type: "error",
        });
      }
    } catch (error) {
      setNotif({ message: error.toString(), type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.layout}>
      {loading ? (
        <div className={s.loadingContainer}>
          <CircularProgress />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <InputForm
            label="Nama Kategori"
            placeholder="Masukan Nama Kategori"
            htmlFor="namaKategori"
            name="namaKategori"
            type="text"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          />
          <InputForm
            label="Slug"
            placeholder="Masukan Slug"
            htmlFor="slug"
            name="slug"
            type="text"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
          />
          <div className={s.btnly}>
            <Button
              label={isEditing ? "Simpan" : "Tambah"}
              styleBtn="btnform"
              type="submit"
            />
          </div>
        </form>
      )}
      {notif.message && (
        <Toast
          message={notif.message}
          type={notif.type}
          onClose={() => setNotif({ message: "", type: "" })}
        />
      )}
    </div>
  );
}
