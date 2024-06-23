import { Link } from "react-router-dom"
import { light } from "../../store/theme-context/theme-aliases-map"
import useThemeContext from "../../store/theme-context/useThemeContext"
import ButtonClose from "../buttons/ButtonClose"
import { useState } from "react"

const UnlockFeatureBanner = () => {
  const {theme} = useThemeContext()
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    setIsVisible(false)
  }

  return (
    <div className={`flex justify-between items-center text-center ${theme === light ? 'bg-black text-white' : 'bg-white text-black'} ${isVisible ? '' : 'h-0'}`}>
      <div className="flex justify-center w-full">
        <p>
          Welcome! Please{' '}
          <Link className="underline hover:text-primary" to='/signup'>
            create an account
          </Link>{' '}
          or{' '}
          <Link className="underline hover:text-primary" to='login'>
            log in
          </Link>{' '}
          to unlock all the features.
        </p>
      </div>
      <ButtonClose onClick={handleClick} className='pr-1' />
    </div>
  )
}

export default UnlockFeatureBanner