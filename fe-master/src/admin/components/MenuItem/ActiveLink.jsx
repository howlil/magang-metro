import { Link } from "react-router-dom";
import React from "react";
import styles from "./menu.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useActiveRoute } from "../../../utils/ActiveRouteContex";

export default function ActiveLink({ icon, nav, navlink }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { setActiveRoute } = useActiveRoute();

  const isActive =
    (location.pathname === "/" && navlink === "/") ||
    location.pathname === navlink ||
    location.pathname.startsWith(`${navlink}/`) 

    
  React.useEffect(() => {
    console.log("ActiveLink effect", { icon, nav, navlink });
    if (isActive) {
      setActiveRoute({ icon, nav, navlink });
    }
  }, [isActive, icon, nav, navlink, setActiveRoute]);

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
