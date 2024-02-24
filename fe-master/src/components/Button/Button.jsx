import s from "./button.module.css";
import plus from "/public/plus.svg";
import { useLocation } from "react-router-dom";

export default function Button(props) {
  const location = useLocation();
  const path = location.pathname;
  const { label, onClick } = props;

  const pathArr = ["/addPost", "/kategori", "/kelolaPosisi"];
  const showIcon = pathArr.includes(path);

  return (
    <div>
      <button onClick={onClick} className={s.btn}>
        {showIcon && <img src={plus} alt="plus" />}
        {label}
      </button>
    </div>
  );
}
