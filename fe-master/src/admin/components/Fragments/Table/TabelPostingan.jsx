import s from "./tabel.module.css";
import tampilPostingan from "../../../../api/postingan/tampilPost";
import { useEffect, useState } from "react";
import AlertNotif from "../../Elements/Alert/AlertNotif";
import TabelAction from "./TabelAction";
import {useNavigate} from "react-router-dom"
import hapusPost from "../../../../api/postingan/hapusPost";


export default function TabelPostingan() {
  const [getPost, setPost] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let fetchPost = async () => {
      await tampilPostingan()
        .then((data) => {
          setPost(data.data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    };
    fetchPost();
  }, []);

  const showDeleteConfirmation = (id) => {
    setPostToDelete(id);
    setIsModalOpen(true);
  };
  const handleDeleter = async (id) => {
    try {
      await hapusPost(id);
      setPost(getPost.filter((post) => post.id_postingan !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.layout}>
      {getPost ? (
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.nomor}>No</th>
            <th>Judul Postingan</th>
            <th>Slug</th>
            <th>Kategori</th>
            <th className={s.aksi}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {getPost.map((post, i) => (
            <tr key={post.id_postingan}>
              <td className={s.no}>{i + 1}</td>
              <td>{post.judul}</td>
              <td>{post.slug}</td>
              <td>{post.dataKategori.nama_kategori}</td>
              <td>
                <TabelAction 
                onView={()=>{
                  navigate(`/kelolaPostingan/detailPostingan/${post.id_postingan}`)
                }} 
               onEdit={() =>
                navigate(`/kelolaPostingan/editPostingan/${post.id_postingan}`)
              }
               onDelete={() => showDeleteConfirmation(post.id_postingan)}
               />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
       ) : (
        <div>Belum Ada Data </div>
      )}
      <AlertNotif
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          handleDeleter(postToDelete);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
