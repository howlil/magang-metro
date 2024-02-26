import s from "tabel.module.css";
import show from "/public/show.svg";
import edit from "/public/edit.svg";
import hapus from "/public/hapus.svg";

export default function TabelAction(props) {
    const{onView,onEdit,onDelete} = props;

  return (
    <div className={s.layout}>
      <button onClick={onView}>
        <img src={show} alt="show"/>
      </button>
      <button onClick={onEdit}>
        <img src={edit} alt="edit"/>
      </button>
      <button onClick={onDelete}>
        <img src={hapus} alt="hapus"/>
      </button>
    </div>
  );
}
