import { Link } from "react-router-dom";
import styles from "./menu.module.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function ActiveLink({ icon, nav, navlink }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive =
    (location.pathname === "/" && navlink === "/") ||
    location.pathname === navlink ||
    location.pathname.startsWith(`${navlink}/`);

  const onClick = (e) => {
    e.preventDefault();
    navigate(navlink);
  };
  return (
    <>
      <ul className={styles.costum}>
        <li className={`${styles.link} ${isActive ? styles.active : ""}`}>
          <Link to={navlink} onClick={onClick}>
            <img src={icon} alt={nav} />
            <h3 className={isActive ? styles.activeText : ""}>{nav}</h3>
          </Link>
        </li>
      </ul>
    </>
  );
}
