import s from "./input.module.css";

function Input(props) {
  const { value,onChange,type, placeholder, name } = props;
  return (
    <input
      required
      className={s.input}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
