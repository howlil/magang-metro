import s from "./tabel.module.css";
import tampilTim from "../../../../api/tim/tampilTim"
import hapusTim from "../../../../api/tim/hapusTim"
import { useState } from "react";

export default function TabelTim() {
  const [getTim,setTim] = useState([])



  return (
    <div className={s.layout}>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.nomor}>No</th>
            <th>Nama </th>
            <th>Posisi</th>
            <th className={s.aksi}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {getTim.map((tims, i) => (
            <tr key={tims.id_team}>
              <td className={s.no}>{i + 1}</td>
              <td>{tims.nama_}</td>
              <td>{tims.id_posisi}</td>
              <td>
                <TabelAction
                  onView={() => {
                    navigate(
                      `/kelolaPostingan/detailPostingan/${tims.id_team}`
                    );
                  }}
                  onEdit={() =>
                    navigate(
                      `/kelolaPostingan/editPostingan/${tims.id_team}`
                    )
                  }
                  onDelete={() => showDeleteConfirmation(tims.id_team)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
