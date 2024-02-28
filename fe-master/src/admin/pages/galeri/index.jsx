import AdminLayout from "../../components/Layout/AdminLayout";
import Image from "../../components/Elements/Galeri/Image";
import Title from "../../components/Elements/Title/Title";
import { Helmet } from "react-helmet";


export default function Galeri() {
  return (
    <>
    <Helmet>
        <title>Galeri | Fiable Low Office</title>
      </Helmet>
    <AdminLayout>
      <Title title="Kumpulan Foto"/>
      <Image>
      </Image>
    </AdminLayout>
    </>
  )
}
