import s from "./input.module.css";

const Label = ({ label, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={s.label}>
      {label}
      <span className={s.bintang}>*</span>
    </label>
  );
};
export default Label;
