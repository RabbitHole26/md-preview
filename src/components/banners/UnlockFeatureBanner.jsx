import { Link } from "react-router-dom"
import { light } from "../../store/theme-context/theme-aliases-map"
import useThemeContext from "../../store/theme-context/useThemeContext"

const UnlockFeatureBanner = () => {
  const {theme} = useThemeContext()

  return (
    <div className={`p-2 text-center ${theme === light ? 'bg-black text-white' : 'bg-white text-black'}`}>
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
  )
}

export default UnlockFeatureBanner