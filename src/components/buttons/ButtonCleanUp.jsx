import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBroom } from "@fortawesome/free-solid-svg-icons"

const ButtonCleanUp = ({type = 'button', className, classNameFa, onClick}) => {
  return (
    <button type={type} className={`btn btn-accent hover ${className}`} onClick={onClick}>
      <FontAwesomeIcon className={classNameFa} icon={faBroom} />
    </button>
  )
}

export default ButtonCleanUp