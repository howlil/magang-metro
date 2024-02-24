import list from "./dataList";
import { Link } from "react-router-dom";
import Style from "./menu.module.css";

export default function MenuItem() {
  return (
    <div className={Style.wrap}>
      <ul className={Style.costum}>
        {list.map((item, index) => (
          <li key={index}>
            <Link to={item.navlink}>
              <img src={item.icon} alt="" />
              <h3>{item.nav}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
