import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import tambahPosisi from "../../../../api/posisi/tambahPosisi";
import editPosisi from "../../../../api/posisi/editPosisi";
import detailPosisi from "../../../../api/posisi/detailPosisi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FormPosisi() {
  const [posisi, setPosisi] = useState("");
  const navigate = useNavigate();
  const { id_posisi } = useParams();
  const isEditing = !!id_posisi;

  useEffect(() => {
    if (isEditing) {
      detailPosisi(id_posisi)
        .then((data) => {
          if (data.success) {
            setPosisi(data.data.nama_posisi);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [isEditing, id_posisi]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    !isEditing
      ? (res = await tambahPosisi(posisi).catch((Error) => console.log(Error)))
      : (res = await editPosisi(posisi, id_posisi).catch((Error) =>
          console.log(Error)
        ));

    console.log(res);
    navigate("/kelolaPosisi");
  };

  return (
    <div className={s.layout}>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Nama Posisi"
          placeholder={isEditing ? `${posisi}` : "Masukan Posisi"}
          htmlFor="posisi"
          name="posisi"
          type=" text"
          value={posisi}
          onChange={(e) => setPosisi(e.target.value)}
        />

        <div className={s.btnly}>
          <Button label={isEditing ? "Simpan" : "Tambah"} styleBtn="btnform" />
        </div>
      </form>
    </div>
  );
}
