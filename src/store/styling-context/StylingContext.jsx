import { createContext, useState } from "react";

const StylingContext = createContext()

const StylingProvider = ({children}) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <StylingContext.Provider value={{
      isVisible,
      setIsVisible
    }}>
      {children}
    </StylingContext.Provider>
  )
}

export {StylingContext, StylingProvider}
