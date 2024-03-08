import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import { useNavigate } from "react-router-dom";
import TabelKategori from "../../components/Fragments/Table/TabelKategori";

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
        <TabelKategori />
      </AdminLayout>
    </>
  );
};
export default Kategori;
