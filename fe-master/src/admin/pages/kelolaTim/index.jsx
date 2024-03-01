import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import { useNavigate } from "react-router-dom";
import TabelHeader from "../../components/Elements/Tabel/TabelHeader";

const KelolaTim = () => {
  const navigate = useNavigate();
  const headers = ["No", "Nama", "Posisi", "Aksi"];

  return (
    <>
      <Helmet>
        <title>Kelola Tim | Fiable Law Office</title>
      </Helmet>
      <AdminLayout>
        <Title
          title="Kelola Tim"
          labelbtn="Tambah Anggota"
          onClick={() => {
            navigate("/kelolaTim/tambahAnggota");
          }}
        />
        <TabelHeader headers={headers} />
      </AdminLayout>
    </>
  );
};
export default KelolaTim;
