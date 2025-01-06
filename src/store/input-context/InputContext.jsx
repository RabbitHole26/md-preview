import { 
  createContext, 
  useEffect, 
  useState 
} from "react";
import setInitialState from "../../utils/set-initial-state";
import markdownSample from "../../utils/markdown-sample";
import useLocalStorage from "../../hooks/useLocalStorage";
import generateStorageId from "./generate-storage-id";

const InputContext = createContext()

const InputProvider = ({children}) => {
  const [baseId] = useState(generateStorageId(localStorage, 'baseId'))

  const [sessionId] = useState(generateStorageId(sessionStorage, 'sessionId'))

  const storageKey = `input_${baseId}_${sessionId}`

  const lastEditedSnippet = localStorage.getItem('lastEditedSnippet')

  const [input, setInput] = useState(setInitialState(storageKey, lastEditedSnippet
    ? JSON.parse(lastEditedSnippet)
    : {
      title: null,
      body: markdownSample,
      caretPosition: 0
    }))

  // save snippet to local storage
  useLocalStorage(storageKey, input)

  // save last edited snippet
  useEffect(() => {
    if (input) {
      const {title, body, caretPosition} = input
      const newBody = body.length === 0
        ? markdownSample
        : body

      localStorage.setItem('lastEditedSnippet', JSON.stringify({
        title: title || null,
        body: newBody || '',
        caretPosition: caretPosition || 0
      }))
    }
  }, [input])

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