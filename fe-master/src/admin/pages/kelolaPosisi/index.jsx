import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import { useNavigate } from "react-router-dom";
import TabelPosisi from "../../components/Fragments/Table/TabelPosisi";

const KelolaPosisi = () => {
  const navigate = useNavigate();

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
        <TabelPosisi />
      </AdminLayout>
    </>
  );
};
export default KelolaPosisi;
