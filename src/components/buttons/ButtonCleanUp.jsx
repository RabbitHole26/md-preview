import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'
import useLocalStorageContext from '../../store/localstorage-context/useLocalStorageContext'
import useHandleReset from "../../utils/useHandleReset"
import ButtonAccent from "./ButtonAccent"

const ButtonCleanUp = ({
  type = 'button',
  classNameSnippetForm, 
  classNameSettingsControls
}) => {
  const {selectedSnippet} = useLocalStorageContext()
  const {handleReset} = useHandleReset()

  return (
    <ButtonAccent
    type={type}
    className={`${classNameSettingsControls ? classNameSettingsControls : classNameSnippetForm} ${!selectedSnippet ? 'btn-disabled' : ''}`}
    onClick={() => handleReset()}
    >
      <FontAwesomeIcon className="text-md lg:text-xl" icon={faBroom} />
    </ButtonAccent>
  )
}

export default ButtonCleanUp