import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/dashboard";
import NotFound from "./NotFound";
import AddPost from "./admin/pages/addPost";
import Kategori from "./admin/pages/kategori";
import Login from "./admin/pages/login/login";
import KelolaPosisi from "./admin/pages/kelolaPosisi";
import KelolaTim from "./admin/pages/kelolaTim";
import Galeri from "./admin/pages/galeri";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* route admin */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/kategori" element={<Kategori />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="/kelolaTim" element={<KelolaTim />} />
          <Route path="/kelolaPosisi" element={<KelolaPosisi />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound/>} />

          {/* rout user */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
