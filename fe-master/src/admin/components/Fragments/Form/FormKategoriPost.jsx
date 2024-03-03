import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import tambahKategori from "../../../../api/kategori/tambahKategori";
import editKategori from "../../../../api/kategori/editKategori";
import detailKategori from "../../../../api/kategori/detailKategori";

export default function FormKategoriPost() {
  const [kategori, setKategori] = useState("");
  const [slug, setSlug] = useState("");
  const navigate = useNavigate();
  const { id_kategori } = useParams();
  const isEditing = !!id_kategori;

  // memanggil data berdasarkan id
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
    let res;
    if (isEditing) {
       res = await editKategori(kategori, slug,id_kategori);
 
    } else {
       res = await tambahKategori(kategori, slug);

    }
    console.log(res);
    navigate("/kategori");
  };

  return (
    <div className={s.layout}>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Nama Kategori"
          placeholder={isEditing ? `${kategori}` : "Masukan Nama Kategori"}
          htmlFor="namaKategori"
          name="namaKategori"
          type="text"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        />
        <InputForm
          label="Slug"
          placeholder={isEditing ? `${slug}` : "Masukan Slug"}
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
    </div>
  );
}
