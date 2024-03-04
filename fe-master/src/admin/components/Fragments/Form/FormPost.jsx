import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import TextArea from "../../Elements/Input/TextArea";
import SelectIndex from "../../Elements/Input/SelectIndex";
import Label from "../../Elements/Input/Label";
import { useEffect, useState } from "react";
import SingleImage from "../../Elements/Galeri/SingleImage";
import tambahPostingan from "../../../../api/postingan/tambahPost";
import tampilKategori from "../../../../api/kategori/tampilKategori";
import { useNavigate, useParams } from "react-router-dom";

export default function FormPost() {
  const [judul, setJudul] = useState("");
  const [slug, setSlug] = useState("");
  const [kategori, setKategori] = useState([]);
  const [ambilKat, setAmbilKat] = useState("");
  const [body, setBody] = useState([]);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const { id_postingan } = useParams();
  const isEditing = !!id_postingan;

  // menampilkan kategori
  useEffect(() => {
    tampilKategori()
      .then((data) => {
        setKategori(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    if (isEditing) {
      response = await tambahPostingan(
        judul,
        slug,
        ambilKat,
        body,
        file,
        id_postingan
      );
    } else {
      response = await tambahPostingan(judul, slug, ambilKat, body, file);
    }
    console.log(response);
    // navigate("/kelolaPostingan");
  };

  return (
    <div className={s.layout}>
      <form onSubmit={handleSubmit}>
        <Label label="Foto Postingan" />
        <div className={s.img}>
          <SingleImage onFileSelect={(selectFile) => setFile(selectFile)} />
        </div>

        <InputForm
          label="Judul"
          placeholder={isEditing ? `${judul}` : "Masukan Judul Postingan"}
          htmlFor="judul"
          type="text"
          name="judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />
        <InputForm
          name="slug"
          label="Slug"
          placeholder={isEditing ? `${slug}` : "Masukan Slug"}
          htmlFor="slug"
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />

        <SelectIndex
          label="Kategori"
          placeholder={isEditing ? `${judul}` : "Masukan  Kategori"}
          htmlFor="kategori"
          name="kategori"
          value={ambilKat}
          onChange={(e) => setAmbilKat(e.target.value)}
          options={kategori.map((kat) => ({
            value: kat.id_kategori,
            label: kat.nama_kategori,
          }))}
        />

        <TextArea
          label="Body"
          htmlFor="body"
          name="body"
          placeholder={isEditing ? `${body}` : "Masukan Body disini"}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <div className={s.btnly}>
          <Button type="submit" label="Simpan" styleBtn="btnform" />
        </div>
      </form>
    </div>
  );
}
