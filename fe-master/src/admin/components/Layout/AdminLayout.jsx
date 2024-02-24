import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import s from "./adminlayout.module.css";

function AdminLayout(props) {
  const { children } = props;
  return (
    <>

      <aside className={s.sidebar}>
        <Sidebar />
      </aside>
      <div className={s.container}>
        <nav className={s.navbar}>
          <Navbar />
        </nav>
        <main className={s.main}>{children}</main>
      </div>
    </>
  );
}
export default AdminLayout;
