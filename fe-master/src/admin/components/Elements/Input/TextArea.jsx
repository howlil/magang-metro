import s from "./input.module.css";
import Label from "./Label";

export default function TextArea(props) {
  const { placeholder, htmlFor,value, label, name ,onChange} = props;

  return (
    <div className={s.layout}>
      <Label htmlFor={htmlFor} label={label} />
      <textarea
        className={s.TextArea}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      >
    
      </textarea>
    </div>
  );
}
