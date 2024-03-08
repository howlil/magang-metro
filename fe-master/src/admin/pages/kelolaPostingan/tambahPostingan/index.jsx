import AdminLayout from "../../../components/Layout/AdminLayout";
import Title from "../../../components/Elements/Title/Title";
import FormPost from "../../../components/Fragments/Form//FormPost";
import { useLocation } from "react-router-dom";

export default function TambahPostingan() {
  const location = useLocation();
  const pathname = location.pathname;


  let title;
  if (pathname.includes("/kelolaPostingan/editPostingan")) {
    title = "Edit Potingan";
  } else if (pathname.includes("/kelolaPostingan/tambahPostingan")) {
    title = "Tambah Postingan";
  } else {
    title = "Postingan";
  }

  return (
    <AdminLayout>
      <Title title={title} />
      <FormPost />
    </AdminLayout>
  );
}
