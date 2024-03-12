import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import detailPost from "../../../../api/postingan/detailPost";
import s from "./detail.module.css";
import Skeleton from "@mui/material/Skeleton";

export default function Detail() {
  const { id_postingan } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id_postingan) {
        const response = await detailPost(id_postingan);
        if (response.data) {
          setData(response.data);
        }
      }
    };
    fetchData();
  }, [id_postingan]);
  return (
    <div className={s.layout}>
      <h1>Foto Postingan</h1>
      {data ? (
        <div className={s.img}>
          <img
            className={s.gbr}
            src={`http://localhost:5000/fotoPostingan/${data.foto_postingan}`}
            alt={data.judul}
          />
        </div>
      ) : (
        <Skeleton variant="rectangular" width={130} height={130} />
      )}

      <div className={s.konten}>
        <Label
          title="Judul"
          deskripsi={
            data ? data.judul : <Skeleton variant="text" width="100%" />
          }
        />
        <Label
          title="Slug"
          deskripsi={
            data ? data.slug : <Skeleton variant="text" width="100%" />
          }
        />
        <Label
          title="Kategori"
          deskripsi={
            data ? (
              data.dataKategori.nama_kategori
            ) : (
              <Skeleton variant="text" width="100%" />
            )
          }
        />
        <Label title="Body" />
      </div>

      {data ? (
        <div className={s.container}>
          <p>{data.body}</p>
        </div>
      ) : (
        <Skeleton variant="text" width="100%" height={100} />
      )}
    </div>
  );
}

const Label = (props) => {
  const { title, deskripsi } = props;
  return (
    <div className={s.group}>
      <p className={s.title}>{title}</p>
      <p className={s.colon}>:</p>
      <p>{deskripsi}</p>
    </div>
  );
};
