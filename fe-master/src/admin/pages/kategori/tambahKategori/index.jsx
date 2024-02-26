import AdminLayout from "../../../components/Layout/AdminLayout";
import Title from "../../../components/Elements/Title/Title";
import FormKategoriPost from "../../../components/Fragments/Form/FormKategoriPost";

export default function TambahKategori() {
  return (
    <div>
      <AdminLayout>
        <Title title="Tambah Kategori" />
        <FormKategoriPost />
      </AdminLayout>
    </div>
  );
}
