import AdminLayout from "../../../components/Layout/AdminLayout";
import Title from "../../../components/Elements/Title/Title";
import FormPost from "../../../components/Fragments/Form//FormPost";

export default function TambahPostingan() {
  return (
    <AdminLayout>
      <Title title="Tambah Postingan" />
      <FormPost />
    </AdminLayout>
  );
}
