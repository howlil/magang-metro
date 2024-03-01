import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";

export default function FormPosisi() {
  return (
    <div className={s.layout}>
      <form>
        <InputForm
          label="Nama Posisi"
          placeholder="Masukan Nama Posisi"
          htmlFor="namaPosisi"
          nama="namaPosisi"
          type=" text"
        />
        <InputForm label="Slug" htmlFor="slug" nama="slug" type=" text" />
        
        <div className={s.btnly}>
        <Button label="Simpan" styleBtn="btnform" />
        </div>
      </form>
    </div>
  );
}
