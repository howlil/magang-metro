import logo from "/public/logo.svg";
import style from "./logo.module.css";

export default function Logo(props) {
  const { alignImage } = props;
  return (
    <div className={`${style[alignImage]}`}>
      <img src={logo} alt="logo" className={style.logomobile} />
    </div>
  );
}
