const ButtonPrimary = ({children, type = 'button', className, onClick}) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-primary hover ${className}`}>
      {children}
    </button>
  )
}

export default ButtonPrimary