const ButtonAccent = ({children, className, onClick, type}) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-accent hover ${className}`}>
      {children}
    </button>
  )
}

export default ButtonAccent