import { createContext, useState } from "react";
import setInitialState from "./set-initial-state";
import useLocalStorage from "./useLocalStorage";
import markdownSample from "./markdown-sample";

const LocalStorageContext = createContext()

const LocalStorageProvider = ({children, initialThemeValueHTML}) => {
  // ! setInitialState takes 2 arguments: 
  // * 'key' (saved in local storage)
  // * 'fallback' (any value that should be set if there is nothing in local storage)
  const [input, setInput] = useState(
    setInitialState('input', {body: markdownSample})
  )
  const [theme, setTheme] = useState(
    setInitialState('theme', initialThemeValueHTML)
  )
  // const [selectedSnippet, setSelectedSnippet] = useState(
  //   setInitialState('selectedSnippet', null)
  // )

  // ! useLocalStorage takes 2 arguments:
  // * 'key'
  // * 'dependency' (this is the dependency array for useEffect)
  useLocalStorage('input', input)
  useLocalStorage('theme', theme)
  // useLocalStorage('selectedSnippet', selectedSnippet)
  
  return (
    <LocalStorageContext.Provider value={{
      input, 
      setInput,
      theme,
      setTheme,
      // selectedSnippet,
      // setSelectedSnippet
    }}>
      {children}
    </LocalStorageContext.Provider>
  )
}

export {LocalStorageContext, LocalStorageProvider}