import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";


 function AdminLayout(props) {
  const { children } = props;
  return (
    <>
      <Sidebar />
      <Navbar />
    </>
  );
}
export default AdminLayout
