import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import Tabel from "../../components/Elements/Tabel/Tabel";

const KelolaTim = () => {
  return (
    <>
      <Helmet>
        <title>Kelola Tim | Fiable Low Office</title>
      </Helmet>
      <AdminLayout>
        <Title title="Kelola Tim" labelbtn="Tambah Anggota"/>
        <Tabel colom1="Nama" colom2="Posisi"/>
      </AdminLayout>
    </>
  );
};
export default KelolaTim;