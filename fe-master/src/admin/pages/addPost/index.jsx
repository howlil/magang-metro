import AdminLayout from "../../components/Layout/AdminLayout";
import s from "./addPost.module.css";
import { Helmet } from "react-helmet";
import Title from "../../components/Elements/Title/Title";

import Button from "../../../components/Button/Button";
const AddPost = () => {
  return (
    <>
      <Helmet>
        <title>Tambah Post | Fiable Law Office</title>
      </Helmet>
      <AdminLayout>
        <Title 
        labelbtn="Tambah Postingan"
        title="Postingan"
         />
      </AdminLayout>
    </>
  );
};
export default AddPost;
