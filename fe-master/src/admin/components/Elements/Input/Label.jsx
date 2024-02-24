
import s from './input.module.css'

const Label = ({ children, htmlFor, textSize, textColor }) => {
    return (
      <label htmlFor={htmlFor} className={s.style}>
        {children}
      </label>
    );
  };
export default Label;