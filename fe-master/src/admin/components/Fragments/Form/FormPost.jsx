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
import editPost from "../../../../api/postingan/editPost";
import detailPost from "../../../../api/postingan/detailPost";
import Toast from "../../Elements/Alert/Toast";
import CircularProgress from "@mui/material/CircularProgress";

export default function FormPost() {
  const [initialImageUrl, setInitialImageUrl] = useState("");
  const [judul, setJudul] = useState("");
  const [slug, setSlug] = useState("");
  const [kategori, setKategori] = useState([]);
  const [ambilKat, setAmbilKat] = useState("");
  const [idKategori, setIdKategori] = useState("");
  const [body, setBody] = useState([]);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const { id_postingan } = useParams();
  const isEditing = !!id_postingan;
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState({ message: "", type: "" });

  useEffect(() => {
    if (isEditing) {
      detailPost(id_postingan).then((data) => {
        if (data.success) {
          setJudul(data.data.judul);
          setSlug(data.data.slug);
          setInitialImageUrl(data.data.foto_postingan);
          setAmbilKat(data.data.dataKategori);
          setBody(data.data.body);
        }
      });
    }
  }, [id_postingan, isEditing]);

  // menampilkan kategori
  useEffect(() => {
    tampilKategori()
      .then((data) => {
        setKategori(data.data);
        console.table(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;

      if (isEditing) {
        response = await editPost(
          judul,
          slug,
          idKategori,
          body,
          file,
          id_postingan
        );
      } else {
        response = await tambahPostingan(judul, slug, idKategori, body, file);
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
        <CircularProgress style={{ display: "block", margin: "0 auto" }} />

      ) : (
        <form onSubmit={handleSubmit}>
          <Label label="Foto Postingan" />
          <div className={s.img}>
            <SingleImage
              onFileSelect={(selectedFile) => setFile(selectedFile)}
              initialImageUrl={initialImageUrl}
            />
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
            placeholder={
              isEditing
                ? kategori
                  ? `${ambilKat}`
                  : "Masukan kategori"
                : kategori
                ? `${ambilKat}`
                : "Tambahkan kategori dulu"
            }
            htmlFor="kategori"
            name="kategori"
            value={idKategori}
            onChange={(e) => {
              const selectedKategori = kategori.find(
                (kat) => kat.id_kategori.toString() === e.target.value
              );
              if (selectedKategori) {
                setIdKategori(selectedKategori.id_kategori);
                setAmbilKat(selectedKategori.nama_kategori);
              }
            }}
            options={kategori.map((kat) => ({
              value: kat.id_kategori.toString(),
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
