import { createContext, useState } from "react";
import setInitialState from "../../utils/set-initial-state";
import markdownSample from "../../utils/markdown-sample";
import useLocalStorage from "../../utils/useLocalStorage";
import generateId from '../../utils/generate-id'

const InputContext = createContext()

const InputProvider = ({children}) => {

  // eslint-disable-next-line no-unused-vars
  const [baseId, setBaseId] = useState(() => {
    let storedBasedId = localStorage.getItem('baseId')
    if (!storedBasedId)
      storedBasedId = generateId()
    localStorage.setItem('baseId', storedBasedId)
    return storedBasedId
  })

  // eslint-disable-next-line no-unused-vars
  const [sessionId, setSessionId] = useState(() => {
    let storedSessionId = sessionStorage.getItem('sessionId')
    if (!storedSessionId)
      storedSessionId = generateId()
    sessionStorage.setItem('sessionId', storedSessionId)
    return storedSessionId
  })

  const storageKey = `${baseId}_${sessionId}_input`

  const initialState = setInitialState(storageKey, {
    title: null,
    body: markdownSample,
    caretPosition: 0
  })

  const [input, setInput] = useState(initialState)

  useLocalStorage(storageKey, input)    

  return (
    <InputContext.Provider value={{
      input,
      setInput,
      baseId,
      sessionId
    }}>
      {children}
    </InputContext.Provider>
  )
}

export {InputContext, InputProvider}