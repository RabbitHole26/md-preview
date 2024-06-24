import { createContext, useState } from "react";

const PreviewContext = createContext()

const PreviewProvider = ({children}) => {
  const [snippetPreview, setSnippetPreview] = useState({
    id: null,
    body: null
  })
  const [previewOpenId, setPreviewOpenId] = useState(null)

  return (
    <PreviewContext.Provider value={{
      snippetPreview,
      setSnippetPreview,
      previewOpenId,
      setPreviewOpenId
    }}>
      {children}
    </PreviewContext.Provider>
  )
}

export {PreviewContext, PreviewProvider}