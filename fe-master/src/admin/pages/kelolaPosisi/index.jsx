import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import { useNavigate } from "react-router-dom";
import TabelHeader from "../../components/Elements/Tabel/TabelHeader";

const KelolaPosisi = () => {
  const navigate = useNavigate();
  const headers = ["No", "Posisi", "Aksi"];

  return (
    <>
      <Helmet>
        <title>Kelola Posisi | Fiable Law Office</title>
      </Helmet>
      <AdminLayout>
        <Title
          title="Posisi"
          labelbtn="Tambah Posisi"
          onClick={() => {
            navigate("/kelolaPosisi/tambahPosisi");
          }}
        />
        <TabelHeader headers={headers} />
      </AdminLayout>
    </>
  );
};
export default KelolaPosisi;
