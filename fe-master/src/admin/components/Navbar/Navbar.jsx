import NestedRoute from "./NestedRoute";
import style from "./navbar.module.css";
import { Menu } from "lucide-react";
import MobileSidebar from "../MobileSidebar/MobileSidebar";

export default function Navbar() {
  return (
    <div className={style.nav}>
      <div className={style.navbar}>
        <NestedRoute />
      </div>
      <div className={style.mobile}>
        <MobileSidebar/>
      </div>
    </div>
  );
}
