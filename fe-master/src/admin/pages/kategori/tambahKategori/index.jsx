import { useLocation } from "react-router-dom"; 
import AdminLayout from "../../../components/Layout/AdminLayout";
import Title from "../../../components/Elements/Title/Title";
import FormKategoriPost from "../../../components/Fragments/Form/FormKategoriPost";

export default function KategoriPage() {
  const location = useLocation(); 
  const pathname = location.pathname; 
  
  let title;
  if (pathname.includes("/kategori/editKategori")) {
    title = "Edit Kategori"; 
  } else if (pathname.includes("/kategori/tambahKategori")) {
    title = "Tambah Kategori"; 
  } else {
    title = "Kategori";
  }

  return (
    <AdminLayout>
      <div className="s.layout">
        <Title title={title} />
        <FormKategoriPost />
      </div>
    </AdminLayout>
  );
}
