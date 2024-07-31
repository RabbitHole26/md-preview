const ButtonAccent = ({
  children, 
  type = 'button', 
  className, 
  onClick,
  tooltip
}) => {
  return (
    <div 
      className="has-hover:tooltip has-hover:tooltip-accent"
      data-tip={tooltip}
    >
      <button 
        type={type} 
        onClick={onClick} 
        className={`btn btn-accent hover ${className}`}
      >
        {children}
      </button>
    </div>
  )
}

export default ButtonAccent