import React, { useEffect, useState } from "react";
import s from "./tabel.module.css";
import AlertNotif from "../../../components/Elements/Alert/AlertNotif";
import { useNavigate } from "react-router-dom";
import TabelAction from "./TabelAction";
import tampilPosisi from "../../../../api/posisi/tampilPosisi";
import hapusPosisi from "../../../../api/posisi/hapusPosisi";
import Skeleton from "@mui/material/Skeleton";

export default function TabelPosisi() {
  const [getPosisi, setPosisi] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posisiToDelete, setPosisToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await tampilPosisi();
        setPosisi(data.data);
      } catch (error) {
        console.log(error);
        setPosisi([]);
      }
    };
    fetchData();
  }, []);

  const showDeleteConfirmation = (id) => {
    setPosisToDelete(id);
    setIsModalOpen(true);
  };

  const handleDeleter = async (id) => {
    try {
      await hapusPosisi(id);
      setPosisi(getPosisi.filter((pos) => pos.id_posisi !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.layout}>
      {getPosisi === null ? (
        <div>
          {Array.from(new Array(5)).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width="100%"
              height={40}
              style={{ marginBottom: 4 }}
            />
          ))}
        </div>
      ) : getPosisi.length > 0 ? (
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.nomor}>No</th>
              <th>Posisi</th>
              <th className={s.aksi}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {getPosisi.map((posisi, i) => (
              <tr key={posisi.id_posisi}>
                <td className={s.no}>{i + 1}</td>
                <td>{posisi.nama_posisi}</td>
                <td>
                  <TabelAction
                    onEdit={() =>
                      navigate(`/kelolaPosisi/editPosisi/${posisi.id_posisi}`)
                    }
                    onDelete={() => showDeleteConfirmation(posisi.id_posisi)}
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
          handleDeleter(posisiToDelete);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
