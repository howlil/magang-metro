import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import SelectIndex from "../../Elements/Input/SelectIndex";
import Label from "../../Elements/Input/Label";
import SingleImage from "../../Elements/Galeri/SingleImage";

export default function FormAnggota() {
  return (
    <div className={s.layout}>
      <form>
        <Label label="Foto" />
        <div className={s.img}>
          <SingleImage />
        </div>

        <InputForm
          label="Nama"
          placeholder="Masukan Nama Lengkap"
          htmlFor="nama"
          type="text"
          nama="nama"
        />

        <InputForm 
            nama="spesialisasi" 
            placeholder="Masukan Spesialisasi Anggota"
            label="Spesialisasi" 
            htmlFor="spesialisasi" 
            type="text" 
        />

        <SelectIndex
          label="Posisi"
          placeholder="Pilih Posisi"
          htmlFor="posisi"
          value="value"
          onChange={null}
          option="null"
        />

        <InputForm 
            nama="instagram" 
            placeholder="Masukan URL profile instagram anggota"
            label="Instagram" 
            htmlFor="instagram" 
            type="text" 
        />

        <InputForm 
            nama="linkedin" 
            placeholder="Masukan URL linkedin anggota"
            label="LinkedIn" 
            htmlFor="linkedin" 
            type="text" 
        />

        <div className={s.btnly}>
          <Button type="submit" label="Simpan" styleBtn="btnform" />
        </div>
      </form>
    </div>
  );
}
