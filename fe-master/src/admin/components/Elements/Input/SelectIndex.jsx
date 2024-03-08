import s from "./input.module.css";
import Label from "./Label";
import Select from "./Select";

export default function SelectIndex(props) {
  const { placeholder, name, options=[], onChange, value, htmlFor, label } = props;

  return (
    <div className={s.layout}>
      <Label 
      htmlFor={htmlFor} 
      label={label}
       />
      <Select
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        options={options}
      />
    </div>
  );
}
