
export default function Icon(props) {
    const{onClick, src, alt} = props
  return (
    <div>
      <Button onClick={onClick} >
        <img src={src} alt={alt} />
      </Button>
    </div>
  )
}
