import icon from "/public/iconSidebar/logout.svg";
import { Link } from "react-router-dom";
import style from "./logout.module.css";

export const Logout = () => {
  return (
    <div className={style.wrap}>
      <div className={style.costum}>
        <Link to={"/login"} className={style.log}>
          <img src={icon} alt="icon" />
          <h3>Logout</h3>
        </Link>
      </div>
    </div>
  );
};
