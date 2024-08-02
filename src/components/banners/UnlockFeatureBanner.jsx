import { light } from "../../store/theme-context/theme-aliases-map"
import { useEffect } from "react"
import useThemeContext from "../../store/theme-context/useThemeContext"
import ButtonClose from "../buttons/ButtonClose"
import useAuthContext from '../../store/auth-context/useAuthContext'
import useStylingContext from '../../store/styling-context/useStylingContext'
import LinkCustom from "../link-custom/LinkCustom"

const UnlockFeatureBanner = () => {
  const {theme} = useThemeContext()
  const {session} = useAuthContext()
  const {isVisible, setIsVisible} = useStylingContext()
  // const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  useEffect(() => {
    setIsVisible(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`transition-all duration-200 overflow-hidden ${isVisible && !session ? 'max-h-[100px]' : 'max-h-0'}`}>
      <div className={`flex justify-between items-center text-center ${theme === light ? 'bg-theme-dark text-theme-light' : 'bg-theme-light text-theme-dark'}`}>
        <div className="flex justify-center w-full">
          <p>
            Welcome! Please{' '}
            <LinkCustom className="underline has-hover:hover:text-primary" to='/signup'>
              create an account
            </LinkCustom>{' '}
            or{' '}
            <LinkCustom className="underline has-hover:hover:text-primary" to='login'>
              log in
            </LinkCustom>{' '}
            to unlock all the features.
          </p>
        </div>
        <ButtonClose onClick={handleClick} className='pr-1' />
      </div>
    </div>
  )
}

export default UnlockFeatureBanner