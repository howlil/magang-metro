import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import detailTim from "../../../../api/tim/detailTim";
import s from "./detail.module.css";
import Skeleton from "@mui/material/Skeleton";

export default function DetailTims() {
  const { id_team } = useParams();
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (id_team) {
        const response = await detailTim(id_team);
        if (response && response.data) {
          setData(response.data);
        }
      }
    };
    fetchData();
  }, [id_team]);

  return (
    <div className={s.layout}>
      <h1>Foto Anggota</h1>
      {data ? (
        <div className={s.img}>
          <img
            className={s.gbr}
            src={`http://localhost:5000/fotoTim/${data.foto_tim}`}
            alt={data.nama}
            onClick={() => setIsModalOpen(true)}
            style={{ cursor: "pointer" }}
          />
        </div>
      ) : (
        <Skeleton variant="rectangular" width={130} height={130} />
      )}

      <div className={s.konten}>
        <Label
          title="Nama"
          deskripsi={
            data ? data.nama : <Skeleton variant="text" width="100%" />
          }
        />
        <Label
          title="Spesialisasi"
          deskripsi={
            data ? data.spesialis : <Skeleton variant="text" width="100%" />
          }
        />
        <Label
          title="Posisi"
          deskripsi={
            data ? (
              data.dataPosisi.nama_posisi
            ) : (
              <Skeleton variant="text" width="100%" />
            )
          }
        />
        <Label
          title="Instagram"
          deskripsi={
            data ? data.instagram : <Skeleton variant="text" width="100%" />
          }
        />
        <Label
          title="LinkedIn"
          deskripsi={
            data ? data.linkedln : <Skeleton variant="text" width="100%" />
          }
        />
        <div className={s.stylepdf}>
          <Label
            title="Portfolio"
            deskripsi={
              data ? data.portofolio : <Skeleton variant="text" width="100%" />
            }
          />
          {data && data.portofolio && (
            <button  className={s.lihatpdf} onClick={() => setIsModalOpen(true)}>Lihat</button>
          )}
        </div>
      </div>

      {isModalOpen && (
  <div className={s.previewModal} onClick={() => setIsModalOpen(false)}>
    <div
      className={s.previewContent}
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className={s.closeButton}
        onClick={() => setIsModalOpen(false)}
      >
        x
      </span>
      <iframe
        src={`http://localhost:5000/filePortofolio/${data.portofolio}#toolbar=0`}
        className={s.previewPdf}
        width="100%"
        height="100%"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

    </div>
  );
}

const Label = ({ title, deskripsi }) => {
  return (
    <div className={s.group}>
      <p className={s.title}>{title}</p>
      <p className={s.colon}>:</p>
      <p>{deskripsi}</p>
    </div>
  );
};
