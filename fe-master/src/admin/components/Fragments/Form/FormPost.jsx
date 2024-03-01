import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import TextArea from "../../Elements/Input/TextArea";
import SelectIndex from "../../Elements/Input/SelectIndex";
import Label from "../../Elements/Input/Label";
import { tambahPost } from "../../../../api/postingan/tambahPost";
import { useState } from "react";
import SingleImage from "../../Elements/Galeri/SingleImage";

export default function FormPost() {
  
  const [formData, setFormData] = useState({
    judul: "",
    slug: "",
    body: "",
    image: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const hanndleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await tambahPost(formData);
      console.log("sukses", res);
      setFormData({
        judul: "",
        slug: "",
        body: "",
        image: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.layout}>
      <form onSubmit={hanndleSubmit}>
        <Label label="Foto Postingan" />
        <div className={s.img}>
          <SingleImage />
        </div>

        <InputForm
          label="Judul"
          placeholder="Masukan Nama Kategori"
          htmlFor="judul"
          type="text"
          nama="judul"
          value={formData.judul}
          onChange={handleChange}
        />
        <InputForm nama="slug" label="Slug" htmlFor="slug" type="text" />

        <SelectIndex
          label="label"
          placeholder="Pilih Kategori"
          htmlFor="html"
          value="value"
          onChange={null}
          option="null"
        />

        <TextArea
          label="Body"
          htmlFor="body"
          nama="body"
          placeholder="Masukan isi postingan disini"
        />

        <div className={s.btnly}>
          <Button type="submit" label="Simpan" styleBtn="btnform" />
        </div>
      </form>
    </div>
  );
}
