import Input from "./Input";
import s from "./input.module.css";
import Label from "./Label";

export default function InputForm(props) {
  const{nama,type,placeholder,children,htmlFor} = props
  return (
    <div className={s.layout}>
      <Label 
      htmlFor ={htmlFor}
      >{children}</Label>

      <Input
        nama ={nama}
        type = {type}
        placeholder={placeholder}
      />
    </div>
  );
}
