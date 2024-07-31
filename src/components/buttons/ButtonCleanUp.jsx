import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBroom } from "@fortawesome/free-solid-svg-icons"

const ButtonCleanUp = ({
  type = 'button', 
  className, 
  classNameFa, 
  onClick,
}) => {
  return (
    <div
      className="has-hover:tooltip has-hover:tooltip-accent z-40"
      data-tip='Clear snippet'
    >
      <button
        type={type}
        className={`btn btn-accent hover ${className}`}
        onClick={onClick}
      >
        <FontAwesomeIcon className={classNameFa} icon={faBroom} />
      </button>
    </div>
  )
}

export default ButtonCleanUp