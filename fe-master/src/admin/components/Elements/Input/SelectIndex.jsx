import s from "./input.module.css";
import Label from "./Label";
import Select from "./Select";

export default function SelectIndex(props) {
  const { option, onChange, value,htmlFor,label } =  props

  return (
    <div className={s.layout}>
      <Label htmlFor={htmlFor} label={label} />
      <Select onChange={onChange} value={value} option={option} />
    </div>
  );
}
