import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import Tabel from "../../components/Elements/Tabel/Tabel";
import { useNavigate } from "react-router-dom";

const Kategori = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Kategori | Fiable Low Office</title>
      </Helmet>
      <AdminLayout>
        <Title
          title="Kategori"
          labelbtn="Tambah Kategori"
          onClick={() => {
            navigate("/kategori/tambahKategori");
          }}
        />
        <Tabel colom1="Judul Postingan" colom2="Kategori" />
      </AdminLayout>
    </>
  );
};
export default Kategori;
