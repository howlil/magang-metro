import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import tambahKategori from "../../../../api/kategori/tambahKategori";
import { useState } from "react";

export default function FormKategoriPost() {
  const [kategori, setKategori] = useState("");
  const [slug, setSlug] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await tambahKategori(kategori, slug);
    console.log(res);
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
          <Button label="Simpan" styleBtn="btnform" type="submit" />
        </div>
      </form>
    </div>
  );
}
