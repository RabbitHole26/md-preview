import { createContext, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import setInitialState from "../../utils/set-initial-state";
import useInputContext from '../input-context/useInputContext'

const SnippetContext = createContext()

const SnippetProvider = ({children}) => {
  const {baseId, sessionId} = useInputContext()

  const storageKey = `selectedSnippet_${baseId}_${sessionId}`

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
