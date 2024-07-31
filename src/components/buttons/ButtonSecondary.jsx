const ButtonSecondary = ({
  children, 
  type = 'button', 
  className, 
  onClick,
  tooltip
}) => {
  return (
    <div 
      className="has-hover:tooltip has-hover:tooltip-secondary z-40"
      data-tip={tooltip}
    >
      <button 
        type={type} 
        onClick={onClick} 
        className={`btn btn-secondary hover ${className}`}
      >
        {children}
      </button>
    </div>
  )
}

export default ButtonSecondary