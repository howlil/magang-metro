import Input from "./Input";
import s from "./input.module.css";
import Label from "./Label";
// import Select from "./Select";

export default function InputForm(props) {
  const { nama, type, placeholder, label, htmlFor, option, value, onChange } =
    props;

  return (
    <div className={s.layout}>
      <Label htmlFor={htmlFor} label={label} />
      <Input nama={nama} type={type} placeholder={placeholder} />
    </div>
  );
}
