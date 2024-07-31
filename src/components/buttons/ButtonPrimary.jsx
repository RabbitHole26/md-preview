const ButtonPrimary = ({
  children, 
  type = 'button', 
  className, 
  onClick,
  tooltip
}) => {
  return (
    <div 
      className="has-hover:tooltip has-hover:tooltip-primary z-40" 
      data-tip={tooltip}
    >
      <button
        type={type}
        onClick={onClick}
        className={`btn btn-primary hover ${className}`}
      >
        {children}
      </button>
    </div>
  )
}

export default ButtonPrimary