import s from "./title.module.css";
import Button from "../../../../components/Button/Button";
import { useLocation } from "react-router-dom";


export default function Title(props) {
  const { title, labelbtn, onClick } = props;
  const location = useLocation();
  const path = location.pathname;
  const pathArr = ["/kelolaPostingan", "/kategori", "/kelolaPosisi", "/kelolaTim"];
  const showbtn = pathArr.includes(path);

  return (
    <div className={s.flex}>
      <h1>{title}</h1>
      {showbtn &&  <Button onClick={onClick} label={labelbtn} />}
    </div>
  );
}
