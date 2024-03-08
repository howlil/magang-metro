import icon from "/public/iconSidebar/logout.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from "./logout.module.css";

export const Logout = () => {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };


  return (
    <div onClick={handleLogout} className={style.wrap}>
      <div className={style.costum}>
        <Link  className={style.log}>
          <img src={icon} alt="icon" />
          <h3>Logout</h3>
        </Link>
      </div>
    </div>
  );
};
