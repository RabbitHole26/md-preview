import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const ButtonClose = ({
  type = 'button', 
  className, 
  onClick
}) => {
  return (
    <button 
      type={type} 
      className={`flex items center hover:text-primary transition ${className}`} 
      onClick={onClick}
    >
      <FontAwesomeIcon 
        className='pr-2 py-2 text-md md:text-xl' 
        icon={faXmark} 
      />
    </button>
  )
}

export default ButtonClose