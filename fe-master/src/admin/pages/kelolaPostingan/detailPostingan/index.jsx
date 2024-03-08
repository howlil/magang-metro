import AdminLayout from "../../../components/Layout/AdminLayout";
import Title from "../../../components/Elements/Title/Title";
import Detail from "../../../components/Fragments/Detail/Detail";

export default function DetailPostingan() {
  return (
    <div>
      <AdminLayout>
        <Title title="Tampil Postingan" />
        <Detail/>
      </AdminLayout>
    </div>
  );
}
