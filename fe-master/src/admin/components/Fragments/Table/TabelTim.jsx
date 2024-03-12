import s from "./tabel.module.css";
import tampilTim from "../../../../api/tim/tampilTim";
import hapusTim from "../../../../api/tim/hapusTim";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";
import TabelAction from "./TabelAction";
import AlertNotif from "../../Elements/Alert/AlertNotif";

export default function TabelTim() {
  const [getTim, setTim] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let fetchPost = async () => {
      try {
        const data = await tampilTim();
        setTim(data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  const showDeleteConfirmation = (id) => {
    setPostToDelete(id);
    setIsModalOpen(true);
  };

  const handleDeleter = async (id) => {
    try {
      await hapusTim(id);
      setTim(getTim.filter((tims) => tims.id_team !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={s.layout}>
      {loading ? (
        Array.from(new Array(5)).map((_, index) => (
          <Skeleton
            key={index}
            variant="rectangular"
            width="100%"
            height={40}
            style={{ marginBottom: 4 }}
          />
        ))
      ) : getTim ? (
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.nomor}>No</th>
              <th>Nama</th>
              <th>Posisi</th>
              <th className={s.aksi}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {getTim.map((tims, i) => (
              <tr key={tims.id_team}>
                <td className={s.no}>{i + 1}</td>
                <td>{tims.nama}</td>
                <td>{tims.dataPosisi.nama_posisi}</td>
                <td>
                  <TabelAction
                    onView={() => {
                      navigate(`/kelolaTim/detailTim/${tims.id_team}`);
                    }}
                    onEdit={() =>
                      navigate(`/kelolaTim/editTim/${tims.id_team}`)
                    }
                    onDelete={() => showDeleteConfirmation(tims.id_team)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Belum Ada Data</div>
      )}
      <AlertNotif
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          handleDeleter(postToDelete);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
