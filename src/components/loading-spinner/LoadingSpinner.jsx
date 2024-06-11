import { light } from "../../store/theme-context/theme-aliases-map";
import ClipLoader from "react-spinners/ClipLoader";
import useThemeContext from "../../store/theme-context/useThemeContext";

const LoadingSpinner = () => {
  const {theme} = useThemeContext()

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <ClipLoader
        color={theme === light ? 'black' : 'white'}
        size='100px'
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default LoadingSpinner
