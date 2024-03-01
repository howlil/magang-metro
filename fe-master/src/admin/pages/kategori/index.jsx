import AdminLayout from "../../components/Layout/AdminLayout";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";
import { useNavigate } from "react-router-dom";
import TabelHeader from "../../components/Elements/Tabel/TabelHeader";

const Kategori = () => {
  const navigate = useNavigate();
  const headers = ["Kategori  "];
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
        <TabelHeader headers={headers} />
      </AdminLayout>
    </>
  );
};
export default Kategori;
