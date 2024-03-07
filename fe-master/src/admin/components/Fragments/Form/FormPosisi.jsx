import s from "./form.module.css";
import InputForm from "../../Elements/Input/Index";
import Button from "../../../../components/Button/Button";
import tambahPosisi from "../../../../api/posisi/tambahPosisi";
import editPosisi from "../../../../api/posisi/editPosisi";
import detailPosisi from "../../../../api/posisi/detailPosisi";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Toast from "../../Elements/Alert/Toast";

export default function FormPosisi() {
  const [posisi, setPosisi] = useState("");
  const navigate = useNavigate();
  const { id_posisi } = useParams();
  const isEditing = !!id_posisi;
  const [loading, setLoading] = useState(false);
  const [notif, setNotif] = useState("");

  useEffect(() => {
    if (isEditing) {
      detailPosisi(id_posisi).then((data) => {
        if (data.success) {
          setPosisi(data.data.nama_posisi);
        }
      });
    }
  }, [isEditing, id_posisi]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let response;
    try {
      if (isEditing) {
        response = await editPosisi(posisi, id_posisi);
      } else {
        response = await tambahPosisi(posisi);
      }

      if (response.success) {
        setNotif(response.message);
        navigate("/kelolaPosisi");
      } else {
        setNotif(response.message);
      }
    } catch (error) {
      setNotif(response.message);
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
            <Button
              label={isEditing ? "Simpan" : "Tambah"}
              styleBtn="btnform"
            />
          </div>
        </form>
      )}
      {notif && <Toast message={notif} onClose={() => setNotif("")} />}
    </div>
  );
}
