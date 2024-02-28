import s from "./button.module.css";
import plus from "/public/plus.svg";
import { useLocation } from "react-router-dom";

export default function Button(props) {
  const location = useLocation();
  const path = location.pathname;
  const { label, onClick, styleBtn } = props;

  const pathArr = ["/kelolaPostingan", "/kategori", "/kelolaPosisi", "/kelolaTim"];
  const showIcon = pathArr.includes(path);

  return (
    <div>
      <button onClick={onClick} className={`${s.btn} ${s[styleBtn]}`}>
        {showIcon && <img src={plus} alt="plus" />}
        {label}
      </button>
    </div>
  );
}
