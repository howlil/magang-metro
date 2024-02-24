import s from './input.module.css'

function Input (props){
    const{type,placeholder,name } = props
    return (
     <input 
     name={name}
     type={type} 
     placeholder={placeholder}/>
    )
}

export default Input