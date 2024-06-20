import { createContext, useEffect, useState } from "react"
import { light, dark } from './theme-aliases-map'
import setInitialState from "../../utils/set-initial-state"
import useLocalStorage from "../../utils/useLocalStorage"

const ThemeContext = createContext()

const ThemeProvider = ({children, initialThemeValueHTML}) => {
  console.log(initialThemeValueHTML)
  const [theme, setTheme] = useState(setInitialState('theme', initialThemeValueHTML))
  console.log(theme)

  useLocalStorage('theme', theme)

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
    <ThemeContext.Provider value={{
      theme, 
      setTheme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeProvider}