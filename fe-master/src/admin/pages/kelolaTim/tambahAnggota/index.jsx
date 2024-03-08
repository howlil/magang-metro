import AdminLayout from "../../../components/Layout/AdminLayout"
import Title from "../../../components/Elements/Title/Title";
import FormAnggota from "../../../components/Fragments/Form/FormAnggota.jsx";


export default function TambahAnggota() {
    return (
      <div>
    <AdminLayout>
      <div className="s.layout">
        <Title title="Tambah Anggota" />
        <FormAnggota />
      </div>
    </AdminLayout>
      </div>
    )
  }
  