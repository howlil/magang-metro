import React, { useEffect, useState } from 'react'
import s from "./tabel.module.css"
import AlertNotif from "../../../components/Elements/Alert/AlertNotif"
import {useNavigate} from "react-router-dom"
import TabelAction from './TabelAction'
import tampilPosisi from "../../../../api/posisi/tampilPosisi"
import hapusPosisi from "../../../../api/posisi/hapusPosisi"


export default function TabelPosisi() {
  const[getPosisi,setPosisi] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[posisiToDelete,setPosisToDelete] = useState(null)
  const navigate= useNavigate()

  const showDeleteConfirmation = (id) => {
    setPosisToDelete(id);
    setIsModalOpen(true);
  };

  useEffect(()=>{
    const fetchData = async () =>{
        await tampilPosisi().then((data)=>{
        setPosisi(data.data);
      }).catch(error=>console.log(error))
    }
    fetchData()
  })

  
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
    {getPosisi ? (
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.nomor}>No</th>
            <th>Posisi</th>
            <th className={s.aksi}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {getPosisi.map((getPosisi, i) => (
            <tr key={getPosisi.id_posisi}>
              <td className={s.no}>{i + 1}</td>
              <td>{getPosisi.nama_posisi}</td>
              <td>
                <TabelAction
                  onEdit={() =>
                    navigate(`/kelolaPosisi/editPosisi/${getPosisi.id_posisi}`)
                  }
                  onDelete={() => showDeleteConfirmation(getPosisi.id_posisi)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <div>Belum Ada Data </div>
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
  )
}
