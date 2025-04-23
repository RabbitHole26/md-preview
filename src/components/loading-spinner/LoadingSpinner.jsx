import ClipLoader from "react-spinners/ClipLoader";
import useThemeContext from "../../store/theme-context/useThemeContext";

const LoadingSpinner = () => {
  const {themeLight} = useThemeContext()

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
      <ClipLoader
        color={themeLight ? 'black' : 'white'}
        size='100px'
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default LoadingSpinner
