import AdminLayout from "../../../components/Layout/AdminLayout";
import Title from "../../../components/Elements/Title/Title";
import FormPosisi from "../../../components/Fragments/Form/FormPosisi.jsx";


export default function TambahPosisi() {
  return (
    <>
    <AdminLayout>
      <div className="s.layout">
        <Title title="Tambah Posisi" />
        <FormPosisi />
      </div>
    </AdminLayout>
    </>
  )
}
