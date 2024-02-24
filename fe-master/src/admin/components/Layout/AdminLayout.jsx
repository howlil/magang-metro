import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Outlet />
    </>
  );
}
export default AdminLayout;
