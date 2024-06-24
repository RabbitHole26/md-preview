import { createContext, useState } from "react";

const StylingContext = createContext()

const StylingProvider = ({children}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [previewOpenId, setPreviewOpenId] = useState(null)

  return (
    <StylingContext.Provider value={{
      isVisible,
      setIsVisible,
      previewOpenId,
      setPreviewOpenId
    }}>
      {children}
    </StylingContext.Provider>
  )
}

export {StylingContext, StylingProvider}
