import { createContext, useEffect } from "react"
import { light, dark } from './theme-aliases-map'
import useLocalStorageContext from "../localstorage-context/useLocalStorageContext"

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {
  const {theme, setTheme} = useLocalStorageContext()

  useEffect(() => {
    document.querySelector('#html-element').setAttribute('data-theme', theme)
  }, [theme])

  // * 'toggleTheme' function is called in the 'ButtonTheme' component in 'Navbar'
  const toggleTheme = () => {
    setTheme(
      prev => prev === light
        ? dark
        : light
    )
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeProvider}