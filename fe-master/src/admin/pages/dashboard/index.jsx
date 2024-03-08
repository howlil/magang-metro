import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/Layout/AdminLayout";
import Card from "../../components/Elements/Card/Card";
import s from "./dashboar.module.css";
import Title from "../../../admin/components/Elements/Title/Title";
import jlhfoto from "/public//dashboard//jlhfoto.svg";
import jlhposisi from "/public//dashboard//jlhposisi.svg";
import jlhpost from "/public//dashboard//jlhpost.svg";
import jlhtim from "/public//dashboard//jlhtim.svg";
import getPositingan from "../../../api/dashboard/getPostingan";
import getGaleri from "../../../api/dashboard/getGaleri";
import getTim from "../../../api/dashboard/getTim";
import getPosisi from "../../../api/dashboard/getPosisi";
import Skeleton from "@mui/material/Skeleton"; // Pastikan ini sesuai dengan versi MUI yang Anda gunakan

export default function Dashboard() {
  const [postingan, setPostingan] = useState();
  const [galeri, setGaleri] = useState();
  const [tim, setTim] = useState();
  const [posisi, setPosisi] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const resPostingan = getPositingan();
      const resGaleri = getGaleri();
      const resTim = getTim();
      const resPosisi = getPosisi();
      Promise.all([resPostingan, resGaleri, resTim, resPosisi]).then(
        (values) => {
          setPostingan(values[0].total || "Belum ada data");
          setGaleri(values[1].total || "Belum ada data");
          setTim(values[2].total || "Belum ada data");
          setPosisi(values[3].total || "Belum ada data");
        }
      );
    };
    fetchData();
  }, []);

  const isLoading = [postingan, galeri, tim, posisi].some(
    (value) => value === undefined
  );

  return (
    <>
      <AdminLayout>
        <Title title="Dashboard Admin" />
        <div className={s.layout}>
          {isLoading ? (
            <>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={118}
                style={{ marginBottom: 4 }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={118}
                style={{ marginBottom: 4 }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={118}
                style={{ marginBottom: 4 }}
              />
              <Skeleton
                variant="rectangular"
                width="100%"
                height={118}
                style={{ marginBottom: 4 }}
              />
            </>
          ) : (
            <>
              <Card image={jlhpost} title="Jumlah Postingan" data={postingan} />
              <Card image={jlhfoto} title="Jumlah Galeri" data={galeri} />
              <Card image={jlhposisi} title="Jumlah Posisi" data={posisi} />
              <Card image={jlhtim} title="Jumlah Tim" data={tim} />
            </>
          )}
        </div>
      </AdminLayout>
    </>
  );
}
