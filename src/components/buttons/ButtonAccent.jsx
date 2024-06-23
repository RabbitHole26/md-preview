const ButtonAccent = ({children, type = 'button', className, onClick}) => {
  return (
    <button type={type} onClick={onClick} className={`btn btn-accent hover ${className}`}>
      {children}
    </button>
  )
}

export default ButtonAccent