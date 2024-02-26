import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";

export default function FormKategoriPost() {
  return (
    <>
      <InputForm
        placeholder="Masukan Nama Kategori"
        htmlFor="namaKategori"
        nama="namaKategori"
        type=" text"
      >
        Nama Kategori
      </InputForm>
      <InputForm htmlFor="slug" nama="slug" type=" text">
        Slug
      </InputForm>

      <Button label="Simpan" onClick={null} />
    </>
  );
}
