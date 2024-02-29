import s from "./sidebar.module.css";
import MenuItem from "../MenuItem/MenuItem";
import Logo from "../../../components/Logo/Logo";
import { Logout } from "../Logout/Logout";

export default function Sidebar() {
  return (
    <div className={s.wrapSidebar}>
      <div className={s.top}>
      <Logo alignImage="centered" />
      <MenuItem />
      </div>
      <Logout/>
    </div>
  );
}
