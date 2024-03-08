import AdminLayout from "../../../components/Layout/AdminLayout";
import Title from "../../../components/Elements/Title/Title";
import DetailTims from "../../../components/Fragments/Detail/DetailTims";

export default function DetailTim() {
  return (
    <div>
      <AdminLayout>
        <Title title="Lihat Anggota" />
        <DetailTims/>
      </AdminLayout>
    </div>
  );
}
