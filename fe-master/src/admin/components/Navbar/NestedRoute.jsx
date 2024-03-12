import arrow from "/public/arrow.svg";
import { useActiveRoute } from "../../../utils/ActiveRouteContex";
import { Link } from "react-router-dom";
import s from './navbar.module.css'

export default function NestedRoute() {
  const { activeRoute } = useActiveRoute();

  return (
    <>
      <img className={s.icon}  src={activeRoute.icon} alt={activeRoute.nav} />
      <img  className={s.arrowIcon}  src={arrow} alt="arrow" />
      <Link className={s.navstyle} to={activeRoute.navlink}>
        <span>{activeRoute.nav}</span>
      </Link>
    </>
  );
}
