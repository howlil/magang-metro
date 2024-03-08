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
  const [notif, setNotif] = useState("");
  const navigate = useNavigate();
  const { id_kategori } = useParams();
  const isEditing = !!id_kategori;

  // menampilkan data berdasarkan ID
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

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    let response;
    try {
      if (isEditing) {
        response = await editKategori(kategori, slug, id_kategori);
        console.log(response.message);
      } else {
        response = await tambahKategori(kategori, slug);
        console.log(response.message);
      }

      if (response.success) {
        setNotif(response.message);
        navigate("/kategori");
      } else {
        setNotif(response.message);
      }
    } catch (error) {
      setNotif(response.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={s.layout}>
      {loading ? (
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />
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
      {notif && <Toast message={notif} onClose={() => setNotif("")} />}
    </div>
  );
}
