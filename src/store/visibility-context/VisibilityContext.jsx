import { createContext, useState } from "react";

const VisibilityContext = createContext()

const VisibilityProvider = ({children}) => {
  const [bannerVisible, setBannerVisible] = useState(false)
  const [signOutPromptVisible, setSingOutPromptVisible] = useState({
    visible: false,
    opaque: false
  })

  return (
    <VisibilityContext.Provider value={{
      bannerVisible,
      setBannerVisible,
      signOutPromptVisible,
      setSingOutPromptVisible
    }}>
      {children}
    </VisibilityContext.Provider>
  )
}

export {VisibilityContext, VisibilityProvider}