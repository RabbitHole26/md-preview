import { createContext, useState } from "react";
import useSaveToLocalStorage from "../../utils/useSaveToLocalStorage";
import setInitialState from "../../utils/set-initial-state";

const SnippetContext = createContext()

const SnippetProvider = ({children}) => {
  const [selectedSnippet, setSelectedSnippet] = useState(setInitialState('selectedSnippet', {}))

  useSaveToLocalStorage('selectedSnippet', selectedSnippet)
  
  return (
    <SnippetContext.Provider value={{
      selectedSnippet,
      setSelectedSnippet
    }}>
      {children}
    </SnippetContext.Provider>
  )
}

export {SnippetContext, SnippetProvider}
