import AdminLayout from "../../components/Layout/AdminLayout";
import s from "./kelolapost.module.css";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import { useNavigate } from "react-router-dom";
import TabelPostingan from "../../components/Fragments/Table/TabelPostingan";

const KelolaPostingan = () => {
  const navigate = useNavigate();

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
        <TabelPostingan />
      </AdminLayout>
    </>
  );
};

export default KelolaPostingan;
