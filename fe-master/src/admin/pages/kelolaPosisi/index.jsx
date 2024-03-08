import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import Tabel from "../../components/Elements/Tabel/Tabel";
import { useNavigate } from "react-router-dom";


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
      }} />
      <Tabel colom1="Posisi"/>
    </AdminLayout>
    </>
  );
}
export default KelolaPosisi;