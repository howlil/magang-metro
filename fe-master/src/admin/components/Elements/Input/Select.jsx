import s from "./input.module.css";


export default function CustomSelect(props) {
  const { placeholder, onChange, value, options = [] } = props;

  return (
    <select  value={value} onChange={onChange}>
      <option className={s.kategori} >{placeholder}</option>
      {options.map((option) => (
        <option className={s.option} key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
