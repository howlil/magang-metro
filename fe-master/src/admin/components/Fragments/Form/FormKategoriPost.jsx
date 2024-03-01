import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import { tambahKategori } from "../../../../api/kategori/tambahKategori";
import { useState } from "react";

export default function FormKategoriPost() {
  const [kategoriData, setKategoriData] = useState({
    namaKategori: "",
    slug: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setKategoriData({ ...kategoriData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tambahKategori(kategoriData)
      .then(response => {
        console.log("Sukses menambah kategori:", response.data);
        setKategoriData({ namaKategori: "", slug: "" }); 
      })
      .catch(error => {
        const { kodeError, pesanError } = error;
        if (kodeError === "Jaringan") {
          console.error("Terjadi error jaringan!");
        } else {
          console.error(`Kode error: ${kodeError}`);
          console.error(`Pesan error: ${pesanError}`);
        }
        alert("gagal")
      });
  };

  return (
    <div className={s.layout}>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Nama Kategori"
          placeholder="Masukan Nama Kategori"
          htmlFor="namaKategori"
          name="namaKategori"
          type="text"
          value={kategoriData.namaKategori}
          onChange={handleChange}
        />
        <InputForm
          label="Slug"
          placeholder="Masukan Slug"
          htmlFor="slug"
          name="slug"
          type="text"
          value={kategoriData.slug}
          onChange={handleChange}
        />

        <div className={s.btnly}>
          <Button label="Simpan" styleBtn="btnform" type="submit" />
        </div>
      </form>
    </div>
  );
}
