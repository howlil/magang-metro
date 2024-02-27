
export default function Select(props) {
    const {onChange, value,option} = props
  return (
    <Select value={value} onChange={onChange}>
      {option.map((options)=>(
        <options key={options.value}  value={options.value}>
            {options.label}
        </options>
      ))}
    </Select>
  )
}
