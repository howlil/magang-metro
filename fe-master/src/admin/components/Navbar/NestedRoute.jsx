import arrow from "/public/arrow.svg";
import { useActiveRoute } from "../../../utils/ActiveRouteContex";
import { Link } from "react-router-dom";

export default function NestedRoute() {
  const { activeRoute } = useActiveRoute();

  return (
    <>
      <img src={activeRoute.icon} alt={activeRoute.nav} />
      <img src={arrow} alt="arrow" />
      <Link to={activeRoute.navlink}>
        <span>{activeRoute.nav}</span>
      </Link>
    </>
  );
}
