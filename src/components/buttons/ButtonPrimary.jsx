const ButtonPrimary = ({children, className, onClick, type}) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-primary hover ${className}`}>
      {children}
    </button>
  )
}

export default ButtonPrimary