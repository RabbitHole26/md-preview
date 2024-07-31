import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { light } from "../../store/theme-context/theme-aliases-map"
import useThemeContext from '../../store/theme-context/useThemeContext'
import useInputContext from "../../store/input-context/useInputContext"

const SnippetFormTitleHelper = ({setValue}) => {
  const {input} = useInputContext()
  const {theme} = useThemeContext()

  const handleTitleClick = () => {
    setValue('snippetTitle', input.title)
  }

  return (
    <div className="absolute top-0 z-30">
      <div 
        className={`flex items-center cursor-pointer hover:text-primary hover:opacity-100 opacity-40 gap-2 mb-2`} 
        onClick={handleTitleClick}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
        <p className={`px-2 py-1 rounded-md ${theme === light ? 'bg-neutral-200' :  'bg-neutral-600'}`}>
          {input.title}
        </p>
      </div>
    </div>
  )
}

export default SnippetFormTitleHelper