import AdminLayout from "../../../components/Layout/AdminLayout";
import Title from "../../../components/Elements/Title/Title";
import FormKategoriPost from "../../../components/Fragments/Form/FormKategoriPost";

export default function TambahKategori() {
  return (
    <AdminLayout>
      <div className="s.layout">
        <Title title="Tambah Kategori" />
        <FormKategoriPost />
      </div>
    </AdminLayout>
  );
}
