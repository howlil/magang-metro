import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import Tabel from "../../components/Elements/Tabel/Tabel";
import { useNavigate } from "react-router-dom";


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
          }} />
        <Tabel colom1="Nama" colom2="Posisi"/>
      </AdminLayout>
    </>
  );
};
export default KelolaTim;