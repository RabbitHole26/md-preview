import { createContext, useState } from "react";

const PreviewContext = createContext()

const PreviewProvider = ({children}) => {
  const [snippetPreview, setSnippetPreview] = useState({
    id: null,
    body: null
  })

  return (
    <PreviewContext.Provider value={{
      snippetPreview,
      setSnippetPreview
    }}>
      {children}
    </PreviewContext.Provider>
  )
}

export {PreviewContext, PreviewProvider}