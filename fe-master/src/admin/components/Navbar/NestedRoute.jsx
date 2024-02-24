import style from "./navbar.module.css";
import arrow from "/public/arrow.svg";
import { useActiveRoute } from "../../../utils/ActiveRouteContex";

export default function NestedRoute() {
  const { activeRoute } = useActiveRoute();

  return (
    <>
      <img src={activeRoute.icon} alt={activeRoute.nav} />
      <img src={arrow} alt="arrow" />
      <span>{activeRoute.nav}</span>
    </>
  );
}
