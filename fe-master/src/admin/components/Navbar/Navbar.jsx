import NestedRoute from "./NestedRoute";
import style from "./navbar.module.css";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className={style.nav}>
      <div className={style.navbar}>
        <NestedRoute />
      </div>
      <div className={style.mobile}>
        <Menu color="#033F89" size={32} />
      </div>
    </div>
  );
}
