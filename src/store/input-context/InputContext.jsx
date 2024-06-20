import { createContext, useState } from "react";
import setInitialState from "../../utils/set-initial-state";
import markdownSample from "../../utils/markdown-sample";
import useLocalStorage from "../../utils/useLocalStorage";

const InputContext = createContext()

const InputProvider = ({children}) => {
  const [input, setInput] = useState(
    setInitialState('input', {body: markdownSample})
  )

  useLocalStorage('input', input)

  return (
    <InputContext.Provider value={{
      input,
      setInput
    }}>
      {children}
    </InputContext.Provider>
  )
}

export {InputContext, InputProvider}