import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import Tabel from "../../components/Elements/Tabel/Tabel";


const KelolaPosisi = () => {
  return (
    <>
    <Helmet>
        <title>Kelola Posisi | Fiable Low Office</title>
      </Helmet>
    <AdminLayout>
      <Title title="Posisi" labelbtn="Tambah Posisi" />
      <Tabel colom1="Posisi"/>
    </AdminLayout>
    </>
  )
}
export default KelolaPosisi;