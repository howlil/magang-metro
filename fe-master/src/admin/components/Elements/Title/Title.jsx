import s from "./title.module.css";
import Button from "../../../../components/Button/Button";

export default function Title(props) {
  const { title, labelbtn, onClick } = props;
  return (
    <div className={s.flex}>
      <h1>{title}</h1>
      <Button onClick={onClick} label={labelbtn} />
    </div>
  );
}
