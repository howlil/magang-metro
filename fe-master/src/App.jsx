import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/dashboard";
import NotFound from "./NotFound";
import KelolaPostingan from "./admin/pages/kelolaPostingan";
import Kategori from "./admin/pages/kategori";
import Login from "./admin/pages/login/login";
import KelolaPosisi from "./admin/pages/kelolaPosisi";
import KelolaTim from "./admin/pages/kelolaTim";
import Galeri from "./admin/pages/galeri";
import { ActiveRouteProvider } from "./utils/ActiveRouteContex";
import TambahPostingan from "./admin/pages/kelolaPostingan/tambahPostingan";
import TambahAnggota from "./admin/pages/kelolaTim/tambahTim";
import TambahKategori from "./admin/pages/kategori/tambahKategori";
import TambahPosisi from "./admin/pages/kelolaPosisi/tambahPosisi";
import DetailPostingan from "./admin/pages/kelolaPostingan/detailPostingan";
import { ProtectedRoute } from "./utils/ProtectedRouteContex"; // Pastikan Anda telah membuat komponen ini
import DetailTim from "./admin/pages/kelolaTim/detailTim";

import 'bootstrap/dist/css/bootstrap.min.css';
import Beranda from "./main/pages/beranda/Beranda";
import Artikel from "./main/pages/artikel/Artikel";
import Layanan from "./main/pages/layanan/Layanan";
import Tentang from "./main/pages/tentang/Tentang";
import Testimoni from "./main/pages/testimoni/Testimoni";
import Tim from "./main/pages/tim/Tim";
import Kontak from "./main/pages/kontak/Kontak";

function App() {
  return (
    <>
      <Router>
        <ActiveRouteProvider>
          <Routes>
            {/* route admin */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kelolaPostingan"
              element={
                <ProtectedRoute>
                  <KelolaPostingan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kategori"
              element={
                <ProtectedRoute>
                  <Kategori />
                </ProtectedRoute>
              }
            />
            <Route
              path="/galeri"
              element={
                <ProtectedRoute>
                  <Galeri />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kelolaTim"
              element={
                <ProtectedRoute>
                  <KelolaTim />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kelolaPosisi"
              element={
                <ProtectedRoute>
                  <KelolaPosisi />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<Login />} />

            {/* nested route admin */}
            {/* postingan */}
            <Route
              path="/kelolaPostingan/tambahPostingan"
              element={
                <ProtectedRoute>
                  <TambahPostingan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kelolaPostingan/editPostingan/:id_postingan"
              element={
                <ProtectedRoute>
                  <TambahPostingan />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kelolaPostingan/detailPostingan/:id_postingan"
              element={
                <ProtectedRoute>
                  <DetailPostingan />
                </ProtectedRoute>
              }
            />
            {/* kategori */}
            <Route
              path="/kategori/tambahKategori"
              element={
                <ProtectedRoute>
                  <TambahKategori />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kategori/editKategori/:id_kategori"
              element={
                <ProtectedRoute>
                  <TambahKategori />
                </ProtectedRoute>
              }
            />
            {/* tim */}
            <Route
              path="/kelolaTim/tambahTim"
              element={
                <ProtectedRoute>
                  <TambahAnggota />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kelolaTim/editTim/:id_team"
              element={
                <ProtectedRoute>
                  <TambahAnggota />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kelolaTim/detailTim/:id_team"
              element={
                <ProtectedRoute>
                  <DetailTim />
                </ProtectedRoute>
              }
            />
            {/* posisi */}
            <Route
              path="/kelolaPosisi/tambahPosisi"
              element={
                <ProtectedRoute>
                  <TambahPosisi />
                </ProtectedRoute>
              }
            />
            <Route
              path="/kelolaPosisi/editPosisi/:id_posisi"
              element={
                <ProtectedRoute>
                  <TambahPosisi />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />

            {/* route user */}
            <Route
              path="/beranda"
              element={<Beranda />}
            />
            <Route
              path="/artikel"
              element={<Artikel />}
            />
            <Route
              path="/layanan"
              element={<Layanan />}
            />
            <Route
              path="/tentang"
              element={<Tentang />}
            />
            <Route
              path="/testimoni"
              element={<Testimoni />}
            />
            <Route
              path="/tim"
              element={<Tim />}
            />
            <Route
              path="/kontak"
              element={<Kontak />}
            />
          </Routes>
        </ActiveRouteProvider>
      </Router>
    </>
  );
}

export default App;
