const ButtonSecondary = ({children, type = 'button', className, onClick}) => {
  return (
  <button type={type} onClick={onClick} className={`btn btn-secondary hover ${className}`}>
    {children}
  </button>
  )
}

export default ButtonSecondary
