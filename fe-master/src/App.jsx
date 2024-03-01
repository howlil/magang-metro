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
import TambahAnggota from "./admin/pages/kelolaTim/tambahAnggota";
import TambahKategori from "./admin/pages/kategori/tambahKategori";
import TambahPosisi from "./admin/pages/kelolaPosisi/tambahPosisi";

function App() {
  return (
    <>
      <Router>
        <ActiveRouteProvider>
          <Routes>
            {/* route admin */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/kelolaPostingan" element={<KelolaPostingan />} />
            <Route path="/kategori" element={<Kategori />} />
            <Route path="/galeri" element={<Galeri />} />
            <Route path="/kelolaTim" element={<KelolaTim />} />
            <Route path="/kelolaPosisi" element={<KelolaPosisi />} />
            <Route path="/login" element={<Login />} />

            {/* nester route admin */}
            <Route
              path="/kelolaPostingan/tambahPostingan"
              element={<TambahPostingan />}
            />
            <Route
              path="/kategori/tambahKategori"
              element={<TambahKategori />}
            />
            <Route
              path="/kelolaTim/tambahAnggota"
              element={<TambahAnggota />}
            />
            <Route path="/kategori/tambahKategori" element={<TambahKategori />} />
            <Route
              path="/kelolaPosisi/tambahPosisi"
              element={<TambahPosisi />}
            />

            <Route path="*" element={<NotFound />} />

            {/* rout user */}
          </Routes>
        </ActiveRouteProvider>
      </Router>
    </>
  );
}

export default App;
