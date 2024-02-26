import styles from "./sidebar.module.css";
import MenuItem from "../MenuItem/MenuItem";
import Logo from "../../../components/Logo/Logo";
import { Logout } from "../Logout/Logout";

export default function Sidebar() {
  return (
    <div className={styles.wrapSidebar}>
      <Logo alignImage="centered" />
      <MenuItem />
      <Logout/>
    </div>
  );
}
