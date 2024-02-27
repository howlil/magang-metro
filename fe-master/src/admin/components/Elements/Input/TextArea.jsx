import s from './input.module.css'
import Label from './Label'

export default function TextArea(props) {
  const{text,htmlFor,label, name }= props

  return (
    <div className={s.layout}>
    <Label htmlFor={htmlFor} label={label} />
    <textarea name={name}  cols="30" rows="10">
     {text}
   </textarea>
    </div>
 
  )
}
