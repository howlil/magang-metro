import Input from "./Input";
import s from "./input.module.css";
import Label from "./Label";
// import Select from "./Select";

export default function InputForm(props) {
  const { name, type, placeholder, label, htmlFor, value, onChange } = props;

  return (
    <div className={s.layout}>
      <Label htmlFor={htmlFor} label={label} />
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
