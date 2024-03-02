import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import { useNavigate } from "react-router-dom";
import TabelTim from "../../components/Fragments/Table/TabelTim";

const KelolaTim = () => {
  const navigate = useNavigate();

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
        <TabelTim />
      </AdminLayout>
    </>
  );
};
export default KelolaTim;
