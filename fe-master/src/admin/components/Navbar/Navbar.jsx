import NestedRoute from "./NestedRoute";
import style from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <NestedRoute />
    </div>
  );
}
