import AdminLayout from "../../../components/Layout/AdminLayout";
import Title from "../../../components/Elements/Title/Title";
import FormPosisi from "../../../components/Fragments/Form/FormPosisi.jsx";
import { useLocation } from "react-router-dom"; 


export default function TambahPosisi() {
  const location = useLocation(); 
  const pathname = location.pathname; 

  let title
  if (pathname.includes("/kelolaPosisi/editPosisi")) {
    title = "Edit Posisi"; 
  } else if (pathname.includes("/kelolaPosisi/tambahPosisi")) {
    title = "Tambah Posisi"; 
  } else {
    title = "Posisi";
  }
  return (
    <>
    <AdminLayout>
      <div className="s.layout">
        <Title title={title} />
        <FormPosisi />
      </div>
    </AdminLayout>
    </>
  )
}
