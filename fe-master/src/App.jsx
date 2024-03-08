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
