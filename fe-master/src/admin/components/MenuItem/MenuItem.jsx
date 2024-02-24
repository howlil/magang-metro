import list from "./dataList";
import ActiveLink from "./ActiveLink";
import style from './menu.module.css'

export default function MenuItem() {
  return (
    <div className={style.wrap}>
    {list.map((item, index) => (
        <ActiveLink
          key={index}
          icon={item.icon}
          nav={item.nav}
          navlink={item.navlink}
        />
    ))}
    </div>
  );
}
