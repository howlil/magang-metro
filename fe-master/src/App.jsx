import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./admin/pages/dashboard";
import NotFound from "./NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
