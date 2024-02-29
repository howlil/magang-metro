import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import TextArea from "../../Elements/Input/TextArea";
import SelectIndex from "../../Elements/Input/SelectIndex";
import Image from "../../Elements/Galeri/Image";
import Label from "../../Elements/Input/Label";

export default function FormPost() {
  return (
    <div className={s.layout}>
      <form action="">
        <Label label="Foto Postingan" />
        <div className={s.img}>
          <Image />
        </div>

        <InputForm
          label="Judul"
          placeholder="Masukan Nama Kategori"
          htmlFor="judul"
          type="text"
          nama="judul"
        />
        <InputForm nama="slug" label="Slug" htmlFor="slug" type="text" />

        <SelectIndex
          label="label"
          htmlFor="html"
          value="value"
          onChange={null}
          option="null"
        />
        {/* ganti dengan text area */}

        <TextArea
          label="Body"
          htmlFor="body"
          nama="body"
          placeholder="Masukan isi postingan disini"
        />

        <div className={s.btnly}>
          <Button label="Simpan" styleBtn="btnform" />
        </div>
      </form>
    </div>
  );
}
