const ButtonSecondary = ({children, className, onClick, type}) => {
  return (
  <button type={type} onClick={onClick} className={`btn btn-secondary hover ${className}`}>
    {children}
  </button>
  )
}

export default ButtonSecondary
