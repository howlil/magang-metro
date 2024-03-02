import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import TextArea from "../../Elements/Input/TextArea";
import SelectIndex from "../../Elements/Input/SelectIndex";
import Label from "../../Elements/Input/Label";
import { tambahPost } from "../../../../api/postingan/tambahPost";
import { useEffect, useState } from "react";
import SingleImage from "../../Elements/Galeri/SingleImage";
// import { tampilKategori } from "../../../../api/kategori/tampilKategori";

export default function FormPost() {
  // const [formData, setFormData] = useState({
  //   judul: "",
  //   slug: "",
  //   body: "",
  //   image: "",
  //   kategori: "", // Menambahkan kategori ke dalam state formData
  // });
  // const [isLoading, setIsLoading] = useState(true);
  // const [kategori, setKategori] = useState([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const data = await tampilKategori();
  //       console.log(data);
  //       if (data.success) {
  //         setKategori(data.data);
  //       } else {
  //         setError("Data kategori tidak ditemukan");
  //       }
  //     } catch (error) {
  //       setError("Terjadi kesalahan saat mengambil data");
  //       console.error(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await tambahPost(formData);
  //     console.log("sukses", res);
  //     alert("Postingan berhasil ditambahkan!");
  //     setFormData({
  //       judul: "",
  //       slug: "",
  //       body: "",
  //       image: "",
  //       kategori: "",
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     alert("Terjadi kesalahan saat menambahkan postingan.");
  //   }
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className={s.layout}>
      <form onSubmit={null}>
        <Label label="Foto Postingan" />
        <div className={s.img}>
          <SingleImage />
        </div>

        <InputForm
          label="Judul"
          placeholder="Masukan Judul Postingan" // Koreksi placeholder
          htmlFor="judul"
          type="text"
          name="judul"
          // value={formData.judul}
          // onChange={handleChange}
        />
        <InputForm
          name="slug"
          label="Slug"
          htmlFor="slug"
          type="text"
          // value={formData.slug}
          // onChange={handleChange}
        />

        <SelectIndex
          label="Kategori"
          placeholder="Pilih Kategori"
          htmlFor="kategori"
          name="kategori" // Menentukan name untuk SelectIndex
          // value={formData.kategori}
          // onChange={handleChange}
          // option={kategori.map((kat) => ({
          //   value: kat.id_kategori,
          //   label: kat.nama_kategori,
          // }))}
        />

        <TextArea
          label="Body"
          htmlFor="body"
          name="body"
          placeholder="Masukan isi postingan disini"
          // onChange={handleChange} // Menambahkan onChange handler
        />

        <div className={s.btnly}>
          <Button type="submit" label="Simpan" styleBtn="btnform" />
        </div>
      </form>
    </div>
  );
}
