import { createContext, useState } from "react";
import useLocalStorage from "../../utils/useLocalStorage";
import setInitialState from "../../utils/set-initial-state";
import useInputContext from '../input-context/useInputContext'

const SnippetContext = createContext()

const SnippetProvider = ({children}) => {
  const {baseId, sessionId} = useInputContext()

  const storageKey = `${baseId}_${sessionId}_selectedSnippet`

  sessionStorage.getItem(storageKey)

  const initialState = setInitialState(storageKey, null)

  const [selectedSnippet, setSelectedSnippet] = useState(initialState)

  useLocalStorage(storageKey, selectedSnippet)
  
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
