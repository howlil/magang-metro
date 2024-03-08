import AdminLayout from "../../../components/Layout/AdminLayout";
import Title from "../../../components/Elements/Title/Title";
import FormAnggota from "../../../components/Fragments/Form/FormAnggota.jsx";
import { useLocation } from "react-router-dom";

export default function TambahAnggota() {
  const location = useLocation();
  const pathname = location.pathname;

  let title;
  if (pathname.includes("/kelolaTim/editTim")) {
    title = "Edit Tim";
  } else if (pathname.includes("/kelolaTim/tambahTim")) {
    title = "Tambah Tim";
  }

  return (
    <div>
      <AdminLayout>
        <div className="s.layout">
          <Title title={title} />
          <FormAnggota />
        </div>
      </AdminLayout>
    </div>
  );
}
