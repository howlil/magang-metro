import AdminLayout from "../../components/Layout/AdminLayout";
import s from "./kelolapost.module.css";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import { useNavigate } from "react-router-dom";
import TabelHeader from "../../components/Elements/Tabel/TabelHeader";

const KelolaPostingan = () => {
  const navigate = useNavigate();
  const headers = ["No", "Judul Postingan", "Kategori", "Aksi"];

  return (
    <>
      <Helmet>
        <title>Tambah Postingan | Fiable Law Office</title>
      </Helmet>
      <AdminLayout>
        <Title
          labelbtn="Tambah Postingan"
          title="Postingan"
          onClick={() => {
            navigate("/kelolaPostingan/tambahPostingan");
          }}
        />
        <TabelHeader headers={headers} />
      </AdminLayout>
    </>
  );
};

export default KelolaPostingan;
