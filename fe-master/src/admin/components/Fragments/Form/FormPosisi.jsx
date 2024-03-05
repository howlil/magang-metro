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
  const [notif, setNotif] = useState({ message: "", type: "" });

  useEffect(() => {
    if (isEditing) {
      setLoading(true); // Mulai loading sebelum fetch data
      detailPosisi(id_posisi)
        .then((data) => {
          if (data.success) {
            setPosisi(data.data.nama_posisi);
          } else {
            throw new Error("Failed to fetch position details");
          }
        })
        .catch((error) => {
          console.log(error);
          setNotif({
            message: error.message || "Gagal mengambil data posisi!",
            type: "error",
          });
        })
        .finally(() => setLoading(false)); // Hentikan loading setelah fetch data
    }
  }, [isEditing, id_posisi]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Mulai loading saat submit form

    try {
      const response = isEditing
        ? await editPosisi(id_posisi, posisi)
        : await tambahPosisi(posisi);

      if (response.success) {
        setNotif({
          message: response.message || "Successfully saved!",
          type: "success",
        });
        navigate("/kelolaPosisi");
      } else {
        throw new Error(response.message || "Failed to save data!");
      }
    } catch (error) {
      console.log(error);
      setNotif({
        message: error.message || "Terjadi kesalahan",
        type: "error",
      });
    } finally {
      setLoading(false); // Hentikan loading setelah proses submit selesai
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
